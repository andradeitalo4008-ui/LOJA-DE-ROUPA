# STREET WAVE - Loja de Streetwear

Plataforma de e-commerce moderna, responsiva e visualmente impactante para uma marca premium de streetwear.

## 🎯 Características

- ✨ Design moderno e minimalista
- 📱 Completamente responsivo (mobile, tablet, desktop)
- ⚡ Performance otimizada com Next.js
- 🛒 Carrinho de compras funcional
- 🔍 Busca e filtros avançados
- ❤️ Sistema de favoritos (localStorage)
- 📦 Galeria de produtos com imagens em alta resolução
- 🎨 Identidade visual premium com cores vibrantes
- ♿ Acessibilidade otimizada
- 📊 SEO estruturado

## 🚀 Começando

### Pré-requisitos

- Node.js 18.0 ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/andradeitalo4008-ui/LOJA-DE-ROUPA.git
cd LOJA-DE-ROUPA

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.local.example .env.local
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:3000 no seu navegador
```

### Build para Produção

```bash
# Verifique erros de TypeScript
npm run type-check

# Execute o linter
npm run lint

# Construa para produção
npm run build

# Inicie o servidor de produção
npm start
```

## 📁 Estrutura do Projeto

```
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Cart.tsx
│   │   ├── ProductCard.tsx
│   │   └── ...
│   ├── layout.tsx
│   ├── page.tsx
│   └── (rotas)/
│       ├── lancamentos/
│       ├── colecoes/
│       ├── masculino/
│       ├── feminino/
│       ├── produto/[slug]/
│       ├── carrinho/
│       ├── sobre/
│       └── ...
├── lib/
│   ├── products.ts
│   └── utils.ts
├── types/
│   └── index.ts
├── public/
│   ├── sitemap.xml
│   └── robots.txt
└── ...
```

## 🎨 Customização

### Cores

As cores principais estão definidas em `tailwind.config.ts`. Para customizar:

```ts
colors: {
  accent: '#22c55e', // Verde-limão - altere conforme necessário
}
```

### Produtos

Os produtos estão em `lib/products.ts`. Para adicionar novos produtos:

```ts
export const products = [
  {
    id: 'novo-produto',
    name: 'Novo Produto',
    price: 199.90,
    // ... outras propriedades
  },
];
```

### Redes Sociais

Atualize os links em `app/components/Footer.tsx` com seus perfis reais.

## 🌐 Publicação na Vercel

### Opção 1: Via GitHub

1. Faça push do repositório para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "Add New... > Project"
4. Selecione o repositório
5. Clique em "Deploy"

### Opção 2: Via CLI

```bash
# Instale o CLI da Vercel
npm i -g vercel

# Deploy
vercel
```

## 📱 Rotas Disponíveis

- `/` - Página inicial
- `/lancamentos` - Lançamentos
- `/colecoes` - Coleções
- `/masculino` - Produtos masculinos
- `/feminino` - Produtos femininos
- `/produto/[slug]` - Página de produto individual
- `/carrinho` - Carrinho de compras
- `/sobre` - Sobre a marca
- `/contato` - Contato
- `/guia-de-tamanhos` - Guia de tamanhos
- `/trocas-e-devolucoes` - Política de trocas
- `/politica-de-privacidade` - Política de privacidade

## 🔧 Funcionalidades Principais

### Carrinho de Compras

- Adicionar/remover produtos
- Ajustar quantidades
- Seleção obrigatória de tamanho
- Persistência no localStorage
- Sidebar flutuante

### Busca e Filtros

- Busca por nome de produto
- Filtro por categoria
- Filtro por tamanho
- Filtro por cor
- Filtro por faixa de preço

### Sistema de Favoritos

- Salvar favoritos no navegador
- Visualizar produtos favoritos
- Sincronizar com conta (pronto para backend)

### Responsividade

- Mobile-first approach
- Menu hambúrguer funcional
- Imagens otimizadas
- Toque otimizado

## 🔍 SEO

- Metadata dinâmica em cada página
- Open Graph configurado
- Schema.org estruturado
- Sitemap gerado automaticamente
- Robots.txt configurado
- URLs amigáveis

## 📊 Performance

- Imagens otimizadas com next/image
- Code splitting automático
- Lazy loading de componentes
- CSS purificado
- Compressão de assets

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT.

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório ou entre em contato via WhatsApp.

---

**Desenvolvido com ❤️ para a STREET WAVE**
