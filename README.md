# SouLeveza - Site Institucional

Site institucional moderno para Andreza Zuntini, Terapeuta Sistêmica Integrativa.

## 🚀 Tecnologias

- **Next.js 14** - App Router com SSG
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **MDX** - Conteúdo rico com componentes React

## 📁 Estrutura do Projeto

```
├── app/                    # Páginas e layouts (App Router)
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   ├── sitemap.ts         # Geração do sitemap
│   └── robots.ts          # Configuração do robots.txt
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Seções da página (Hero, About, etc)
│   ├── mdx/               # Componentes para uso em MDX
│   └── ui/                # Componentes UI reutilizáveis
├── content/               # Conteúdo MDX
│   ├── pages/             # Páginas em MDX
│   └── services/          # Serviços em MDX
├── lib/                   # Utilitários
│   ├── mdx.ts            # Helpers para leitura MDX
│   └── seo.ts            # Configurações de SEO
├── public/                # Arquivos estáticos
├── styles/                # Estilos globais
└── types/                 # Definições de tipos
```

## 🏃‍♂️ Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start
```

## 📝 Adicionando Conteúdo

### Páginas
Crie arquivos `.mdx` em `content/pages/`:

```mdx
---
title: "Título da Página"
description: "Descrição para SEO"
slug: "url-da-pagina"
---

# Conteúdo aqui

Você pode usar componentes React dentro do MDX!
```

### Serviços
Crie arquivos `.mdx` em `content/services/`:

```mdx
---
title: "Nome do Serviço"
description: "Descrição"
slug: "url-do-servico"
icon: "🌿"
duration: "50 min"
modality: ["Presencial", "Online"]
featured: true
order: 1
---
```

## 🎨 Paleta de Cores

- **Sage (Verde Sálvia)** - Cor principal, transmite natureza e tranquilidade
- **Earth (Terra)** - Acentos quentes
- **Cream (Creme)** - Fundos suaves

## 🔮 Migração para CMS

O projeto está preparado para futura migração para Headless CMS:

1. A interface `ContentSource` em `lib/mdx.ts` abstrai a fonte de dados
2. Basta implementar a interface para conectar com Sanity, Contentful, etc.
3. Nenhuma refatoração estrutural necessária

Exemplo:
```typescript
// lib/sanity.ts
export function createSanitySource<T>(type: string): ContentSource<T> {
  return {
    getBySlug: async (slug) => { /* fetch from Sanity */ },
    getAll: async () => { /* fetch from Sanity */ },
    getSlugs: async () => { /* fetch from Sanity */ },
  }
}
```

## 📈 SEO

- ✅ Metadata dinâmica por página
- ✅ Open Graph e Twitter Cards
- ✅ JSON-LD Schema.org
- ✅ Sitemap automático
- ✅ Robots.txt
- ✅ URLs limpas e semânticas

## 🌐 Deploy

Pronto para deploy em:

- **Vercel** (recomendado)
- **Cloudflare Pages**
- **Netlify**

```bash
# Deploy na Vercel
npx vercel
```

## 📄 Licença

Projeto privado - Todos os direitos reservados.
