import type { NextPage } from 'next'
import Head from 'next/head'
import { FormEvent, useState } from 'react'

const CareEnquiry: NextPage = () => {
  const [formStatus, setFormStatus] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('Thank you for your enquiry. A member of our care team will be in touch shortly to discuss your needs.')
    setTimeout(() => setFormStatus(''), 8000)
  }

  return (
    <>
      <Head>
        <title>Care Enquiry - CasaXpress Care at Home</title>
        <meta
          name="description"
          content="Start a care enquiry with CasaXpress. Tell us about the support you need and our friendly team will be in touch."
        />
      </Head>

      <section className="care-subhero">
        <div className="container">
          <div className="care-subhero__content">
            <span className="hero__badge">Care at Home</span>
            <h1>Start a Care Enquiry</h1>
            <p>
              Tell us a little about the support you or your loved one needs.
              There is no obligation, and our friendly team will be in touch
              to discuss how we can help.
            </p>
          </div>
          <div className="care-subhero__image">
            <img
              src="/images/IMG 2 (1).JPG"
              alt="Warm, welcoming care support"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
            {/* FORM */}
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Care enquiry form
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
                Complete the form below and we will get back to you promptly.
                All information is treated with complete confidentiality.
              </p>

              <form onSubmit={handleSubmit} className="contact-form" style={{ maxWidth: 'none' }}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="01234 567 890"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="relationship">Your Relationship</label>
                  <select id="relationship" name="relationship">
                    <option value="">Please select</option>
                    <option value="self">I am enquiring for myself</option>
                    <option value="parent">For a parent</option>
                    <option value="partner">For a partner or spouse</option>
                    <option value="relative">For another relative</option>
                    <option value="friend">For a friend</option>
                    <option value="professional">I am a healthcare professional</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="support-type">Type of Support Needed</label>
                  <select id="support-type" name="support-type">
                    <option value="">Please select</option>
                    <option value="personal-care">Personal Care</option>
                    <option value="companionship">Companionship</option>
                    <option value="daily-living">Daily Living Support</option>
                    <option value="respite">Respite Care</option>
                    <option value="recovery">Recovery Support</option>
                    <option value="dementia">Dementia Support</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Needs</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Please share any details about the support you are looking for, including any specific needs, preferences, or questions you have..."
                  />
                </div>

                <button type="submit" className="btn btn-care" style={{ width: '100%' }}>
                  Submit Care Enquiry
                </button>

                {formStatus && (
                  <div className="form-success">
                    {formStatus}
                  </div>
                )}
              </form>
            </div>

            {/* SIDEBAR */}
            <div>
              <div style={{
                background: 'var(--care-bg)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                marginBottom: '2rem',
                border: '1px solid var(--border-care)',
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  Prefer to speak with us?
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.95rem' }}>
                  Our care team is available to take your call and discuss
                  your needs in person. There is no obligation.
                </p>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--care-primary)' }}>
                  <a href="tel:+441234567890" style={{ color: 'var(--care-primary)' }}>
                    01234 567 890
                  </a>
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                  Mon - Fri: 8am - 6pm | Sat: 9am - 4pm
                </p>
              </div>

              <div style={{
                background: 'var(--ivory)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                marginBottom: '2rem',
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  What happens next?
                </h3>
                <ul className="feature-list">
                  <li>We review your enquiry promptly</li>
                  <li>A member of our care team will call you</li>
                  <li>We discuss your needs in detail</li>
                  <li>We suggest a support plan tailored to you</li>
                  <li>If everything feels right, care begins</li>
                </ul>
              </div>

              <div style={{
                background: '#fff',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                border: '1px solid var(--border-light)',
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  Your information is safe
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  All enquiry information is treated with complete
                  confidentiality. We will never share your details with
                  third parties without your consent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareEnquiry
