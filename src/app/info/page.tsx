import Image from 'next/image'

export default function InfoPage() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold hover:opacity-70 transition">
            Hulash Chand Donempudi
          </a>
          
          <nav className="flex gap-8">
            <a href="/" className="hover:opacity-70 transition">
              Close
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-20 container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I'm a Data Engineer with expertise in building scalable data systems, cloud infrastructure,
            and full-stack web applications. Currently based in London, I specialize in AWS services,
            Python, and modern JavaScript frameworks.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I founded TechEdge Academy and have experience working with enterprise systems at companies
            like Bondgate and Rolls Royce. My focus is on creating efficient, maintainable solutions
            that solve real-world problems.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Data Engineering</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Python, SQL</li>
                <li>AWS (S3, Lambda, Glue, Redshift)</li>
                <li>ETL Pipelines</li>
                <li>Data Modeling</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Full-Stack Development</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Next.js, React, TypeScript</li>
                <li>Tailwind CSS</li>
                <li>REST APIs, WebSockets</li>
                <li>Database Design</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">TechEdge Academy - Founder</h3>
              <p className="text-gray-600 mb-2">Educational technology platform</p>
            </div>
            <div>
              <h3 className="font-semibold">Bondgate - Managed Desktop Services</h3>
              <p className="text-gray-600 mb-2">IT infrastructure management</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Current Focus</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm pursuing AWS and Oracle certifications while building projects in healthcare technology
            and financial trading algorithms. Always learning and exploring new technologies like
            quantum computing and AI agents.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="space-y-2">
            <p className="text-gray-700">
              <strong>GitHub:</strong>{' '}
              <a href="https://github.com/hulashc" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:underline">
                @hulashc
              </a>
            </p>
            <p className="text-gray-700">
              <strong>Location:</strong> London, England, UK
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
