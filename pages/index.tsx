import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Strathmore Cleaning - Professional Cleaning Services</title>
        <meta
          name="description"
          content="Professional cleaning services for homes and businesses across the UK. Reliable, trustworthy, and thorough cleaning solutions."
        />
      </Head>

      <section className="hero">
        <div className="container">
          <h1>Professional Cleaning Services You Can Trust</h1>
          <p>
            Strathmore Cleaning provides reliable, high-quality cleaning services
            for homes and businesses throughout the UK.
          </p>
          <Link href="/contact" className="btn">
            Get a Free Quote
          </Link>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Domestic Cleaning</h3>
              <p>
                Regular or one-off cleaning for your home. We keep your living
                spaces spotless, allowing you to focus on what matters most.
              </p>
            </div>

            <div className="service-card">
              <h3>Office Cleaning</h3>
              <p>
                Professional cleaning services for offices and commercial spaces.
                Create a clean, healthy environment for your team and clients.
              </p>
            </div>

            <div className="service-card">
              <h3>End of Tenancy</h3>
              <p>
                Comprehensive deep cleaning for tenants and landlords. Ensure your
                property is in pristine condition for handover.
              </p>
            </div>

            <div className="service-card">
              <h3>Deep Cleaning</h3>
              <p>
                Thorough, intensive cleaning for those hard-to-reach areas. Perfect
                for spring cleans or special occasions.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/services" className="btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2>Why Choose Strathmore Cleaning?</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ textAlign: 'center' }}>
              We are a trusted cleaning company serving customers across the UK.
              Our professional team is fully trained, insured, and dedicated to
              delivering exceptional results every time.
            </p>
            <p style={{ textAlign: 'center' }}>
              Whether you need regular domestic cleaning, a one-off deep clean, or
              commercial cleaning services, we have the expertise and commitment to
              meet your needs.
            </p>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/about" className="btn">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
