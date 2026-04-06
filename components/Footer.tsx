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
              Care at home and trusted domestic support.
            </p>
            <div style={{ marginTop: '1.25rem' }}>
              <p className="footer-text">
                <a href="tel:+447398761877" style={{ color: '#fff', fontWeight: 600 }}>07398 761 877</a>
              </p>
              <p className="footer-text">
                <a href="mailto:casaxpress.ae@gmail.com">casaxpress.ae@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Care at Home</h4>
            <ul className="footer-links">
              <li><Link href="/care">Overview</Link></li>
              <li><Link href="/care/personal-care">Personal Care</Link></li>
              <li><Link href="/care/companionship">Companionship</Link></li>
              <li><Link href="/care/daily-living-support">Daily Support</Link></li>
              <li><Link href="/care/respite-care">Respite Care</Link></li>
              <li><Link href="/care/enquiry">Care Enquiry</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Home Cleaning</h4>
            <ul className="footer-links">
              <li><Link href="/cleaning">Overview</Link></li>
              <li><Link href="/cleaning#regular">Regular Cleaning</Link></li>
              <li><Link href="/cleaning#deep">Deep Cleaning</Link></li>
              <li><Link href="/contact">Book a Visit</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Company</h4>
            <ul className="footer-links">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/care/family-support">FAQs</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} CasaXpress. All rights reserved.</p>
          <div className="footer-bottom__links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
