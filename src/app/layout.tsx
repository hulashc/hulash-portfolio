import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hulash Chand Donempudi | Data Engineer & Full-Stack Developer',
  description: 'HULASH is a data engineer designing scalable data systems across cloud, analytics, and automation.',
  keywords: ['data engineer', 'AWS', 'Python', 'full-stack developer', 'Next.js', 'React'],
  authors: [{ name: 'Hulash Chand Donempudi' }],
  openGraph: {
    title: 'Hulash Chand Donempudi',
    description: 'Data Engineer designing scalable data systems across cloud, analytics, and automation.',
    url: 'https://www.hulash.com',
    siteName: 'Hulash Chand Donempudi',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
