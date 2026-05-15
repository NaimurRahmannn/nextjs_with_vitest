import { ReactNode } from 'react'
import Link from 'next/link'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ border: '2px solid #ccc', padding: '20px' }}>
      <h2>Dashboard Section</h2>
      <nav style={{ marginBottom: '10px' }}>
        <Link href="/dashboard">Main</Link> |{' '}
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
      <div style={{ padding: '10px', background: '#f9f9f9' }}>
        {children}
      </div>
    </div>
  )
}