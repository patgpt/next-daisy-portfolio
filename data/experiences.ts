type ExperienceSide = "left" | "right";

export const experiences: {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string;
  side: ExperienceSide;
  logo?: string;
  skills?: string[];
  slug: string;
}[] = [
  {
    slug: "withu-training-2023",
    date: "November 2023 - October 2024",
    title: "Senior Web Developer",
    company: "WithU Training",
    location: "United Kingdom (Remote)",
    description:
      "Led globally distributed team in developing online coaching applications. Optimized build times by transitioning from Webpack to Vite and streamlined CI/CD processes.",
    side: "left",
    logo: "/images/logos/withu-logo.png",
    skills: [
      "Vue.js",
      "React",
      "TypeScript",
      "Next.js",
      "AWS Amplify",
      "GraphQL",
      "Contentful",
      "Vite",
    ],
  },
  {
    slug: "globacore-2021",
    date: "November 2021 - December 2022",
    title: "Senior Software Engineer",
    company: "Globacore Interactive Technologies",
    location: "Toronto, Ontario, Canada",
    description:
      "Developed interactive web exhibits for major clients such as Google, Rogers, Intel, Amazon, and CrowdStrike. Managed and mentored a team of junior developers.",
    side: "right",
    logo: "/images/logos/globacore-logo.jpeg",
    skills: ["React", "Testing Library", "Jest", "GitHub Actions"],
  },
  {
    slug: "canadian-tire-2019",
    date: "November 2019 - December 2020",
    title: "User Experience Developer",
    company: "Canadian Tire Corporation",
    location: "Calgary, Canada",
    description:
      "Supported user experience testing and experimentation for Canadian Tire Corporation websites. Enhanced UX testing opportunities and improved conversion rates using various tools.",
    side: "left",
    logo: "/images/logos/canadian-tire-logo.png",
    skills: ["Adobe XD", "Optimizely", "Adobe Target", "A/B Testing"],
  },
  {
    slug: "sportchek-2019",
    date: "November 2019 - December 2020",
    title: "User Experience Developer",
    company: "Canadian Tire Corporation - Sportchek",
    location: "Calgary, Canada",
    description:
      "Supported user experience testing and experimentation for Canadian Tire Corporation's 'Sportchek' website. Enhanced UX testing opportunities and improved conversion rates using various tools.",
    side: "right",
    logo: "/images/logos/sportchek-logo.jpg",
    skills: ["Adobe XD", "Optimizely", "Adobe Target", "A/B Testing"],
  },
  {
    slug: "marks-2019",
    date: "November 2019 - December 2020",
    title: "User Experience Developer",
    company: "Canadian Tire Corporation - Marks",
    location: "Calgary, Canada",
    description:
      "Supported user experience testing and experimentation for Canadian Tire Corporations 'Marks' website. Enhanced UX testing opportunities and improved conversion rates using various tools.",
    side: "left",
    logo: "/images/logos/marks-logo.png",
    skills: ["Adobe XD", "Optimizely", "Adobe Target", "A/B Testing"],
  },
  {
    slug: "butterfly-design-2011",
    date: "January 2011 - 2020",
    title: "Senior Web Application Developer",
    company: "Butterfly Design",
    location: "Toronto, Canada Area",
    description:
      "Built high-performance applications for iOS, Android, and Web using React Native and Flutter. Integrated third-party APIs and optimized backend services using GraphQL, Firebase, and SQL.",
    side: "right",
    logo: "/images/logos/butterfly.jpeg",
    skills: ["Adobe XD", "Optimizely", "Adobe Target", "A/B Testing"],
  },
  {
    slug: "best-buy-2005",
    date: "January 2005 - January 2007",
    title: "Information Technology Specialist",
    company: "Best Buy",
    location: "Ottawa, Ontario, Canada",
    description:
      "Ensured high-quality user experience by performing QA and triage for the Best Buy website.",
    side: "left",
    logo: "/images/logos/best-buy-logo.png",
    skills: ["Adobe XD", "Optimizely", "Adobe Target", "A/B Testing"],
  },
  {
    slug: "canadian-diabetes-2001",
    date: "January 2001 - January 2002",
    title: "Web Developer",
    company: "Canadian Diabetes Association",
    location: "Calgary, AB, Canada",
    description:
      "Developed and maintained the organization's website, implementing new features using HTML, CSS, and JavaScript.",
    side: "right",
    logo: "/images/logos/cda-logo.webp",
    skills: ["Adobe XD", "Optimizely", "Adobe Target", "A/B Testing"],
  },
];
