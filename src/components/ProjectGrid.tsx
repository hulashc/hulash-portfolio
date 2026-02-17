import Image from 'next/image'
import Link from 'next/link'
import { projectsData } from '@/data/projects'

export default function ProjectGrid() {
  return (
    <section className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Link 
            key={project.id}
            href={project.link}
            className="group block overflow-hidden rounded-lg border hover:shadow-lg transition"
            style={{ borderColor: project.color }}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={640}
                height={360}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.subtitle}</p>
              <span className="text-sm text-gray-500">{project.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
