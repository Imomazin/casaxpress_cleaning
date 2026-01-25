import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Strathmore Cleaning - Professional Cleaning Services in Scotland</title>
        <meta
          name="description"
          content="Bright energy • Gentle care • Professional results. Trusted cleaning services for Hamilton, Bothwell, Uddingston, Motherwell & East Kilbride."
        />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="tagline">Bright Energy • Gentle Care • Professional Results</p>
            <h1>Strathmore Cleaning</h1>
            <p>
              Professional cleaning services you can trust. Perfect for elderly clients
              and busy professionals across Scotland.
            </p>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/contact" className="btn">
              Book a Clean
            </Link>
            <Link href="/services" className="btn btn-secondary">
              View Services & Pricing
            </Link>
          </motion.div>

          <motion.div
            className="service-areas"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span>📍</span>
            <span>
              <strong>Proudly Serving:</strong> Hamilton • Bothwell • Uddingston • Motherwell • East Kilbride
            </span>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-grid">
            <motion.div
              className="trust-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="trust-item-icon">🤝</div>
              <h3>Friendly & Trustworthy</h3>
              <p>Vetted, reliable cleaners you can count on</p>
            </motion.div>

            <motion.div
              className="trust-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="trust-item-icon">💙</div>
              <h3>Gentle & Respectful</h3>
              <p>Perfect for elderly clients and families</p>
            </motion.div>

            <motion.div
              className="trust-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="trust-item-icon">✨</div>
              <h3>Consistently High Quality</h3>
              <p>Professional results every single time</p>
            </motion.div>

            <motion.div
              className="trust-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="trust-item-icon">📅</div>
              <h3>Flexible Scheduling</h3>
              <p>We work around your busy life</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">Our Services</span>
              <h2>Choose Your Perfect Clean</h2>
              <p>Simple pricing, exceptional service. No hidden fees.</p>
            </motion.div>
          </div>

          <div className="services-grid">
            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="service-card-icon">🏠</span>
              <h3>Basic Cleaning</h3>
              <div className="price">From £44</div>
              <p className="price-note">2-3 hours • Perfect for maintenance</p>
              <ul>
                <li>Dusting & surfaces</li>
                <li>Vacuuming & mopping</li>
                <li>Bathroom clean</li>
                <li>Kitchen wipe-down</li>
              </ul>
              <Link href="/services" className="btn" style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }}>
                Learn More
              </Link>
            </motion.div>

            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="service-card-icon">✨</span>
              <h3>Deep Cleaning</h3>
              <div className="price">From £50</div>
              <p className="price-note">2-3 hours • One-off or seasonal</p>
              <ul>
                <li>Intensive bathroom scrub</li>
                <li>Deep kitchen clean</li>
                <li>Skirting boards & frames</li>
                <li>High-touch sanitisation</li>
              </ul>
              <Link href="/services" className="btn" style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }}>
                Learn More
              </Link>
            </motion.div>

            <motion.div
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="service-card-icon">🎯</span>
              <h3>Add-Ons</h3>
              <div className="price">From £5</div>
              <p className="price-note">Customise your clean</p>
              <ul>
                <li>Oven clean - £30</li>
                <li>Fridge clean - £15</li>
                <li>Inside windows - £20</li>
                <li>Laundry & ironing - £10</li>
              </ul>
              <Link href="/services" className="btn" style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }}>
                View All Add-Ons
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="content-section alt-bg">
        <div className="container">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">Why Strathmore?</span>
              <h2>Your Local, Trusted Cleaning Partner</h2>
            </motion.div>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <motion.p
              style={{ fontSize: '1.25rem', color: '#64748b', lineHeight: '1.9', marginBottom: '2rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We are a proud Scottish cleaning company serving Hamilton, Bothwell, Uddingston,
              Motherwell, and East Kilbride. Our approach is gentle, respectful, and perfectly
              suited for elderly clients and busy professionals who need a reliable, trustworthy service.
            </motion.p>

            <motion.div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <h3 style={{ color: '#1e40af', marginBottom: '0.75rem' }}>🏴󐁧󐁢󐁳󐁣󐁴󐁿 Local Scottish Service</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Born and bred in Scotland, serving our community with pride</p>
              </div>

              <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <h3 style={{ color: '#1e40af', marginBottom: '0.75rem' }}>👵 Elderly-Friendly</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Patient, gentle, and respectful approach for all ages</p>
              </div>

              <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <h3 style={{ color: '#1e40af', marginBottom: '0.75rem' }}>⚡ For Busy Professionals</h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Flexible scheduling that works around your life</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section">
        <div className="container">
          <motion.div
            className="cta-section"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready for a Sparkling Clean Home?</h2>
            <p>Book your first clean today and experience the Strathmore difference</p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn" style={{ background: 'white', color: '#1e40af' }}>
                Get Your Free Quote
              </Link>
              <Link href="/services" className="btn" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
