# 🧪 GUIA DE TESTE - Sistema de Rastreamento Kiwify

## ✅ Implementação Concluída

O sistema de rastreamento foi implementado com sucesso nas seguintes páginas:
- `/curso_nail_design_do_zero_ao_profissional_mariana_nails`
- `/fature-4000-com-unhas-em-2025`

## 🔍 Como Testar

### 1. **Teste com Parâmetros UTM**
Acesse as páginas com parâmetros UTM:

```
https://www.mariananails.com.br/curso_nail_design_do_zero_ao_profissional_mariana_nails?utm_source=facebook&utm_medium=cpc&utm_campaign=curso2025&src=teste
```

```
https://www.mariananails.com.br/fature-4000-com-unhas-em-2025?utm_source=instagram&utm_medium=story&utm_campaign=renda4000&s1=influencer
```

### 2. **Verificar no Console do Navegador**
1. Abra as ferramentas de desenvolvedor (F12)
2. Vá na aba "Console"
3. Clique em qualquer botão de "GARANTIR MINHA VAGA"
4. Você verá logs como:

```javascript
Meta Pixel - Evento InitiateCheckout disparado: final-page-main-button
Parâmetros de rastreamento capturados: {
  _fbc: "fb.1.1234567890.123456789",
  _fbp: "fb.1.1234567890.987654321", 
  urlParams: {
    utm_source: "facebook",
    utm_medium: "cpc", 
    utm_campaign: "curso2025",
    src: "teste"
  }
}
```

### 3. **Verificar URL do Kiwify**
1. Clique com botão direito em qualquer botão de compra
2. Selecione "Copiar endereço do link"
3. A URL deve estar assim:

```
https://pay.kiwify.com.br/lf9IZHj?utm_source=facebook&utm_medium=cpc&utm_campaign=curso2025&src=teste&_fbc=fb.1.1234567890.123456789&_fbp=fb.1.1234567890.987654321
```

## 📊 Parâmetros Suportados

✅ **Parâmetros UTM:**
- `utm_source`
- `utm_medium` 
- `utm_campaign`
- `utm_term`
- `utm_content`

✅ **Parâmetros Kiwify:**
- `src`
- `sck`
- `s1`, `s2`, `s3`

✅ **Cookies Facebook:**
- `_fbc` (Facebook Click ID)
- `_fbp` (Facebook Browser ID)

## 🎯 Cenários de Teste

### Cenário 1: Usuário vem do Facebook Ads
```
URL inicial: https://www.mariananails.com.br/curso_nail_design_do_zero_ao_profissional_mariana_nails?utm_source=facebook&utm_medium=cpc&utm_campaign=nail_design&src=fb_ads
```
**Resultado esperado:** URL Kiwify inclui UTM + cookies Facebook

### Cenário 2: Usuário vem do Instagram
```
URL inicial: https://www.mariananails.com.br/fature-4000-com-unhas-em-2025?utm_source=instagram&utm_medium=story&s1=influencer_maria
```
**Resultado esperado:** URL Kiwify inclui parâmetros Instagram + cookies

### Cenário 3: Acesso direto (sem parâmetros)
```
URL inicial: https://www.mariananails.com.br/curso_nail_design_do_zero_ao_profissional_mariana_nails
```
**Resultado esperado:** URL Kiwify inclui apenas cookies Facebook (se existirem)

## 🐛 Solução de Problemas

### Cookies não aparecem?
- Cookies `_fbc` e `_fbp` são criados pelo Facebook Pixel
- Só aparecem após o pixel carregar completamente
- Teste navegando primeiro pela página por alguns segundos

### Parâmetros não passam?
- Verifique se os parâmetros estão na URL corretamente
- Use apenas os parâmetros suportados pela Kiwify
- Parâmetros são case-sensitive

### URL muito longa?
- A Kiwify aceita URLs longas
- Se necessário, use o encurtador da própria Kiwify
- Todos os parâmetros serão preservados

## 📈 Monitoramento

### No Kiwify Dashboard:
1. Acesse "Vendas" → "Filtros"
2. Clique em "Parâmetros da URL"
3. Filtre por qualquer parâmetro (ex: `src=teste`)

### No Facebook Ads Manager:
- As conversões agora devem ser atribuídas corretamente
- Cookies `_fbc` e `_fbp` melhoram a precisão do tracking

## 🚀 Próximos Passos

1. **Teste em produção** com campanhas reais
2. **Monitore relatórios** no Kiwify e Facebook
3. **Otimize campanhas** baseado nos dados de atribuição
4. **Considere adicionar** mais parâmetros personalizados se necessário

---

**Data de implementação:** ${new Date().toLocaleDateString('pt-BR')}
**Páginas atualizadas:** 2
**Parâmetros suportados:** 10
**Status:** ✅ Pronto para produção
