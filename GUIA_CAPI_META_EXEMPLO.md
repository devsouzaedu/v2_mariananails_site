# 🚀 GUIA DE IMPLEMENTAÇÃO - Meta Conversions API (CAPI)

## 📝 O que é CAPI?

A **Conversions API (CAPI)** do Meta permite enviar eventos de conversão diretamente do seu servidor para o Meta, contornando bloqueadores de anúncios e melhorando a precisão da atribuição.

### Benefícios:
- ✅ **Eventos não bloqueáveis** - Enviados do servidor
- ✅ **Deduplicação automática** - Via Event ID
- ✅ **Melhor Match Quality** - Dados adicionais do servidor
- ✅ **Redundância** - Funciona mesmo se o pixel for bloqueado
- ✅ **Mais precisão** - IP real, User Agent confiável

---

## 🏗️ ARQUITETURA

```
Usuário → Landing Page → Meta Pixel (client-side)
                       ↓
                    Event ID
                       ↓
                 Next.js Server → Meta CAPI (server-side)
```

**Deduplicação:** O mesmo Event ID é usado no pixel e no CAPI. O Meta automaticamente deduplica eventos duplicados.

---

## 📦 IMPLEMENTAÇÃO NO NEXT.JS

### 1️⃣ Criar API Route

Crie o arquivo: `src/app/api/meta-capi/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Configurações do Meta CAPI
const PIXEL_ID = '734205242727008';
const ACCESS_TOKEN = 'SEU_ACCESS_TOKEN_AQUI'; // Gerar no Events Manager
const API_VERSION = 'v18.0';
const CAPI_URL = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events`;

// Função para hash SHA256 (necessário para PII)
function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

// Função para extrair domínio do email
function extractDomain(email: string): string {
  const domain = email.split('@')[1];
  return domain || '';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      eventName, // 'ViewContent', 'InitiateCheckout', etc
      eventId, // Event ID único (mesmo do pixel)
      eventSourceUrl, // URL da página
      contentName,
      contentCategory,
      contentIds,
      value,
      currency,
      // Dados do usuário (opcional, mas melhora match quality)
      email,
      phone,
      firstName,
      lastName,
      city,
      state,
      zipCode,
      country = 'br',
      // Dados técnicos
      userAgent,
      clientIpAddress,
      fbc, // Facebook Click ID (cookie _fbc)
      fbp, // Facebook Browser ID (cookie _fbp)
    } = body;

    // Timestamp em segundos (Unix time)
    const eventTime = Math.floor(Date.now() / 1000);

    // Construir user_data (dados do usuário)
    const userData: any = {
      client_ip_address: clientIpAddress,
      client_user_agent: userAgent,
      fbc: fbc || undefined,
      fbp: fbp || undefined,
    };

    // Adicionar PII se disponível (sempre em hash)
    if (email) {
      userData.em = hashData(email); // Email em hash
      userData.db = hashData(extractDomain(email)); // Domínio do email em hash
    }
    if (phone) {
      userData.ph = hashData(phone); // Telefone em hash
    }
    if (firstName) {
      userData.fn = hashData(firstName); // Nome em hash
    }
    if (lastName) {
      userData.ln = hashData(lastName); // Sobrenome em hash
    }
    if (city) {
      userData.ct = hashData(city); // Cidade em hash
    }
    if (state) {
      userData.st = hashData(state); // Estado em hash
    }
    if (zipCode) {
      userData.zp = hashData(zipCode); // CEP em hash
    }
    if (country) {
      userData.country = hashData(country); // País em hash
    }

    // Construir custom_data (dados do produto/evento)
    const customData: any = {
      content_name: contentName,
      content_category: contentCategory,
      content_ids: contentIds,
      content_type: 'product',
      value: value,
      currency: currency,
    };

    // Payload para CAPI
    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: eventTime,
          event_id: eventId, // CRUCIAL para deduplicação
          event_source_url: eventSourceUrl,
          action_source: 'website',
          user_data: userData,
          custom_data: customData,
        },
      ],
      access_token: ACCESS_TOKEN,
    };

    // Enviar para Meta CAPI
    const response = await fetch(CAPI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Erro ao enviar evento para Meta CAPI:', result);
      return NextResponse.json(
        { success: false, error: result },
        { status: response.status }
      );
    }

    console.log('✅ Evento enviado para Meta CAPI:', {
      eventName,
      eventId,
      events_received: result.events_received,
      fbtrace_id: result.fbtrace_id,
    });

    return NextResponse.json({
      success: true,
      events_received: result.events_received,
      fbtrace_id: result.fbtrace_id,
    });
  } catch (error: any) {
    console.error('Erro na API Meta CAPI:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
```

---

### 2️⃣ Atualizar Páginas de Curso

#### Adicionar função para enviar evento ao CAPI

Adicione nas páginas:
- `src/app/curso_nail_design_do_zero_ao_profissional_mariana_nails/page.tsx`
- `src/app/fature-4000-com-unhas-em-2025/page.tsx`

```typescript
// Função para enviar evento para CAPI (server-side)
const sendEventToCAPI = async (
  eventName: string,
  eventId: string,
  customData: any
) => {
  try {
    // Capturar dados do cliente
    const fbc = getCookie('_fbc');
    const fbp = getCookie('_fbp');
    
    // Payload para o CAPI
    const payload = {
      eventName,
      eventId, // Mesmo Event ID do pixel
      eventSourceUrl: window.location.href,
      ...customData,
      userAgent: navigator.userAgent,
      fbc,
      fbp,
      // clientIpAddress será capturado no servidor via headers
    };

    // Enviar para API Route
    const response = await fetch('/api/meta-capi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Evento CAPI enviado com sucesso:', eventId);
    } else {
      console.error('❌ Erro ao enviar evento CAPI:', result.error);
    }
  } catch (error) {
    console.error('❌ Erro na comunicação com CAPI:', error);
  }
};
```

#### Atualizar função handleCheckoutClick

```typescript
const handleCheckoutClick = (buttonLocation: string) => {
  const eventId = generateEventId();
  const fbc = getCookie('_fbc');
  const fbp = getCookie('_fbp');
  
  const eventData = {
    content_name: 'Curso Nail Design do Zero ao Profissional',
    content_category: 'Course',
    content_ids: ['curso-nail-design-mariana-nails'],
    content_type: 'product',
    currency: 'BRL',
    value: 50.00,
    button_location: buttonLocation,
    source_url: window.location.href,
    fbc: fbc || undefined,
    fbp: fbp || undefined,
  };

  // 1. Enviar evento via Pixel (client-side)
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', eventData, {
      eventID: eventId,
    });
    console.log('✅ Pixel - InitiateCheckout enviado:', eventId);
  }

  // 2. Enviar evento via CAPI (server-side)
  sendEventToCAPI('InitiateCheckout', eventId, eventData);
};
```

---

### 3️⃣ Melhorar captura de IP no servidor

Atualize a API Route para capturar o IP real:

```typescript
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Capturar IP real do cliente
    let clientIpAddress = 
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      body.clientIpAddress ||
      '0.0.0.0';
    
    // Resto do código...
    const userData: any = {
      client_ip_address: clientIpAddress,
      // ...
    };
  }
}
```

---

## 🔐 OBTER ACCESS TOKEN

### Passo a Passo:

1. **Acesse o Meta Events Manager:**
   - [https://business.facebook.com/events_manager/](https://business.facebook.com/events_manager/)

2. **Selecione seu Pixel:**
   - Pixel ID: `734205242727008`

3. **Vá em "Configurações":**
   - Clique na engrenagem ⚙️

4. **Role até "Conversions API":**
   - Clique em "Gerar Token de Acesso"

5. **Copie o Token:**
   - Salve em local seguro
   - NÃO compartilhe publicamente

6. **Configure no projeto:**
   ```bash
   # Crie arquivo .env.local
   echo "META_CAPI_ACCESS_TOKEN=seu_token_aqui" >> .env.local
   ```

7. **Use o token na API Route:**
   ```typescript
   const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN || '';
   ```

---

## 🧪 TESTAR CAPI

### Teste via Test Events

1. **Acesse Test Events:**
   - Events Manager → Testar Eventos

2. **Ative Test Event Code:**
   ```typescript
   const payload = {
     data: [...],
     test_event_code: 'TEST12345', // Código de 10 caracteres
     access_token: ACCESS_TOKEN,
   };
   ```

3. **Envie eventos de teste:**
   - Navegue nas páginas
   - Clique nos botões
   - Verifique no Test Events Manager

4. **Valide dados:**
   - [ ] Event ID aparece
   - [ ] Deduplicação funciona (pixel + CAPI = 1 evento)
   - [ ] User Data está preenchido
   - [ ] Match Quality é alto (8+)

---

## 📊 MONITORAMENTO

### KPIs para CAPI:

| Métrica | Como Verificar | Meta |
|---------|----------------|------|
| **Events Received** | Events Manager | 100% |
| **Match Quality** | Events Manager | 8.5+ |
| **Deduplication Rate** | Events Manager → Diagnostics | 90%+ |
| **Server Event Latency** | Logs da API | < 1s |

### Logs importantes:

```typescript
// No cliente (console)
console.log('✅ Pixel - InitiateCheckout:', eventId);
console.log('✅ CAPI - InitiateCheckout enviado:', eventId);

// No servidor (API Route)
console.log('Meta CAPI Response:', {
  events_received: result.events_received,
  fbtrace_id: result.fbtrace_id,
});
```

---

## 🚨 TROUBLESHOOTING

### Erro: "Invalid Access Token"
**Solução:** Regenere o token no Events Manager

### Erro: "Event ID duplicado"
**Solução:** Isso é esperado! O Meta deduplica automaticamente.

### Match Quality baixo
**Solução:** 
- Adicione mais user_data (email, phone, etc)
- Garanta que IP e User Agent estão corretos
- Use hash correto para PII

### Latência alta
**Solução:**
- Envie CAPI de forma assíncrona
- Não bloqueie a UI esperando resposta
- Use background jobs para retry

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

- [ ] API Route criada (`/api/meta-capi/route.ts`)
- [ ] Access Token gerado e configurado
- [ ] IP real sendo capturado
- [ ] Event ID único gerado
- [ ] Mesmo Event ID usado em pixel e CAPI
- [ ] User Agent sendo enviado
- [ ] Cookies _fbc e _fbp incluídos
- [ ] Testes realizados via Test Events
- [ ] Match Quality > 8.0
- [ ] Deduplicação funcionando
- [ ] Logs de debug removidos em produção

---

## 📚 RECURSOS

- [Meta Conversions API Docs](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [Event Deduplication](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events)
- [Server Event Parameters](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event)
- [User Data Parameters](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters)

---

**Nota:** CAPI é OPCIONAL mas ALTAMENTE RECOMENDADO para:
- Campanhas de alto investimento (R$ 1.000+/dia)
- Produtos com ticket alto (R$ 100+)
- Necessidade de tracking 100% confiável
- Ambientes com bloqueadores de anúncios

**Custo:** Zero. É um recurso gratuito do Meta.

**Complexidade:** Média. Requer conhecimento de Next.js API Routes e Meta API.

**ROI:** Alto. Melhora significativa na atribuição e ROAS.

