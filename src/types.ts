export interface NavigationItem {
  name: string;
  label: string;
  href: string;
}

export interface StatsItem {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: 'Design' | 'Code' | 'Robotics' | 'All';
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface SkillItem {
  name: string;
  category: 'design' | 'frontend' | 'robotics' | 'psychology';
  percentage: number;
  iconName: string;
  level: string;
  delay: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  techStack: string[];
  delay: number;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'experience';
}
