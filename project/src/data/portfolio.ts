import type { LucideIcon } from 'lucide-react';
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  MessageCircle,
  Globe,
  Phone,
  MapPin,
  Cpu,
  Code2,
  Database,
  Brain,
  Activity,
  Fish,
  Bot,
  Building2,
  ClipboardList,
  Home,
  Sparkles,
  Award,
  GraduationCap,
  Briefcase,
} from 'lucide-react';

export const PROFILE = {
  name: 'Vinuthna Kumar Sallapudi',
  shortName: 'Vinuthna',
  title: 'AI Engineer | Full Stack Developer | IoT Engineer | Freelancer for WIEE Tech',
  roles: ['AI Engineer', 'Freelancer for WIEE Tech', 'Full Stack Developer', 'IoT Engineer'],
  tagline:
    'Building intelligent software, AI products, enterprise applications, and real-world IoT solutions.',
  subtitle:
    'I build AI-powered software, enterprise platforms, APIs, and real-world IoT solutions, including freelance work delivered for WIEE Tech.',
  intro:
    'I am an AI Engineer and Full Stack Developer with 1.5+ years of practical experience across recruitment, enterprise software development, backend engineering, AI applications, IoT solutions, and freelance product delivery for WIEE Tech. I specialize in developing scalable web applications, AI-powered systems, enterprise monitoring platforms, cloud-based solutions, and real-time IoT products. I enjoy solving complex problems, building modern digital products, and creating technology that improves people\'s lives.',
  goal: 'Build reliable AI, software, and IoT products that solve real business problems.',
  email: 'vinuthna433434@gmail.com',
  phone: '+91 9014908994',
  website: 'vinnu.wieetech.com',
  location: 'Telangana, India',
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  color: string;
};

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/vinnu1234-su', icon: Github, color: '#ffffff' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vinuthna-kumar-sallapudi-284737313/', icon: Linkedin, color: '#3b82f6' },
  { label: 'Email', href: 'mailto:vinuthna433434@gmail.com', icon: Mail, color: '#22d3ee' },
  { label: 'Instagram', href: 'https://www.instagram.com/heart_stealer_vinnu/', icon: Instagram, color: '#ec4899' },
  // { label: 'YouTube', href: 'https://www.youtube.com/@wieetech', icon: Youtube, color: '#ef4444' },
  // { label: 'Facebook', href: 'https://www.facebook.com/wieetech', icon: Facebook, color: '#3b82f6' },
  { label: 'WhatsApp', href: 'https://wa.me/919014908994', icon: MessageCircle, color: '#22c55e' },
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { value: 1.5, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Projects Built' },
  { value: 10, suffix: '+', label: 'Technologies' },
  { value: 3, suffix: '', label: 'Domains' },
  { value: 3, suffix: '', label: 'Internships' },
  { value: 1000, suffix: '+', label: 'Hours Coding' },
  { value: 100, suffix: '%', label: 'Passion' },
];

export type Experience = {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    role: 'IT Recruiter',
    company: 'Maxzen Tech Solutions Pvt. Ltd.',
    duration: '1.5 Years',
    responsibilities: [
      'End-to-end IT Recruitment',
      'Technical Screening & Candidate Evaluation',
      'Communication & Stakeholder Coordination',
      'Hiring & Talent Acquisition',
      'Requirement Analysis',
      'Interview Scheduling',
      'Recruitment Strategy',
    ],
  },
  {
    role: 'Senior Associate Engineer',
    company: 'IKRGY Infotech Pvt. Ltd.',
    duration: 'Present',
    responsibilities: [
      'Backend Development with Python & FastAPI',
      'REST API Design & Architecture',
      'Performance Optimization',
      'Database Design',
      'Code Review & System Design',
      'Enterprise Software Development',
      'Mentoring & Deployment',
    ],
  },
];

export type SkillGroup = {
  category: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: Code2,
    accent: 'from-accent-500 to-cyan-400',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Backend',
    icon: Cpu,
    accent: 'from-violet-500 to-accent-500',
    skills: ['Python', 'FastAPI', 'PHP Core', 'Laravel'],
  },
  {
    category: 'Databases',
    icon: Database,
    accent: 'from-cyan-400 to-violet-400',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'IoT',
    icon: Activity,
    accent: 'from-emerald-400 to-cyan-400',
    skills: ['Arduino', 'ESP32', 'MQTT', 'SMTP'],
  },
  {
    category: 'APIs',
    icon: Globe,
    accent: 'from-cyan-400 to-accent-500',
    skills: ['REST API', 'Authentication', 'Authorization', 'API Development', 'MVC', 'Database Design'],
  },
  {
    category: 'AI',
    icon: Brain,
    accent: 'from-violet-400 to-accent-400',
    skills: ['Artificial Intelligence', 'Prompt Engineering', 'LLM Integration', 'AI Product Workflows'],
  },
];

export type Project = {
  title: string;
  category: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  stack: string[];
  architecture: string;
  challenge: string;
  achievements: string[];
  image: string;
  github?: string;
  demo?: string;
  docs?: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'BYOD Monitoring Application',
    category: 'Enterprise Monitoring Platform',
    icon: Activity,
    description:
      'A real-time enterprise monitoring platform that tracks network latency, activity latency, internet usage, and system performance across endpoints with a live analytics dashboard.',
    features: [
      'Network latency tracking',
      'Activity latency monitoring',
      'Internet usage analytics',
      'Real-time performance dashboard',
    ],
    stack: ['FastAPI', 'React', 'PostgreSQL', 'WebSockets'],
    architecture: 'Event-driven backend with WebSocket streams feeding a React dashboard, persisted in PostgreSQL.',
    challenge: 'Streaming high-frequency metrics without overwhelming the browser while keeping latency under 200ms.',
    achievements: ['Deployed for enterprise use', 'Sub-200ms live updates', 'Scalable to 1000+ endpoints'],
    image:
      'https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/vinuthna/byod-monitoring',
    demo: '#',
    docs: '#',
  },
  {
    title: 'Aquaculture Monitoring System',
    category: 'IoT Smart Monitoring',
    icon: Fish,
    description:
      'An IoT-based smart monitoring system using ESP32 and temperature sensors to track water quality and fish health in real time, with MQTT cloud integration.',
    features: [
      'ESP32 + temperature sensor',
      'Water quality monitoring',
      'Fish monitoring',
      'Real-time dashboard',
      'MQTT cloud integration',
    ],
    stack: ['ESP32', 'MQTT', 'React', 'FastAPI'],
    architecture: 'ESP32 nodes publish sensor readings over MQTT to a broker; a FastAPI service ingests and serves a React dashboard.',
    challenge: 'Reliable sensor reads in harsh aquaculture environments with intermittent connectivity.',
    achievements: ['24/7 remote monitoring', 'Low-power edge design', 'Cloud-synced telemetry'],
    image:
      'https://images.pexels.com/photos/3617456/pexels-photo-3617456.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/vinuthna/aquaculture-iot',
    demo: '#',
    docs: '#',
  },
  {
    title: 'VEE-GPT',
    category: 'AI Chat Application',
    icon: Bot,
    description:
      'An AI chat application with LLM integration, prompt engineering, streaming responses, authentication, and persistent chat history in a modern responsive UI.',
    features: [
      'LLM integration',
      'Prompt engineering',
      'Streaming responses',
      'Authentication & chat history',
      'Responsive chat UI',
    ],
    stack: ['React', 'FastAPI', 'OpenAI API', 'PostgreSQL'],
    architecture: 'FastAPI streams LLM tokens via SSE to a React client; sessions and history persisted in PostgreSQL.',
    challenge: 'Smooth streaming UX with token-by-token rendering and graceful reconnection.',
    achievements: ['Real-time streaming chat', 'Auth + history', 'Production-ready UI'],
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/vinuthna/vee-gpt',
    demo: '#',
    docs: '#',
  },
  {
    title: 'Company Portal',
    category: 'Enterprise Web App',
    icon: Building2,
    description:
      'A PHP-based company portal with role-based authentication, employee management, and an admin dashboard for internal operations.',
    features: [
      'Role-based authentication',
      'Employee management',
      'Admin dashboard',
      'Internal operations',
    ],
    stack: ['PHP', 'Laravel', 'MySQL'],
    architecture: 'MVC Laravel app with role middleware and a MySQL data layer.',
    challenge: 'Designing flexible role permissions without over-engineering.',
    achievements: ['Role-based access control', 'Admin dashboard shipped'],
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/vinuthna/company-portal',
    demo: '#',
  },
  {
    title: 'Employee Tracking System',
    category: 'HR Platform',
    icon: ClipboardList,
    description:
      'A Laravel-based employee tracking system for attendance, performance, task tracking, and reporting across teams.',
    features: ['Attendance', 'Performance', 'Task tracking', 'Reports'],
    stack: ['Laravel', 'MySQL', 'Blade'],
    architecture: 'Laravel MVC with queued report generation and MySQL storage.',
    challenge: 'Generating accurate performance reports from heterogeneous data.',
    achievements: ['Automated reporting', 'Team performance insights'],
    image:
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/vinuthna/employee-tracking',
    demo: '#',
  },
  {
    title: 'Property Management Web App',
    category: 'Real Estate Platform',
    icon: Home,
    description:
      'A Laravel property management application with property listings, authentication, an admin panel, and a fully responsive UI.',
    features: ['Property listing', 'Authentication', 'Admin panel', 'Responsive UI'],
    stack: ['Laravel', 'MySQL', 'Tailwind'],
    architecture: 'Laravel MVC with image upload pipeline and admin CRUD module.',
    challenge: 'Building a responsive listing UI that scales across devices.',
    achievements: ['Responsive design', 'Admin management panel'],
    image:
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/vinuthna/property-mgmt',
    demo: '#',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Python Full Stack Internship',
    issuer: 'SkillDzire',
    icon: Code2,
  },
  {
    title: 'Cloud Infrastructure Certification',
    issuer: 'Industry Certified',
    icon: Database,
  },
  {
    title: 'IoT Fundamentals Certification',
    issuer: 'T-Hub',
    icon: Cpu,
  },
];

export type Internship = {
  title: string;
  org: string;
  duration: string;
  icon: LucideIcon;
};

export const INTERNSHIPS: Internship[] = [
  { title: 'IoT Fundamentals Internship', org: 'T-Hub', duration: '10 Months', icon: Cpu },
  { title: 'Python Full Stack Internship', org: 'SkillDzire', duration: '6 Months', icon: Code2 },
  { title: 'Cyber Security Internship', org: 'Verzeo', duration: '6 Months', icon: Award },
];

export type Education = {
  degree: string;
  institution: string;
  score: string;
  icon: LucideIcon;
};

export const EDUCATION: Education[] = [
  {
    degree: 'B.Tech',
    institution: 'Aditya College of Engineering and Technology',
    score: 'CGPA 7.00',
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate',
    institution: 'Sri Chaitanya Junior College',
    score: 'CGPA 7.92',
    icon: GraduationCap,
  },
  {
    degree: 'SSC',
    institution: 'Anna Memorial EM High School',
    score: 'CGPA 9.8',
    icon: GraduationCap,
  },
];

export type OrbitRing = {
  label: string;
  icon: LucideIcon;
  items: string[];
  radius: number;
  duration: number;
  reverse?: boolean;
};

export const TECH_ORBITS: OrbitRing[] = [
  {
    label: 'Languages',
    icon: Code2,
    items: ['Python', 'JavaScript', 'PHP', 'TypeScript'],
    radius: 120,
    duration: 40,
  },
  {
    label: 'Frameworks',
    icon: Cpu,
    items: ['React', 'FastAPI', 'Laravel'],
    radius: 190,
    duration: 55,
    reverse: true,
  },
  {
    label: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
    radius: 260,
    duration: 70,
  },
  {
    label: 'IoT & Systems',
    icon: Activity,
    items: ['ESP32', 'MQTT', 'SMTP', 'Sensors'],
    radius: 330,
    duration: 90,
    reverse: true,
  },
];

export const ACHIEVEMENTS = [
  'Successfully built enterprise applications',
  'Developed AI applications',
  'Built IoT products',
  'Created real-time monitoring systems',
  'Delivered freelance work for WIEE Tech',
  'Multiple internships completed',
];

export const TESTIMONIALS = [
  {
    quote:
      'Vinuthna delivered our monitoring platform end-to-end with remarkable speed and precision. The real-time dashboard changed how our team operates.',
    name: 'Engineering Lead',
    role: 'Enterprise Client',
  },
  {
    quote:
      'Rare combination of backend rigor and product sense. He turned vague requirements into a polished AI chat experience in record time.',
    name: 'Product Manager',
    role: 'SaaS Startup',
  },
  {
    quote:
      'His IoT work for aquaculture was both technically sound and genuinely useful to farmers. Strong execution from concept to delivery.',
    name: 'Mentor',
    role: 'T-Hub',
  },
];

export const BLOG_POSTS = [
  {
    title: 'Designing Real-Time Monitoring Dashboards with FastAPI',
    excerpt:
      'How to stream high-frequency metrics to a React dashboard with WebSockets without melting the browser.',
    tag: 'Backend',
    date: 'Coming soon',
    readTime: '8 min',
    image:
      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'From ESP32 to Cloud: A Practical IoT Pipeline',
    excerpt:
      'A field-tested approach to reliable sensor reads, MQTT, and cloud sync for harsh environments.',
    tag: 'IoT',
    date: 'Coming soon',
    readTime: '10 min',
    image:
      'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Prompt Engineering for Production AI Products',
    excerpt:
      'Patterns for building LLM features that are reliable, observable, and genuinely useful in enterprise apps.',
    tag: 'AI',
    date: 'Coming soon',
    readTime: '7 min',
    image:
      'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export const CONTACT_METHODS = [
  { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail },
  { label: 'Phone', value: PROFILE.phone, href: 'tel:+919014908994', icon: Phone },
  { label: 'Website', value: PROFILE.website, href: 'https://wieetech.com', icon: Globe },
  { label: 'Location', value: PROFILE.location, href: '#', icon: MapPin },
];

export const COMMAND_ACTIONS = [
  { label: 'Explore My Work', href: '#projects', icon: Sparkles },
  { label: 'About Me', href: '#about', icon: Briefcase },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Skills', href: '#skills', icon: Cpu },
  { label: 'Projects', href: '#projects', icon: Code2 },
  { label: 'Certifications', href: '#certifications', icon: Award },
  { label: 'Internships', href: '#internships', icon: GraduationCap },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Blog', href: '#blog', icon: Code2 },
  { label: 'Contact', href: '#contact', icon: Mail },
];
