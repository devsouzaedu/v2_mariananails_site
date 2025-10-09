# ✅ CHECKLIST DE VALIDAÇÃO - Meta Ads Tracking 100%

## 📊 Status da Implementação

### ✅ **IMPLEMENTADO E FUNCIONANDO**

#### 🎯 **Meta Pixel (ID: 734205242727008)**
- [x] Pixel instalado corretamente
- [x] Carregamento via Next.js Script com strategy="afterInteractive"
- [x] Verificação de disponibilidade antes de disparar eventos

#### 📈 **Eventos do Meta Pixel**

##### **PageView (Automático)**
- [x] Disparado automaticamente quando o pixel carrega
- [x] Captura URL da página
- [x] Inclui cookies _fbc e _fbp automaticamente

##### **ViewContent (Novo!)**
- [x] Disparado quando a página de produto/curso carrega
- [x] Inclui todos os dados do produto:
  - `content_name`: Nome do curso
  - `content_category`: "Course"
  - `content_ids`: ID único do produto
  - `content_type`: "product"
  - `currency`: "BRL"
  - `value`: 50.00
  - `source_url`: URL completa da página
- [x] **Event ID único** para deduplicação com CAPI
- [x] Cookies _fbc e _fbp incluídos no evento

##### **InitiateCheckout**
- [x] Disparado em TODOS os botões de "Garantir Minha Vaga"
- [x] Rastreamento de localização do botão (button_location)
- [x] Inclui todos os dados do produto
- [x] **Event ID único** para deduplicação com CAPI
- [x] Cookies _fbc e _fbp incluídos no evento

#### 🔗 **Parâmetros UTM e Tracking**

##### **Parâmetros UTM Capturados:**
- [x] `utm_source` - Origem da campanha (facebook, instagram, google, etc)
- [x] `utm_medium` - Meio (cpc, story, organic, etc)
- [x] `utm_campaign` - Nome da campanha
- [x] `utm_term` - Termo de busca
- [x] `utm_content` - Conteúdo específico
- [x] `utm_id` - ID da campanha
- [x] `utm_source_platform` - Plataforma de origem

##### **Parâmetros Kiwify:**
- [x] `src` - Source customizado Kiwify
- [x] `sck` - Source custom key
- [x] `s1`, `s2`, `s3`, `s4`, `s5` - Sub-sources customizados

##### **Parâmetros de Plataforma:**
- [x] `fbclid` - Facebook Click ID
- [x] `gclid` - Google Click ID

##### **Cookies do Facebook:**
- [x] `_fbc` - Facebook Click ID (cookie persistente)
- [x] `_fbp` - Facebook Browser ID (cookie persistente)
- [x] Cookies anexados automaticamente à URL do Kiwify
- [x] Cookies incluídos nos eventos do pixel

#### 📝 **Logging e Debug**
- [x] Console logs detalhados para cada evento
- [x] Exibição de Event ID único
- [x] Timestamp de cada evento
- [x] User Agent capturado
- [x] Parâmetros UTM logados
- [x] URL final do Kiwify logada

---

## 🔍 COMO VALIDAR O TRACKING

### 1️⃣ **Validação via Console do Navegador**

#### Passo a Passo:
1. Abra as ferramentas de desenvolvedor (F12)
2. Vá na aba **Console**
3. Acesse uma das páginas:
   - `https://www.mariananails.com.br/curso_nail_design_do_zero_ao_profissional_mariana_nails`
   - `https://www.mariananails.com.br/fature-4000-com-unhas-em-2025`

#### O que você deve ver:
```javascript
// Ao carregar a página:
Meta Pixel - Evento ViewContent disparado
✅ Evento ViewContent enviado com Event ID: 1234567890_abc123xyz

// Ao clicar em um botão:
Meta Pixel - Evento InitiateCheckout disparado: after-perfeita-para-voce
✅ Evento InitiateCheckout enviado com Event ID: 1234567891_def456uvw

Parâmetros de rastreamento capturados: {
  _fbc: "fb.1.1234567890123.IwAR...",
  _fbp: "fb.1.1234567890123.987654321",
  urlParams: {
    utm_source: "facebook",
    utm_medium: "cpc",
    utm_campaign: "curso2025"
  },
  user_agent: "Mozilla/5.0...",
  timestamp: "2025-01-10T12:34:56.789Z"
}
```

### 2️⃣ **Validação via Facebook Pixel Helper (Extensão Chrome)**

#### Instalar:
1. Vá na Chrome Web Store
2. Procure por "Meta Pixel Helper" ou "Facebook Pixel Helper"
3. Instale a extensão

#### Como usar:
1. Acesse uma das páginas de curso
2. Clique no ícone do Pixel Helper (</> azul)
3. Você deve ver:
   - ✅ **PageView** - Disparado automaticamente
   - ✅ **ViewContent** - Ao carregar a página
   - ✅ **InitiateCheckout** - Ao clicar nos botões

#### O que verificar:
- [ ] Pixel ID correto: **734205242727008**
- [ ] Eventos aparecem em verde (sem erros)
- [ ] Parâmetros `value`, `currency`, `content_ids` estão preenchidos
- [ ] Event ID está presente (importante!)

### 3️⃣ **Validação via Meta Events Manager**

#### Acessar:
1. Entre no [Meta Business Suite](https://business.facebook.com/)
2. Vá em **Eventos** > **Gerenciador de Eventos**
3. Selecione seu pixel: **734205242727008**

#### O que verificar:
1. **Atividade em Tempo Real:**
   - Clique em "Test Events" ou "Atividade de Eventos"
   - Abra a página em outra aba
   - Eventos devem aparecer em tempo real (pode levar 20-30 segundos)

2. **Qualidade dos Dados:**
   - Vá em "Visão Geral"
   - Verifique a **Pontuação de Qualidade de Eventos**
   - Meta: mínimo 7/10 (ideal: 9+/10)

3. **Correspondência de Eventos:**
   - Verifique se os cookies `_fbc` e `_fbp` estão sendo capturados
   - Isso melhora significativamente a atribuição

### 4️⃣ **Validação de Parâmetros UTM no Kiwify**

#### Teste com URL parametrizada:
```
https://www.mariananails.com.br/fature-4000-com-unhas-em-2025?utm_source=facebook&utm_medium=cpc&utm_campaign=teste_tracking&src=validacao
```

#### O que fazer:
1. Acesse a URL acima
2. Clique com botão direito em qualquer botão "Garantir Minha Vaga"
3. Selecione "Copiar endereço do link"

#### URL esperada:
```
https://pay.kiwify.com.br/lf9IZHj?utm_source=facebook&utm_medium=cpc&utm_campaign=teste_tracking&src=validacao&_fbc=fb.1.xxx&_fbp=fb.1.yyy
```

✅ **TODOS os parâmetros devem estar presentes!**

### 5️⃣ **Validação no Kiwify Dashboard**

#### Como verificar:
1. Faça um teste de compra (pode cancelar depois)
2. Entre no [Dashboard Kiwify](https://dashboard.kiwify.com.br/)
3. Vá em **Vendas**
4. Clique na venda de teste
5. Role até "Informações de Rastreamento"

#### O que deve aparecer:
- [ ] Todos os parâmetros UTM
- [ ] Cookies `_fbc` e `_fbp`
- [ ] Source correto
- [ ] Timestamps

---

## 🎯 TESTE DE CAMPANHA REAL

### Cenário 1: Facebook Ads → Landing Page → Checkout

#### Setup da Campanha:
1. Crie um anúncio no Facebook Ads
2. Use URL com UTM tracking:
```
https://www.mariananails.com.br/fature-4000-com-unhas-em-2025?utm_source=facebook&utm_medium=paid&utm_campaign=conversao_abril_2025&utm_content=video_depoimentos
```

#### O que monitorar:
- [ ] **No Ads Manager:** Eventos InitiateCheckout sendo atribuídos à campanha
- [ ] **No Kiwify:** Vendas mostrando origem "facebook" com campanha "conversao_abril_2025"
- [ ] **No Meta Events Manager:** Eventos aparecendo com Match Quality alto (8+)

### Cenário 2: Instagram Story → Quiz → Checkout

#### Setup:
1. Poste um story com link
2. Use URL parametrizada:
```
https://www.mariananails.com.br/curso_nail_design_do_zero_ao_profissional_mariana_nails?utm_source=instagram&utm_medium=story&utm_campaign=quiz_nail_designer&s1=historia_personal
```

#### O que monitorar:
- [ ] Eventos ViewContent no primeiro step do quiz
- [ ] Eventos InitiateCheckout no último step
- [ ] Parâmetro `s1=historia_personal` chegando no Kiwify

---

## 🚨 TROUBLESHOOTING

### Problema: Cookies _fbc e _fbp não aparecem

**Causas possíveis:**
- Bloqueadores de anúncios/trackers ativos
- Navegação em modo anônimo/privado
- Primeira visita (cookies levam alguns segundos para serem criados)
- Safari com proteção anti-tracking ativa

**Solução:**
- Aguarde 5-10 segundos após carregar a página
- Desative bloqueadores temporariamente para teste
- Use Chrome ou Firefox para testes
- Os cookies são criados pelo próprio Meta Pixel

### Problema: Eventos não aparecem no Events Manager

**Causas possíveis:**
- Delay natural (pode levar até 20 minutos)
- Pixel ID incorreto
- Bloqueadores de anúncios
- Erros no código do pixel

**Solução:**
- Verifique o Pixel ID: **734205242727008**
- Use o Pixel Helper para debug em tempo real
- Verifique console do navegador por erros JavaScript
- Limpe cache e cookies, teste novamente

### Problema: Parâmetros UTM não passam para Kiwify

**Causas possíveis:**
- JavaScript não carregou completamente
- Parâmetros não suportados pela Kiwify
- URL foi modificada durante o processo

**Solução:**
- Use apenas parâmetros suportados (listados acima)
- Verifique console do navegador: procure por "Parâmetros de rastreamento"
- Teste em navegador diferente
- Copie a URL final do botão e verifique manualmente

### Problema: Event ID duplicado

**Causas possíveis:**
- Usuário clicou múltiplas vezes no mesmo botão
- Página recarregada

**Solução:**
- Isso é NORMAL! Cada clique gera um novo Event ID único
- O Meta usa Event ID para dedplicação automática
- Não há problema em enviar o mesmo evento múltiplas vezes

---

## 📊 MÉTRICAS DE SUCESSO

### KPIs Mínimos para Tracking de Qualidade:

| Métrica | Valor Mínimo | Valor Ideal | Como Verificar |
|---------|--------------|-------------|----------------|
| **Event Match Quality** | 6.0 | 8.5+ | Meta Events Manager |
| **Eventos Recebidos** | 95% | 99%+ | Meta Events Manager |
| **Parâmetros UTM** | 100% | 100% | Kiwify Dashboard |
| **Cookies Capturados** | 80% | 95%+ | Console logs |
| **Atribuição Correta** | 70% | 90%+ | Ads Manager |

---

## 🔐 SEGURANÇA E COMPLIANCE

### LGPD e Privacidade:
- [x] Pixel só carrega após consentimento implícito (navegação no site)
- [x] Cookies de primeira parte (_fbc, _fbp)
- [x] Sem coleta de PII (dados pessoais identificáveis) sem consentimento
- [x] Dados anônimos e hash

### Boas Práticas:
- [x] Event ID único para deduplicação
- [x] Dados estruturados (schema correto)
- [x] Logging apenas em desenvolvimento
- [x] HTTPS obrigatório (Facebook exige)

---

## 🚀 PRÓXIMOS PASSOS (OPCIONAL - CAPI)

### Meta Conversions API (CAPI)
Para tracking 100% confiável mesmo com bloqueadores, considere implementar CAPI:

#### Benefícios:
- ✅ Eventos enviados do servidor (não bloqueáveis)
- ✅ Deduplicação automática via Event ID
- ✅ Melhor atribuição e match quality
- ✅ Redundância caso o pixel seja bloqueado

#### Como implementar:
1. Criar API Route no Next.js (`/app/api/meta-capi/route.ts`)
2. Enviar eventos para `https://graph.facebook.com/v18.0/{pixel-id}/events`
3. Incluir mesmo Event ID do lado do cliente
4. Adicionar Server Event Data (IP, User Agent, etc)

**Nota:** CAPI é opcional mas altamente recomendado para campanhas de alto investimento.

---

## ✅ CHECKLIST FINAL

Antes de ativar as campanhas, verifique:

### Meta Pixel:
- [ ] Pixel instalado e carregando (Pixel Helper verde)
- [ ] PageView disparando automaticamente
- [ ] ViewContent disparando ao carregar página de produto
- [ ] InitiateCheckout disparando em todos os botões CTA
- [ ] Event IDs únicos sendo gerados
- [ ] Cookies _fbc e _fbp sendo capturados

### Parâmetros UTM:
- [ ] URLs de campanha com UTMs corretas
- [ ] Parâmetros passando para Kiwify
- [ ] Cookies incluídos na URL final
- [ ] Rastreamento funcional em todos os navegadores

### Meta Events Manager:
- [ ] Eventos aparecendo em tempo real
- [ ] Match Quality Score > 7.0
- [ ] Sem erros ou avisos críticos
- [ ] Domínio verificado

### Testes Realizados:
- [ ] Teste completo do funil (visualização → clique → compra)
- [ ] Teste com diferentes UTMs
- [ ] Teste em diferentes navegadores (Chrome, Firefox, Safari)
- [ ] Teste em mobile e desktop
- [ ] Verificação no Kiwify Dashboard

---

## 📞 SUPORTE

### Recursos Úteis:
- [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/)
- [Meta Events Manager](https://business.facebook.com/events_manager/)
- [Kiwify Dashboard](https://dashboard.kiwify.com.br/)
- [Meta for Developers - Pixel](https://developers.facebook.com/docs/meta-pixel)

### Em caso de dúvidas:
1. Verifique o console do navegador
2. Use o Pixel Helper para debug
3. Consulte a documentação oficial do Meta
4. Entre em contato com o suporte da Kiwify

---

**Última atualização:** Janeiro 2025  
**Versão:** 2.0  
**Pixel ID:** 734205242727008  
**Rotas implementadas:** 2
- `/curso_nail_design_do_zero_ao_profissional_mariana_nails`
- `/fature-4000-com-unhas-em-2025`

