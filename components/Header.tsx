import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  const isActive = (path: string) => {
    if (path === '/') return router.pathname === '/'
    return router.pathname === path || router.pathname.startsWith(path + '/')
  }

  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo">
          <span className="logo-text">CasaXpress</span>
        </Link>

        <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link href="/" className={isActive('/') ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/care" className={isActive('/care') ? 'active' : ''}>
                Care at Home
              </Link>
              <div className="nav-dropdown nav-dropdown--care">
                <Link href="/care">Overview</Link>
                <Link href="/care/personal-care">Personal Care</Link>
                <Link href="/care/companionship">Companionship</Link>
                <Link href="/care/daily-living-support">Daily Living Support</Link>
                <Link href="/care/respite-care">Respite Care</Link>
                <Link href="/care/recovery-support">Recovery Support</Link>
                <Link href="/care/dementia-support">Dementia Support</Link>
                <Link href="/care/family-support">Family Support &amp; FAQs</Link>
                <Link href="/care/enquiry">Care Enquiry</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/cleaning" className={isActive('/cleaning') ? 'active' : ''}>
                Home Cleaning
              </Link>
              <div className="nav-dropdown nav-dropdown--clean">
                <Link href="/cleaning">Overview</Link>
                <Link href="/contact">Book a Cleaning Visit</Link>
              </div>
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

        <div className="header-ctas">
          <Link href="/care/enquiry" className="btn btn-care btn-header">
            Start Care Enquiry
          </Link>
          <Link href="/contact" className="btn btn-clean-outline btn-header">
            Book Cleaning
          </Link>
        </div>
      </div>
    </header>
  )
}
