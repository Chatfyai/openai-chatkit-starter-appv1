# 🔑 Configurar Variáveis de Ambiente no Vercel

## 📋 Variáveis Necessárias

Configure estas 3 variáveis de ambiente no Vercel:

### 1️⃣ OPENAI_API_KEY
**Valor:** Sua chave da API OpenAI
- Onde obter: https://platform.openai.com/api-keys
- Formato: `sk-proj-...`
- **Importante:** A chave deve ser criada na mesma organização do Agent Builder

### 2️⃣ NEXT_PUBLIC_CHATKIT_WORKFLOW_ID
**Valor:** ID do seu Workflow
- Onde obter: https://studio.openai.com/
- Formato: `wf_...`
- Como obter:
  1. Acesse o Agent Builder
  2. Crie ou edite um Agent
  3. Clique em "Publish"
  4. Copie o `Workflow ID`

### 3️⃣ NEXT_PUBLIC_CHATKIT_DOMAIN_KEY
**Valor:** (Já fornecido ✅)
```
domain_pk_690004d91cb081908203906f5162920006c8f5acf633256d
```

---

## 🚀 Como Configurar no Vercel

### Passo 1: Acesse Settings do Projeto
https://vercel.com/chatfyautomacao-gmailcoms-projects/openai-chatkit-starter-appv1/settings/environment-variables

### Passo 2: Adicione cada variável

#### Adicione OPENAI_API_KEY
1. Clique em "Add New"
2. **Key:** `OPENAI_API_KEY`
3. **Value:** `sk-proj-...` (sua chave)
4. **Environment:** Select all (Production, Preview, Development)
5. Clique em "Save"

#### Adicione NEXT_PUBLIC_CHATKIT_WORKFLOW_ID
1. Clique em "Add New"
2. **Key:** `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID`
3. **Value:** `wf_...` (seu workflow ID)
4. **Environment:** Select all (Production, Preview, Development)
5. Clique em "Save"

#### Adicione NEXT_PUBLIC_CHATKIT_DOMAIN_KEY
1. Clique em "Add New"
2. **Key:** `NEXT_PUBLIC_CHATKIT_DOMAIN_KEY`
3. **Value:** `domain_pk_690004d91cb081908203906f5162920006c8f5acf633256d`
4. **Environment:** Select all (Production, Preview, Development)
5. Clique em "Save"

### Passo 3: Faça Redeploy
Depois de adicionar todas as variáveis:
1. Vá em "Deployments"
2. Clique nos três pontos ao lado do último deployment
3. Clique em "Redeploy"
4. Ou aguarde o próximo push para fazer deploy automático

---

## ✅ Lista de Variáveis (Copy-paste)

```
OPENAI_API_KEY=sk-proj-...
NEXT_PUBLIC_CHATKIT_WORKFLOW_ID=wf_...
NEXT_PUBLIC_CHATKIT_DOMAIN_KEY=domain_pk_690004d91cb081908203906f5162920006c8f5acf633256d
```

**Substitua:** `sk-proj-...` e `wf_...` pelos seus valores reais!

---

## 🔍 Como Obter o Workflow ID

### 1. OpenAI Agent Builder
- Acesse: https://studio.openai.com/
- Crie um novo Agent ou selecione um existente

### 2. Configure o Agent
- Defina as instruções do agent
- Adicione as ferramentas necessárias

### 3. Publish
- Clique em "Publish" ou "Deploy"
- Copie o `Workflow ID` que aparecerá
- Formato: `wf_xxxxxxxxxxxxxxxxxxxxxxxx`

---

## 🐛 Troubleshooting

### Erro: "Missing OPENAI_API_KEY"
**Solução:** Adicione a variável `OPENAI_API_KEY` no Vercel

### Erro: "Missing workflow ID"
**Solução:** Adicione a variável `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` no Vercel

### Erro: "Session creation failed"
**Solução:** 
- Verifique se a API Key tem permissões corretas
- Confirme que está na mesma organização do workflow
- Verifique se o Workflow ID está correto

### Erro: "Invalid domain"
**Solução:** 
- A Domain Key já está configurada
- Ou adicione manualmente seu domínio em: https://platform.openai.com/settings/organization/security

---

## 📝 Checklist

- [ ] OPENAI_API_KEY configurada no Vercel
- [ ] NEXT_PUBLIC_CHATKIT_WORKFLOW_ID configurada no Vercel
- [ ] NEXT_PUBLIC_CHATKIT_DOMAIN_KEY configurada no Vercel
- [ ] Todas as variáveis marcadas para "All Environments"
- [ ] Redeploy feito após configurar
- [ ] Site funcionando em: https://openai-chatkit-starter-appv1.vercel.app

---

## 🔗 Links Úteis

- **Vercel Dashboard:** https://vercel.com/chatfyautomacao-gmailcoms-projects/openai-chatkit-starter-appv1
- **OpenAI Platform:** https://platform.openai.com
- **Agent Builder:** https://studio.openai.com/
- **Documentação:** https://platform.openai.com/docs/assistants/overview

