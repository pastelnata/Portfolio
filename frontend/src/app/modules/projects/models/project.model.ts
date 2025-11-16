export interface Project {
  id: number;
  name: string;
  description: string;
  demoLink?: string;
  codeLink: string;
  techStack: string[];
  features: string[];
  architecture?: string;
  createdAt: Date;
  imageUrl?: string;
}
