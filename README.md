# Veloce

Modern, self-hostable deployment platform built with Next.js and HeroUI.

---

## 👤 Maintainer(s)

| Name     | Role               | Focus                                  |
|----------|--------------------|----------------------------------------|
| Emily    | Full Stack         | Frontend, Backend, DevOps, Design      |


---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/veloceorg/LandingPage

# Install dependencies
bun install

# Setup environment variables
cp .env.example .env.local

# Start development server
bun run dev
```

## 🧱 Project Structure

### Core Components
- `/components` - UI Components
  - `animated-logo.tsx` - Animated brand logo with hover effects
  - `footer.tsx` - Global footer with Better Stack status integration
  - `navbar.tsx` - Main navigation with theme switching
  - `icons.tsx` - Shared icon components
  - `/ui` - Reusable UI elements
    - `background-paths.tsx` - Decorative background patterns
    - `floating-icons.tsx` - Animated floating elements

### Configuration
- `/config` - App Configuration
  - `site.ts` - Site metadata, navigation, and links
  - `fonts.ts` - Typography settings

### API & Integration
- `/lib` - Core Libraries
  - `betterstack.ts` - Better Stack status monitoring integration
- `/pages/api` - API Routes
  - `status.ts` - System status endpoint
  - `hello.ts` - Health check endpoint

### Pages & Layouts
- `/layouts` - Page Layouts
  - `default.tsx` - Main layout wrapper
  - `head.tsx` - SEO management
- `/pages` - Application Routes
  - `brand.tsx` - Brand guidelines
  - `terms.tsx` - Terms of service
  - `privacy.tsx` - Privacy policy

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [HeroUI v2](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [next-themes](https://github.com/pacocoursey/next-themes)

## 🔧 Environment Setup

Required environment variables:
```env
# Better Stack Integration
BETTER_STACK_API_KEY=your_api_key
BETTER_STACK_STATUS_PAGE_ID=your_status_page_id
```

### Using pnpm

If using pnpm, add to `.npmrc`:
```bash
public-hoist-pattern[]=*@heroui/*
```

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

Licensed under the [MIT license](LICENSE).

## 🤝 Support

- Documentation: [docs.veloce.dev](https://docs.veloce.sh)
- Discord: [Join our community](https://discord.gg/veloce)
- Twitter: [@veloce](https://twitter.com/veloce)
- GitHub: [veloceorg](https://github.com/veloceorg)

## 🛡 Repo Status

Public — WIP

---

<p align="center">
  Built with ❤️ by the Veloce team
</p>
