# First Response Tree Service Website

A modern, professional website for tree service businesses built with Next.js, TypeScript, and Tailwind CSS. Features beautiful animations, mobile-first design, and a firefighter-inspired red and black color scheme.

## Features

### Modern Design
- **Stunning hero section** with background video/image and smooth animations
- **Mobile-first responsive design** that looks great on all devices
- **Professional color scheme** with firefighter red, black, and amber accents
- **Smooth scroll animations** using Framer Motion
- **Beautiful UI components** with hover effects and transitions

### Fully Responsive
- Mobile-first design approach
- Optimized for phones, tablets, and desktops
- Touch-friendly navigation and interactions
- Fast loading and smooth performance

### Performance
- **Static site generation** for lightning-fast loading
- **Unoptimized images** (required for GitHub Pages static export)
- **SEO-friendly** with proper meta tags

### Business Features
- **Contact form** with validation (powered by Formspree)
- **Service showcase** with detailed descriptions
- **Image gallery** with filtering and full-screen viewer
- **Instagram feed** integration
- **Call-to-action buttons** throughout the site
- **Emergency contact** prominently displayed
- **Privacy policy** page

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd firstresponse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Formspree**
   - Sign up at [Formspree](https://formspree.io) and create a new form.
   - Copy your form endpoint and create a `.env.local` file:
     ```bash
     echo "NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormID" > .env.local
     ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **View the website**
   - Main site: http://localhost:3000

## Customization

### Colors and Branding

The website uses a firefighter-inspired red and black color scheme. To customize, update the CSS variables in `src/app/globals.css`:

```css
:root {
  --firefighter-red: #ff2028;
  --firefighter-red-dark: #dc1c22;
  --firefighter-black: #0f0f0f;
  --firefighter-black-light: #1a1a1a;
  --emergency-yellow: #fbbf24;
  --emergency-amber: #f59e0b;
}
```

Theme colors are also configurable in `src/data/content.json` under the `theme` key:
```json
"theme": {
  "primaryColor": "#dc2626",
  "secondaryColor": "#1f2937",
  "accentColor": "#fbbf24"
}
```

### Images
Replace placeholder images with your actual photos:
- Hero background image
- Gallery images
- Service photos

### Content
Edit `src/data/content.json` directly to update company info, services, gallery data, and more.

## Deployment

### Build for Production
```bash
npm run build
```

This creates a static export in the `out/` folder.

### GitHub Pages (Configured)

This repository is configured to deploy automatically to GitHub Pages via GitHub Actions. On every push to `main`, the workflow in `.github/workflows/nextjs.yml` will:

1. Build the Next.js static export
2. Deploy the `out/` folder to GitHub Pages

No additional setup is required beyond enabling GitHub Pages in repository settings.

### Other Static Hosts

The `out/` folder can also be deployed to any static hosting provider (Cloudflare Pages, Netlify, Vercel, traditional web hosting, etc.).

## Technical Details

### Built With
- **Next.js 15** - React framework with static export
- **React 19** - UI library
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Icons
- **@formspree/react** - Contact form handling

### Project Structure
```
src/
├── app/                        # Next.js app router
│   ├── (main)/                 # Main site route group
│   │   └── page.tsx            # Homepage
│   ├── (standalone)/           # Standalone pages route group
│   │   └── privacy_policy/     # Privacy policy page
│   ├── globals.css             # Global styles and CSS variables
│   └── layout.tsx              # Root layout
├── components/                 # React components
│   ├── Navigation.tsx          # Header navigation
│   ├── Hero.tsx                # Hero section
│   ├── Services.tsx            # Services section
│   ├── Gallery.tsx             # Image gallery with viewer
│   ├── ImageViewer.tsx         # Full-screen image viewer
│   ├── Instagram.tsx           # Instagram feed
│   ├── Contact.tsx             # Contact form
│   └── Footer.tsx              # Footer
├── contexts/                   # React contexts
│   └── ImageViewerContext.tsx  # Image viewer state
├── data/                       # Content data
│   ├── content.json            # All website content and theme
│   └── imageGallery.json       # Gallery image data
└── lib/                        # Utility functions
    ├── content.ts              # Content management utilities
    ├── instagram.ts            # Instagram integration
    └── utils.ts                # General utilities
```

## SEO Features

- **Semantic HTML** structure
- **Meta tags** for social sharing
- **Fast loading** for better search rankings
- **Mobile-friendly** design
- **Accessible** components with proper ARIA labels

## Security Features

- **No backend** - static site is inherently secure
- **Form validation** on client and server side
- **No sensitive data** stored in the codebase
- **HTTPS** support with modern hosting providers

---

**Built for professional tree service businesses**
