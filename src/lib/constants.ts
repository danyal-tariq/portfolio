export const siteConfig = {
  name: "Danyal Tariq",
  title: "Software Engineer",
  description:
    "Full-stack software engineer with 5+ years of experience in React/Next.js, Node.js, cloud-native architecture, and high-performance C# systems. Currently building scalable enterprise solutions at Phoenix Group, Dubai.",
  url: "https://danyaltariq.vercel.app",
  email: "danialtariq43@gmail.com",
  github: "https://github.com/danyal-tariq",
  linkedin: "https://linkedin.com/in/danyaltariq43",
  location: "Dubai, UAE",
  company: "Phoenix Group",
  experienceYears: 5,
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "System Architect",
    "Cloud Engineer",
  ],
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const skills = {
  Frontend: [
    { name: "React", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "HTML5", icon: "SiHtml5" },
    { name: "CSS3", icon: "SiCss3" },
    { name: "Sass", icon: "SiSass" },
  ],
  Backend: [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express", icon: "SiExpress" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "Supabase", icon: "SiSupabase" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "MySQL", icon: "SiMysql" },
    { name: "Redis", icon: "SiRedis" },
    { name: "Prisma", icon: "SiPrisma" },
  ],
  "Cloud & DevOps": [
    { name: "Docker", icon: "SiDocker" },
    { name: "Kubernetes", icon: "SiKubernetes" },
    { name: "AWS", icon: "SiAmazonwebservices" },
    { name: "Azure", icon: "TbBrandAzure" },
    { name: "Git", icon: "SiGit" },
    { name: "GitLab CI", icon: "SiGitlab" },
  ],
  Languages: [
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Python", icon: "SiPython" },
    { name: "C#", icon: "TbBrandCSharp" },
  ],
};

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live?: string;
  featured: boolean;
  metrics?: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    title: "LogiTrack",
    description:
      "Production-grade event-driven fleet tracking system supporting 1,000+ req/s",
    longDescription:
      "A real-time fleet management platform featuring GPS tracking for 500+ vehicles, interactive Leaflet maps with geofencing, fleet analytics, write-behind caching with Redis + BullMQ (3.15x throughput improvement), database partitioning, and WebSocket live updates with sub-100ms latency.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "PostGIS",
      "Redis",
      "BullMQ",
      "Socket.io",
      "Docker",
      "Leaflet",
    ],
    github: "https://github.com/danyal-tariq/LogiTrack",
    featured: true,
    metrics: [
      "3,550 req/s throughput",
      "371ms P95 latency",
      "500+ vehicle simulation",
      "3.15x throughput improvement",
    ],
  },
  {
    title: "TaskFlow",
    description:
      "Keyboard-centric issue tracker with optimistic UI, blazing fast interactions",
    longDescription:
      "A modern project management tool featuring a command palette (Cmd+K), global issue creation with keyboard shortcut 'C', optimistic updates via TanStack Query + Zustand, inline editing, and real-time toast notifications. Built with Supabase for Postgres + Auth + Row Level Security.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
    ],
    github: "https://github.com/danyal-tariq/TaskFlow",
    featured: true,
    metrics: [
      "Optimistic UI updates",
      "Command palette (⌘K)",
      "Row Level Security",
      "Keyboard-first UX",
    ],
  },
  {
    title: "MeetUpSync",
    description:
      "Real-time video/voice calls and screen sharing web application",
    longDescription:
      "A modern video communication platform supporting real-time video/voice calls, screen sharing, and team collaboration. Built with WebRTC for peer-to-peer connections and Next.js for the frontend, delivering low-latency multimedia experiences.",
    tech: ["Next.js", "TypeScript", "WebRTC", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/danyal-tariq/MeetUpSync",
    featured: true,
    metrics: [
      "Peer-to-peer WebRTC",
      "Screen sharing",
      "Real-time voice/video",
      "Low-latency streaming",
    ],
  },
  {
    title: "Authentication System",
    description:
      "Complete auth system with signup, login, 2FA, password reset, and role-based access",
    longDescription:
      "A full-featured authentication system with JWT-based auth, two-factor authentication, email verification for password resets, role-based authorization, Swagger API documentation, Jest testing, CI/CD with Travis CI, and Docker deployment. Includes security best practices with Helmet, XSS protection, and MongoDB sanitization.",
    tech: [
      "Next.js",
      "Express",
      "MongoDB",
      "JWT",
      "Passport",
      "Docker",
      "Jest",
      "Swagger",
    ],
    github: "https://github.com/danyal-tariq/Authentication-System",
    featured: true,
    metrics: [
      "Two-factor auth",
      "Role-based access",
      "CI/CD pipeline",
      "Swagger docs",
    ],
  },
  {
    title: "Poison Disc Sampling",
    description:
      "Visual implementation of Poisson Disc Sampling for procedural tree generation in Unity",
    longDescription:
      "A visual algorithm implementation for generating evenly-distributed point patterns used in procedural content generation, specifically for realistic tree placement in game environments.",
    tech: ["Unity", "C#", "Algorithms", "Procedural Generation"],
    github: "https://github.com/danyal-tariq/Poison-Disc-Sampling",
    featured: false,
  },
  {
    title: "Gravity Simulation",
    description: "Newton's Law of Gravity visualization",
    longDescription:
      "An interactive physics simulation visualizing gravitational forces between celestial bodies using Newton's Law of Universal Gravitation.",
    tech: ["Unity", "C#", "Physics Simulation"],
    github: "https://github.com/danyal-tariq/Gravity-Simulation",
    featured: false,
  },
  {
    title: "Blog Application",
    description: "Full-stack blog app with CRUD operations",
    longDescription:
      "A complete blog application supporting viewing, creating, and updating blog posts with a modern TypeScript stack.",
    tech: ["TypeScript", "React", "Node.js"],
    github: "https://github.com/danyal-tariq/Blog-Application",
    featured: false,
  }
];

export const experience = [
  {
    title: "Software Engineer",
    company: "Phoenix Group",
    location: "Dubai, UAE",
    period: "Jan 2024 — Present",
    description:
      "Built SSR applications with Next.js & TypeScript. Designed a full-stack HR portal replacing third-party SaaS (80%+ cost reduction). Developed internal automation tools saving 15+ hrs/week. Migrated monolithic services to Docker on Azure (50% infra cost reduction). Improved API response times by 35% through DB and API optimization. Designed low-latency distributed backend with 99.9% uptime.",
    tech: ["Next.js", "TypeScript", "Node.js", "Docker", "Azure", "PostgreSQL", "Microservices"],
  },
  {
    title: "Software Engineer",
    company: "Stax 3",
    location: "Remote",
    period: "Oct 2022 — Dec 2023",
    description:
      "Developed C# (Unity) client architecture for Web3 products. Integrated C# client with backend microservices via REST APIs. Optimized memory and performance achieving 80% build size reduction. Implemented structured bug tracking reducing recurring issues by 30%.",
    tech: ["C#", "Unity", "REST APIs", "Microservices", "Web3"],
  },
  {
    title: "Software Engineer",
    company: "Funsol Technologies",
    location: "Lahore, PK",
    period: "Feb 2022 — Dec 2022",
    description:
      "Led full mobile app lifecycle in C#. Reduced development cycle by 40% through process improvements. Improved application performance and user retention metrics.",
    tech: ["C#", "Unity", "Mobile Development", "Performance Optimization"],
  },
  {
    title: "Software Engineer",
    company: "Spartans Global",
    location: "Islamabad, PK",
    period: "Nov 2020 — Jan 2022",
    description:
      "Built real-time client-server systems in C# handling high-concurrency workloads. Reduced CPU usage by 25% through targeted performance optimizations.",
    tech: ["C#", "Real-time Systems", "Client-Server Architecture"],
  },
];

export const education = {
  degree: "Bachelors in Computer Science",
  institution: "Bahria University",
  period: "2016 — 2020",
  focus: "Software Engineering, Data Structures, Algorithms, Artificial Intelligence",
};
