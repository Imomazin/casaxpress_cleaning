import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import CTASection from '../components/CTASection'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About CasaXpress - Care at Home &amp; Home Cleaning</title>
        <meta name="description" content="CasaXpress is a trusted UK home support brand offering compassionate care at home and reliable home cleaning." />
      </Head>

      <section className="hero hero--neutral">
        <div className="container hero-grid">
          <div className="hero__content">
            <h1>About CasaXpress</h1>
            <p>
              We are a home support company built on trust, warmth, and a
              genuine commitment to helping people live well at home. From
              compassionate care to reliable cleaning, everything we do
              starts with people.
            </p>
            <div className="hero__ctas">
              <Link href="/care" className="btn btn-care">Care at Home</Link>
              <Link href="/cleaning" className="btn btn-clean">Home Cleaning</Link>
            </div>
          </div>
          <div className="hero__image">
            <img src="/images/IMG 11 (1).JPG" alt="CasaXpress team member with a client" />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="image-text">
            <div className="image-text__image">
              <img src="/images/IMG 9 (1).JPG" alt="Genuine care in action" />
            </div>
            <div className="image-text__content">
              <h2>Built around people, not processes</h2>
              <p>
                CasaXpress was founded on a simple idea: that families deserve
                access to genuinely caring, dependable home support. Whether
                someone needs help staying independent at home or a household
                needs reliable cleaning, the quality of service should reflect
                the quality of the people who deliver it.
              </p>
              <p>
                We choose our team carefully for their warmth, reliability, and
                commitment to making a difference. Every member shares the same
                values: respect, kindness, and pride in doing their job well.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--neutral">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Two services, one trusted brand</h2>
            <p className="section__subtitle">CasaXpress operates two clear service divisions, each with its own dedicated team.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ background: 'var(--care-bg)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', border: '1px solid var(--care-border)' }}>
              <h3 style={{ color: 'var(--care-primary)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Care at Home</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Compassionate adult care that helps people stay safe, comfortable,
                and independent at home.
              </p>
              <Link href="/care" className="btn btn-care btn-sm">Explore Care Services</Link>
            </div>
            <div style={{ background: 'var(--clean-bg)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', border: '1px solid var(--clean-border)' }}>
              <h3 style={{ color: 'var(--clean-primary)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Home Cleaning</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Reliable, professional home cleaning for busy households.
                Regular cleans, deep cleans, and more.
              </p>
              <Link href="/cleaning" className="btn btn-clean btn-sm">Explore Cleaning Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">What we stand for</h2>
          </div>
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--care">&#9829;</div>
              <h3 className="trust-card__title">Compassion First</h3>
              <p className="trust-card__text">Everything starts with kindness. We treat every person with genuine care.</p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--care">&#129309;</div>
              <h3 className="trust-card__title">Trust &amp; Integrity</h3>
              <p className="trust-card__text">We earn trust through honesty, consistency, and doing what we say.</p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--care">&#9876;</div>
              <h3 className="trust-card__title">Dignity &amp; Respect</h3>
              <p className="trust-card__text">Every person deserves respect. We honour independence and individuality.</p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--clean">&#127775;</div>
              <h3 className="trust-card__title">Quality Without Compromise</h3>
              <p className="trust-card__text">We hold ourselves to high standards in every visit, every time.</p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--care">&#128101;</div>
              <h3 className="trust-card__title">People-Led Service</h3>
              <p className="trust-card__text">Our team members are the heart of what we do.</p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--care">&#128172;</div>
              <h3 className="trust-card__title">Open Communication</h3>
              <p className="trust-card__text">Honest, clear communication builds the foundation for great support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--care">
        <div className="container">
          <div className="image-text image-text--reverse">
            <div className="image-text__image">
              <img src="/images/IMG 10 (1).JPG" alt="CasaXpress team delivering care" />
            </div>
            <div className="image-text__content">
              <h2>A team you can rely on</h2>
              <p>
                Everyone who works with CasaXpress is chosen for their character
                as much as their capability. We look for warmth, patience,
                reliability, and a genuine desire to support others.
              </p>
              <p>
                Families can be confident that the person coming through their
                door is someone they can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="care" title="Ready to get started?" text="Whether you need care at home or home cleaning, we are here to help." primaryLabel="Start a Care Enquiry" primaryHref="/care/enquiry" secondaryLabel="Or book a cleaning visit" secondaryHref="/contact" />
    </>
  )
}

export default About
