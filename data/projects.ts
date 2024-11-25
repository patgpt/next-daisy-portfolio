export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  image: {
    url: string;
    blur?: string;
  };
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  status: "in-progress" | "completed" | "planned";
  startDate: string;
  completionDate?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Therapeutic Services App",
    slug: "therapeutic-services",
    description:
      "A modern platform connecting therapists with clients, featuring real-time scheduling and secure messaging.",
    longDescription:
      "Built with Next.js 14, featuring real-time communication, integrated payment processing, and HIPAA-compliant data handling...",
    image: {
      url: "/pfp.webp",
      blur: "data:image/jpeg;base64,/9j/4AAQSkZJRg...", // Add actual blur data
    },
    demoUrl: "https://therapy.example.com",
    githubUrl: "https://github.com/yourusername/therapy-app",
    tags: ["Next.js", "TypeScript", "Prisma", "TailwindCSS", "WebRTC"],
    status: "in-progress",
    startDate: "2024-01-01",
  },
  {
    id: "2",
    title: "Developer Portfolio",
    slug: "dev-portfolio",
    description:
      "A personal portfolio showcasing projects and blog posts with modern design patterns.",
    longDescription:
      "Built using Next.js and DaisyUI, featuring dynamic routing, MDX blog posts, and animated interactions...",
    image: {
      url: "/pfp.webp",
      blur: "data:image/jpeg;base64,/9j/4AAQSkZJRg...", // Add actual blur data
    },
    githubUrl: "https://github.com/yourusername/portfolio",
    tags: ["Next.js", "DaisyUI", "Framer Motion", "TypeScript"],
    status: "completed",
    startDate: "2023-12-15",
    completionDate: "2024-01-15",
  },
  {
    id: "3",
    title: "Generative Art Gallery",
    slug: "gen-art-gallery",
    description:
      "An interactive gallery showcasing algorithmic and AI-generated artwork.",
    image: {
      url: "/pfp.webp",
      blur: "data:image/jpeg;base64,/9j/4AAQSkZJRg...", // Add actual blur data
    },
    tags: ["Three.js", "React", "WebGL", "AI"],
    status: "planned",
    startDate: "2024-02-01",
  },
];

export default projects;
