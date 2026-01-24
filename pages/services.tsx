import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Services - Strathmore Cleaning</title>
        <meta
          name="description"
          content="Explore our range of professional cleaning services including domestic cleaning, office cleaning, end of tenancy, and deep cleaning."
        />
      </Head>

      <section className="content-section">
        <div className="container">
          <h2>Our Cleaning Services</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
            We offer a comprehensive range of cleaning services tailored to meet
            your specific needs. All our services are carried out by trained,
            insured professionals.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <h3>Domestic Cleaning</h3>
              <p>
                Our domestic cleaning service is designed to keep your home fresh
                and tidy. Whether you need regular weekly cleans or a one-off
                service, we can help.
              </p>
              <p>
                <strong>What we cover:</strong>
              </p>
              <ul style={{ marginLeft: '1.5rem', color: '#666' }}>
                <li>Kitchen cleaning and sanitising</li>
                <li>Bathroom cleaning</li>
                <li>Dusting and vacuuming</li>
                <li>Floor mopping</li>
                <li>Surface wiping</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Office Cleaning</h3>
              <p>
                Professional office cleaning to maintain a clean, productive
                workspace. We work around your schedule to minimise disruption.
              </p>
              <p>
                <strong>What we cover:</strong>
              </p>
              <ul style={{ marginLeft: '1.5rem', color: '#666' }}>
                <li>Desk and workstation cleaning</li>
                <li>Kitchen and break room cleaning</li>
                <li>Toilet and washroom sanitising</li>
                <li>Floor cleaning</li>
                <li>Waste removal</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>End of Tenancy Cleaning</h3>
              <p>
                Moving out? Our end of tenancy cleaning ensures your property is
                left in immaculate condition, helping you secure your deposit.
              </p>
              <p>
                <strong>What we cover:</strong>
              </p>
              <ul style={{ marginLeft: '1.5rem', color: '#666' }}>
                <li>Deep clean of all rooms</li>
                <li>Kitchen appliance cleaning</li>
                <li>Bathroom descaling</li>
                <li>Window cleaning (interior)</li>
                <li>Carpet vacuuming</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>One-Off Deep Cleans</h3>
              <p>
                Sometimes you need a more thorough clean. Our deep cleaning service
                tackles those hard-to-reach areas and stubborn dirt.
              </p>
              <p>
                <strong>What we cover:</strong>
              </p>
              <ul style={{ marginLeft: '1.5rem', color: '#666' }}>
                <li>Intensive kitchen cleaning</li>
                <li>Bathroom deep clean</li>
                <li>Skirting boards and high surfaces</li>
                <li>Behind furniture and appliances</li>
                <li>Window sills and frames</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Book?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Contact us today for a free, no-obligation quote. We'll be happy to
            discuss your requirements and provide a tailored cleaning solution.
          </p>
          <Link href="/contact" className="btn">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services
