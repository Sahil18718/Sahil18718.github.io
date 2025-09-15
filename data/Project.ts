export const techFilters = ["All", "React Native", "Expo", "React.js", "Next.js", "Node.js", "Nx Monorepo"];

export const projects = [
  {
    title: "Bettrlabs Platform",
    description:
      "A next-generation health and wellness platform featuring a custom CMS, AI-powered insights, and top-tier SEO scores. Built with performance, scalability, and modularity in mind.",
    type: "Web Application",
    company: "Bettrlabs Pvt Ltd",
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "Storybook",
      "Tailwind CSS",
      "CI/CD",
      "Cloudflare",
      "AWS"
    ],
    live: "https://app.bettrlabs.com/",
    highlights: [
      "Migrated frontend from React.js to Next.js for enhanced performance, SEO, and maintainability",
      "Separated admin and user panels for clearer structure and better role management",
      "Implemented component-based architecture with isolated reusable modules",
      "Integrated Redux for robust state management across the platform",
      "Achieved perfect scores (100) on Google Lighthouse for performance, SEO, and best practices",
      "Set up CI/CD pipelines with Cloudflare for smooth, automated deployments",
      "Used Storybook for scalable and modular UI component development"
    ]
  },
  {
    title: "Chat Lynk",
    description:
      "A real-time chat application with instant messaging, notifications, and efficient state management. Fully integrated with Redux and WebSocket for seamless, live communication across devices.",
    type: "Mobile Application",
    company: "Buzzart Software",
    techStack: [
      "React Native",
      "WebSocket",
      "Redux",
      "TypeScript",
      "Firebase",
      "Tailwind CSS"
    ],
    live: "https://play.google.com/store/apps/details?id=com.lucky_chat&hl=en",
    highlights: [
      "Entire chat module implemented using Redux for centralized and predictable state management",
      "Upgraded to latest React Native version for improved performance and stability",
      "Significant performance improvement compared to previous builds with faster navigation and responsiveness",
      "Built additional screens and features to enhance user experience and engagement",
      "Reduced app load time by 40% through optimized caching strategies",
      "Real-time messaging and notifications powered by WebSocket",
      "Efficiently handling 50K+ users with scalable Redux setup"
    ]
  },
  {
    title: "Samaj App",
    description:
      "A full-featured matrimonial mobile application designed and developed from scratch. Built for a diverse user base with real-time features, secure authentication, media management, and in-app payments.",
    type: "Mobile Application",
    company: "Buzzart Software",
    techStack: [
      "React Native",
      "Firebase",
      "Redux",
      "Razorpay",
      "Cloudinary",
      "TypeScript"
    ],
    live: "https://play.google.com/store/apps/details?id=com.diversoshaadiapp",
    highlights: [
      "Designed and developed the entire application architecture and UI/UX from scratch",
      "Published the app on the Google Play Store for public use",
      "Integrated Redux for scalable state management across the app",
      "Implemented Firebase for authentication, real-time database, and login functionality",
      "Used JWT for secure user authentication",
      "Optimized performance with Redis caching for frequently accessed data"
    ]
  },
  {
    title: "Samaj App Services",
    description:
      "The backend system for a matrimonial mobile application, built from scratch to support real-time features, secure authentication, payments, media handling, and push notifications. Designed with scalability, performance, and security in mind.",
    type: "Mobile Application (Backend)",
    company: "Buzzart Software",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "AWS",
      "Redis",
      "Cloudinary",
      "Firebase",
      "CI/CD"
    ],
    highlights: [
      "Designed and developed the entire backend architecture using Node.js and Express.js",
      "Created RESTful APIs for authentication, user management, matchmaking, chat, and media services",
      "Designed and optimized MongoDB schema to support complex queries and user relationships",
      "Implemented MongoDB aggregation pipelines for advanced user filtering and matching logic",
      "Integrated Razorpay for secure and seamless in-app payments",
      "Used Cloudinary for efficient media upload, storage, and delivery",
      "Applied Redis for high-speed caching to boost response time and reduce DB load",
      "Integrated Firebase Cloud Messaging (FCM) to trigger real-time push notifications for key events",
      "Set up CI/CD pipelines for automated testing and deployment to AWS"
    ]
  },
  {
    title: "Diverso Web",
    description:
      "Developed marketing and companion websites for both the Samaj App and Diverso. Focused on performance, SEO optimization, and modern UI/UX to drive user acquisition and improve brand visibility.",
    type: "Web Application",
    company: "Buzzart Software",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "CI/CD"],
    live: "https://diverso.in/",
    highlights: [
      "Built and deployed fast, responsive websites using Next.js and TypeScript",
      "Achieved a 50% improvement in page load speed by optimizing image delivery and code splitting",
      "Boosted lead conversions by 20% through better structure, CTA placement, and mobile-first design",
      "Fully optimized for SEO using server-side rendering and semantic HTML",
      "Designed clean, minimal UI aligned with branding for better user retention"
    ]
  },
  {
    title: "COE",
    description:
      "Built a modular and scalable Nx monorepo setup managing multiple applications, including web apps using Next.js and mobile apps using Expo. Focused on cross-platform integration, performance optimization, and real-device hardware interaction.",
    type: "Web & Mobile Application",
    techStack: [
      "Next.js",
      "Expo",
      "React Native",
      "TypeScript",
      "Nx Monorepo",
      "Bluetooth",
      "WiFi",
      "Camera"
    ],
    highlights: [
      "Set up and managed an Nx monorepo to streamline development across multiple apps",
      "Developed both Next.js web apps and Expo-based mobile apps under a unified codebase",
      "Connected real devices via Bluetooth and WiFi for hardware-level integrations",
      "Implemented live photo capture feature using mobile camera APIs",
      "Optimized code structure and shared logic across platforms for maintainability and scalability",
      "Achieved 50% improvement in web app load speed and 20% increase in lead conversions",
      "Optimized all web apps for SEO and performance using server-side rendering"
    ]
  }
]