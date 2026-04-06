import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

const CareEnquiry: NextPage = () => {
  const [formStatus, setFormStatus] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('Thank you for your enquiry. A member of our care team will be in touch shortly.')
    setTimeout(() => setFormStatus(''), 8000)
  }

  return (
    <>
      <Head>
        <title>Care Enquiry - CasaXpress Care at Home</title>
        <meta name="description" content="Start a care enquiry with CasaXpress. Tell us about the support you need." />
      </Head>

      <section className="care-subhero">
        <div className="container">
          <div className="care-subhero__content">
            <span className="hero__badge hero__badge--care">Care at Home</span>
            <h1>Start a Care Enquiry</h1>
            <p>
              Tell us about the support you or your loved one needs.
              No obligation. Our friendly team will be in touch.
            </p>
          </div>
          <div className="care-subhero__image">
            <img src="/images/IMG 2 (1).JPG" alt="Warm, welcoming care support" />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Care enquiry form
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.65 }}>
                Complete the form below and we will get back to you promptly.
                All information is treated with complete confidentiality.
              </p>

              <form onSubmit={handleSubmit} className="contact-form" style={{ maxWidth: 'none' }}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input type="text" id="name" name="name" required placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="01234 567 890" />
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
                  <textarea id="message" name="message" placeholder="Please share any details about the support you are looking for..." />
                </div>
                <button type="submit" className="btn btn-care" style={{ width: '100%' }}>
                  Submit Care Enquiry
                </button>
                {formStatus && <div className="form-success">{formStatus}</div>}
              </form>
            </div>

            <div>
              <div className="info-box info-box--care">
                <h3>Prefer to speak with us?</h3>
                <p>Our care team is available to take your call. No obligation.</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--care-primary)', marginTop: '0.5rem' }}>
                  <a href="tel:+441234567890" style={{ color: 'var(--care-primary)' }}>01234 567 890</a>
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.35rem' }}>Mon - Fri: 8am - 6pm | Sat: 9am - 4pm</p>
              </div>

              <div className="info-box info-box--neutral">
                <h3>What happens next?</h3>
                <ul className="feature-list">
                  <li>We review your enquiry promptly</li>
                  <li>A member of our care team will call you</li>
                  <li>We discuss your needs in detail</li>
                  <li>We suggest a tailored support plan</li>
                  <li>If everything feels right, care begins</li>
                </ul>
              </div>

              <div className="info-box info-box--neutral">
                <h3>Your information is safe</h3>
                <p>
                  All enquiry information is treated with complete
                  confidentiality. We never share your details without consent.
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
