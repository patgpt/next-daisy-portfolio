export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  image: {
    url: string;
    blur?: string;
  };
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Building a Modern Portfolio with Next.js and DaisyUI",
    slug: "building-portfolio-nextjs-daisyui",
    date: "2024-01-15",
    excerpt:
      "A deep dive into creating a performant, accessible portfolio using Next.js 14, DaisyUI, and TailwindCSS.",
    content: `
      When I decided to rebuild my portfolio, I wanted to create something that wasn't just visually appealing, but also technically sound. Here's how I approached it using Next.js 14 and DaisyUI...

      ## Why Next.js?
      
      The decision to use Next.js was driven by several factors:
      - Server-side rendering capabilities
      - Built-in image optimization
      - Excellent developer experience
      
      ## Styling with DaisyUI
      
      DaisyUI provided a perfect balance between customization and pre-built components...
    `,
    tags: ["Next.js", "DaisyUI", "TailwindCSS", "Portfolio"],
    image: {
      url: "/pfp.webp",
      blur: "data:image/jpeg;base64,/9j/4AAQSkZJRg...", // You'll need actual blur data
    },
  },
  {
    id: "2",
    title: "Mastering TypeScript: Advanced Generic Patterns",
    slug: "typescript-advanced-generic-patterns",
    date: "2024-01-10",
    excerpt:
      "Exploring advanced TypeScript patterns to write more maintainable and type-safe code.",
    content: `
      TypeScript's generic system is powerful but often underutilized. Let's explore some advanced patterns...

      ## Generic Constraints

      Understanding how to constrain generics can lead to more precise type definitions:

      \`\`\`typescript
      interface HasLength {
        length: number;
      }

      function logLength<T extends HasLength>(arg: T): number {
        return arg.length;
      }
      \`\`\`
    `,
    tags: ["TypeScript", "Programming", "Web Development"],
    image: {
      url: "/pfp.webp",
    },
  },
  {
    id: "3",
    title: "State Management in 2024: Beyond Redux",
    slug: "state-management-2024",
    date: "2024-01-05",
    excerpt:
      "Exploring modern state management solutions and when to use them in React applications.",
    content: `
      The landscape of state management has evolved significantly. Let's explore modern solutions...

      ## The Rise of Simpler Solutions

      With hooks and context becoming more prevalent, many applications don't need complex state management...

      ## When to Use What

      - Local State: useState
      - Shared State: Context + useReducer
      - Server State: React Query / SWR
      - Complex State: Zustand / Jotai
    `,
    tags: ["React", "State Management", "JavaScript"],
    image: {
      url: "/pfp.webp",
    },
  },
  {
    id: "4",
    title: "Creating Smooth Staggered Animations with Framer Motion",
    slug: "staggered-animations-framer-motion",
    date: "2024-01-20",
    excerpt:
      "Learn how to implement eye-catching staggered animations using Framer Motion in React applications.",
    content: `
      Staggered animations can add a professional touch to your web applications. Here's how to implement them effectively...

      ## Understanding Stagger Effects

      Framer Motion provides powerful tools for creating staggered animations:

      \`\`\`tsx
      const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }
      \`\`\`

      ## Best Practices
      
      - Keep animations subtle and purposeful
      - Consider reduced motion preferences
      - Optimize for performance
    `,
    tags: ["Animation", "Framer Motion", "React", "UX"],
    image: {
      url: "/pfp.webp",
    },
  },
  {
    id: "5",
    title: "Designing Modern Bento Grid Layouts",
    slug: "bento-grid-layouts",
    date: "2024-01-25",
    excerpt:
      "Explore the trending Bento grid layout style and learn how to implement it using CSS Grid and Tailwind.",
    content: `
      Bento grids have become increasingly popular in modern web design. Let's explore how to create them...

      ## What is a Bento Grid?
      
      Inspired by Japanese lunch boxes, Bento grids create visual interest through asymmetrical layouts...

      ## Implementation
      
      \`\`\`css
      .bento-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
      }
      \`\`\`
    `,
    tags: ["CSS", "Design", "TailwindCSS", "Layout"],
    image: {
      url: "/pfp.webp",
    },
  },
  {
    id: "6",
    title: "Mastering the Next.js Image Component",
    slug: "nextjs-image-component",
    date: "2024-01-30",
    excerpt:
      "Deep dive into Next.js Image component features, optimization techniques, and best practices.",
    content: `
      The Next.js Image component is a powerful tool for optimizing web performance. Here's what you need to know...

      ## Key Features

      - Automatic image optimization
      - Lazy loading by default
      - Blur-up placeholders
      
      ## Implementation Tips

      \`\`\`tsx
      import Image from 'next/image'

      <Image
        src="/hero.jpg"
        alt="Hero image"
        width={1200}
        height={600}
        placeholder="blur"
        blurDataURL="data:image..."
      />
      \`\`\`
    `,
    tags: ["Next.js", "Performance", "Images", "Optimization"],
    image: {
      url: "/pfp.webp",
    },
  },
];

export default posts;
