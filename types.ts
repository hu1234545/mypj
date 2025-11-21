export interface Project {
  id: string;
  title: string;
  role: string;
  period?: string;
  description: string;
  points: string[];
  techStack: string[];
  category: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  level: '国家级' | '省级' | '校级' | '证书';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}