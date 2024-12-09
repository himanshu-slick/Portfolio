import {
  ShoppingCart,
  ListTodo,
  MessageSquareMore,
  Globe,
  Cloud,
  Users,
} from "lucide-react";

export const projects = [
  {
    id: "search-engine",
    title: "Compass : Search Engine",
    description:
      "A search engine that uses natural language processing and semantic search to provide relevant results.",
    icon: ListTodo,
    technologies: ["Next.js", "Javascript", "MongoDB", "React"],
    liveUrl: "https://compass-search-engine.vercel.app/",
    githubUrl: "https://github.com/himanshu-slick/compass-search-engine",
    featured: true,
  },
  {
    id: "e-commerce-platform",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with Stripe integration, user authentication, and product management.",
    icon: ShoppingCart,
    technologies: ["React", "Fakestore API", "Node.js", "REST API"],
    liveUrl: "https://slick-club-e-commerce-store.netlify.app/",
    githubUrl: "https://github.com/himanshu-slick/e-commerce-store",
    featured: true,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js and Tailwind CSS.",
    icon: Globe,
    technologies: ["Next.js", "Tailwind CSS", "React"],
    liveUrl: "https://portfolio-demo.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    featured: true,
  },
  {
    id: "tindog",
    title: "Tindog",
    description:
      "A Static web application for dog owners to find their perfect match for their dog.",
    icon: MessageSquareMore,
    technologies: ["HTML", "CSS", "Javascript", "jQuery"],
    liveUrl: "https://github.com/himanshu-slick/TinDog",
    githubUrl: "https://github.com/himanshu-slick/TinDog",
    featured: false,
  },
  {
    id: "Dialer-app",
    title: "Dialer App",
    description: "A simple dialer app built with HTML/CSS and Javascript.",
    icon: Cloud,
    technologies: ["HTML", "CSS", "Javascript", "jQuery"],
    liveUrl: "https://github.com/himanshu-slick/Dialer-app",
    githubUrl: "https://github.com/himanshu-slick/Dialer-app",
    featured: false,
  },
  {
    id: "guess-my-number",
    title: "Guess my number",
    description: "A simple guessing game built with HTML/CSS and Javascript.",
    icon: Users,
    technologies: ["HTML", "CSS", "Javascript", "jQuery"],
    liveUrl: "https://github.com/himanshu-slick/Guess-my-number",
    githubUrl: "https://github.com/himanshu-slick/Guess-my-number",
    featured: false,
  },
];
