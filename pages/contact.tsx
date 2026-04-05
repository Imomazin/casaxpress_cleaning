import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

const Contact: NextPage = () => {
  const [formStatus, setFormStatus] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('Thank you for your message. We will get back to you shortly.')
    setTimeout(() => setFormStatus(''), 5000)
  }

  return (
    <>
      <Head>
        <title>Contact Us - CasaXpress</title>
        <meta
          name="description"
          content="Get in touch with CasaXpress for care at home enquiries or to book a home cleaning service."
        />
      </Head>

      <section className="content-section">
        <div className="container">
          <h2>Get in Touch</h2>

          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            We are here to help with both care at home and home cleaning enquiries.
            Get in touch and our team will be happy to assist.
          </p>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Looking specifically for care support?{' '}
              <Link href="/care/enquiry" style={{ fontWeight: 600 }}>
                Use our dedicated care enquiry form
              </Link>
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                Contact Details
              </h3>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Email
                </h4>
                <p style={{ color: 'var(--text-secondary)' }}>
                  <a href="mailto:hello@casaxpress.co.uk">
                    hello@casaxpress.co.uk
                  </a>
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Phone
                </h4>
                <p style={{ color: 'var(--text-secondary)' }}>
                  <a href="tel:+441234567890">01234 567 890</a>
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Service Areas
                </h4>
                <p style={{ color: 'var(--text-secondary)' }}>
                  We provide care and cleaning services throughout the UK.
                  Contact us to confirm availability in your area.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Opening Hours
                </h4>
                <p style={{ color: 'var(--text-secondary)' }}>
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
                    placeholder="01234 567 890"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select id="service" name="service">
                    <option value="">Please select</option>
                    <option value="cleaning">Home Cleaning</option>
                    <option value="care">Care at Home</option>
                    <option value="both">Both Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button type="submit" className="btn btn-care" style={{ width: '100%' }}>
                  Send Message
                </button>

                {formStatus && (
                  <div className="form-success">
                    {formStatus}
                  </div>
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
