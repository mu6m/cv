import { DatafyLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { PencilLine } from "lucide-react";

export const RESUME_DATA = {
  name: "Ledraa",
  initials: "Ledraa",
  location: "Saudi Arabia, Riyadh",
  locationLink: "https://www.google.com/maps/place/Riyadh",
  about: "Full Stack Developer",
  summary:
    "my passion is creating free and open source software for everyone to use, from simple webapps to complex services my goal is to create accessible and reliable software for everyone.",
  avatarUrl: "https://avatars.githubusercontent.com/u/121174019?v=4",
  personalWebsiteUrl: "https://ledraa.space/",
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
        name: "Blog",
        url: "blog.ledraa.space",
        icon: PencilLine,
      },
    ],
  },
  education: [
    {
      school: "King Saud University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2021",
      end: "present",
    },
  ],
  work: [
    {
      company: "Datafy",
      link: "https://datafy.ledraa.space/",
      badges: [
        "Nextjs",
        "tailwind",
        "drizzle orm",
        "golang",
        "task managment",
        "inngest",
      ],
      title: "CEO",
      logo: DatafyLogo,
      start: "2024",
      end: null,
      description:
        "a SaaS application that i created to generate mock data fast and easy using ai and it is opensource, the app is made using the latest version of nextjs (15rc) with drizzle and tailwind the backend is created using golang and asynq for creating a robust and scale-able backend with redis for handling the tasks with it's pub/sub system for Scaleability which is also hosted on fly.io using docker",
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
    "WebSockets",
    "WebRTC",
  ],
  projects: [
    {
      title: "Datafy",
      techStack: [
        "Nextjs",
        "tailwind",
        "drizzle orm",
        "golang",
        "asynq",
        "inngest",
      ],
      description:
        "a SaaS application that i created to generate mock data fast and easy using ai",
      logo: DatafyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/datafy",
      },
    },
    {
      title: "Next Store",
      techStack: [
        "Nextjs",
        "tailwind",
        "prisma orm",
        "Lemon squeezy (for handling payments)",
      ],
      description:
        "an opensource webapp for creating online stores for business with different sizes aimed for scalability and ability to modify the code with a management system that simplifies different crud operations ",
      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/next-store",
      },
    },
    {
      title: "BlocksBin",
      techStack: ["sveltekit", "sass", "resend (email)", "typescript"],
      description:
        "A Full Stack website made to sort the your text content in a better way",

      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/blocks-bin",
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
