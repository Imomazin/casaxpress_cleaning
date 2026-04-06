import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-heading">CasaXpress</h3>
            <p className="footer-text">
              Compassionate care at home and trusted cleaning services.
              Supporting families with dignity, warmth, and dependable
              home support across the UK.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Care at Home</h4>
            <ul className="footer-links">
              <li><Link href="/care">Care Overview</Link></li>
              <li><Link href="/care/personal-care">Personal Care</Link></li>
              <li><Link href="/care/companionship">Companionship</Link></li>
              <li><Link href="/care/daily-living-support">Daily Living Support</Link></li>
              <li><Link href="/care/respite-care">Respite Care</Link></li>
              <li><Link href="/care/recovery-support">Recovery Support</Link></li>
              <li><Link href="/care/dementia-support">Dementia Support</Link></li>
              <li><Link href="/care/enquiry">Care Enquiry</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Home Cleaning</h4>
            <ul className="footer-links">
              <li><Link href="/cleaning">Cleaning Overview</Link></li>
              <li><Link href="/contact">Book a Visit</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Company</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/care/family-support">FAQs</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Get in Touch</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:hello@casaxpress.co.uk">hello@casaxpress.co.uk</a>
              </li>
              <li>
                <a href="tel:+441234567890">01234 567 890</a>
              </li>
              <li>Service Area: UK-wide</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} CasaXpress. All rights reserved.</p>
          <div className="footer-bottom__links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
