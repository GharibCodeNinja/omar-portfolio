export type ProjectCategory = "web" | "ai-mobile" | "game";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  featured?: boolean;
  overview: string;
  tech: string[];
  /** Only list features verified in the repo / CV. Strings starting with "TODO" are hidden in production. */
  highlights: string[];
  challenges: string[];
  learned: string[];
  github: string | null; // null = no public repo
  demo: string | null; // null = no live demo (button hidden)
  private?: boolean; // true = shows "Private repository"
  /** Screenshots placed in /public, e.g. "/projects/specto/home.png" */
  images?: string[];
  /** Short videos placed in /public, e.g. "/projects/specto/demo.mp4" */
  videos?: string[];
}


export const site = {
  name: "Omar Ahmed Gharib",
  shortName: "Omar Gharib",
  title: "Media Engineering Technology Graduate | Software Developer",
  headline: "Building software, intelligent applications, and digital experiences.",
  intro:
    "I'm a recent Media Engineering Technology graduate from GUC, passionate about software engineering, AI-powered applications, and full-stack development. I enjoy transforming complex problems into practical, well-designed solutions.",
  location: "Cairo, Egypt",
  copyrightYear: 2026, // update once a year
  url: "https://omar-portfolio-silk.vercel.app/", // TODO: replace with your real Vercel URL after deploying
  email: "omaraghariib@gmail.com",
  github: "https://github.com/GharibCodeNinja",
  linkedin: "https://www.linkedin.com/in/omar-gharib-348933367",
  cv: "/cv/Omar-Ahmed-Ghareeb-CV.pdf",
  // Messages are delivered to your email by FormSubmit (free, no account).
  // First message ever sent: FormSubmit emails you an activation link. Click it once.
  // Leave empty ("") to fall back to opening the visitor's email app.
  contactFormEndpoint: "https://formsubmit.co/ajax/omaraghariib@gmail.com",
  roles: [
    "Junior Software Engineer",
    "Junior Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "AI / Software Engineer",
    "Flutter Developer",
    "Unity Game Developer",
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraphs: [
    "I recently graduated in Media Engineering Technology from the German University in Cairo. During my studies I got hands-on with real software: mobile apps, websites, games, and an AI-powered sound app.",
    "I love turning an idea into something that really works. I learn new tools quickly, enjoy solving problems, and I'm excited to bring that energy to a team where I can keep growing.",
  ],
  highlights: [
    {
      title: "Software Engineering",
      text: "Object-oriented design, clean code, testing and debugging across Java, Python, C and C++.",
      icon: "code",
    },
    {
      title: "AI & Intelligent Applications",
      text: "Mobile apps with on-device AI, plus LLM concepts like RAG and LangChain.",
      icon: "brain",
    },
    {
      title: "Full-Stack & Interactive",
      text: "Flutter mobile apps, web apps, and 3D games built with Unity and C.",
      icon: "layers",
    },
  ],
};

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: "terminal",
    items: ["Java", "Python", "C", "C++", "JavaScript", "Dart", "SQL"],
    span: "lg:col-span-4",
  },
  {
    title: "Mobile Development",
    icon: "smartphone",
    items: ["Flutter", "Dart"],
    span: "lg:col-span-2",
  },
  {
    title: "Web Development",
    icon: "globe",
    items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "REST APIs"],
    span: "lg:col-span-3",
  },
  {
    title: "AI & Machine Learning",
    icon: "brain",
    items: [
      "TensorFlow Lite",
      "Audio classification",
      "Digital signal processing",
      "LLM application concepts",
      "RAG",
      "LangChain",
    ],
    span: "lg:col-span-3",
  },
  {
    title: "Databases & Tools",
    icon: "database",
    items: [
      "SQL databases",
      "MySQL",
      "MongoDB",
      "Git",
      "GitHub",
      "GitHub Desktop",
      "VS Code",
      "Postman",
      "Docker",
      "Spring Boot",
    ],
    span: "lg:col-span-4",
  },
  {
    title: "Game & Interactive",
    icon: "gamepad",
    items: ["Unity", "C#", "Java game development", "3D interactive applications"],
    span: "lg:col-span-2",
  },
];

export const projects: Project[] = [
  {
    slug: "specto",
    name: "Specto",
    tagline: "AI-Powered Mobile Audio Analyzer",
    category: "ai-mobile",
    categoryLabel: "AI / Mobile Development",
    featured: true,
    overview:
      "Specto is a mobile application designed to analyze audio signals in real time and present sound information through interactive visualizations and intelligent audio classification.",
    tech: ["Flutter", "Dart", "TensorFlow Lite", "Digital Signal Processing"],
    highlights: [
      "Complete DSP pipeline: FFT, STFT, Hann windowing and RMS energy analysis on live microphone input",
      "Real-time waveform, frequency spectrum, spectrogram, dominant frequency and audio energy views",
      "On-device sound classification with TensorFlow Lite, running offline with low latency",
      "Optimized audio buffering, memory management and rendering for smooth performance on Android",
    ],
    challenges: [
      "Keeping visualizations smooth while processing audio frames in real time.",
      "Running AI inference fully on-device, offline, while preserving user privacy.",
    ],
    learned: [
      "Applying signal-processing theory (FFT, STFT, windowing) in a real mobile app.",
      "Integrating a TensorFlow Lite model into a cross-platform Flutter application.",
    ],
    github: null,
    demo: null,
    private: true,
    // Put screenshots in public/projects/specto/ and list them here, e.g.:
    // images: ["/projects/specto/home.png", "/projects/specto/spectrogram.png"],
    images: [],
    videos: [],
  },
  {
    slug: "rafiki",
    name: "Rafiki",
    tagline: "Full-Stack Travel Website",
    category: "web",
    categoryLabel: "Full-Stack Web Development",
    overview:
      "A travel-focused web application designed to make exploring destinations and discovering travel information easier through an interactive web experience.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    highlights: [
      "Responsive travel platform with interactive booking features",
      "Frontend built with HTML, CSS and JavaScript",
      "Backend services integrated with MySQL for data handling",
    ],
    challenges: ["TODO: add a real challenge from the repo (e.g. data model, booking flow)."],
    learned: ["Connecting a responsive frontend to backend services and a relational database."],
    github: "https://github.com/Advanced-computer-lab-2024/Rafiki",
    demo: null,
  },
  {
    slug: "attack-on-titan-utopia",
    name: "Attack on Titan: Utopia",
    tagline: "Java Game Project",
    category: "game",
    categoryLabel: "Java Game Development",
    overview:
      "A Java-based game project inspired by Attack on Titan, demonstrating object-oriented programming, game logic, and interactive application development.",
    tech: ["Java"],
    highlights: [
      "Built from scratch using object-oriented programming",
      "Interactive gameplay mechanics and enemy AI",
      "Performance optimized for smooth execution",
    ],
    challenges: ["TODO: add a real challenge from the repo."],
    learned: ["Structuring a game with object-oriented design and implementing enemy behavior."],
    github: null, // TODO: add repo URL if public
    demo: null,
  },
  {
    slug: "the-last-of-us-legacy",
    name: "The Last of Us: Legacy",
    tagline: "Java Game Project",
    category: "game",
    categoryLabel: "Java Game Development",
    overview:
      "A Java game project inspired by The Last of Us, showcasing interactive gameplay and software development through a game-based project.",
    tech: ["Java"],
    highlights: [
      "Built from scratch using object-oriented programming",
      "Interactive gameplay mechanics and enemy AI",
      "Performance optimized for smooth execution",
    ],
    challenges: ["TODO: add a real challenge from the repo."],
    learned: ["Designing gameplay systems and enemy AI in Java."],
    github: null, // TODO: add repo URL if public
    demo: null,
  },
  {
    slug: "unity-endless-runner",
    name: "Unity 3D Endless Runner",
    tagline: "3D Endless Runner",
    category: "game",
    categoryLabel: "Game Development / 3D",
    overview:
      "A 3D endless-runner game built with Unity, focused on interactive gameplay and real-time 3D environments.",
    tech: ["Unity", "C#"],
    highlights: [
      "Level design and user interaction",
      "Gameplay balancing",
      "Unity physics and asset integration",
    ],
    challenges: ["TODO: add a real challenge (e.g. obstacle spawning, difficulty curve)."],
    learned: ["Balancing gameplay and integrating assets and physics in Unity."],
    github: null,
    demo: null,
    private: true,
  },
  {
    slug: "unity-action-rpg",
    name: "Unity Action RPG",
    tagline: "Diablo-Style Action RPG",
    category: "game",
    categoryLabel: "Unity / Interactive Development",
    overview:
      "A Diablo-style action RPG project exploring 3D gameplay, interactive environments, and game mechanics.",
    tech: ["Unity", "C#"],
    highlights: [
      "Level design and user interaction",
      "Gameplay balancing",
      "Unity physics and asset integration",
    ],
    challenges: ["TODO: add a real challenge (e.g. combat, enemy behavior)."],
    learned: ["Designing a 3D action game with interactive environments in Unity."],
    github: null,
    demo: null,
    private: true,
  },
  {
    slug: "temple-run-3d",
    name: "3D Temple Run-Inspired Game",
    tagline: "3D Graphical Game in C",
    category: "game",
    categoryLabel: "C / 3D Development",
    overview:
      "A Temple Run-inspired 3D project demonstrating programming fundamentals and interactive game development.",
    tech: ["C"],
    highlights: [
      "Rendering pipeline for real-time 3D graphics",
      "Collision detection",
      "Animation logic for real-time interactive gameplay",
    ],
    challenges: ["TODO: add a real challenge from the repo."],
    learned: ["Low-level graphics, collision detection and animation in C."],
    github: null, // TODO: add repo URL if public
    demo: null,
  },
];

export const otherProjects = [
  {
    name: "Internship Management System",
    kind: "Database project",
    text: "Relational database for managing student internship applications: functional requirements, ER diagrams, and business rules such as blacklisted companies, application cycles and internship validation.",
    private: true,
  },
  {
    name: "Processor Design and Simulation",
    kind: "Computer architecture (CSEN601)",
    text: "C-based processor simulator modeling Von Neumann and Harvard architectures, with instruction sets, pipelining, branch/jump handling, and clock-cycle and hazard analysis.",
    private: false,
  },
];

export const projectFilters: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Web Development", value: "web" },
  { label: "AI & Mobile", value: "ai-mobile" },
  { label: "Game Development", value: "game" },
];

export const experience = [
  {
    role: "Junior Software Developer Intern",
    company: "Sportyano for Electronic and Digital Systems",
    location: "Giza, Egypt",
    period: "July 2024 – September 2024",
    points: [
      "Contributed to software projects in the sports technology domain within the IT department.",
      "Assisted in application design and development; wrote and tested code; supported project planning and execution.",
      "Took part in code reviews, debugging and troubleshooting, strengthening Python and Java skills.",
    ],
    tech: ["Python", "Java"],
  },
];

export const education = {
  school: "German University in Cairo (GUC)",
  degree: "B.Sc. in Engineering — Media Engineering Technology",
  period: "2021 – 2026",
  text: "An engineering program combining software development, digital systems, and interactive media, which shaped my approach to building applications that span web, mobile, AI, and 3D.",
};

export const certification = {
  name: "OCI 2025 Certified Generative AI Professional",
  issuer: "Oracle",
  issued: "October 2025",
  expires: "October 31, 2027",
  text: "Covers LLMs, prompting and evaluation, Retrieval-Augmented Generation (embeddings, semantic search, vector databases) and LangChain.",
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Full professional" },
  { name: "German", level: "A2 certified" },
];
