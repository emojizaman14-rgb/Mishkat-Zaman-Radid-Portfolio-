import { StatsItem, ProjectItem, SkillItem, ServiceItem, TimelineItem, NavigationItem } from './types';

export const navigationItems: NavigationItem[] = [
  { name: 'home', label: 'Home', href: '#home' },
  { name: 'about', label: 'About', href: '#about' },
  { name: 'skills', label: 'Skills', href: '#skills' },
  { name: 'services', label: 'Services', href: '#services' },
  { name: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { name: 'contact', label: 'Contact', href: '#contact' }
];

export const personalInfo = {
  name: 'Mishkat Zaman Radid',
  profession: 'UI/UX Designer & Psychologist',
  subtitle: 'Learning Robotics, Coding & Psychological Science',
  email: 'mishkat.zaman.one@gmail.com',
  whatsapp: '+8801862256865',
  bio: 'I am Mishkat Zaman Radid, a passionate UI/UX Designer, technology enthusiast, and aspiring Psychologist. I specialize in merging cognitive psychology and human behavior with technology, UI/UX aesthetics, and Robotics. I design beautiful, highly intuitive interfaces engineered with cognitive principles to provide seamless digital experiences while offering psychological guidance and professional consulting.',
  typedRoles: [
    'UI/UX Designer',
    'Psychologist',
    'Robotics Learner',
    'Programmer'
  ],
  socials: {
    facebook: 'https://www.facebook.com/search/top/?q=MISHKAT%20ZAMAN',
    instagram: 'https://www.instagram.com/_radid__',
    pinterest: 'https://www.pinterest.com/search/users/?q=Mishkat%20Zaman',
    whatsapp: 'https://wa.me/8801862256865'
  }
};

export const statsData: StatsItem[] = [
  { value: 1.5, suffix: '+', label: 'Years Experience', delay: 0.1 },
  { value: 15, suffix: '+', label: 'Projects Completed', delay: 0.2 },
  { value: 8, suffix: '+', label: 'Technologies Learned', delay: 0.3 },
  { value: 100, suffix: '%', label: 'Passion For Innovation', delay: 0.4 }
];

export const skillsData: SkillItem[] = [
  { name: 'UI/UX Design', category: 'design', percentage: 95, iconName: 'Layout', level: 'Expert', delay: 0.1 },
  { name: 'Figma', category: 'design', percentage: 92, iconName: 'Figma', level: 'Expert', delay: 0.2 },
  { name: 'Graphic Design', category: 'design', percentage: 75, iconName: 'Palette', level: 'Intermediate', delay: 0.25 },
  { name: 'HTML & CSS', category: 'frontend', percentage: 90, iconName: 'Html5', level: 'Advanced', delay: 0.3 },
  { name: 'JavaScript', category: 'frontend', percentage: 80, iconName: 'Code2', level: 'Intermediate', delay: 0.4 },
  { name: 'Tailwind CSS', category: 'frontend', percentage: 88, iconName: 'Wind', level: 'Advanced', delay: 0.5 },
  { name: 'Python', category: 'frontend', percentage: 75, iconName: 'Terminal', level: 'Intermediate', delay: 0.6 },
  { name: 'Robotics', category: 'robotics', percentage: 70, iconName: 'Cpu', level: 'Passionate', delay: 0.7 },
  { name: 'Responsive Design', category: 'design', percentage: 95, iconName: 'Smartphone', level: 'Expert', delay: 0.8 },
  { name: 'Prototyping', category: 'design', percentage: 88, iconName: 'Cpu', level: 'Expert', delay: 0.9 },
  { name: 'Cognitive Psychology', category: 'psychology', percentage: 90, iconName: 'Brain', level: 'Expert', delay: 0.1 },
  { name: 'Human Behavior Analysis', category: 'psychology', percentage: 85, iconName: 'Activity', level: 'Advanced', delay: 0.2 },
  { name: 'Behavioral UX Consulting', category: 'psychology', percentage: 88, iconName: 'Heart', level: 'Expert', delay: 0.3 }
];

export const servicesData: ServiceItem[] = [
  {
    id: 's1',
    title: 'UI/UX & Cognitive Design',
    description: 'Creating intuitive user flows structured around cognitive guidelines, dark cyber interfaces, wireframes, and modern experiences rooted in behavioral science.',
    iconName: 'Compass',
    techStack: ['Figma', 'Cognitive UX', 'User Research'],
    delay: 0.1
  },
  {
    id: 's2',
    title: 'Psychological Consultation',
    description: 'Offering digital counseling and behavioral consulting, analyzing user/human psychology to resolve complex mental and modern digital engagement challenges.',
    iconName: 'Brain',
    techStack: ['CBT Principles', 'Consultation', 'Mental Science'],
    delay: 0.2
  },
  {
    id: 's3',
    title: 'Website Design',
    description: 'Crafting visually stunning web experiences prioritizing dark luxury styling, fluid screen layouts, and elegant bespoke layouts tailored to tech projects.',
    iconName: 'Laptop',
    techStack: ['Visual Design', 'Web Aesthetics', 'Figma'],
    delay: 0.3
  },
  {
    id: 's4',
    title: 'Responsive Web Design',
    description: 'Ensuring seamless responsiveness and smooth layout scaling across all modern form factors (mobile, tablet, laptop, and ultra-wide desktops).',
    iconName: 'Smartphone',
    techStack: ['Tailwind CSS', 'Mobile First', 'Media Queries'],
    delay: 0.4
  },
  {
    id: 's5',
    title: 'Frontend Development',
    description: 'Translating rich Figma prototypes into pixel-perfect interactive code with neat animations, utilizing React, HTML5, CSS3, and JavaScript.',
    iconName: 'Code',
    techStack: ['React', 'JavaScript', 'Tailwind CSS'],
    delay: 0.5
  },
  {
    id: 's6',
    title: 'Behavioral UX Audits',
    description: 'Evaluating applications for positive friction, attention retention, mental load minimization, and peak usability using psychiatric-backed frameworks.',
    iconName: 'Layers',
    techStack: ['Retention Auditing', 'Nudge Theory', 'Usability'],
    delay: 0.6
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: 'e1',
    period: 'Present',
    title: 'High School Student',
    subtitle: 'General Academic Studies & Science',
    description: 'Currently studying in high school, pairing secondary education with self-taught graphics design, UI/UX aesthetics, and coding systems.',
    type: 'education'
  },
  {
    id: 'e1_psy',
    period: 'Present',
    title: 'Psychology Practitioner & Researcher',
    subtitle: 'Human Behavior & Psychological Consultation',
    description: 'Studying cognitive psychology, counseling, and human behavioral patterns to offer mental counseling and implement UX cognitive audits in digital products.',
    type: 'experience'
  },
  {
    id: 'e2',
    period: '1.5 Years Experience',
    title: 'Freelance UI/UX & Graphic Designer',
    subtitle: 'Independent Design, Brand Styling & Prototyping',
    description: 'Creating high-fidelity Figma designs, pixel-perfect layouts, responsive web components, and graphics art for personal and client-focused projects.',
    type: 'experience'
  },
  {
    id: 'e3',
    period: '2022 - Present',
    title: 'Web Coding & Robotics Learner',
    subtitle: 'Foundational Programming & Automation',
    description: 'Self-studying Python, Javascript, HTML/CSS, and Arduino circuit boards to fuse interactive mechanics with creative frontend development, active for over 1.5 years.',
    type: 'education'
  }
];

export const portfolioData: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Aura Premium Design System',
    description: 'A modern token-based atomic glassmorphism design system for sleek dashboard architectures and SaaS platforms.',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80',
    tags: ['Figma', 'UI/UX', 'Design System'],
    demoUrl: 'https://figma.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 'p2',
    title: 'Sleek Robot Path Planner',
    description: 'Interactive web path visualization interface and control deck for custom 4-axis robotic arm coordinates.',
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80',
    tags: ['Python', 'Arduino', 'Robotics', 'Web App'],
    demoUrl: '#',
    githubUrl: 'https://github.com'
  },
  {
    id: 'p3',
    title: 'Hyper Premium Dark Portfolio',
    description: 'Award-winning interactive modern portfolio website built in React with premium glassmorphism overlay.',
    category: 'Code',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=700&q=80',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    demoUrl: '#',
    githubUrl: 'https://github.com'
  },
  {
    id: 'p4',
    title: 'Automated Obstacle Robot Simulation',
    description: 'Web controls dashboard with physical simulation testing pathfinding loops and sensor trigger inputs.',
    category: 'Robotics',
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=700&q=80',
    tags: ['Physics Eng', 'Robotics', 'Python'],
    demoUrl: '#',
    githubUrl: 'https://github.com'
  },
  {
    id: 'p5',
    title: 'Chronos Smart Watch Interface',
    description: 'Fully responsive wearable screen collection with micro-interactions, dark cyberpunk style, and fitness dashboards.',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=700&q=80',
    tags: ['Figma', 'Wearable UX', 'Mobile Design'],
    demoUrl: 'https://figma.com',
    githubUrl: 'https://github.com'
  },
  {
    id: 'p6',
    title: 'Dynamic Web Synth Workspace',
    description: 'An audio-visual synthesizer platform showcasing fluid React interactive controls and visual analytics.',
    category: 'Code',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=700&q=80',
    tags: ['Web Audio', 'TypeScript', 'Tailwind'],
    demoUrl: '#',
    githubUrl: 'https://github.com'
  }
];
