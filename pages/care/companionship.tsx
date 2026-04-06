import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import CTASection from '../../components/CTASection'

const Companionship: NextPage = () => {
  return (
    <>
      <Head>
        <title>Companionship Care at Home - CasaXpress</title>
        <meta name="description" content="Friendly companionship visits at home. Conversation, social connection, and emotional wellbeing support." />
      </Head>

      <section className="care-subhero">
        <div className="container">
          <div className="care-subhero__content">
            <span className="hero__badge hero__badge--care">Care at Home</span>
            <h1>Companionship Care</h1>
            <p>
              Friendly visits that bring conversation, connection, and a genuine
              sense of companionship into everyday life. Because no one should
              feel alone at home.
            </p>
            <Link href="/care/enquiry" className="btn btn-care">Arrange Companionship</Link>
            <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>or call us on <a href="tel:+447398761877" style={{ color: 'var(--care-primary)', fontWeight: 600 }}>07398 761 877</a></p>
          </div>
          <div className="care-subhero__image">
            <img src="/images/IMG 4.JPG" alt="Two people enjoying companionship at home" />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="image-text">
            <div className="image-text__image">
              <img src="/images/IMG 9 (1).JPG" alt="Carer and client sharing a warm embrace" />
            </div>
            <div className="image-text__content">
              <h2>More than just a visit</h2>
              <p>
                Loneliness can affect anyone, and it can have a real impact on
                health and wellbeing. Our companionship service is about genuine
                human connection.
              </p>
              <p>
                Whether it is a cup of tea and a chat, a walk in the garden,
                sharing a hobby, or simply being there, our carers bring warmth,
                patience, and real conversation to every visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--care">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">What companionship looks like</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Conversation &amp; Connection</h3>
              <p>Friendly, unhurried conversation that brings warmth and social engagement into the day.</p>
            </div>
            <div className="service-card">
              <h3>Social Activities</h3>
              <p>Playing cards, doing puzzles, reading together, or enjoying shared interests and hobbies.</p>
            </div>
            <div className="service-card">
              <h3>Accompanied Outings</h3>
              <p>Support with trips to the shops, a cafe, or community events to stay connected.</p>
            </div>
            <div className="service-card">
              <h3>Emotional Wellbeing</h3>
              <p>A friendly, reassuring presence that helps reduce feelings of loneliness and isolation.</p>
            </div>
            <div className="service-card">
              <h3>Routine Support</h3>
              <p>Light help with everyday activities alongside companionship, such as preparing a meal together.</p>
            </div>
            <div className="service-card">
              <h3>Family Peace of Mind</h3>
              <p>Knowing a kind, reliable person visits regularly gives families confidence and reassurance.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="care" title="Arrange companionship visits" text="A friendly visit can make a real difference. Get in touch to discuss companionship care." primaryLabel="Start a Care Enquiry" primaryHref="/care/enquiry" secondaryLabel="Back to all care services" secondaryHref="/care" />
    </>
  )
}

export default Companionship
