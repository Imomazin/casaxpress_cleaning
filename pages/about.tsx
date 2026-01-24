import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us - Strathmore Cleaning</title>
        <meta
          name="description"
          content="Learn about Strathmore Cleaning - a trusted, professional cleaning company serving homes and businesses across the UK."
        />
      </Head>

      <section className="content-section">
        <div className="container">
          <h2>About Strathmore Cleaning</h2>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p>
              Strathmore Cleaning is a professional cleaning company serving
              residential and commercial clients throughout the UK. We pride
              ourselves on delivering reliable, high-quality cleaning services that
              our customers can trust.
            </p>

            <p>
              Founded on the principles of excellence and integrity, we understand
              that inviting a cleaning company into your home or business is a
              matter of trust. This is why we carefully vet all our team members and
              ensure they are fully trained and insured.
            </p>

            <p>
              Our mission is simple: to provide exceptional cleaning services that
              exceed expectations, giving our clients peace of mind and more time
              to focus on what matters most to them.
            </p>

            <h3 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem' }}>
              Why Choose Us?
            </h3>

            <div className="services-grid" style={{ marginTop: '2rem' }}>
              <div className="service-card">
                <h3 style={{ fontSize: '1.25rem' }}>Trusted Professionals</h3>
                <p>
                  All our cleaners are fully vetted, trained, and insured. We only
                  employ reliable individuals who share our commitment to quality.
                </p>
              </div>

              <div className="service-card">
                <h3 style={{ fontSize: '1.25rem' }}>UK-Based Service</h3>
                <p>
                  We are a local company serving communities across the UK. We
                  understand the needs of British homes and businesses.
                </p>
              </div>

              <div className="service-card">
                <h3 style={{ fontSize: '1.25rem' }}>Flexible Scheduling</h3>
                <p>
                  We work around your schedule, offering cleaning services at times
                  that suit you, with no disruption to your day.
                </p>
              </div>

              <div className="service-card">
                <h3 style={{ fontSize: '1.25rem' }}>Quality Guarantee</h3>
                <p>
                  We are not satisfied unless you are. If you are not happy with our
                  service, we will make it right.
                </p>
              </div>
            </div>

            <h3 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem' }}>
              Our Commitment
            </h3>

            <p>
              At Strathmore Cleaning, we believe that a clean environment
              contributes to wellbeing and productivity. Whether we are cleaning
              your home or your workplace, we approach every job with the same
              level of care and attention to detail.
            </p>

            <p>
              We use professional-grade cleaning products and equipment, and we are
              always happy to accommodate any specific requirements or preferences
              you may have.
            </p>

            <p>
              Thank you for considering Strathmore Cleaning. We look forward to
              serving you.
            </p>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href="/contact" className="btn">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
