import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us - CasaXpress</title>
        <meta
          name="description"
          content="Professional cleaning services in Scotland. Bright energy, gentle care, professional results. Serving Hamilton, Bothwell, Uddingston, Motherwell & East Kilbride."
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
            <span className="section-badge">Our Story</span>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About CasaXpress</h1>
            <p className="tagline" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
              Bright Energy • Gentle Care • Professional Results
            </p>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
              A proud Scottish cleaning company serving our local communities with trust,
              respect, and exceptional care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="content-section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <motion.div
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              padding: '2.5rem',
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
            <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Proudly Serving Scotland</h2>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              Hamilton • Bothwell • Uddingston • Motherwell • East Kilbride
            </p>
            <p style={{ fontSize: '1rem', opacity: 0.95 }}>
              Local service, local trust. We know our communities and we care for them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">Who We Serve</span>
              <h2>Perfect For Everyone</h2>
            </motion.div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <motion.div
              style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                border: '2px solid #e2e8f0',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>👵👴</div>
              <h3 style={{ color: '#1e40af', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Ideal for Elderly Clients
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.8' }}>
                We understand the importance of gentle, respectful care. Our team is
                patient, kind, and experienced in working with elderly clients who need
                reliable, trustworthy support.
              </p>
            </motion.div>

            <motion.div
              style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                border: '2px solid #e2e8f0',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>💼</div>
              <h3 style={{ color: '#1e40af', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Perfect for Busy Professionals
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.8' }}>
                Your time is valuable. We offer flexible scheduling that fits around your
                busy life, so you can come home to a clean, fresh space without the stress.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image - Family enjoying clean home */}
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
              src="/images/family-living-room-relaxed.jpg"
              alt="Happy family relaxing in clean living room"
              width={1456}
              height={816}
              style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Icon-Based Trust Blocks */}
      <section className="content-section alt-bg">
        <div className="container">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-badge">Why Choose Us</span>
              <h2>Built on Trust & Quality</h2>
              <p>What makes CasaXpress different</p>
            </motion.div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <motion.div
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                textAlign: 'center',
                border: '2px solid #e2e8f0'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
              <h3 style={{ color: '#1e40af', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Friendly, Trustworthy, Reliable
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.7' }}>
                All our team members are fully vetted, DBS checked, and trained to the
                highest standards. You can trust us in your home.
              </p>
            </motion.div>

            <motion.div
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                textAlign: 'center',
                border: '2px solid #e2e8f0'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💙</div>
              <h3 style={{ color: '#1e40af', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Gentle & Respectful Approach
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.7' }}>
                We treat every home with care and respect. Our gentle approach makes
                us especially suited for elderly clients and families.
              </p>
            </motion.div>

            <motion.div
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                textAlign: 'center',
                border: '2px solid #e2e8f0'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
              <h3 style={{ color: '#1e40af', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Consistent High-Quality Cleaning
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Professional results, every single time. We maintain the same high
                standards on every visit, guaranteed.
              </p>
            </motion.div>

            <motion.div
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                textAlign: 'center',
                border: '2px solid #e2e8f0'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
              <h3 style={{ color: '#1e40af', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Flexible Scheduling
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.7' }}>
                We work around your busy life with flexible booking options that
                suit your schedule, not ours.
              </p>
            </motion.div>

            <motion.div
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                textAlign: 'center',
                border: '2px solid #e2e8f0'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏴󠁧󠁢󠁳󠁣󠁴󠁿</div>
              <h3 style={{ color: '#1e40af', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                Local Scottish Service
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.7' }}>
                Born and bred in Scotland. We&apos;re part of your community, and we
                take pride in serving our neighbours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image - Professional Cleaning Service */}
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
              src="/images/cleaner-office-male.jpg"
              alt="Professional cleaning service in modern office"
              width={1456}
              height={816}
              style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="content-section">
        <div className="container">
          <motion.div
            style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ marginBottom: '1.5rem' }}>Our Commitment to You</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              At CasaXpress, we believe that a clean home is more than just tidy
              surfaces—it&apos;s about creating a space where you feel comfortable, safe, and at peace.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.9', marginBottom: '1.5rem' }}>
              We understand that inviting someone into your home requires trust. That&apos;s why
              we carefully vet every team member, provide comprehensive training, and maintain
              the highest standards of professionalism and respect.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: '1.9', marginBottom: '2.5rem' }}>
              Whether you need regular maintenance cleaning or a one-off deep clean, we bring
              the same bright energy, gentle care, and professional results to every job.
            </p>

            <div style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
              padding: '2.5rem',
              borderRadius: '16px',
              marginTop: '3rem'
            }}>
              <p style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#1e40af',
                marginBottom: '0.5rem'
              }}>
                Thank you for considering CasaXpress.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
                We look forward to serving you and your family.
              </p>
            </div>
          </motion.div>
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
            <h2>Ready to Experience the CasaXpress Difference?</h2>
            <p>Get in touch today for a free, no-obligation quote</p>
            <Link href="/contact" className="btn" style={{ background: 'white', color: '#1e40af' }}>
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About
