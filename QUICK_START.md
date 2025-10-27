# 🚀 Quick Start - Deploy na Vercel

## Configuração Rápida (5 minutos)

### 1. Prepare suas credenciais

Você precisa de:

- **OpenAI API Key**: https://platform.openai.com/api-keys
- **Workflow ID**: Crie em https://platform.openai.com/agent-builder → Publish

### 2. Deploy na Vercel

#### Método A: Via Interface Web

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"**
3. Conecte este repositório
4. Configure as variáveis de ambiente:
   ```
   NEXT_PUBLIC_CHATKIT_WORKFLOW_ID = wf_xxxxxxxxxxxxxxxxxxxxxxxx
   OPENAI_API_KEY = sk-...
   NEXT_PUBLIC_CHATKIT_DOMAIN_KEY = domain_pk_68fff8b715108190a612f49cc8785f8401ba3b7760e2d8e7
   ```
5. Clique em **"Deploy"**
6. Aguarde ~2 minutos

#### Método B: Via CLI

```bash
# Instale a CLI
npm i -g vercel

# Faça login
vercel login

# Configure as variáveis
vercel env add NEXT_PUBLIC_CHATKIT_WORKFLOW_ID
# Cole seu Workflow ID

vercel env add OPENAI_API_KEY
# Cole sua API Key

vercel env add NEXT_PUBLIC_CHATKIT_DOMAIN_KEY
# Cole sua Domain Key (opcional, mas recomendado)

# Deploy
vercel --prod
```

### 3. Verifique o domínio

Após o deploy, adicione o domínio na OpenAI:

1. Acesse: https://platform.openai.com/settings/organization/security/domain-allowlist
2. Adicione o domínio da Vercel (ex: `seu-projeto.vercel.app`)

### 4. Teste

Acesse sua aplicação e teste o ChatKit!

---

## 📋 Checklist de Deploy

- [ ] Workflow criado e publicado no Agent Builder
- [ ] OpenAI API Key criada na mesma organização
- [ ] Variáveis de ambiente configuradas na Vercel
- [ ] Deploy realizado com sucesso
- [ ] Domínio adicionado na Domain Allowlist
- [ ] ChatKit funcionando corretamente

## ❓ Problemas Comuns

| Erro | Solução |
|------|---------|
| "Missing workflow id" | Verifique se `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` está configurado |
| "Missing OPENAI_API_KEY" | Verifique se `OPENAI_API_KEY` está configurado |
| "Domain not allowed" | Adicione o domínio na Domain Allowlist |
| ChatKit não carrega | Verifique o console do navegador |

## 🔗 Links Úteis

- [Documentação ChatKit](https://platform.openai.com/docs/guides/chatkit)
- [Guia Completo de Deploy](DEPLOY.md)
- [OpenAI Platform](https://platform.openai.com)

