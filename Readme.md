# 🚀 Sahil Malviya - Portfolio Website

A modern, responsive portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features a clean design with dark/light theme support, mobile-first responsive design, and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional layout with pink accent colors
- Smooth animations and micro-interactions
- Glass morphism effects with backdrop blur
- Responsive typography scaling

### 🌙 **Theme System**
- **System Theme Detection**: Automatically detects your device preference
- **Manual Override**: Toggle between light and dark modes
- **Persistent Storage**: Remembers your theme choice
- **Smooth Transitions**: Beautiful color transitions between themes

### 📱 **Mobile-First Responsive**
- **Breakpoint Optimization**: Perfect on all screen sizes
- **Touch-Friendly**: Large touch targets and smooth interactions
- **Mobile Navigation**: Professional slide-out menu with backdrop blur
- **Optimized Performance**: 60fps animations and smooth scrolling

### 🎯 **Sections**
- **Hero Section**: Eye-catching introduction with call-to-action
- **About**: Professional summary with downloadable resume
- **Experience**: Detailed work history with technologies
- **Projects**: Featured projects with live demos and source code
- **Skills**: Categorized technical skills with icons
- **GitHub Stats**: Dynamic GitHub activity visualization
- **Contact**: Multiple contact methods with social links

### ⚡ **Performance**
- **Next.js 14**: Latest App Router with Server Components
- **TypeScript**: Full type safety and better DX
- **Optimized Images**: Next.js Image component with lazy loading
- **SEO Optimized**: Meta tags, structured data, and accessibility
- **Fast Loading**: Optimized bundle size and code splitting

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono

### **Development**
- **Package Manager**: npm/yarn
- **Linting**: ESLint
- **Formatting**: Prettier (implicit)
- **Version Control**: Git

### **Deployment**
- **Platform**: Vercel (recommended)
- **Domain**: Custom domain support
- **Analytics**: Built-in Vercel Analytics

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **Installation**

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/Sahil18718/portfolio.git
cd portfolio
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. **Start development server**
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. **Open in browser**
\`\`\`
http://localhost:3000
\`\`\`

## 📁 Project Structure

\`\`\`
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── ClientMobileMenu.tsx # Mobile navigation menu
│   ├── ClientThemeProvider.tsx # Theme context provider
│   ├── ClientThemeToggle.tsx # Theme toggle button
│   ├── Contact.tsx        # Contact section
│   ├── Experience.tsx     # Work experience section
│   ├── GitHubStats.tsx    # GitHub statistics
│   ├── Header.tsx         # Navigation header
│   ├── HomeSection.tsx    # Hero/landing section
│   ├── LeftSection.tsx    # Left sidebar (desktop)
│   ├── Projects.tsx       # Projects showcase
│   ├── RightSection.tsx   # Right sidebar (desktop)
│   └── Skills.tsx         # Technical skills
├── data/                  # Static data and content
│   ├── About.ts           # About section data
│   ├── Contact.ts         # Contact information
│   ├── Experience.ts      # Work experience data
│   ├── HomeSectionData.ts # Hero section content
│   ├── Project.ts         # Projects data
│   ├── TechStacks.ts      # Technology stack icons
│   └── ToolsAndLibraries.ts # Development tools
├── lib/                   # Utility functions
│   └── theme-script.ts    # Theme initialization script
├── public/                # Static assets
│   ├── logo-main.svg      # Main logo
│   ├── logo-b.svg         # Alternative logo
│   └── profile.jpg        # Profile image
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
\`\`\`

## 🎨 Customization

### **Personal Information**
Update your personal details in the `data/` directory:

\`\`\`typescript
// data/HomeSectionData.ts
export const homeSectionData = {
  intro: "Hi, my name is",
  name: "YOUR NAME",
  title: "Your Title",
  description: "Your description...",
  // ...
}
\`\`\`

### **Theme Colors**
Modify the color scheme in `app/globals.css`:

\`\`\`css
:root {
  --primary: #e91e63;        /* Pink accent */
  --background: #fafafa;     /* Light background */
  /* ... */
}

.dark {
  --primary: #f472b6;        /* Pink accent (dark) */
  --background: #0a0a0a;     /* Dark background */
  /* ... */
}
\`\`\`

### **Projects**
Add your projects in `data/Project.ts`:

\`\`\`typescript
export const projects = [
  {
    title: "Your Project",
    description: "Project description...",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/repo",
    live: "https://your-project.com",
    // ...
  }
]
\`\`\`

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: `< 640px` - Optimized for phones
- **Tablet**: `640px - 1024px` - Perfect for tablets  
- **Desktop**: `> 1024px` - Full desktop experience

### **Mobile Features**
- Slide-out navigation menu
- Touch-optimized interactions
- Responsive typography
- Optimized image loading
- Smooth scroll behavior

## 🌙 Theme System

### **Theme Detection**
\`\`\`typescript
// Automatically detects system preference
const getSystemTheme = (): Theme => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches 
    ? "dark" : "light"
}
\`\`\`

### **Theme Persistence**
\`\`\`typescript
// Saves user preference
localStorage.setItem("theme", theme)
\`\`\`

## 🚀 Deployment

### **Vercel (Recommended)**

1. **Connect to Vercel**
\`\`\`bash
npm i -g vercel
vercel
\`\`\`

2. **Configure Domain** (Optional)
- Add custom domain in Vercel dashboard
- Update DNS settings

### **Other Platforms**

**Netlify**
\`\`\`bash
npm run build
# Deploy dist folder
\`\`\`

**GitHub Pages**
\`\`\`bash
npm run build
npm run export
# Deploy out folder
\`\`\`

## 📊 Performance

### **Lighthouse Scores**
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### **Optimizations**
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Minimal bundle size
- Efficient CSS with Tailwind
- Server-side rendering

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**
\`\`\`bash
git checkout -b feature/amazing-feature
\`\`\`
3. **Commit changes**
\`\`\`bash
git commit -m 'Add amazing feature'
\`\`\`
4. **Push to branch**
\`\`\`bash
git push origin feature/amazing-feature
\`\`\`
5. **Open Pull Request**

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sahil Malviya**
- **Portfolio**: [sahilmalviya.dev](https://sahilmalviya.dev)
- **GitHub**: [@Sahil18718](https://github.com/Sahil18718)
- **LinkedIn**: [sahilmalviya18718](https://linkedin.com/in/sahilmalviya18718)
- **Email**: sm.sahilmalviya@gmail.com

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icons
- **GitHub** - For the stats API integration

## 📈 Stats

![GitHub Stars](https://img.shields.io/github/stars/Sahil18718/portfolio?style=social)
![GitHub Forks](https://img.shields.io/github/forks/Sahil18718/portfolio?style=social)
![GitHub Issues](https://img.shields.io/github/issues/Sahil18718/portfolio)
![GitHub License](https://img.shields.io/github/license/Sahil18718/portfolio)

---

⭐ **Star this repository if you found it helpful!**

**Built with ❤️ by Sahil Malviya**