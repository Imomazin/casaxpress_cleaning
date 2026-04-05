import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import TestimonialCards from '../components/TestimonialCards'
import ProcessSteps from '../components/ProcessSteps'
import CTASection from '../components/CTASection'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CasaXpress - Care at Home &amp; Trusted Home Cleaning Services</title>
        <meta
          name="description"
          content="CasaXpress provides compassionate adult care at home and reliable home cleaning services. Supporting families with dignity, warmth, and dependable support across the UK."
        />
      </Head>

      {/* HERO */}
      <section className="hero-split">
        <div className="container">
          <h1>
            Compassionate <em>care at home</em> and trusted support for everyday living
          </h1>
          <p>
            CasaXpress supports families through personalised adult home care and
            dependable home cleaning. Whether you need care for a loved one or help
            keeping your home at its best, we are here.
          </p>
          <div className="hero-split__ctas">
            <Link href="/care/enquiry" className="btn btn-care">
              Start a Care Enquiry
            </Link>
            <Link href="/cleaning" className="btn btn-clean-outline">
              Explore Home Cleaning
            </Link>
          </div>
          <div className="hero-split__image-grid">
            <img
              src="/images/IMG 2 (1).JPG"
              alt="Carer sharing a warm moment with an elderly client at home"
            />
            <img
              src="/images/cleaner-kitchen-real.jpg"
              alt="Professional home cleaning service"
            />
          </div>
        </div>
      </section>

      {/* TWO SERVICE PILLARS */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Two ways we support your home</h2>
            <p className="section__subtitle">
              From compassionate adult care to reliable home cleaning, CasaXpress
              brings trusted support to families across the UK.
            </p>
          </div>

          <div className="pillars">
            <div className="pillar pillar--care">
              <img
                className="pillar__image"
                src="/images/IMG 6 (1).JPG"
                alt="Carer providing warm, supportive care at home"
              />
              <div className="pillar__content">
                <p className="pillar__label">Our Lead Service</p>
                <h3 className="pillar__title">Care at Home</h3>
                <p className="pillar__text">
                  Support that helps adults live comfortably, safely, and
                  independently at home. From personal care to companionship,
                  every visit is thoughtful and tailored around individual needs.
                </p>
                <Link href="/care" className="btn btn-care">
                  Explore Care Services
                </Link>
              </div>
            </div>

            <div className="pillar pillar--clean">
              <img
                className="pillar__image"
                src="/images/cleaner-living-room.jpg"
                alt="Professional home cleaning service"
              />
              <div className="pillar__content">
                <p className="pillar__label">Domestic Services</p>
                <h3 className="pillar__title">Home Cleaning</h3>
                <p className="pillar__text">
                  Reliable home cleaning tailored to busy households, regular
                  upkeep, and one-off needs. Consistent quality you can depend on.
                </p>
                <Link href="/cleaning" className="btn btn-clean">
                  Explore Cleaning Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FAMILIES CHOOSE CASAXPRESS */}
      <section className="section section--ivory">
        <div className="container">
          <div className="section__header">
            <span className="section__badge">Trusted by Families</span>
            <h2 className="section__title">Why families choose CasaXpress</h2>
            <p className="section__subtitle">
              We put people first. Every service we deliver is guided by compassion,
              reliability, and genuine respect for the people we support.
            </p>
          </div>

          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-card__icon">&#9829;</div>
              <h3 className="trust-card__title">Compassionate Carers</h3>
              <p className="trust-card__text">
                Our care team is chosen for warmth, patience, and a genuine desire
                to make a difference in people&rsquo;s lives.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon">&#9734;</div>
              <h3 className="trust-card__title">Person-Centred Support</h3>
              <p className="trust-card__text">
                Every visit is shaped around individual routines, preferences,
                and the level of support needed. No two plans are the same.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon">&#8635;</div>
              <h3 className="trust-card__title">Flexible Visit Options</h3>
              <p className="trust-card__text">
                From a few hours a week to daily support, we arrange visits
                that work around your life and schedule.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon">&#9876;</div>
              <h3 className="trust-card__title">Respect for Dignity</h3>
              <p className="trust-card__text">
                We treat every person with the respect and consideration they
                deserve. Independence and comfort always come first.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon">&#128197;</div>
              <h3 className="trust-card__title">Dependable Scheduling</h3>
              <p className="trust-card__text">
                Consistency matters. We keep to agreed schedules so families can
                plan with confidence and peace of mind.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon">&#128172;</div>
              <h3 className="trust-card__title">Clear Communication</h3>
              <p className="trust-card__text">
                Families are always kept informed. We believe open, honest
                communication builds the trust that great care depends on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CARE SERVICES PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__badge">Care at Home</span>
            <h2 className="section__title">
              Compassionate home care, built around everyday life
            </h2>
            <p className="section__subtitle">
              Our care services help adults stay comfortable and independent at home,
              with support that adapts to each person&rsquo;s needs and routine.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card service-card--care">
              <div className="service-card__icon">&#128588;</div>
              <h3>Personal Care</h3>
              <p>
                Respectful help with washing, dressing, and grooming, delivered
                with sensitivity and tailored to personal routines.
              </p>
              <Link href="/care/personal-care" className="service-card__link">
                Learn more &rarr;
              </Link>
            </div>
            <div className="service-card service-card--care">
              <div className="service-card__icon">&#128101;</div>
              <h3>Companionship</h3>
              <p>
                Friendly visits that bring conversation, social connection, and
                emotional wellbeing into everyday life.
              </p>
              <Link href="/care/companionship" className="service-card__link">
                Learn more &rarr;
              </Link>
            </div>
            <div className="service-card service-card--care">
              <div className="service-card__icon">&#127858;</div>
              <h3>Daily Living Support</h3>
              <p>
                Help with meal preparation, light household tasks, errands, and
                everyday routines that keep life running smoothly.
              </p>
              <Link href="/care/daily-living-support" className="service-card__link">
                Learn more &rarr;
              </Link>
            </div>
            <div className="service-card service-card--care">
              <div className="service-card__icon">&#128154;</div>
              <h3>Respite Support</h3>
              <p>
                Temporary, dependable support so family carers can take a break
                knowing their loved one is in good hands.
              </p>
              <Link href="/care/respite-care" className="service-card__link">
                Learn more &rarr;
              </Link>
            </div>
            <div className="service-card service-card--care">
              <div className="service-card__icon">&#127969;</div>
              <h3>Recovery Support</h3>
              <p>
                Helping people regain confidence and routine after illness or a
                hospital stay, in the comfort of their own home.
              </p>
              <Link href="/care/recovery-support" className="service-card__link">
                Learn more &rarr;
              </Link>
            </div>
            <div className="service-card service-card--care">
              <div className="service-card__icon">&#129303;</div>
              <h3>Dementia Support</h3>
              <p>
                Gentle, person-centred support for individuals living with
                memory-related challenges, and reassurance for families.
              </p>
              <Link href="/care/dementia-support" className="service-card__link">
                Learn more &rarr;
              </Link>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/care" className="btn btn-care-outline">
              View All Care at Home Services
            </Link>
          </div>
        </div>
      </section>

      {/* CLEANING SERVICES PREVIEW */}
      <section className="section section--clean-bg">
        <div className="container">
          <div className="section__header">
            <span className="section__badge section__badge--clean">Home Cleaning</span>
            <h2 className="section__title">Reliable cleaning you can count on</h2>
            <p className="section__subtitle">
              From regular upkeep to one-off deep cleans, our cleaning service
              keeps your home fresh, tidy, and welcoming.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card service-card--clean">
              <div className="service-card__icon">&#128998;</div>
              <h3>Regular Home Cleaning</h3>
              <p>
                Consistent weekly or fortnightly cleaning to keep your home
                at its best without the effort.
              </p>
            </div>
            <div className="service-card service-card--clean">
              <div className="service-card__icon">&#10024;</div>
              <h3>Deep Cleaning</h3>
              <p>
                A thorough clean that reaches every corner, perfect for
                seasonal refreshes or special occasions.
              </p>
            </div>
            <div className="service-card service-card--clean">
              <div className="service-card__icon">&#128230;</div>
              <h3>Move In / Move Out</h3>
              <p>
                Professional cleaning for moving day, leaving your old or new
                home spotless.
              </p>
            </div>
            <div className="service-card service-card--clean">
              <div className="service-card__icon">&#128273;</div>
              <h3>End of Tenancy</h3>
              <p>
                Helping tenants and landlords with detailed end-of-tenancy
                cleaning that protects deposits.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/cleaning" className="btn btn-clean">
              View Home Cleaning Services
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">How it works</h2>
            <p className="section__subtitle">
              Getting started is straightforward. We make arranging care or
              cleaning as simple and stress-free as possible.
            </p>
          </div>

          <ProcessSteps
            steps={[
              {
                title: 'Tell us what you need',
                text: 'Get in touch to discuss your care or cleaning requirements. We listen carefully and take the time to understand.',
              },
              {
                title: 'We match the right support',
                text: 'Based on your needs, we arrange the right team member and create a plan that works around your schedule.',
              },
              {
                title: 'Support begins at home',
                text: 'Visits are arranged, and dependable support starts. We stay in touch to make sure everything is working well.',
              },
            ]}
          />
        </div>
      </section>

      {/* FAMILY REASSURANCE */}
      <section className="section section--ivory">
        <div className="container">
          <div className="image-text">
            <div className="image-text__image">
              <img
                src="/images/IMG 9 (1).JPG"
                alt="Carer sharing a warm moment with a client"
              />
            </div>
            <div className="image-text__content">
              <h2>Support you can trust, people you can rely on</h2>
              <p>
                At CasaXpress, we understand that inviting someone into your home
                is a matter of deep trust. That is why every member of our team
                is chosen not just for their skills, but for their warmth,
                reliability, and genuine care for others.
              </p>
              <p>
                We work closely with families to ensure that every visit
                respects routine, personality, and the things that matter most.
                Our aim is simple: to help people live well at home, with
                dignity and confidence.
              </p>
              <Link href="/about" className="btn btn-care-outline">
                About CasaXpress
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">What families say about us</h2>
          </div>

          <TestimonialCards
            testimonials={[
              {
                text: 'The care team has been wonderful with my mother. They are patient, kind, and always respectful of her routine. It has given our whole family peace of mind.',
                author: 'Sarah M.',
                role: 'Daughter of care client',
                variant: 'care',
              },
              {
                text: 'Finding the right support for Dad felt overwhelming, but CasaXpress made it straightforward. The companionship visits have made a real difference to his wellbeing.',
                author: 'James T.',
                role: 'Son of care client',
                variant: 'care',
              },
              {
                text: 'We have used CasaXpress for our regular home cleaning for months now. They are always on time, thorough, and leave the house spotless. Highly recommend.',
                author: 'Rachel K.',
                role: 'Home cleaning client',
                variant: 'clean',
              },
            ]}
          />
        </div>
      </section>

      {/* CTA BAND */}
      <CTASection
        variant="care"
        title="Looking for support for yourself or a loved one?"
        text="Our friendly team is here to help. Start a care enquiry today and let us find the right support for your family."
        primaryLabel="Start a Care Enquiry"
        primaryHref="/care/enquiry"
        secondaryLabel="Or book a home cleaning service"
        secondaryHref="/contact"
      />
    </>
  )
}

export default Home
