import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found - Strathmore Cleaning</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Head>

      <div className="error-page">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: '6rem', marginBottom: '1rem' }}
            >
              🧹
            </motion.div>

            <h1 style={{
              fontSize: '6rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem',
              lineHeight: 1
            }}>
              404
            </h1>

            <h2 style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              color: '#1e293b',
              fontWeight: 600
            }}>
              Oops! Page Not Found
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: '#64748b',
              lineHeight: '1.8',
              marginBottom: '2.5rem'
            }}>
              Looks like this page has been swept away! The page you&apos;re looking for
              doesn&apos;t exist or may have been moved.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '3rem'
            }}>
              <Link href="/" className="btn" style={{ minWidth: '200px' }}>
                🏠 Back to Home
              </Link>
              <Link href="/services" className="btn btn-secondary" style={{ minWidth: '200px' }}>
                View Our Services
              </Link>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
              padding: '2rem',
              borderRadius: '12px',
              marginTop: '3rem'
            }}>
              <h3 style={{
                color: '#1e40af',
                fontSize: '1.25rem',
                marginBottom: '1rem',
                fontWeight: 600
              }}>
                Need Help?
              </h3>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                Looking for something specific? Here are our most popular pages:
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1rem'
              }}>
                <Link
                  href="/"
                  style={{
                    color: '#1e40af',
                    textDecoration: 'none',
                    fontWeight: 500,
                    padding: '0.5rem',
                    borderRadius: '6px',
                    transition: 'background 0.2s'
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  style={{
                    color: '#1e40af',
                    textDecoration: 'none',
                    fontWeight: 500,
                    padding: '0.5rem',
                    borderRadius: '6px',
                    transition: 'background 0.2s'
                  }}
                >
                  Services & Pricing
                </Link>
                <Link
                  href="/about"
                  style={{
                    color: '#1e40af',
                    textDecoration: 'none',
                    fontWeight: 500,
                    padding: '0.5rem',
                    borderRadius: '6px',
                    transition: 'background 0.2s'
                  }}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  style={{
                    color: '#1e40af',
                    textDecoration: 'none',
                    fontWeight: 500,
                    padding: '0.5rem',
                    borderRadius: '6px',
                    transition: 'background 0.2s'
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Custom404
