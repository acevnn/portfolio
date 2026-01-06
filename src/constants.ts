export const sectionIds = ["about", "experience", "projects", "reviews"];

export const ABOUT = [
  {
    id: 1,
    paragraph:
      "I’m a Frontend Web Engineer with 5+ years of experience crafting accessible, pixel-perfect interfaces that balance thoughtful design with robust engineering. I specialize in building high-quality user experiences where performance, usability, and visual precision go hand in hand.",
  },
  {
    id: 2,
    paragraph:
      "My work sits at the intersection of design and development. I enjoy turning complex requirements into clean, scalable UI solutions—paying close attention to responsiveness, accessibility standards, and long-term maintainability.",
  },
  {
    id: 3,
    paragraph:
      "Before focusing fully on frontend development, I worked as a cybersecurity engineer after graduating, where I also contributed to building a website for the Intelligence Agency of North Macedonia—an experience that shaped my attention to detail, security, and reliability.",
  },
  {
    id: 4,
    paragraph:
      "Outside of work, I enjoy hiking, working out, playing chess, sketching ideas, and taking time to recharge—activities that help me stay focused, curious, and creative.",
  },
];

export const EXPERIENCES = [
  {
    id: 1,
    time: "2016 — 2019",
    role: "Student @ University American College — Computer Science and Information Technologies",
    paragraph:
      "Throughout my life, I’ve always had hands-on experience with computers. The first software I began working with during my early teenage years was Adobe Photoshop CS3. Driven by a passion for mathematics and technology, I later decided to pursue a university degree in this field.",
    tags: ["Computer Science", "Information Technology", "Bachelor Degree"],
  },
  {
    id: 2,
    time: "2019 Aug — 2019 Nov",
    role: "Intern @ INSCALE ",
    paragraph:
      "Microsoft-based company developing software using C# programming language within the .NET framework. Gained hands-on experience with the Model-View-Controller (MVC) design pattern, understanding how it organizes code into models (data), views (UI), and controllers (application logic).",
    tags: ["C#", ".NET", "MVC"],
  },
  {
    id: 3,
    time: "Early 2020 — Mid 2021",
    role: "Cyber Security and Network Management @ IA of North Macedonia.",
    tags: ["Software Engineering"],
  },
  {
    id: 4,
    time: "Mid 2021 — early 2025",
    role: "Frontend Developer @ Valtech",
    paragraph:
      "                Build, style, and ship high-quality websites, design systems and\n" +
      "                cross platform digital experiences for a diverse array of\n" +
      "                clients using technologies such as JavaScript, TypeScript,\n" +
      "                React, Next.js, SCSS, AEM(Adobe Experience Manager), Contentful,\n" +
      "                and more. Participating in story planning, estimations and breakdowns of large features.",
    tags: [
      "HTML5",
      "SCSS",
      "React",
      "Next.js",
      "AEM",
      "Contentful",
      "TypeScript",
    ],
  },
  {
    id: 5,
    time: "2025 — Currently working here",
    role: "Web Engineer @ Vestel Global",
    paragraph: [
      "Leading the frontend development and rebranding of a project using Next.js 15, React 19, TypeScript, and SCSS Modules. \n \n",
      "Designed and implemented a multilingual system \n (English, Macedonian, Albanian) using next-intl with \n middleware-based locale detection and structured translations. \n\n ",
      "Built and refactored modular UI components (Drawer, Sidebar, Tag, Accordion, EventCard, MenuBar, Footer) ensuring scalability, accessibility, and performance. \n\n",
      "Defined and implemented the project’s high-level architecture for two major frontend applications, focusing on structure, scalability, and maintainability. \n\n",
      "Assisting and mentoring junior developers, providing guidance on TypeScript typing, component composition, and best practices for Next.js app router architecture. \n\n",
      "Optimized build configuration (next.config.ts, SCSS imports, image handling) for both local and production environments. \n\n",
      "Collaborating closely with design and backend teams to achieve pixel-perfect UI alignment from Figma and smooth integration with API data. \n",
    ],
    tags: [
      "Web Engineer",
      "Front-End",
      "Next.js",
      "React 19",
      "TypeScript",
      "SCSS Modules",
      "Zustand",
      "next-intl",
      "ESLint/Prettier",
    ],
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: "Dimitar Hristoskov",
    paragraph:
      'Structured way of working - Pragmatic approach to resolve issues quickly - Clear and timely communication within the team - Always up for any challenge. "Be confident, you have brilliant ideas so you  could just take the risk and implement those ideas."',
  },
  {
    id: 2,
    name: "Steven Buxton",
    paragraph:
      "Highly motivated, nice personality, always tries to do his best, very invested in the success of the project!",
  },
  {
    id: 3,
    name: "Orest Palidovych",
    paragraph:
      "Nino is a highly experienced frontend developer, known for being a reliable team player with strong skills in analyzing and breaking down tasks for accurate estimations and incremental development. Nice person to work with.",
  },
  {
    id: 4,
    name: "Rumyana Stambolova",
    paragraph:
      "Working on the project as a team with Nino was very seamless for me in communicating and solving day to day tasks. Nino is responsive and always strives to do the best in his work, to help and understand other perspectives. I recommend him for future collaboration.",
  },
];

export const WEBSTORE = [
  {
    id: 1,
    heading: "Tech Stack Overview",
  },
  {
    id: 2,
    backend: "Backend (PHP 8.2 + GraphQL + MySQL",
  },
  {
    id: 3,
    paragraph:
      "The backend is built entirely in pure PHP 8.2, following clean OOP architecture. It features a fully custom GraphQL API using webonyx/graphql-php, supporting dynamic category and product resolution with class-based mapping (e.g., 'clothes' => ClothesProduct::class). Database access is securely handled via PDO prepared statements, and all GraphQL queries are routed through a single index.php entry point. The environment runs inside a Dockerized Apache + PHP container, complete with Composer autoloading, Apache rewrite configuration, and optimized image size through a clean .dockerignore setup. The backend is deployed on Render.com, exposing a single GraphQL endpoint with full CORS support for frontend integration.",
  },
  {
    id: 4,
    frontend: "Frontend (React + Vite + TypeScript)",
  },
  {
    id: 5,
    paragraph:
      "The frontend is a single-page React application built with TypeScript and Vite, featuring fast load times and modular structure. It uses React Router for navigation and Zustand for global state management, especially in managing a responsive cart overlay with real-time quantity updates. Styling is implemented using SCSS modules with a mobile-first, BEM-inspired approach. Data is fetched from the backend via a lightweight custom GraphQL client using native fetch. The application is deployed on Netlify as a static site, with environment variable support for dynamic GraphQL endpoints.",
  },
];

export const POKEMON = [
  {
    id: 1,
    heading: "Tech Stack Overview",
  },
  {
    id: 2,
    frontend: "Frontend (React + Vite + TypeScript)",
  },
  {
    id: 3,
    paragraph:
      "A mobile-first web application built with Next.js and styled using SCSS Modules, designed to deliver a smooth and responsive browsing experience for Pokémon enthusiasts. The layout adapts gracefully across devices, featuring a hamburger-triggered drawer menu on smaller screens for intuitive navigation.",
  },
  {
    id: 4,
    paragraph:
      "A key feature is the infinite scroll mechanism, which loads 20 additional Pokémon entries as the user scrolls down. This approach enhances the browsing experience by reducing initial load times and progressively rendering content as needed.",
  },
  {
    id: 5,
    paragraph:
      "The application fetches Pokémon data server-side from a public API, transforms it, and passes it efficiently to components via Next.js' rendering pipeline. Leveraging the Next.js Image component, the app ensures optimized image loading, contributing to strong performance and visual clarity.",
  },
];

export const CORE_SKILLS = [
  {
    id: 1,
    heading: "Frontend",
    paragraph:
      "React, Next.js (App Router), TypeScript, JavaScript (ES6+), SCSS Modules, CSS Architecture (BEM), Responsive/Mobile-first UI",
  },
  {
    id: 2,
    heading: "Architecture",
    paragraph:
      "Component systems, Design Systems, scalable folder architecture, custom hooks, BFF patterns",
  },
  {
    id: 3,
    heading: "Rendering Models",
    paragraph: "SSR, SSG, ISR, CSR",
  },
  {
    id: 4,
    heading: "State Management",
    paragraph: "Zustand, React Context",
  },
  {
    id: 5,
    heading: "API",
    paragraph:
      "REST, GraphQL, caching strategies, data hydration, ISR revalidation",
  },
  {
    id: 6,
    heading: "CMS",
    paragraph: "Contentful, AEM",
  },
  {
    id: 7,
    heading: "Tooling",
    paragraph: "Git, GitHub, Storybook, Docker, ESLint, Vite, Next-Intl",
  },
  {
    id: 8,
    heading: "Design",
    paragraph: "Figma, UI implementation, pixel-perfect alignment",
  },
  {
    id: 9,
    heading: "Soft Skills",
    paragraph:
      "Independent ownership, communication, mentoring, cross-team collaboration",
  },
];
