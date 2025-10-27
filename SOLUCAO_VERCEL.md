# 🔧 Solução: Conectar Vercel ao Git

## ❌ Problema Atual
O projeto no Vercel mostra "Connect Git", o que significa que ele não está conectado ao repositório GitHub.

## ✅ Solução: 2 Opções

---

## 📌 Opção 1: Conectar via Dashboard (Recomendado)

### Passo 1: Acesse o Dashboard
https://vercel.com/chatfyautomacao-gmailcoms-projects/openai-chatkit-starter-appv1/settings

### Passo 2: Clique em "Connect Git"
No topo da página, você verá o botão "Connect Git"

### Passo 3: Escolha o Repositório
- Selecione: `Chatfyai/openai-chatkit-starter-appv1`
- Branch: `main`
- Clique em "Connect"

### Passo 4: Configure as Variáveis de Ambiente
Vá em Settings → Environment Variables e adicione:

```bash
# Obrigatório
OPENAI_API_KEY=sk-proj-...
NEXT_PUBLIC_CHATKIT_WORKFLOW_ID=wf_...

# Opcional
NEXT_PUBLIC_CHATKIT_DOMAIN_KEY=domain_pk_...
```

### Passo 5: Deploy Automático
Após conectar, cada push para `main` fará deploy automático!

---

## 📌 Opção 2: Recriar Projeto do Zero

Se a opção 1 não funcionar:

### Passo 1: Delete o Projeto Atual
1. Settings → General
2. Role até o final
3. Clique em "Delete Project"

### Passo 2: Importar Novamente
1. Acesse: https://vercel.com/new
2. Escolha: "Import Git Repository"
3. Selecione: `Chatfyai/openai-chatkit-starter-appv1`
4. Configure as variáveis de ambiente (mesmas da opção 1)
5. Deploy!

---

## 🔑 Variáveis de Ambiente Necessárias

### Onde encontrar cada uma:

**OPENAI_API_KEY**
- https://platform.openai.com/api-keys
- Criar nova chave (mesma org do Agent Builder)

**NEXT_PUBLIC_CHATKIT_WORKFLOW_ID**
- https://studio.openai.com/
- Publish no Agent → copiar Workflow ID

**NEXT_PUBLIC_CHATKIT_DOMAIN_KEY** (opcional)
- https://platform.openai.com/settings/organization/security
- Domain Allowlist → adicionar domínio

---

## ✅ Após Configurar

1. Acesse: https://openai-chatkit-starter-appv1.vercel.app
2. Você verá: Interface "Oi, sou a Mari" ✨
3. Próximos deploys serão automáticos!

---

## 🐛 Problemas Comuns

**Erro: "Repository not found"**
→ Verifique se o repositório está público ou você tem acesso

**Erro: "Build failed"**
→ Verifique se todas as variáveis de ambiente estão configuradas

**Erro: "Missing workflow ID"**
→ Adicione `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` nas variáveis

---

## 📞 Link Rápido

Dashboard: https://vercel.com/chatfyautomacao-gmailcoms-projects/openai-chatkit-starter-appv1

Settings: https://vercel.com/chatfyautomacao-gmailcoms-projects/openai-chatkit-starter-appv1/settings

