import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Services & Pricing - CasaXpress</title>
        <meta
          name="description"
          content="Professional cleaning services in Scotland. Basic cleaning from £44, deep cleaning from £50. Serving Hamilton, Bothwell, Uddingston, Motherwell & East Kilbride."
        />
      </Head>

      {/* Hero */}
      <section className="hero" style={{ padding: '4rem 0 3rem', position: 'relative', overflow: 'hidden' }}>
        {/* Green Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '8%',
          width: '70px',
          height: '4px',
          background: '#a3e635',
          transform: 'rotate(30deg)',
          opacity: 0.5
        }} />

        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Simple, Transparent Pricing</span>
            <div style={{ display: 'inline-block' }}>
              <div style={{
                width: '60px',
                height: '4px',
                background: '#a3e635',
                marginBottom: '0.5rem'
              }} />
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Services & Pricing</h1>
            <p style={{ maxWidth: '650px', margin: '0 auto' }}>
              Professional cleaning services tailored to your needs. No hidden fees, no surprises—just exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Cleaning Services */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Core Services</span>
            <h2>Choose Your Clean</h2>
            <p>Perfect for regular maintenance or one-off deep cleans</p>
          </div>

          <div className="pricing-grid">
            {/* Basic Cleaning */}
            <motion.div
              className="pricing-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>🏠</span>
              <h3>Basic Cleaning</h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Perfect for maintenance</p>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#64748b' }}>2 hours</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af' }}>£44</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>3 hours</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af' }}>£66</span>
                </div>
              </div>

              <p style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#1e293b' }}>Includes:</p>
              <ul>
                <li>Dusting & surfaces</li>
                <li>Vacuuming & mopping</li>
                <li>Bathroom clean</li>
                <li>Kitchen wipe-down</li>
                <li>Bins emptied</li>
                <li>General tidy-up</li>
              </ul>
            </motion.div>

            {/* Deep Cleaning */}
            <motion.div
              className="pricing-card featured"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>✨</span>
              <h3>Deep Cleaning</h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>One-off or seasonal</p>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#64748b' }}>2 hours</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af' }}>£50–£60</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>3 hours</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af' }}>£75–£90</span>
                </div>
              </div>

              <p style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#1e293b' }}>Includes:</p>
              <ul>
                <li>Intensive bathroom scrub</li>
                <li>Deep kitchen clean</li>
                <li>Skirting boards & door frames</li>
                <li>High-touch areas sanitised</li>
                <li>Optional fridge or oven clean</li>
              </ul>
            </motion.div>

            {/* Monthly Packages */}
            <motion.div
              className="pricing-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>📅</span>
              <h3>Monthly Packages</h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>Save with regular cleans</p>

              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#1e293b' }}>Weekly Cleaning:</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>2 hours/week</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e40af' }}>£176/mo</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>3 hours/week</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e40af' }}>£264/mo</span>
                </div>

                <p style={{ fontWeight: 600, marginBottom: '0.75rem', color: '#1e293b' }}>Bi-Weekly:</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>2 hours</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e40af' }}>£88/mo</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>3 hours</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e40af' }}>£132/mo</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialty Cleaning Showcase */}
      <section className="content-section" style={{ paddingTop: '2rem', paddingBottom: '2rem', background: '#f8fafc' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '3rem',
            maxWidth: '1200px',
            margin: '0 auto',
            alignItems: 'center'
          }}>
            <motion.div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/cleaner-gym-fitness.jpg"
                alt="Professional gym and fitness center cleaning"
                width={1456}
                height={816}
                style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1e293b' }}>
                Specialty & Commercial Cleaning
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.8', marginBottom: '1rem' }}>
                Beyond residential cleaning, we offer specialized services for gyms, fitness centers,
                small offices, and commercial spaces throughout Scotland.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.8' }}>
                Our professional team is equipped to handle unique cleaning requirements with the
                same attention to detail and care we bring to every home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commercial Services Image */}
      <section className="content-section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <motion.div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/cleaner-commercial-cleaning.jpg"
              alt="Professional commercial cleaning services"
              width={1456}
              height={816}
              style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Extras</span>
            <h2>Add-On Services</h2>
            <p>Customise your clean with these popular extras</p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                background: 'white',
                padding: '1.75rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                border: '2px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2rem' }}>🔥</span>
                  <span style={{ fontSize: '2rem', fontWeight: 700, color: '#1e40af' }}>£30</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e293b' }}>Oven Clean</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Deep clean your oven inside and out</p>
              </div>

              <div style={{
                background: 'white',
                padding: '1.75rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                border: '2px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2rem' }}>❄️</span>
                  <span style={{ fontSize: '2rem', fontWeight: 700, color: '#1e40af' }}>£15</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e293b' }}>Fridge Clean</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Thorough fridge interior clean</p>
              </div>

              <div style={{
                background: 'white',
                padding: '1.75rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                border: '2px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2rem' }}>🪟</span>
                  <span style={{ fontSize: '2rem', fontWeight: 700, color: '#1e40af' }}>£20–£30</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e293b' }}>Inside Windows</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Streak-free window cleaning</p>
              </div>

              <div style={{
                background: 'white',
                padding: '1.75rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                border: '2px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2rem' }}>👔</span>
                  <span style={{ fontSize: '2rem', fontWeight: 700, color: '#1e40af' }}>£10–£15</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e293b' }}>Laundry & Ironing</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Professional laundry service</p>
              </div>

              <div style={{
                background: 'white',
                padding: '1.75rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                border: '2px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2rem' }}>🛏️</span>
                  <span style={{ fontSize: '2rem', fontWeight: 700, color: '#1e40af' }}>£5–£10</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e293b' }}>Bedding Change</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Fresh bedding service</p>
              </div>

              <div style={{
                background: 'white',
                padding: '1.75rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                border: '2px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2rem' }}>⏰</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e40af' }}>£22–£27</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1e293b' }}>Extra Hour</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Basic £22 • Deep £27</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div
            className="cta-section"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Book Your Clean?</h2>
            <p>Get in touch for a free, no-obligation quote tailored to your needs</p>
            <Link href="/contact" className="btn" style={{ background: 'white', color: '#1e40af' }}>
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services
