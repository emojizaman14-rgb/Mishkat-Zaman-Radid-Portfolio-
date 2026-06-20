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
  profession: 'UI/UX Designer',
  subtitle: 'Learning Robotics & Coding',
  email: 'mishkat.zaman.one@gmail.com',
  whatsapp: '+8801862256865',
  bio: 'I am Mishkat Zaman Radid, a passionate UI/UX Designer and technology enthusiast. I am currently learning Robotics and Programming while continuously improving my design and development skills. I enjoy creating modern digital experiences with beautiful interfaces and smooth user experiences.',
  typedRoles: [
    'UI/UX Designer',
    'Frontend Enthusiast',
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
  { value: 2, suffix: '+', label: 'Years Learning Experience', delay: 0.1 },
  { value: 15, suffix: '+', label: 'Projects Completed', delay: 0.2 },
  { value: 8, suffix: '+', label: 'Technologies Learned', delay: 0.3 },
  { value: 100, suffix: '%', label: 'Passion For Innovation', delay: 0.4 }
];

export const skillsData: SkillItem[] = [
  { name: 'UI/UX Design', category: 'design', percentage: 95, iconName: 'Layout', level: 'Expert', delay: 0.1 },
  { name: 'Figma', category: 'design', percentage: 92, iconName: 'Figma', level: 'Expert', delay: 0.2 },
  { name: 'HTML & CSS', category: 'frontend', percentage: 90, iconName: 'Html5', level: 'Advanced', delay: 0.3 },
  { name: 'JavaScript', category: 'frontend', percentage: 80, iconName: 'Code2', level: 'Intermediate', delay: 0.4 },
  { name: 'Tailwind CSS', category: 'frontend', percentage: 88, iconName: 'Wind', level: 'Advanced', delay: 0.5 },
  { name: 'Python', category: 'frontend', percentage: 75, iconName: 'Terminal', level: 'Intermediate', delay: 0.6 },
  { name: 'Robotics', category: 'robotics', percentage: 70, iconName: 'Cpu', level: 'Passionate', delay: 0.7 },
  { name: 'Responsive Design', category: 'design', percentage: 95, iconName: 'Smartphone', level: 'Expert', delay: 0.8 },
  { name: 'Prototyping', category: 'design', percentage: 88, iconName: 'Cpu', level: 'Expert', delay: 0.9 }
];

export const servicesData: ServiceItem[] = [
  {
    id: 's1',
    title: 'UI/UX Design',
    description: 'Creating intuitive user flows, dark cyber interfaces, wireframes, and modern experiences aligned with industry-leading practices and visual trends.',
    iconName: 'Compass',
    techStack: ['Figma', 'User Research', 'Wireframing'],
    delay: 0.1
  },
  {
    id: 's2',
    title: 'Website Design',
    description: 'Crafting visually stunning web experiences prioritizing dark luxury styling, fluid screen layouts, and elegant bespoke layouts tailored to tech projects.',
    iconName: 'Laptop',
    techStack: ['Visual Design', 'Web Aesthetics', 'Figma'],
    delay: 0.2
  },
  {
    id: 's3',
    title: 'Responsive Web Design',
    description: 'Ensuring seamless responsiveness and smooth layout scaling across all modern form factors (mobile, tablet, laptop, and ultra-wide desktops).',
    iconName: 'Smartphone',
    techStack: ['Tailwind CSS', 'Mobile First', 'Media Queries'],
    delay: 0.3
  },
  {
    id: 's4',
    title: 'Frontend Development',
    description: 'Translating rich Figma prototypes into pixel-perfect interactive code with neat animations, utilizing React, HTML5, CSS3, and JavaScript.',
    iconName: 'Code',
    techStack: ['React', 'JavaScript', 'Tailwind CSS'],
    delay: 0.4
  },
  {
    id: 's5',
    title: 'Design Systems',
    description: 'Developing highly atomic, maintainable, scalable token-driven design architectures inside Figma and tailwind configurations for teams.',
    iconName: 'Layers',
    techStack: ['Atomic Design', 'Figma Components', 'Tokens'],
    delay: 0.5
  },
  {
    id: 's6',
    title: 'Prototyping',
    description: 'Building close-to-product high-fidelity micro-interactions and transitions to demonstrate complex UI animations and test real usability.',
    iconName: 'Activity',
    techStack: ['Figma Prototyping', 'Interactive Flows', 'Motion'],
    delay: 0.6
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: 'e1',
    period: '2024 - Present',
    title: 'Aspiring Programmer & Robotics Builder',
    subtitle: 'Self-education and Prototyping',
    description: 'Actively studying robotics architectures, Raspberry Pi / Arduino circuit programming, and Python alongside advanced frontend development concepts.',
    type: 'education'
  },
  {
    id: 'e2',
    period: '2022 - Present',
    title: 'Independent UI/UX Designer',
    subtitle: 'Figma and Digital Interface Design',
    description: 'Designing fully responsive pages, custom dashboards, app frames, and high-fidelity prototypes focusing on dark aesthetics and micro-interactions.',
    type: 'experience'
  },
  {
    id: 'e3',
    period: '2021 - 2023',
    title: 'Primary Computer Science Foundation',
    subtitle: 'Foundational Coding & Design Principles',
    description: 'First learned basic syntax in HTML/CSS and logic structures, leading to a deep passion for modern UI aesthetics and automated smart mechanical models.',
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
