# Clifton T. Canady - Personal Brand Website

A professional personal brand website showcasing expertise in WordPress development, content writing, speaking/seminars, and photography. Built with Astro and shadcn/ui following the StoryBrand messaging framework.

## About

Multi-disciplinary digital professional specializing in:
- **WordPress Development** - Custom sites, themes, plugins, e-commerce
- **Content Writing** - SEO content, copywriting, blog writing, technical writing  
- **Speaking & Seminars** - Keynotes, workshops, corporate training
- **Photography** - Corporate, events, headshots, product photography

**Contact**: +1 (864) 752-8017 | https://cliftoncanady.com/

## 🚀 Technology Stack

- **Frontend**: Astro (Static Site Generation)
- **UI Framework**: shadcn/ui with Tailwind CSS
- **Animation**: GSAP (GreenSock Animation Platform)
- **Navigation**: HeadroomJS for sticky navigation
- **Hosting**: Netlify
- **Code Repository**: GitHub

## 📁 Project Structure

```text
website/
├── src/
│   ├── components/
│   │   ├── ui/ (shadcn/ui components)
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro (Homepage)
│   │   └── resume.astro
│   ├── styles/
│   │   └── globals.css
│   ├── lib/
│   │   └── utils.ts
│   └── scripts/
│       ├── gsap-animations.js
│       └── headroom-init.js
├── public/
│   └── images/
├── components.json (shadcn/ui config)
├── astro.config.mjs
└── tailwind.config.mjs
```

## 🧞 Development Commands

### Initial Setup (if needed)
```bash
# Install dependencies
npm install

# Initialize shadcn/ui (if not already done)
npx shadcn-ui@latest init

# Add required shadcn/ui components
npx shadcn-ui@latest add button card sheet badge avatar accordion
```

### Development Workflow
| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npx astro check`         | Check for TypeScript errors                      |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🎨 Brand Guidelines

### Brand Colors
- **Primary Blue**: #1E40AF
- **Secondary Blue**: #3B82F6  
- **Light Blue**: #DBEAFE
- **Accent Orange**: #F59E0B
- **Dark Gray**: #374151
- **White**: #FFFFFF
- **Light Gray**: #F9FAFB

### Design Principles
- **StoryBrand Framework**: Position customer as hero, business as guide
- **Two-page approach**: Homepage (StoryBrand) + Resume (detailed professional info)
- **Mobile-first responsive design**
- **Performance optimization** (target: <2s load time, >95 Lighthouse score)

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [GSAP Documentation](https://greensock.com/docs)
