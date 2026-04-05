import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import CTASection from '../components/CTASection'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About CasaXpress - Care at Home &amp; Home Cleaning</title>
        <meta
          name="description"
          content="CasaXpress is a trusted UK home support brand offering compassionate care at home and reliable home cleaning services."
        />
      </Head>

      {/* HERO */}
      <section className="hero hero--care">
        <div className="container hero-grid">
          <div className="hero__content">
            <h1>About CasaXpress</h1>
            <p>
              We are a home support company built on trust, warmth, and a
              genuine commitment to helping people live well at home. From
              compassionate care to reliable cleaning, everything we do
              starts with people.
            </p>
          </div>
          <div className="hero__image">
            <img
              src="/images/IMG 11 (1).JPG"
              alt="CasaXpress team member sharing a warm moment with a client"
            />
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section">
        <div className="container">
          <div className="image-text">
            <div className="image-text__image">
              <img
                src="/images/IMG 9 (1).JPG"
                alt="Genuine care and warmth in action"
              />
            </div>
            <div className="image-text__content">
              <h2>Built around people, not processes</h2>
              <p>
                CasaXpress was founded on a simple idea: that families
                deserve access to genuinely caring, dependable home support.
                Whether someone needs help staying independent at home or a
                household needs reliable cleaning, we believe the quality of
                service should reflect the quality of the people who deliver it.
              </p>
              <p>
                That is why we choose our team carefully, for their warmth,
                reliability, and genuine commitment to making a difference.
                Every member of the CasaXpress team shares the same values:
                respect, kindness, and pride in doing their job well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TWO DIVISIONS */}
      <section className="section section--ivory">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Two services, one trusted brand</h2>
            <p className="section__subtitle">
              CasaXpress operates two clear service divisions, each with its
              own dedicated team and approach.
            </p>
          </div>

          <div className="pillars">
            <div className="pillar pillar--care">
              <div className="pillar__content">
                <p className="pillar__label">Our Lead Service</p>
                <h3 className="pillar__title">Care at Home</h3>
                <p className="pillar__text">
                  Compassionate adult care that helps people stay safe,
                  comfortable, and independent at home. Our care services
                  include personal care, companionship, daily living support,
                  respite, recovery support, and more.
                </p>
                <Link href="/care" className="btn btn-care">
                  Explore Care Services
                </Link>
              </div>
            </div>

            <div className="pillar pillar--clean">
              <div className="pillar__content">
                <p className="pillar__label">Domestic Services</p>
                <h3 className="pillar__title">Home Cleaning</h3>
                <p className="pillar__text">
                  Reliable, professional home cleaning for busy households.
                  Regular cleans, deep cleans, move-in/out cleaning, and
                  end of tenancy services delivered to a high standard.
                </p>
                <Link href="/cleaning" className="btn btn-clean">
                  Explore Cleaning Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">What we stand for</h2>
          </div>

          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-card__icon">&#9829;</div>
              <h3 className="trust-card__title">Compassion First</h3>
              <p className="trust-card__text">
                Everything starts with kindness. We treat every person we
                work with, clients, families, and colleagues, with genuine care.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon">&#129309;</div>
              <h3 className="trust-card__title">Trust &amp; Integrity</h3>
              <p className="trust-card__text">
                We earn trust through honesty, consistency, and doing what
                we say we will do. Our reputation is built on reliability.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon">&#9876;</div>
              <h3 className="trust-card__title">Dignity &amp; Respect</h3>
              <p className="trust-card__text">
                Every person deserves to be treated with dignity. We respect
                independence, preferences, and individuality in everything we do.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon">&#127775;</div>
              <h3 className="trust-card__title">Quality Without Compromise</h3>
              <p className="trust-card__text">
                We hold ourselves to high standards. Whether it is a care visit
                or a cleaning session, we take pride in getting it right.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon">&#128101;</div>
              <h3 className="trust-card__title">People-Led Service</h3>
              <p className="trust-card__text">
                Our team members are the heart of what we do. We invest in
                good people and support them to deliver great service.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon">&#128172;</div>
              <h3 className="trust-card__title">Open Communication</h3>
              <p className="trust-card__text">
                We keep families and clients informed. Honest, clear
                communication builds the foundation for great support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM IMAGE */}
      <section className="section section--care-bg">
        <div className="container">
          <div className="image-text image-text--reverse">
            <div className="image-text__image">
              <img
                src="/images/IMG 10 (1).JPG"
                alt="CasaXpress team delivering care with warmth"
              />
            </div>
            <div className="image-text__content">
              <h2>A team you can rely on</h2>
              <p>
                Everyone who works with CasaXpress is chosen for their character
                as much as their capability. We look for warmth, patience,
                reliability, and a genuine desire to support others.
              </p>
              <p>
                Whether our team is providing personal care, companionship, or
                a home clean, families can be confident that the person coming
                through their door is someone they can trust and feel comfortable
                with.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="care"
        title="Ready to get started?"
        text="Whether you need care at home or home cleaning, we are here to help."
        primaryLabel="Start a Care Enquiry"
        primaryHref="/care/enquiry"
        secondaryLabel="Or book a cleaning visit"
        secondaryHref="/contact"
      />
    </>
  )
}

export default About
