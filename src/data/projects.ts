export interface Project {
  id: string
  title: string
  subtitle: string
  date: string
  color: string
  image: string
  link: string
  description?: string
  technologies?: string[]
  github?: string
  demo?: string
}

export const projectsData: Project[] = [
  {
    id: 'leetjourney',
    title: 'Leet Journey',
    subtitle: 'Obsidian Notes',
    date: 'November 2024',
    color: '#e6c7e6',
    image: '/content/uploads/2025/leet-journey/leet-journey-0.png',
    link: '/projects/leetjourney-obsidian-notes/',
    description: 'Comprehensive coding interview preparation notes using Obsidian',
    technologies: ['Obsidian', 'Markdown', 'Data Structures', 'Algorithms'],
  },
  {
    id: 'system-design',
    title: 'System Design',
    subtitle: 'Architecture',
    date: 'November 2025',
    color: '#c8e6c9',
    image: '/content/uploads/2025/system-design/system-design-0.png',
    link: '/projects/system-design-architecture/',
    description: 'Architecture patterns and solutions for scalable systems',
    technologies: ['System Design', 'Architecture', 'Scalability'],
  },
  {
    id: 'birdsong',
    title: 'Bird Song',
    subtitle: 'Mathematical Model',
    date: 'November 2025',
    color: '#f2a7a7',
    image: '/content/uploads/2025/bird-song/bird-song-0.png',
    link: '/projects/birdsong-mathematical-model/',
    description: 'Mathematical modeling of bird song patterns',
    technologies: ['Mathematics', 'Modeling', 'Analysis'],
  },
  {
    id: 'techedge-academy',
    title: 'TechEdge Academy',
    subtitle: 'Educational Platform',
    date: 'In Progress',
    color: '#b3d9ff',
    image: '/content/uploads/2025/placeholder.png',
    link: '/projects/techedge-academy/',
    description: 'Educational technology platform for modern learning',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 'healthcare-scheduling',
    title: 'Healthcare Scheduling',
    subtitle: 'Nourish/PASS Platform',
    date: 'In Progress',
    color: '#ffd9b3',
    image: '/content/uploads/2025/placeholder.png',
    link: '/projects/healthcare-scheduling/',
    description: 'Unified healthcare scheduling and management solution',
    technologies: ['Full-Stack', 'Database Design', 'Healthcare'],
  },
  {
    id: 'nasdaq-trading',
    title: 'NASDAQ Trading',
    subtitle: 'Momentum Algorithm',
    date: 'In Progress',
    color: '#d9b3ff',
    image: '/content/uploads/2025/placeholder.png',
    link: '/projects/nasdaq-trading-algorithm/',
    description: 'Momentum-based trading strategy for NASDAQ stocks',
    technologies: ['Python', 'Financial APIs', 'Algorithmic Trading'],
  },
]
