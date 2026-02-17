import ProjectGrid from '@/components/ProjectGrid'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold hover:opacity-70 transition">
            Hulash Chand Donempudi
          </a>
          
          <nav className="flex gap-8">
            <a href="/info" className="hover:opacity-70 transition">
              Info
            </a>
            <a href="/" className="hover:opacity-70 transition">
              Close
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-20 container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <ProjectGrid />
      </main>
    </div>
  )
}
