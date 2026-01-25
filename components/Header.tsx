import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  const isActive = (path: string) => {
    return router.pathname === path
  }

  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              background: '#a3e635',
              width: '45px',
              height: '45px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: '#1e293b',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              CX
            </div>
            <span className="logo-text">
              <span style={{ color: '#1e293b' }}>Casa</span>
              <span style={{ color: '#a3e635' }}>Xpress</span>
            </span>
          </div>
        </Link>

        <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link href="/" className={isActive('/') ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={isActive('/services') ? 'active' : ''}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive('/about') ? 'active' : ''}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="/contact" className="btn btn-header">
          Get a Quote
        </Link>
      </div>
    </header>
  )
}
