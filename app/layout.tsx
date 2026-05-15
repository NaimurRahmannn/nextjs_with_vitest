import { ReactNode } from 'react'
import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '10px', background: '#f0f0f0' }}>
          <Link href="/">Home</Link> |{' '}
          <Link href="/about">About</Link> |{' '}
          <Link href="/dashboard">Dashboard</Link>
        </header>
        <main style={{ padding: '20px' }}>{children}</main>
        <footer style={{ marginTop: '20px', textAlign: 'center' }}>
          © 2026 Next.js Demo
        </footer>
      </body>
    </html>
  )
}