import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import CTASection from '../components/CTASection'

const Cleaning: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Cleaning Services - CasaXpress</title>
        <meta
          name="description"
          content="Reliable, professional home cleaning services. Regular cleaning, deep cleans, move in/out, and end of tenancy cleaning across the UK."
        />
      </Head>

      {/* HERO */}
      <section className="hero hero--clean">
        <div className="container hero-grid">
          <div className="hero__content">
            <span className="hero__badge hero__badge--clean">Home Cleaning</span>
            <h1>Reliable home cleaning you can depend on</h1>
            <p>
              From regular weekly cleans to one-off deep cleans and end of
              tenancy services, CasaXpress keeps your home fresh, tidy,
              and welcoming.
            </p>
            <div className="hero__ctas">
              <Link href="/contact" className="btn btn-clean">
                Book a Cleaning Visit
              </Link>
              <Link href="#services" className="btn btn-clean-outline">
                View Services
              </Link>
            </div>
          </div>
          <div className="hero__image">
            <img
              src="/images/cleaner-kitchen-real.jpg"
              alt="Professional home cleaning service"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <div className="section__header">
            <span className="section__badge section__badge--clean">Our Services</span>
            <h2 className="section__title">Home cleaning tailored to your needs</h2>
            <p className="section__subtitle">
              Every home is different. We offer a range of cleaning services
              designed to fit around your schedule and requirements.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card service-card--clean" id="regular">
              <div className="service-card__icon">&#128998;</div>
              <h3>Regular Home Cleaning</h3>
              <p>
                Consistent weekly or fortnightly cleaning to keep your home
                at its best. We cover kitchens, bathrooms, living areas,
                dusting, vacuuming, and floor cleaning.
              </p>
              <ul className="feature-list" style={{ marginTop: '1rem' }}>
                <li>Kitchen cleaning and sanitising</li>
                <li>Bathroom cleaning</li>
                <li>Dusting and vacuuming throughout</li>
                <li>Floor mopping</li>
                <li>Surface wiping</li>
              </ul>
            </div>

            <div className="service-card service-card--clean" id="deep">
              <div className="service-card__icon">&#10024;</div>
              <h3>Deep Cleaning</h3>
              <p>
                A thorough, intensive clean that reaches every corner. Perfect
                for seasonal refreshes, spring cleans, or when your home needs
                extra attention.
              </p>
              <ul className="feature-list" style={{ marginTop: '1rem' }}>
                <li>Intensive kitchen and appliance cleaning</li>
                <li>Bathroom deep clean and descaling</li>
                <li>Skirting boards and high surfaces</li>
                <li>Behind furniture and appliances</li>
                <li>Window sills and frames</li>
              </ul>
            </div>

            <div className="service-card service-card--clean" id="move">
              <div className="service-card__icon">&#128230;</div>
              <h3>Move In / Move Out Cleaning</h3>
              <p>
                Professional cleaning for moving day. Whether you are leaving
                a property or settling into a new one, we make sure every room
                is spotless.
              </p>
              <ul className="feature-list" style={{ marginTop: '1rem' }}>
                <li>Full property clean</li>
                <li>Kitchen appliance cleaning</li>
                <li>All surfaces and fixtures</li>
                <li>Windows (interior)</li>
                <li>Carpets vacuumed and floors cleaned</li>
              </ul>
            </div>

            <div className="service-card service-card--clean" id="tenancy">
              <div className="service-card__icon">&#128273;</div>
              <h3>End of Tenancy Cleaning</h3>
              <p>
                A detailed, professional clean that helps tenants secure
                their deposit and leaves the property in excellent condition
                for landlords and letting agents.
              </p>
              <ul className="feature-list" style={{ marginTop: '1rem' }}>
                <li>Deep clean of all rooms</li>
                <li>Kitchen appliances inside and out</li>
                <li>Bathroom descaling and sanitising</li>
                <li>Window cleaning (interior)</li>
                <li>Carpet and floor cleaning</li>
              </ul>
            </div>

            <div className="service-card service-card--clean" id="seasonal">
              <div className="service-card__icon">&#127807;</div>
              <h3>Spring / Seasonal Refresh</h3>
              <p>
                A comprehensive clean to mark the change of seasons. Reset
                your home with a thorough refresh that covers all the areas
                that need extra care.
              </p>
              <ul className="feature-list" style={{ marginTop: '1rem' }}>
                <li>Full home deep clean</li>
                <li>Declutter support</li>
                <li>Hard-to-reach areas</li>
                <li>Upholstery freshening</li>
                <li>All rooms refreshed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section--clean-bg">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Why choose CasaXpress for your home</h2>
          </div>

          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-card__icon" style={{ background: 'var(--clean-bg)' }}>&#9989;</div>
              <h3 className="trust-card__title">Trusted Professionals</h3>
              <p className="trust-card__text">
                All our cleaners are vetted, trained, and insured. We only
                work with reliable individuals who share our standards.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon" style={{ background: 'var(--clean-bg)' }}>&#128197;</div>
              <h3 className="trust-card__title">Flexible Scheduling</h3>
              <p className="trust-card__text">
                We work around your schedule, offering cleaning at times
                that suit you, with no disruption to your day.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon" style={{ background: 'var(--clean-bg)' }}>&#128077;</div>
              <h3 className="trust-card__title">Quality Guarantee</h3>
              <p className="trust-card__text">
                We are not satisfied unless you are. If something is not right,
                we will make it right at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="clean"
        title="Ready to book a cleaning visit?"
        text="Contact us today for a free, no-obligation quote tailored to your home."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="Or explore our care services"
        secondaryHref="/care"
      />
    </>
  )
}

export default Cleaning
