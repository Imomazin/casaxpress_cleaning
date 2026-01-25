import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Strathmore Cleaning</h3>
            <p>
              Professional, trustworthy cleaning services for homes and businesses across Scotland.
              We bring bright energy, gentle care, and professional results to every job.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <p><strong style={{ color: '#cbd5e1' }}>Serving:</strong></p>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Hamilton • Bothwell • Uddingston<br />
                Motherwell • East Kilbride
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li>Basic Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Oven & Fridge Clean</li>
              <li>Window Cleaning</li>
              <li>Laundry & Ironing</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <ul className="footer-links">
              <li>Call or Text</li>
              <li>WhatsApp Available</li>
              <li>Email Enquiries</li>
              <li>Flexible Scheduling</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Strathmore Cleaning. All rights reserved.</p>
          <p>
            Powered by <span className="powered-by">Ambidexters Inc.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
