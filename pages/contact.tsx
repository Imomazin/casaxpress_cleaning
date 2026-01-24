import type { NextPage } from 'next'
import Head from 'next/head'
import { FormEvent, useState } from 'react'

const Contact: NextPage = () => {
  const [formStatus, setFormStatus] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Placeholder - form submission not implemented
    setFormStatus('Thank you for your message. We will get back to you shortly.')
    setTimeout(() => setFormStatus(''), 5000)
  }

  return (
    <>
      <Head>
        <title>Contact Us - Strathmore Cleaning</title>
        <meta
          name="description"
          content="Get in touch with Strathmore Cleaning for a free quote or to discuss your cleaning requirements."
        />
      </Head>

      <section className="content-section">
        <div className="container">
          <h2>Contact Us</h2>

          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
            We would love to hear from you. Get in touch for a free, no-obligation
            quote or to discuss your cleaning requirements.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                Get in Touch
              </h3>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Email
                </h4>
                <p style={{ color: '#666' }}>
                  <a href="mailto:info@strathmorecleaning.co.uk">
                    info@strathmorecleaning.co.uk
                  </a>
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Phone
                </h4>
                <p style={{ color: '#666' }}>
                  <a href="tel:+441234567890">01234 567890</a>
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Service Areas
                </h4>
                <p style={{ color: '#666' }}>
                  We provide cleaning services throughout the UK. Contact us to
                  confirm we operate in your area.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Opening Hours
                </h4>
                <p style={{ color: '#666' }}>
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="contact-form" style={{ maxWidth: 'none' }}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="01234 567890"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your cleaning requirements..."
                  />
                </div>

                <button type="submit" className="btn" style={{ width: '100%' }}>
                  Send Message
                </button>

                {formStatus && (
                  <p
                    style={{
                      marginTop: '1rem',
                      padding: '1rem',
                      backgroundColor: '#d4edda',
                      color: '#155724',
                      borderRadius: '4px',
                      textAlign: 'center',
                    }}
                  >
                    {formStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
