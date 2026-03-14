// ============================================================
// PORTFOLIO DATA — Edit all your info here in one place
// ============================================================

export const PERSONAL = {
  name: "Nitin Solanki",
  initials: "NS",
  role: "Full-Stack Java Developer",
  taglines: [
    "Full-Stack Java Developer",
    "Spring MVC Specialist",
    "React.js Builder",
    "REST API Engineer",
    "Open to Opportunities",
  ],
  bio: [
    "I'm a passionate Full-Stack Java Developer currently pursuing a Bachelor of Engineering in Computer Science at Dr. Bhimrao Ambedkar University, Agra (2022–2026).",
    "I specialize in building robust, scalable web applications using Spring MVC, React.js, and MySQL. Through internships at Technoster's Technologies and Kamadgiri Software Solution, I've delivered real performance improvements — reducing page load times by 35% and achieving 99.2% application uptime.",
    "I'm a fresher eager to contribute, learn fast, and build impactful products.",
  ],
  traits: ["Problem Solver", "Fast Learner", "Team Player", "Open to Work"],
  location: "Nunera, Mathura, UP 281204",
  degree: "Bachelor of Engineering Computer Science & Engineering (2022–2026)",
  email: "nitin5115solanki@gmail.com",
  phone: "+91-7668895115",
  whatsapp: "https://wa.me/917668895115",
  linkedin: "https://www.linkedin.com/in/nitin-solanki-515807257/",
  github: "https://github.com/NitinSolanki-11",
  cvPath: "/Nitin_Solanki_Resume.pdf",
  photo: "/Gemini_Generated_Image_hkf7jvhkf7jvhkf7.png",
};

export const STATS = [
  { num: "3+", label: "PROJECTS" },
  { num: "100+", label: "BUGS FIXED" },
  { num: "2+", label: "INTERNSHIPS" },
  { num: "1+", label: "YEARS EXP" },
];

export const SKILLS = [
  {
    cat: "LANGUAGES",
    items: ["Java", "JavaScript (ES6+)", "C", "HTML5", "CSS3"],
  },
  {
    cat: "BACKEND",
    items: ["Spring MVC", "Spring Security", "REST APIs", "Maven"],
  },
  {
    cat: "FRONTEND",
    items: [
      "React.js",
      "Bootstrap",
      "Material-UI",
      "jQuery",
      "Responsive Design",
    ],
  },
  {
    cat: "DATABASE & TOOLS",
    items: ["MySQL", "Git & GitHub", "Eclipse", "VS Code", "Apache Tomcat"],
  },
  {
    cat: "CORE CONCEPTS",
    items: [
      "OOPs",
      "MVC Architecture",
      "RESTful APIs",
      "Authentication",
      "Code Review",
    ],
  },
];

export const INTERNSHIPS = [
  {
    role: "Summer Intern – Java & Spring MVC",
    company: "Kamadgiri Software Solution",
    badge: "INTERNSHIP",
    date: "June 2024 – Aug 2024",
    location: "Chitrakoot, Uttar Pradesh",
    points: [
      "Optimized database queries reducing execution time by <strong>45%</strong>",
      "Implemented error handling across <strong>15+ modules</strong>, reducing bugs by <strong>60%</strong> and achieving <strong>99.2% uptime</strong>",
      "Participated in <strong>30+ code reviews</strong> maintaining <strong>95% code coverage</strong> and zero critical vulnerabilities",
    ],
    tags: ["Java", "Spring MVC", "MySQL", "REST APIs", "Code Review"],
  },
  {
    role: "Full Stack Developer Trainee",
    company: "Technoster's Technologies Pvt. Ltd.",
    badge: "TRAINEE",
    date: "Nov 2023 – Nov 2024",
    location: "Agra, Uttar Pradesh",
    points: [
      "Developed <strong>5+ web applications</strong>, increasing user engagement by <strong>20%</strong>",
      "Reduced page load time by <strong>35%</strong> (4.2s → 2.7s) through code optimization and lazy loading",
      "Conducted <strong>50+ code reviews</strong>, resolved <strong>100+ bugs</strong>, improved code quality by <strong>25%</strong>",
    ],
    tags: [
      "Java",
      "Spring MVC",
      "React.js",
      "MySQL",
      "Bootstrap",
      "JavaScript",
    ],
  },
];

// ============================================================
// PROJECTS — Add new projects easily!
// Set hostedUrl: "" for "Coming Soon", or add URL for Live Demo
// ============================================================
export const PROJECTS = [
  {
    id: "01",
    title: "TrekTrails",
    desc: "A full-featured travel booking platform with JWT authentication, CAPTCHA protection, and real-time email notifications for seamless travel management.",
    highlights: [
      "Reduced query time by 50% with database indexing",
      "JWT + CAPTCHA — 99% bot prevention",
      "98% email delivery · 99.5% transaction success",
    ],
    tags: ["Java", "Spring MVC", "MySQL", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/NitinSolanki-11",
    hostedUrl: "",
  },
  {
    id: "02",
    title: "Kindity",
    desc: "A charity platform connecting donors with causes, built with real-time JavaScript interactions and fully responsive design across all devices.",
    highlights: [
      "Real-time user interaction with JavaScript",
      "100% mobile compatibility across 15+ devices",
      "Modern UI with Material-UI components",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Material-UI"],
    githubUrl: "https://github.com/NitinSolanki-11",
    hostedUrl: "https://kindity.vercel.app/",
  },
  {
    id: "03",
    title: "Solar System",
    desc: "An animated, interactive Solar System visualization with complete information about all planets using pure CSS animations for an immersive space experience.",
    highlights: [
      "Animated planetary orbits using pure CSS",
      "Complete info on all solar planets",
      "Fully responsive across all screen sizes",
    ],
    tags: ["HTML5", "CSS3", "Animations"],
    githubUrl: "https://github.com/NitinSolanki-11/Solar-System",
    hostedUrl: "",
  },

  // ── ADD PROJECT 4 HERE ──────────────────────────────────────
  // {
  //   id:         "04",
  //   title:      "Your Project",
  //   desc:       "Description...",
  //   highlights: ["Feature 1", "Feature 2", "Feature 3"],
  //   tags:       ["React", "Node.js", "MySQL"],
  //   githubUrl:  "https://github.com/NitinSolanki-11/repo",
  //   hostedUrl:  "https://your-live-site.com",
  // },
  // ────────────────────────────────────────────────────────────
];

export const CONTACT_ITEMS = [
  {
    icon: "📧",
    label: "EMAIL",
    value: "nitin5115solanki@gmail.com",
    href: "mailto:nitin5115solanki@gmail.com",
  },
  {
    icon: "💬",
    label: "WHATSAPP",
    value: "+91-7668895115",
    href: "https://wa.me/917668895115",
  },
  {
    icon: "💼",
    label: "LINKEDIN",
    value: "nitin-solanki-515807257",
    href: "https://www.linkedin.com/in/nitin-solanki-515807257/",
  },
  {
    icon: "⌥",
    label: "GITHUB",
    value: "NitinSolanki-11",
    href: "https://github.com/NitinSolanki-11",
  },
  {
    icon: "📍",
    label: "LOCATION",
    value: "Nunera, Mathura, UP 281204",
    href: null,
  },
];

export const WEB3FORMS_KEY = "df82fe78-cefb-4b8a-8d73-fee45f325ccb";
