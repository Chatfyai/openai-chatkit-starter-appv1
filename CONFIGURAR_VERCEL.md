# 🚀 Como Configurar o Projeto no Vercel

## ⚠️ Problema
A URL que você acessou é a página de **importação de projeto** do Vercel, não um erro. Isso significa que o projeto precisa ser configurado ou reconectado ao Vercel.

## 📋 Passos para Configurar

### Opção 1: Usar a Interface do Vercel (Recomendado)

1. **Acesse a URL que você compartilhou:**
   ```
   https://vercel.com/new/import?buildCommand=npm%20run%20build&framework=nextjs...
   ```

2. **Configure as Variáveis de Ambiente:**
   
   No Vercel, adicione estas variáveis na seção "Environment Variables":
   
   ```bash
   # Obrigatório
   OPENAI_API_KEY=sk-proj-...
   NEXT_PUBLIC_CHATKIT_WORKFLOW_ID=wf_...
   
   # Opcional (mas recomendado)
   NEXT_PUBLIC_CHATKIT_DOMAIN_KEY=domain_pk_...
   ```

3. **Verifique as Configurações de Build:**
   
   O Vercel deve detectar automaticamente:
   - **Framework:** Next.js
   - **Build Command:** `npm run build`
   - **Install Command:** `npm install`
   - **Root Directory:** `./`

4. **Clique em "Deploy"** e aguarde o build

---

### Opção 2: Via CLI do Vercel (Avançado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Adicionar variáveis de ambiente
vercel env add OPENAI_API_KEY production
vercel env add NEXT_PUBLIC_CHATKIT_WORKFLOW_ID production
vercel env add NEXT_PUBLIC_CHATKIT_DOMAIN_KEY production
```

---

## 🔑 Onde Obter as Chaves Necessárias

### 1. OpenAI API Key
1. Acesse: https://platform.openai.com/api-keys
2. Crie uma nova API Key
3. Use dentro da mesma organização do Agent Builder

### 2. ChatKit Workflow ID
1. Acesse: https://studio.openai.com/
2. Crie ou edite um Agent
3. Clique em "Publish"
4. Copie o `Workflow ID` (formato: `wf_...`)

### 3. Domain Key (Opcional)
1. Acesse: https://platform.openai.com/settings/organization/security
2. Vá em "Domain Allowlist"
3. Adicione seu domínio
4. Copie o `Domain Key` (formato: `domain_pk_...`)

---

## ✅ Checklist de Configuração

- [ ] Adicionar `OPENAI_API_KEY` no Vercel
- [ ] Adicionar `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` no Vercel
- [ ] Adicionar `NEXT_PUBLIC_CHATKIT_DOMAIN_KEY` no Vercel (opcional)
- [ ] Verificar se Framework está como Next.js
- [ ] Verificar se Build Command está correto: `npm run build`
- [ ] Deploy realizado com sucesso

---

## 🐛 Problemas Comuns

### Erro: "Build failed"
**Solução:** Verifique se todas as variáveis de ambiente estão configuradas

### Erro: "Missing workflow ID"
**Solução:** Adicione `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` nas variáveis de ambiente

### Erro: "Session creation failed"
**Solução:** Verifique se a API Key tem permissões corretas e está na mesma org do workflow

---

## 🔗 Links Úteis

- Dashboard Vercel: https://vercel.com/dashboard
- OpenAI Platform: https://platform.openai.com
- ChatKit Studio: https://studio.openai.com
- Documentação: https://platform.openai.com/docs/assistants/overview

---

## 📝 Após Configurar

Após configurar todas as variáveis de ambiente no Vercel:

1. O Vercel fará o build automaticamente
2. Aguarde o deployment terminar (2-5 minutos)
3. Acesse: `https://openai-chatkit-starter-appv1.vercel.app/`
4. Você verá a interface "Oi, sou a Mari"

---

**Dica:** Após o primeiro deployment, cada push para o branch `main` fará um novo deployment automaticamente!

