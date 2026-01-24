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
          <span className="logo-text">Strathmore Cleaning</span>
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
