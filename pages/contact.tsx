import type { NextPage } from 'next'
import Head from 'next/head'
import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'

const Contact: NextPage = () => {
  const [formStatus, setFormStatus] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Placeholder - form submission not implemented
    setFormStatus("Thank you for your message! We'll get back to you within 24 hours.")
    setTimeout(() => setFormStatus(''), 5000)
  }

  return (
    <>
      <Head>
        <title>Contact Us - Strathmore Cleaning</title>
        <meta
          name="description"
          content="Get in touch with Strathmore Cleaning for a free quote. Call, text, WhatsApp or email. Serving Hamilton, Bothwell, Uddingston, Motherwell & East Kilbride."
        />
      </Head>

      {/* Hero */}
      <section className="hero" style={{ padding: '4rem 0 3rem' }}>
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">Let&apos;s Talk</span>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Get in Touch</h1>
            <p style={{ maxWidth: '650px', margin: '0 auto' }}>
              We&apos;d love to hear from you. Whether you need a quick quote or want to discuss
              your cleaning needs, we&apos;re here to help—no pressure, just friendly advice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="content-section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">How to Reach Us</span>
              <h2>Choose Your Preferred Method</h2>
              <p>We&apos;re flexible and responsive—contact us however works best for you</p>
            </motion.div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto 3rem'
          }}>
            <motion.div
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                border: '2px solid #e2e8f0',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📞</div>
              <h3 style={{ color: '#1e40af', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Call or Text
              </h3>
              <p style={{ color: '#64748b', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Quick questions? Give us a call or send a text
              </p>
              <a
                href="tel:+441234567890"
                style={{
                  display: 'inline-block',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1e40af',
                  textDecoration: 'none'
                }}
              >
                01234 567890
              </a>
            </motion.div>

            <motion.div
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                border: '2px solid #e2e8f0',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💬</div>
              <h3 style={{ color: '#1e40af', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                WhatsApp
              </h3>
              <p style={{ color: '#64748b', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Prefer messaging? WhatsApp us anytime
              </p>
              <a
                href="https://wa.me/441234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#1e40af',
                  textDecoration: 'none'
                }}
              >
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                border: '2px solid #e2e8f0',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✉️</div>
              <h3 style={{ color: '#1e40af', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Email
              </h3>
              <p style={{ color: '#64748b', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Detailed enquiry? Drop us an email
              </p>
              <a
                href="mailto:info@strathmorecleaning.co.uk"
                style={{
                  display: 'inline-block',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1e40af',
                  textDecoration: 'none',
                  wordBreak: 'break-word'
                }}
              >
                info@strathmorecleaning.co.uk
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="content-section alt-bg">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#1e293b' }}>
                We&apos;re Here to Help
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.8', marginBottom: '2rem' }}>
                Whether you need a one-off deep clean or regular weekly service, we&apos;re ready to
                discuss your needs. No obligation, no pressure—just honest advice and transparent pricing.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', fontWeight: 600, color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>📍</span> Service Areas
                </h4>
                <p style={{ color: '#64748b', lineHeight: '1.7' }}>
                  Hamilton • Bothwell • Uddingston<br />
                  Motherwell • East Kilbride
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', fontWeight: 600, color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>⏰</span> Response Time
                </h4>
                <p style={{ color: '#64748b', lineHeight: '1.7' }}>
                  We typically respond within 24 hours, often sooner. We know your time is valuable.
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '2px solid #bfdbfe'
              }}>
                <p style={{ fontSize: '0.95rem', color: '#1e40af', fontWeight: 600, marginBottom: '0.5rem' }}>
                  🌟 First-Time Customer Guarantee
                </p>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                  Not happy with your first clean? We&apos;ll make it right or refund you in full.
                  Your satisfaction is our priority.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#1e293b' }}>
                Send Us a Message
              </h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Fill out the form below and we&apos;ll get back to you as soon as possible
              </p>

              <form onSubmit={handleSubmit} className="contact-form" style={{ maxWidth: 'none' }}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Smith"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="01234 567890"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Type of Service</label>
                  <select id="service" name="service" style={{
                    width: '100%',
                    padding: '0.875rem',
                    borderRadius: '8px',
                    border: '2px solid #e2e8f0',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    background: 'white'
                  }}>
                    <option value="">Select a service...</option>
                    <option value="basic">Basic Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="regular">Regular Weekly/Bi-weekly</option>
                    <option value="one-off">One-off Clean</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Needs *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your home, what you're looking for, and any specific requirements..."
                  />
                </div>

                <button type="submit" className="btn" style={{ width: '100%' }}>
                  Send Message
                </button>

                {formStatus && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      marginTop: '1rem',
                      padding: '1rem',
                      background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
                      color: '#155724',
                      borderRadius: '8px',
                      textAlign: 'center',
                      fontWeight: 500
                    }}
                  >
                    {formStatus}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="content-section">
        <div className="container">
          <motion.div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
              padding: '3rem',
              background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
              borderRadius: '16px',
              color: 'white',
              boxShadow: '0 8px 24px rgba(30, 64, 175, 0.25)'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Your Trust Matters to Us</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.95 }}>
              We know inviting someone into your home is a big decision. All our team members
              are fully vetted, DBS checked, and trained to treat your home with the utmost
              care and respect. Your peace of mind is our priority.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Contact
