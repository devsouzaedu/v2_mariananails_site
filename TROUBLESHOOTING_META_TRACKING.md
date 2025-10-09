# 🔧 TROUBLESHOOTING - Meta Ads Tracking

## 🚨 Problemas Comuns e Soluções

---

## 1️⃣ COOKIES _FBC E _FBP NÃO APARECEM

### Sintomas:
```javascript
// No console:
_fbc: null
_fbp: null
```

### Causas Possíveis:

#### ❌ Bloqueadores de Anúncios
**Exemplos:** AdBlock, uBlock Origin, Privacy Badger
**Solução:** 
- Desative temporariamente para teste
- Use modo anônimo SEM extensões
- Teste em navegador limpo

#### ❌ Navegação Privada/Anônima
**Problema:** Cookies não são salvos
**Solução:**
- Use navegação normal para testes
- Cookies são essenciais para tracking

#### ❌ Safari com Proteção Anti-Tracking
**Problema:** Safari bloqueia cookies de terceiros por padrão
**Solução:**
- Teste em Chrome ou Firefox primeiro
- No Safari: Preferências → Privacidade → Desmarque "Evitar rastreamento entre sites"

#### ❌ Primeira Visita
**Problema:** Cookies levam alguns segundos para serem criados
**Solução:**
- Aguarde 5-10 segundos após carregar a página
- Atualize a página (F5)
- Cookies serão criados pelo Meta Pixel automaticamente

### Como Verificar:
```javascript
// Abra o console e digite:
document.cookie.split(';').filter(c => c.includes('_fb'))

// Deve retornar algo como:
// ["_fbc=fb.1.1736451234567.IwAR...", "_fbp=fb.1.1736451234567.987654321"]
```

---

## 2️⃣ EVENTOS NÃO APARECEM NO EVENTS MANAGER

### Sintomas:
- Nenhum evento no "Atividade em Tempo Real"
- Eventos não chegam no Meta Events Manager

### Causas Possíveis:

#### ❌ Pixel ID Incorreto
**Verificar:**
```javascript
// Procure no código fonte:
fbq('init', '734205242727008');
```
**Pixel ID correto:** `734205242727008`

#### ❌ Delay Natural do Meta
**Problema:** Eventos podem levar até 20 minutos para aparecer
**Solução:**
- Use "Testar Eventos" para debug em tempo real
- Seja paciente com eventos em produção

#### ❌ Bloqueadores de Anúncios
**Problema:** Bloqueiam requisições para facebook.com
**Solução:**
- Desative bloqueadores
- Use Meta Pixel Helper para ver eventos localmente

#### ❌ Erros JavaScript
**Verificar console:**
```javascript
// Procure por erros como:
Uncaught ReferenceError: fbq is not defined
```
**Solução:** Pixel não carregou. Verifique conexão de rede.

### Como Testar em Tempo Real:

1. **Acesse Events Manager:**
   - [https://business.facebook.com/events_manager/](https://business.facebook.com/events_manager/)

2. **Clique em "Testar Eventos":**
   - Digite a URL do seu site
   - Ou use Test Event Code

3. **Navegue no site:**
   - Eventos aparecem instantaneamente (5-10 segundos)

---

## 3️⃣ PARÂMETROS UTM NÃO PASSAM PARA KIWIFY

### Sintomas:
```
URL original: ...?utm_source=facebook
URL Kiwify: pay.kiwify.com.br/lf9IZHj (sem parâmetros)
```

### Causas Possíveis:

#### ❌ JavaScript Não Carregou
**Verificar console:**
```javascript
// Procure por:
console.log('Parâmetros de rastreamento capturados:', {...})
```
**Se não aparecer:** JavaScript está bloqueado ou com erro

#### ❌ Parâmetros Não Suportados
**Parâmetros suportados:**
```
✅ utm_source, utm_medium, utm_campaign, utm_term, utm_content
✅ src, sck, s1-s5
✅ fbclid, gclid
❌ Outros parâmetros customizados não funcionam
```

#### ❌ URL foi Alterada Durante Navegação
**Problema:** SPA (Single Page Application) pode perder parâmetros
**Solução:** Parâmetros são capturados no carregamento inicial

### Como Testar:

1. **Copie a URL de um botão:**
   - Botão direito → Copiar endereço do link

2. **Cole em um editor de texto**

3. **Verifique:**
```
✅ Correto:
https://pay.kiwify.com.br/lf9IZHj?utm_source=facebook&_fbc=fb.1...

❌ Errado:
https://pay.kiwify.com.br/lf9IZHj (sem parâmetros)
```

---

## 4️⃣ EVENT MATCH QUALITY BAIXO (< 7.0)

### Sintomas:
- Match Quality Score abaixo de 7.0 no Events Manager
- Atribuição imprecisa das conversões

### Causas e Soluções:

#### 📊 Faltam Dados de Usuário
**Problema:** Apenas pixel sem cookies ou dados adicionais
**Solução:**
```javascript
// Certifique-se que cookies estão sendo enviados:
{
  fbc: "fb.1.xxx",  // ✅ Incluso
  fbp: "fb.1.yyy",  // ✅ Incluso
  user_agent: "...", // ✅ Incluso
  source_url: "..."  // ✅ Incluso
}
```

#### 📊 Implementar CAPI
**Benefício:** +2 pontos no Match Quality
**Como:** Ver `GUIA_CAPI_META_EXEMPLO.md`

#### 📊 Adicionar Enhanced Match
**Se você coleta email:**
```javascript
// Hash do email
fbq('init', '734205242727008', {
  em: 'hash_do_email_aqui' // SHA256
});
```

### Target: Match Quality > 8.0

---

## 5️⃣ EVENTOS DUPLICADOS

### Sintomas:
```javascript
// Console mostra:
✅ Evento InitiateCheckout enviado: 123_abc
✅ Evento InitiateCheckout enviado: 123_abc (duplicado!)
```

### Isso é Normal? **SIM!**

#### Por que acontece:
- Usuário clicou duas vezes no botão
- Página foi recarregada
- Navegador fez back/forward

#### Solução Automática:
- **Event ID único** previne contagem dupla
- Meta deduplica automaticamente eventos com mesmo ID
- Não é necessário fazer nada

#### Quando Preocupar:
- Se SEMPRE duplica (mesmo clicando uma vez)
- Se Event ID é o mesmo

**Verificar:**
```javascript
// Event IDs devem ser DIFERENTES:
Event ID 1: 1736451234567_abc123xyz ✅
Event ID 2: 1736451234568_def456uvw ✅

// Se forem iguais, há um bug:
Event ID 1: 1736451234567_abc123xyz ❌
Event ID 2: 1736451234567_abc123xyz ❌ (bug!)
```

---

## 6️⃣ EVENTO VIEWCONTENT NÃO DISPARA

### Sintomas:
- InitiateCheckout funciona
- ViewContent não aparece

### Causas:

#### Página Não Carregou Completamente
**Solução:** Aguarde página carregar 100%

#### useEffect Não Executou
**Verificar:**
```javascript
// No console, deve aparecer:
Meta Pixel - Evento ViewContent disparado
```

**Se não aparecer:** Problema no React useEffect

#### Pixel Ainda Não Carregou
**Solução:** ViewContent só dispara após pixel carregar
- Aguarde 2-3 segundos
- Verifique Meta Pixel Helper (deve estar verde)

---

## 7️⃣ CONVERSÕES NÃO ATRIBUÍDAS À CAMPANHA

### Sintomas:
- Eventos aparecem no Events Manager
- Mas não são atribuídos à campanha no Ads Manager

### Causas:

#### ❌ Janela de Atribuição Expirou
**Padrão:** 7 dias após clique, 1 dia após visualização
**Solução:** Ajuste janela de atribuição na campanha

#### ❌ Cookies Ausentes
**Problema:** _fbc não foi capturado
**Solução:** Garanta que cookies estão sendo enviados

#### ❌ Usuário Bloqueou Tracking
**Problema:** Safari, bloqueadores, etc
**Solução:** Considere implementar CAPI (server-side)

#### ❌ Conversão em Dispositivo Diferente
**Problema:** Clicou no mobile, comprou no desktop
**Solução:** Meta tenta fazer cross-device, mas não é 100%

---

## 8️⃣ CONSOLE MOSTRA MUITOS LOGS

### Sintomas:
```javascript
// Console cheio de:
Meta Pixel - Evento...
Parâmetros de rastreamento...
✅ Evento enviado...
```

### Isso é Normal em Desenvolvimento!

#### Em Produção:
- Logs serão removidos automaticamente (se usando `process.env.NODE_ENV`)
- Ou remova manualmente `console.log()`

#### Como Remover Logs:
```typescript
// Remova ou comente:
// console.log('Meta Pixel - Evento ViewContent disparado');
// console.log('✅ Evento ViewContent enviado com Event ID:', eventId);
```

#### Manter Logs Essenciais:
```typescript
// Mantenha apenas erros:
console.error('❌ Erro ao enviar evento CAPI:', result.error);
```

---

## 9️⃣ KIWIFY NÃO MOSTRA ORIGEM DA CONVERSÃO

### Sintomas:
- Venda concluída
- Dashboard Kiwify não mostra UTMs

### Soluções:

#### Verificar Filtros:
1. Dashboard Kiwify → Vendas
2. Clique na venda específica
3. Role até "Informações de Rastreamento"
4. Parâmetros devem aparecer aqui

#### Se Não Aparecer:
- Verifique se URL final do Kiwify tinha parâmetros
- Kiwify pode ter delay de até 24h para processar
- Contate suporte Kiwify se persistir

---

## 🆘 CHECKLIST DE DEBUG

### Quando algo não funciona:

- [ ] **Console do navegador** - Tem erros JavaScript?
- [ ] **Meta Pixel Helper** - Pixel está verde?
- [ ] **Bloqueadores** - Desativados?
- [ ] **Navegação** - Normal (não privada/anônima)?
- [ ] **Navegador** - Chrome ou Firefox (para teste)?
- [ ] **Internet** - Conexão estável?
- [ ] **Pixel ID** - Correto? (734205242727008)
- [ ] **Event ID** - Sendo gerado?
- [ ] **Cookies** - _fbc e _fbp presentes?
- [ ] **URL** - Parâmetros na URL original?

---

## 📞 QUANDO PEDIR AJUDA

### Você fez tudo isso:
- ✅ Verificou todos os itens do checklist acima
- ✅ Testou em Chrome sem extensões
- ✅ Aguardou 20 minutos para eventos processarem
- ✅ Revisou documentação (`VALIDACAO_META_TRACKING.md`)

### E ainda não funciona?

#### Colete Informações:
1. **Screenshots:**
   - Console do navegador (F12)
   - Meta Pixel Helper
   - Events Manager

2. **Logs do Console:**
   - Copie todos os logs relevantes
   - Inclua erros em vermelho

3. **URLs:**
   - URL que você acessou
   - URL final do botão Kiwify

4. **Ambiente:**
   - Navegador e versão
   - Sistema operacional
   - Dispositivo (mobile/desktop)

#### Onde Buscar Ajuda:
- 📚 Documentação Meta: [developers.facebook.com](https://developers.facebook.com/docs/meta-pixel)
- 💬 Suporte Kiwify: [suporte.kiwify.com.br](https://suporte.kiwify.com.br)
- 🔍 Comunidades: Grupos de Facebook Ads no Facebook

---

## ✅ TUDO FUNCIONANDO?

### Sinais de Tracking Perfeito:

```javascript
// Console mostra:
✅ Meta Pixel - Evento ViewContent disparado
✅ Evento ViewContent enviado com Event ID: 1736451234567_abc123xyz
✅ Meta Pixel - Evento InitiateCheckout disparado: fixed-bottom-button
✅ Evento InitiateCheckout enviado com Event ID: 1736451234568_def456uvw

Parâmetros de rastreamento capturados: {
  _fbc: "fb.1.1736451234567.IwAR...",
  _fbp: "fb.1.1736451234567.987654321",
  urlParams: {
    utm_source: "facebook",
    utm_medium: "cpc",
    utm_campaign: "curso2025"
  },
  ...
}
```

### Meta Pixel Helper:
- ✅ Ícone </> verde
- ✅ PageView ✓
- ✅ ViewContent ✓
- ✅ InitiateCheckout ✓

### Events Manager:
- ✅ Eventos aparecem em tempo real
- ✅ Match Quality > 7.0
- ✅ Sem erros

### Kiwify:
- ✅ Parâmetros UTM presentes na venda
- ✅ Cookies _fbc e _fbp registrados

---

**Se todos os sinais acima estão positivos: PARABÉNS! 🎉**  
**Seu tracking está 100% funcional!**

Agora é só ativar as campanhas e monitorar os resultados! 🚀

---

**Última atualização:** Janeiro 2025  
**Versão:** 1.0

