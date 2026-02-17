import Link from 'next/link'
import Image from 'next/image'
import ProjectGrid from '@/components/ProjectGrid'

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:opacity-70 transition">
            Hulash Chand Donempudi
          </Link>
          
          <nav className="flex gap-8">
            <Link href="/info" className="hover:opacity-70 transition">
              Info
            </Link>
            <Link href="/projects" className="hover:opacity-70 transition">
              Projects
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section className="container mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-6">
            Data Engineer & Full-Stack Developer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-8">
            Designing scalable data systems across cloud, analytics, and automation.
            Specializing in AWS, Python, and modern web technologies.
          </p>
        </section>

        <ProjectGrid />
      </main>

      <footer className="border-t py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Hulash Chand Donempudi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
