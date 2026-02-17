import Link from 'next/link'

interface HeaderProps {
  showInfo?: boolean
  showProjects?: boolean
  showClose?: boolean
}

export default function Header({ 
  showInfo = true, 
  showProjects = true, 
  showClose = false 
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:opacity-70 transition">
          Hulash Chand Donempudi
        </Link>
        
        <nav className="flex gap-8">
          {showInfo && (
            <Link href="/info" className="hover:opacity-70 transition">
              Info
            </Link>
          )}
          {showProjects && (
            <Link href="/projects" className="hover:opacity-70 transition">
              Projects
            </Link>
          )}
          {showClose && (
            <Link href="/" className="hover:opacity-70 transition">
              Close
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
