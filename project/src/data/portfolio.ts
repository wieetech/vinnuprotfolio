import type { LucideIcon } from 'lucide-react';
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  MessageCircle,
  Globe,
  Phone,
  MapPin,
  Cpu,
  Code2,
  Database,
  Brain,
  Activity,
  ShoppingBag,
  Sprout,
  Bot,
  Building2,
  Sparkles,
  Award,
  GraduationCap,
  Briefcase,
} from 'lucide-react';

export const PROFILE = {
  name: 'Vinuthna Kumar Sallapudi',
  shortName: 'Vinuthna',
  title: 'AI Engineer | Full Stack Developer | IoT Engineer | Freelancer',
  roles: ['AI Engineer', 'Freelancer', 'Full Stack Developer', 'IoT Engineer'],
  tagline:
    'Building intelligent software, AI products, enterprise applications, and real-world IoT solutions.',
  subtitle:
    'I build AI-powered software, enterprise platforms, APIs, and real-world IoT solutions, along with freelance products for growing businesses.',
  intro:
    'I am an AI Engineer and Full Stack Developer with 3+ years of experience at IKRGY Infotech Pvt. Ltd., building enterprise software, AI applications, backend systems, IoT solutions, and real-world digital products. I specialize in developing scalable web applications, AI-powered systems, enterprise platforms, cloud-based solutions, and real-time products that solve meaningful business problems.',
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
  { value: 3, suffix: '+', label: 'Years Experience' },
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
    role: 'AI Engineer & Full Stack Developer',
    company: 'IKRGY Infotech Pvt. Ltd.',
    duration: '3+ Years',
    responsibilities: [
      'Backend Development with Python & FastAPI',
      'REST API Design & Architecture',
      'Performance Optimization',
      'Database Design',
      'AI Product Development',
      'Enterprise Software Development',
      'IoT and Real-Time Systems',
      'Code Review & System Design',
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
  group: 'company' | 'freelance' | 'personal';
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
    group: 'company',
    title: 'NyroGPT',
    category: 'AI Chat Product',
    icon: Bot,
    description:
      'An AI product inspired by ChatGPT, designed for conversational assistance with intelligent responses, prompt workflows, and a polished chat experience.',
    features: ['AI-powered conversations', 'Prompt engineering', 'Streaming responses', 'Conversation history', 'Responsive chat interface'],
    stack: ['React', 'FastAPI', 'OpenAI API', 'PostgreSQL'],
    architecture: 'A FastAPI AI service streams model responses to a React chat interface while user sessions and conversation history are persisted in PostgreSQL.',
    challenge: 'Creating a reliable, responsive conversational experience with smooth streaming and maintainable AI workflows.',
    achievements: ['ChatGPT-style product experience', 'Real-time AI responses', 'Reusable AI product workflows'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    demo: 'http://nyrogpt.com/',
  },
  {
    group: 'company',
    title: 'ICMS',
    category: 'Integrated Campus Management System',
    icon: GraduationCap,
    description:
      'A complete campus management platform for managing student enrolment, academic operations, administration, and connected institutional workflows.',
    features: ['Student enrolment', 'Student records', 'Academic management', 'Administration workflows', 'Campus-wide reporting'],
    stack: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
    architecture: 'A role-based enterprise platform with modular APIs, centralized student data, and dashboards for campus stakeholders.',
    challenge: 'Bringing multiple campus processes into one reliable system while keeping workflows clear for students, staff, and administrators.',
    achievements: ['Centralized campus operations', 'Role-based access workflows', 'Scalable student management foundation'],
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200',
    demo: 'https://icms.nyrogpt.com/',
  },
  {
    group: 'company',
    title: 'Sreepudami Product Showcase',
    category: 'Product Showcase Platform',
    icon: Globe,
    description:
      'A product showcase application for Sreepudami that presents the company\'s products through QR codes and a responsive website experience.',
    features: ['QR-based product access', 'Product catalogue', 'Responsive website', 'Product details and media', 'Easy customer discovery'],
    stack: ['React', 'FastAPI', 'PostgreSQL', 'QR Integration'],
    architecture: 'A product catalogue backend serves QR-linked product pages and a responsive public website for browsing the company\'s offerings.',
    challenge: 'Making product information immediately accessible from physical QR codes while maintaining a consistent web experience.',
    achievements: ['QR-enabled product discovery', 'Public product showcase', 'Mobile-friendly catalogue experience'],
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/ikrgycloud/updated-qr.git',
  },
  {
    group: 'freelance',
    title: 'Giftora',
    category: 'E-commerce Application',
    icon: ShoppingBag,
    description:
      'An e-commerce application for showcasing and selling products online, with a smooth customer journey from product discovery to purchase.',
    features: ['Product catalogue', 'Product details', 'Shopping experience', 'Customer-friendly UI', 'Responsive storefront'],
    stack: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    architecture: 'A responsive storefront connected to backend product and order APIs with PostgreSQL persistence.',
    challenge: 'Creating a simple, trustworthy shopping experience that makes products easy to discover and purchase.',
    achievements: ['Online product storefront', 'Responsive shopping experience', 'Structured product catalogue'],
    image:
      'https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=1200',
    demo: 'https://giftora.co.in/',
  },
  {
    group: 'freelance',
    title: 'Company Portal',
    category: 'Business Management Portal',
    icon: Building2,
    description:
      'A company portal for managing internal business operations, users, roles, and administrative workflows through one centralized platform.',
    features: ['Role-based authentication', 'Employee management', 'Admin dashboard', 'Internal operations', 'Centralized records'],
    stack: ['PHP', 'Laravel', 'MySQL'],
    architecture: 'An MVC Laravel application with role middleware, administrative modules, and a MySQL data layer.',
    challenge: 'Designing flexible permissions and internal workflows that remain simple for different business roles.',
    achievements: ['Role-based access control', 'Admin dashboard shipped', 'Centralized business operations'],
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/vinnu1234-su/Company_Profile.git',
  },
  {
    group: 'freelance',
    title: 'Mahogany Website Portal',
    category: 'Agriculture & Cultivation Platform',
    icon: Sprout,
    description:
      'A Mahogany cultivation website portal for growing seeds, managing cultivation as a lender, and sharing profit outcomes with the owner.',
    features: ['Seed and cultivation information', 'Lender-focused portal', 'Growth tracking', 'Owner profit reporting', 'Responsive website'],
    stack: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    architecture: 'A web portal that organizes cultivation information, lender participation, growth updates, and owner-facing profit records.',
    challenge: 'Presenting a long-term cultivation and profit-sharing process in a clear and trustworthy digital experience.',
    achievements: ['Mahogany cultivation showcase', 'Lender information portal', 'Profit-sharing visibility'],
    image:
      'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/vinnu1234-su/Mahogani_Grove.git',
  },
  {
    group: 'personal',
    title: 'Invisible Assistance',
    category: 'AI Personal Assistant',
    icon: Bot,
    description:
      'A personal AI assistant concept designed to help with tasks, information, planning, and everyday workflows in the background.',
    features: ['Natural language interaction', 'Task assistance', 'Information retrieval', 'Workflow support', 'Context-aware responses'],
    stack: ['React', 'FastAPI', 'OpenAI API', 'PostgreSQL'],
    architecture: 'A conversational AI service connects user requests to task workflows and persistent context through a responsive client application.',
    challenge: 'Designing assistance that feels useful and unobtrusive while keeping the user in control of every action.',
    achievements: ['Personal AI assistant experience', 'Context-aware workflow concept', 'Invisible-by-design interaction model'],
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/Development-2-product/AI-Assistant.git',
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
  'Delivered freelance products for growing businesses',
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
    slug: 'invisible-assistance-ai-that-works-like-you',
    title: 'Invisible Assistance: AI That Works Like You',
    excerpt:
      'Exploring an AI application that understands a specific user, learns their working style, and helps complete tasks with a human-like flow.',
    tag: 'AI Product',
    date: 'Featured article',
    readTime: '6 min',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Invisible Assistance is a personal AI assistant designed to work in the background, helping a person complete everyday tasks without forcing them to constantly manage the technology.',
      'The idea is not to create another chat window. It is to create an assistant that understands a specific user\'s preferences, routines, communication style, and goals, then uses that context to make useful decisions within clearly defined boundaries.',
      'A strong version of this product could organize information, prepare drafts, remember recurring workflows, retrieve the right context, and suggest the next action. It should feel natural because it follows the user\'s way of working instead of asking the user to adapt to a rigid system.',
      'Trust is central to the experience. Every important action should be visible, controllable, and easy to review. The assistant can automate repetitive work while leaving final ownership with the person it supports.',
      'The long-term vision is an AI layer that feels almost invisible: present when needed, quiet when not needed, and capable of turning intent into useful action like a reliable human assistant.',
    ],
  },
  {
    slug: 'building-with-companies-through-freelance-collaboration',
    title: 'Building With Companies Through Freelance Collaboration',
    excerpt:
      'How collaborating with multiple companies turns real business requirements into useful products, portals, and customer-facing experiences.',
    tag: 'Freelancing',
    date: 'New article',
    readTime: '5 min',
    image:
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Freelance collaboration is an opportunity to work closely with different companies and understand how technology supports their real operations. Every project starts with a business need, not just a list of screens.',
      'Some companies need an e-commerce experience, while others need a company portal, QR-based product discovery, or a cultivation platform that explains a long-term investment journey. The product is successful when it makes that business easier to understand and easier to operate.',
      'The most valuable part of this work is translating conversations into simple user flows, dependable backend systems, and interfaces that customers can use without training. Clear communication is as important as the code itself.',
      'Working with multiple companies also creates a continuous feedback loop. Each collaboration improves how I estimate work, design systems, handle changing requirements, and deliver software that can grow with the business.',
    ],
  },
  {
    slug: 'launching-new-products-from-idea-to-release',
    title: 'Launching New Products From Idea to Release',
    excerpt:
      'A practical look at turning a product idea into a focused release, from defining the user problem to shipping a useful first version.',
    tag: 'Product Building',
    date: 'New article',
    readTime: '5 min',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Launching a new product begins with a clear problem. The first version does not need every possible feature; it needs to solve one valuable problem well enough for people to use and respond to it.',
      'The process usually moves through four stages: understand the user, define the smallest useful workflow, build a reliable foundation, and learn from real usage. This keeps product decisions connected to outcomes instead of assumptions.',
      'For AI and enterprise products, the foundation matters. Authentication, data design, observability, permissions, and a clear path for future changes should be considered early so the product can move quickly without becoming fragile.',
      'A launch is not the end of the work. It is the beginning of a feedback cycle that helps improve the experience, prioritize the next features, and turn a promising idea into a dependable product.',
    ],
  },
];

export const CONTACT_METHODS = [
  { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail },
  { label: 'Phone', value: PROFILE.phone, href: 'tel:+919014908994', icon: Phone },
  { label: 'Website', value: PROFILE.website, href: 'https://vinnu.wieetech.com/', icon: Globe },
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
