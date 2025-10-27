# Guia de Deploy para Vercel - ChatKit OpenAI

Este guia mostra como fazer o deploy da aplicação ChatKit no Vercel.

## Pré-requisitos

1. **Conta na Vercel**: Crie uma conta em [vercel.com](https://vercel.com)
2. **OpenAI API Key**: Obtenha em [OpenAI API Keys](https://platform.openai.com/api-keys)
3. **ChatKit Workflow ID**: Crie um workflow no [Agent Builder](https://platform.openai.com/agent-builder)

## Configuração do Workflow

1. Acesse [Agent Builder](https://platform.openai.com/agent-builder)
2. Crie ou selecione seu workflow
3. Clique em "Publish"
4. Copie o Workflow ID (formato: `wf_xxxxxxxxxxxxxxxxxxxxxxxx`)

## Deploy no Vercel

### Opção 1: Deploy via Interface Web (Recomendado)

1. **Conecte o repositório**:
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Add New Project"
   - Conecte seu repositório do GitHub/GitLab/Bitbucket

2. **Configure as variáveis de ambiente**:
   - Na seção "Environment Variables", adicione:
   
   | Nome | Valor | Descrição |
   |------|-------|-----------|
   | `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` | `wf_...` | ID do seu workflow |
   | `OPENAI_API_KEY` | `sk-...` | Sua chave da API OpenAI |
   | `NEXT_PUBLIC_CHATKIT_DOMAIN_KEY` | `domain_pk_...` | (Opcional) Chave de domínio para verificação |
   | `CHATKIT_API_BASE` | `https://api.openai.com` | (Opcional) Base URL da API |

3. **Importante**: 
   - `OPENAI_API_KEY` deve ser criada **dentro da mesma organização e projeto do Agent Builder**
   - As variáveis com prefixo `NEXT_PUBLIC_` são expostas ao cliente

4. **Clique em "Deploy"**

5. **Verifique o domínio**: Após o deploy, adicione o domínio da Vercel à [Domain Allowlist](https://platform.openai.com/settings/organization/security/domain-allowlist)

### Opção 2: Deploy via CLI

1. **Instale a CLI da Vercel**:
```bash
npm i -g vercel
```

2. **Login**:
```bash
vercel login
```

3. **Configure as variáveis de ambiente**:
```bash
vercel env add NEXT_PUBLIC_CHATKIT_WORKFLOW_ID
# Cole o Workflow ID quando solicitado

vercel env add OPENAI_API_KEY
# Cole sua API Key quando solicitado

vercel env add CHATKIT_API_BASE
# Digite https://api.openai.com (ou deixe vazio para usar o padrão)
```

4. **Faça o deploy**:
```bash
vercel --prod
```

5. **Verifique o domínio**: Adicione o domínio à [Domain Allowlist](https://platform.openai.com/settings/organization/security/domain-allowlist)

## Verificação de Organização (Opcional)

Se seu workflow usa modelos que requerem verificação de organização (como GPT-5):

1. Acesse [Organization Settings](https://platform.openai.com/settings/organization/general)
2. Clique em "Verify Organization"
3. Complete o processo de verificação

## Troubleshooting

### Erro: "Missing workflow id"
- Verifique se `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` foi definida corretamente
- Certifique-se de que o workflow está publicado no Agent Builder

### Erro: "Missing OPENAI_API_KEY"
- Verifique se a variável `OPENAI_API_KEY` foi definida
- Certifique-se de que a chave foi criada na mesma organização do workflow

### Erro: "Domain not allowed"
- Adicione o domínio da Vercel à [Domain Allowlist](https://platform.openai.com/settings/organization/security/domain-allowlist)

### ChatKit não carrega
- Verifique se o CDN do ChatKit está acessível: `https://cdn.platform.openai.com/deployments/chatkit/chatkit.js`
- Verifique o console do navegador para erros

## Próximos Passos

- Customize o tema em [`lib/config.ts`](lib/config.ts)
- Adicione prompts personalizados
- Integre com analytics
- Configure storage personalizado

## Referências

- [ChatKit JavaScript Library](http://openai.github.io/chatkit-js/)
- [ChatKit Documentation](https://platform.openai.com/docs/guides/chatkit)
- [Vercel Documentation](https://vercel.com/docs)

