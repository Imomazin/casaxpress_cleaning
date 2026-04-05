import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  const isActive = (path: string) => {
    return router.pathname === path || router.pathname.startsWith(path + '/')
  }

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="container">
          <span className="announcement-bar__text">
            Compassionate care and trusted home services for families across the UK
          </span>
          <div className="announcement-bar__right">
            <a href="tel:+441234567890" className="announcement-bar__phone">
              01234 567 890
            </a>
            <Link href="/care/enquiry" className="announcement-bar__cta">
              Request a Callback
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="container header-container">
          <Link href="/" className="logo">
            <span className="logo-text">CasaXpress</span>
          </Link>

          <nav className="nav">
            <ul className="nav-links">
              <li>
                <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
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
                  <Link href="/cleaning#regular">Regular Cleaning</Link>
                  <Link href="/cleaning#deep">Deep Cleaning</Link>
                  <Link href="/cleaning#move">Move In / Out Cleaning</Link>
                  <Link href="/cleaning#tenancy">End of Tenancy</Link>
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
    </>
  )
}
