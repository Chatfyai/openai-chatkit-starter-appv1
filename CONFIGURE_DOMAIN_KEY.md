# 🔐 Configuração da Chave de Domínio

A chave de domínio (`NEXT_PUBLIC_CHATKIT_DOMAIN_KEY`) permite que seu ChatKit funcione em domínios sem precisar adicionar manualmente à Domain Allowlist da OpenAI.

## 📋 Sua Chave de Domínio

```
domain_pk_68fff8b715108190a612f49cc8785f8401ba3b7760e2d8e7
```

## 🚀 Como Configurar no Vercel

### Via Interface Web

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Vá para seu projeto: **openai-chatkit-starter-appv1**
3. Clique em **Settings** → **Environment Variables**
4. Adicione a seguinte variável:

   | Nome | Valor |
   |------|-------|
   | `NEXT_PUBLIC_CHATKIT_DOMAIN_KEY` | `domain_pk_68fff8b715108190a612f49cc8785f8401ba3b7760e2d8e7` |

5. **Importante**: Selecione os ambientes:
   - ☑️ Production
   - ☑️ Preview
   - ☑️ Development

6. Salve e faça um novo deploy

### Via CLI

```bash
# No terminal, no diretório do projeto
vercel env add NEXT_PUBLIC_CHATKIT_DOMAIN_KEY production
# Cole: domain_pk_68fff8b715108190a612f49cc8785f8401ba3b7760e2d8e7

vercel env add NEXT_PUBLIC_CHATKIT_DOMAIN_KEY preview
# Cole: domain_pk_68fff8b715108190a612f49cc8785f8401ba3b7760e2d8e7

vercel env add NEXT_PUBLIC_CHATKIT_DOMAIN_KEY development
# Cole: domain_pk_68fff8b715108190a612f49cc8785f8401ba3b7760e2d8e7

# Redeploy
vercel --prod
```

## ✅ Verificação

Após configurar, verifique se a aplicação está funcionando:

1. Acesse: https://openai-chatkit-starter-appv1.vercel.app
2. O ChatKit deve carregar normalmente
3. Teste enviando uma mensagem

## 🔍 Troubleshooting

### ChatKit não carrega
- Verifique se a variável `NEXT_PUBLIC_CHATKIT_DOMAIN_KEY` foi configurada corretamente
- Certifique-se de que fez um novo deploy após adicionar a variável
- Verifique o console do navegador para erros

### Erro: "Domain not allowed"
- A chave de domínio pode não estar configurada
- Certifique-se de que adicionou a variável de ambiente no Vercel
- Faça um novo deploy

### Erro: "Invalid domain key"
- Verifique se copiou a chave completa e sem espaços
- A chave deve começar com `domain_pk_`

## 📝 Notas Importantes

- A chave de domínio é **pública** (NEXT_PUBLIC_*), então ela será exposta no código do cliente
- Isso é seguro e é o comportamento esperado
- A chave permite que o ChatKit valide seu domínio automaticamente
- Você não precisa mais adicionar o domínio manualmente à Domain Allowlist da OpenAI

## 🔗 Links Úteis

- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [OpenAI Domain Allowlist](https://platform.openai.com/settings/organization/security/domain-allowlist)
- [ChatKit Documentation](https://platform.openai.com/docs/guides/chatkit)

