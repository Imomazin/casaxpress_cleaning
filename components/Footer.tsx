import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-heading">Strathmore Cleaning</h3>
            <p className="footer-text">
              Professional cleaning services you can trust. Serving homes and businesses across the UK.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Services</h4>
            <ul className="footer-links">
              <li>Residential Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>End of Tenancy</li>
              <li>Deep Cleaning</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subheading">Contact</h4>
            <ul className="footer-links">
              <li>Email: info@strathmorecleaning.co.uk</li>
              <li>Phone: 01234 567890</li>
              <li>Service Area: UK-wide</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Strathmore Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
