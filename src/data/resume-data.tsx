import { DatafyLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { PencilLine, Cpu } from "lucide-react";

export const RESUME_DATA = {
  name: "Ledraa",
  initials: "Ledraa",
  location: "Saudi Arabia, Riyadh",
  locationLink: "https://www.google.com/maps/place/Riyadh",
  about: "Full Stack Developer",
  summary:
    "developing apps, analyzing data, training AI models.",
  avatarUrl: "https://avatars.githubusercontent.com/u/121174019?v=4",
  personalWebsiteUrl: "https://ledraa.com/",
  contact: {
    email: "theledraa@gmail.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mu6m",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ledraa/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/theledraa",
        icon: XIcon,
      },
      {
        name: "Cpu",
        url: "https://huggingface.co/aledraa",
        icon: Cpu,
      },
      {
        name: "Blog",
        url: "https://medium.com/@ledraa",
        icon: PencilLine,
      },
    ],
  },
  education: [
    {
      school: "King Saud University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2022",
      end: "present",
    },
  ],
  work: [
    {
      company: "DataTime",
      link: "https://github.com/mu6m/datafy",
      badges: ["Web Development", "AWS", "System Management"],
      title: "Full Stack Developer",
      logo: null,
      start: "Oct 2024",
      end: "June 2025", // Sep 13
      description:
        "Developing and managing websites/systems that required specific solutions for different clients",
    },
    {
      company: "Juniper Strategy Ltd",
      link: "https://github.com/mu6m/datafy",
      badges: ["Python", "Data scraping", "Data analysis"],
      title: "Data Analyst",
      logo: null,
      start: "Aug 2024",
      end: "Nov 2024",
      description:
        "Collecting and analyzing data for different clients for consulting purposes",
    },
  ],
  skills: [
    "React",
    "Next.js/Remix/Svelte",
    "TypeScript",
    "Drizzle/Prisma",
    "Bun.js/Node.js",
    "Postgres",
    "Flutter",
    "Python",
    "Machine Learning",
  ],
  projects: [
    {
      title: "Datafy",
      techStack: [
        "Remixjs",
        "tailwind",
        "LLM",
        "Hugginface",
        "pytorch",
        "golang",
        "redis",
        "inngest",
      ],
      description:
        "Open Source SaaS application that allows you to generate, analyze, and scrape data using AI",
      logo: DatafyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/better-datafy",
      },
    },
    {
      title: "Stock Analyzer",
      techStack: [
        "Laravel",
        "tailwind",
        "MySql",
        "Python",
        "Cronjobs",
      ],
      description:
        "Open Source platform to perform different analytics on stocks for Tadawul Market",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/stock-analyzer",
      },
    },
    {
      title: "Open Store",
      techStack: [
        "Remixjs",
        "tailwind",
        "Lemon squeezy (for handling payments)",
        "Postgres",
        "drizzle",
      ],
      description:
        "Open Source project made for business to manage, customize and host their own ecommerce website",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/open-store",
      },
    },
    {
      title: "OpenStore Admin",
      techStack: ["nextjs", "shadcn", "PostgresDB"],
      description:
        "Ddmin dashboard for openstore using nextjs",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/open-store-admin",
      },
    },
    {
      title: "Convert Now",
      techStack: ["Nextjs", "tailwind", "ffmpeg"],
      description:
        "an opensource webapp for converting different types of files online",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/convert-now",
      },
    },
    {
      title: "Emeal",
      techStack: ["Flutter", "Clerk", "LLM", "HuggingFace"],
      description:
        "a mobile app used to create meals based on the user prefrences using AI",
      logo: DatafyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/emeal",
      },
    },
    {
      title: "Image Tagger",
      techStack: ["Nextjs", "tailwind", "YOLOv9"],
      description:
        "opensource webapp made using nextjs and YOLOv9 model used to generate tags based on user provided images",

      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/image-tagging",
      },
    },
    {
      title: "My Invoice",
      techStack: ["Svelte", "tailwind", "prisma orm", "daisy ui"],
      description:
        "opensource erp system for creating and managing invoices for restaurants made using svelte with prisma orm and tailwind aimed for fast performance",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/my-invoice",
      },
    },
    {
      title: "Next Pos",
      techStack: [
        "Nextjs",
        "tailwind",
        "drizzle",
      ],
      description:
        "an opensource pos system for business that can create invoices and manage the warehouse and handle different actions for business",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/next-pos",
      },
    },
    {
      title: "Rust Captcha",
      techStack: ["Rust", "Vercel Serverless"],
      description:
        "a serverless app that uses rust to generate captchas and check the user response used to prevent ddos attacks also i made a nextjs app that implements it",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/serverless-captcha",
      },
    },
    {
      title: "WebSocket Handler",
      techStack: ["socket.io", "node.js"],
      description: "an opensource project for managing websocket lobbies",

      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/socket.io-lobby-handler",
      },
    },
    {
      title: "Directory lister",
      techStack: ["Golang"],
      description:
        "a an app that uses golang to allow the user to upload files and list them from the hosted directory",

      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/directory-lister",
      },
    },
    {
      title: "Peer Chat",
      techStack: ["Svelte", "Socket.io", "Webrtc"],
      description:
        "opensource webapp made using svelte, socket.io and webrtc to video chat with random users ",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/peer-video-chat",
      },
    },

    {
      title: "ReStream",
      techStack: ["Nginx"],
      description:
        "a live streaming server made using nginx for streaming to multiple platforms at once",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/nginx-restream",
      },
    },
    {
      title: "Clip It",
      techStack: ["Rust", "ffmpeg"],
      description:
        "a program that uses ffmpeg to record a clip ( 15 minutes long ) at highest resolution possible",

      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/clip-it",
      },
    },
    {
      title: "Window Timer",
      techStack: ["Rust", "WinApi"],
      description:
        "a program that helps you keep track of the time you spent on each window opened",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/window-timer",
      },
    },
    {
      title: "Next Drive",
      techStack: ["Nextjs", "graphql", "hasura", "jwt", "express"],
      description:
        "a self hosted file storage with folder upload and multiple files support",

      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/next-drive",
      },
    },
    {
      title: "Recipe Api",
      techStack: ["bunjs", "python", "elysia", "prisma", "postgres"],
      description:
        "an api that can search and sort recipes it has 8300+ recipes",

      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/recipe-api",
      },
    },
    {
      title: "Talkomatic",
      techStack: ["Svelte", "Socket.io"],
      description:
        "opensource webapp made using svelte and socket.io to simulate how old chat application were made ",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/talkomatic-clone",
      },
    },
    {
      title: "InView",
      techStack: ["Svelte"],
      description: "an inview hook made for svelte",

      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/svelte-inview",
      },
    },
    {
      title: "Payall",
      techStack: ["Nextjs", "sass", "styled components", "typescript"],
      description:
        "a concept payment company website heavily inspired by a design i saw on behance so instead of it being just an idea turned it into a website",

      logo: null,
      link: {
        label: "github.com",
        href: "https://payall-dev.vercel.app/",
      },
    },
    {
      title: "CoinSav",
      techStack: ["Remixjs", "sass", "styled components", "typescript"],
      description: "a website made to mimic a crypto trading platform",

      logo: null,
      link: {
        label: "github.com",
        href: "https://coin-sav.vercel.app/",
      },
    },
  ],
} as const;
