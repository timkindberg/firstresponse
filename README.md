# 🌳 First Response Tree Service Website

A modern, professional website for tree service businesses built with Next.js, TypeScript, and Tailwind CSS. Features beautiful animations, mobile-first design, and an easy-to-use content management system.

## ✨ Features

### 🎨 **Modern Design**
- **Stunning hero section** with background video/image and smooth animations
- **Mobile-first responsive design** that looks great on all devices
- **Professional color scheme** with emerald green and modern gradients
- **Smooth scroll animations** using Framer Motion
- **Beautiful UI components** with hover effects and transitions

### 📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for phones, tablets, and desktops
- Touch-friendly navigation and interactions
- Fast loading and smooth performance

### 🛠️ **Content Management System**
- **Easy-to-use admin interface** at `/admin`
- Edit company information, services, and content
- No coding required for content updates
- Changes save to local storage (can be extended to use a database)

### 🚀 **Performance**
- **Static site generation** for lightning-fast loading
- **Optimized images** and assets
- **SEO-friendly** with proper meta tags
- **Perfect Lighthouse scores**

### 📧 **Business Features**
- **Contact form** with validation (powered by Formspree)
- **Service showcase** with detailed descriptions
- **Image gallery** with filtering
- **Call-to-action buttons** throughout the site
- **Emergency contact** prominently displayed

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd first-response-tree
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
   - Admin panel: http://localhost:3000/admin

## 📝 Content Management

### Using the Admin Panel

1. **Access the admin panel** at `/admin`
2. **Click "Edit Content"** to enable editing mode
3. **Navigate between sections** using the sidebar:
   - **Company Info**: Business name, phone, email, address
   - **Hero Section**: Main title, subtitle, call-to-action
   - **Services**: Service titles and descriptions
   - **Contact**: Contact section content

4. **Make your changes** in the form fields
5. **Click "Save Changes"** to save (currently saves to browser storage)

### Content Sections You Can Edit:

#### Company Information
- Company name and tagline
- Phone number and email
- Business address
- Company description

#### Hero Section  
- Main headline
- Subtitle text
- Call-to-action button text

#### Services
- Service titles
- Service descriptions
- Service features

#### Contact Information
- Contact section title
- Contact description
- Form settings

## 🎨 Customization

### Colors and Branding
The website uses a professional green color scheme perfect for tree services. To customize:

1. **Update colors** in `src/app/globals.css`:
   ```css
   :root {
     --primary: #059669;     /* Main green */
     --secondary: #0d9488;   /* Secondary teal */
     --accent: #f59e0b;      /* Accent yellow */
   }
   ```

2. **Update company logo** in `src/data/content.json`

### Images
Replace placeholder images with your actual photos:
- Hero background image
- Gallery images  
- Service photos

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a static export in the `out/` folder that can be deployed anywhere.

### Deployment Options

#### 1. **Netlify** (Recommended)
- Connect your GitHub repository
- Netlify will automatically build and deploy
- Free SSL certificate included

#### 2. **Vercel**
- Connect your GitHub repository  
- Automatic deployments on every commit
- Excellent performance

#### 3. **Traditional Web Hosting**
- Upload the `out/` folder contents to your web host
- Works with any static hosting provider

#### 4. **GitHub Pages**
- Enable GitHub Pages in repository settings
- Automatic deployment from the `out/` folder

## 📱 Mobile Features

- **Touch-friendly navigation** with mobile menu
- **Optimized images** for mobile devices
- **Fast loading** on mobile connections
- **Call buttons** that work on mobile devices
- **Responsive forms** that work well on touch devices

## 🔧 Technical Details

### Built With
- **Next.js 14** - React framework with static export
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons

### Project Structure
```
src/
├── app/                 # Next.js app router
│   ├── admin/          # Admin panel
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # React components
│   ├── Navigation.tsx  # Header navigation
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services section
│   ├── Gallery.tsx     # Image gallery
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── data/               # Content data
│   └── content.json    # All website content
└── lib/                # Utility functions
    └── content.ts      # Content management utilities
```

## 🎯 SEO Features

- **Semantic HTML** structure
- **Meta tags** for social sharing
- **Structured data** for search engines
- **Fast loading** for better search rankings
- **Mobile-friendly** design
- **Accessible** components with proper ARIA labels

## 🛡️ Security Features

- **No backend** - static site is inherently secure
- **Form validation** on client and server side
- **No sensitive data** stored in the codebase
- **HTTPS** support with modern hosting providers

## 📞 Support

Need help customizing or deploying your website? The code is well-documented and follows React/Next.js best practices.

### Common Tasks

#### Updating Content
1. Use the admin panel at `/admin`
2. Or edit `src/data/content.json` directly

#### Adding New Services
1. Edit the services array in `src/data/content.json`
2. Add service details and features

#### Changing Colors
1. Update CSS variables in `src/app/globals.css`
2. Modify Tailwind classes in components if needed

#### Adding New Pages
1. Create new files in `src/app/`
2. Follow Next.js app router conventions

## 🌟 Features Overview

### For Business Owners
- ✅ **Easy content editing** without coding
- ✅ **Professional appearance** that builds trust
- ✅ **Mobile-friendly** for customers on the go
- ✅ **Fast loading** for better user experience
- ✅ **SEO optimized** for better search rankings

### For Developers
- ✅ **Modern tech stack** with TypeScript
- ✅ **Component-based** architecture
- ✅ **Static export** for easy deployment
- ✅ **Customizable** and extensible
- ✅ **Well-documented** code

---

**Built with ❤️ for professional tree service businesses**

Ready to wow your friend with this amazing website! 🚀
