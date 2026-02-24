# GMX Digital

Portfólio/site institucional moderno e imersivo para a **GMX Digital** — uma agência boutique especializada em criar experiências digitais de alto impacto.

## ✨ Sobre o Projeto

Site construído com inspiração no estilo de sites premiados no **Awwwards** e no [Active Theory](https://activetheory.net/). Design dark premium com animações fluidas e layout editorial.

## 🛠 Stack Tecnológica

- **Next.js 14+** (App Router) com **TypeScript**
- **Tailwind CSS** para estilização
- **GSAP** (GreenSock Animation Platform) para animações
- **GSAP ScrollTrigger** para animações baseadas no scroll
- **Lenis** para smooth scroll

## 🎨 Design

### Paleta de Cores
- Background: `#0a0a0a` / `#111111`
- Texto: `#f5f5f5` / `#888888`
- Accent: gradiente `#6366f1` → `#8b5cf6`

### Tipografia
- **Space Grotesk** — títulos e display
- **Inter** — corpo de texto

## 📁 Estrutura do Projeto

```
gmxdigital/
├── app/
│   ├── layout.tsx         # Layout raiz com metadados SEO
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globais
├── components/
│   ├── Preloader.tsx      # Tela de loading animada
│   ├── Navbar.tsx         # Navbar fixa com menu fullscreen
│   ├── Hero.tsx           # Seção hero fullscreen
│   ├── About.tsx          # Seção sobre com estatísticas
│   ├── Projects.tsx       # Grid de projetos
│   ├── Services.tsx       # Lista de serviços
│   ├── Marquee.tsx        # Ticker infinito
│   ├── Contact.tsx        # Seção de contato
│   ├── Footer.tsx         # Rodapé minimalista
│   ├── CustomCursor.tsx   # Cursor personalizado
│   └── SmoothScroll.tsx   # Wrapper do Lenis
├── hooks/
│   └── useGsap.ts         # Hook para animações GSAP
├── lib/
│   └── animations.ts      # Utilitários de animação
├── public/
│   └── images/            # Imagens dos projetos
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🚀 Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no browser.

## 📦 Deploy na Vercel

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. Configure as variáveis de ambiente (se necessário)
4. Clique em **Deploy**

Ou use a Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 🔗 Seções do Site

| Seção | Descrição |
|-------|-----------|
| Preloader | Animação de loading com contador |
| Hero | Tela cheia com título animado |
| About | Apresentação + estatísticas |
| Projects | Grid de trabalhos com hover effects |
| Services | Lista editorial de serviços |
| Marquee | Ticker infinito animado |
| Contact | Email + redes sociais |
| Footer | Rodapé minimalista |

## 🎯 Funcionalidades

- ✅ Cursor personalizado (dot + outline com delay)
- ✅ Smooth scroll com Lenis
- ✅ Animações com GSAP + ScrollTrigger
- ✅ Preloader com contador de porcentagem
- ✅ Navbar com hide/show no scroll
- ✅ Menu fullscreen animado
- ✅ Text reveal animado no Hero
- ✅ Stats animadas no About
- ✅ Project grid com hover effects
- ✅ Services list com animações stagger
- ✅ Marquee ticker infinito
- ✅ SEO completo com Open Graph
- ✅ Fontes Google (Space Grotesk + Inter)
- ✅ Design responsivo (mobile, tablet, desktop)

## 💡 Inspiração

- [Active Theory](https://activetheory.net/) — Inspiração principal
- [Awwwards](https://www.awwwards.com/) — Referência de qualidade
- Design dark premium com animações fluidas e tipografia bold

## 📝 Licença

© 2024 GMX Digital. Todos os direitos reservados.
