import type { IconType } from "react-icons";
import {
  FaBlog,
  FaBriefcase,
  FaGithub,
  FaHome,
  FaInfo,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";
import { FaMessage, FaXTwitter } from "react-icons/fa6";

type Route =
  | "/"
  | "/about"
  | "/experience"
  | "/experience/[slug]"
  | "/projects"
  | "/projects/[slug]"
  | "/blog"
  | "/blog/[slug]"
  | "/contact";

interface SocialURL {
  url: `https://${string}`;
  icon: IconType;
}

interface NavigationItem {
  label: string;
  href: Route;
  icon: IconType;
}

interface ISettings {
  siteName: string;
  siteDescription: string;
  siteAuthor: string;
  siteKeywords: string;
  siteImage: string;
  siteUrl: string;
  social: {
    twitter: SocialURL;
    github: SocialURL;
    linkedin: SocialURL;
  };
  copyright: {
    text: string;
    year: string;
  };
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
  navigation: NavigationItem[];
  meta?: {
    ogType: "website" | "article" | "profile";
    locale: string;
    robots?: string;
    viewport?: string;
  };
}

export const settings: ISettings = {
  siteName: "Patrick Kelly",
  siteDescription: "Patrick Kelly's portfolio",
  siteAuthor: "Patrick Kelly",
  siteKeywords: "Patrick Kelly, portfolio, developer",
  siteImage: "https://via.placeholder.com/150",
  siteUrl: "https://patrickkelly.dev",
  social: {
    twitter: {
      url: "https://twitter.com/patgpt",
      icon: FaXTwitter,
    },
    github: {
      url: "https://github.com/patgpt",
      icon: FaGithub,
    },
    linkedin: {
      url: "https://www.linkedin.com/in/patgpt",
      icon: FaLinkedin,
    },
  },
  contact: {
    email: "channel.42@icloud.com",
    phone: "+1 (555) 555-5555",
    address: "1234 Elm St, Springfield, IL 62701",
  },
  copyright: {
    text: `© ${new Date().getFullYear()} Patrick Kelly`,
    year: new Date().getFullYear().toString(),
  },
  navigation: [
    {
      label: "Home",
      href: "/",
      icon: FaHome,
    },
    {
      label: "About",
      href: "/about",
      icon: FaInfo,
    },
    {
      label: "Experience",
      href: "/experience",
      icon: FaBriefcase,
    },
    {
      label: "Projects",
      href: "/projects",
      icon: FaCode,
    },
    {
      label: "Blog",
      href: "/blog",
      icon: FaBlog,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: FaMessage,
    },
  ],
  meta: {
    ogType: "website",
    locale: "en_US",
  },
};
