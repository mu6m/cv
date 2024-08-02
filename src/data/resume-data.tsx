import { DatafyLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ledraa",
  initials: "Ledraa",
  location: "Saudi Arabia, Riyadh",
  locationLink: "https://www.google.com/maps/place/Riyadh",
  about: "Full Stack Developer",
  summary:
    "my passion is creating free and opensource software for everyone to use, from simple webapps to complex services my goal is to create accessible and reliable software for everyone.",
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
      badges: ["Nextjs", "tailwind", "drizzle orm", "golang"],
      title: "CEO",
      logo: DatafyLogo,
      start: "2024",
      end: null,
      description:
        "a SaaS application that i created to create mock data fast and easy using ai and it is opensource, the app is made using the latest version of nextjs (15rc) with drizzle and tailwind the backend is created using golang and asynq for creating a robust and scale-able backend with redis for handling the tasks with it's pub/sub system for Scaleability which is also hosted on fly.io using docker",
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
      title: "InView",
      techStack: ["Svelte"],
      description: "an inview hook made for svelte",

      logo: null,
      link: {
        label: "github.com",
        href: "https://github.com/mu6m/svelte-inview",
      },
    },
  ],
} as const;
