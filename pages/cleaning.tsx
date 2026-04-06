import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import ProcessSteps from '../components/ProcessSteps'
import TestimonialCards from '../components/TestimonialCards'
import CTASection from '../components/CTASection'

const Cleaning: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Cleaning Services - CasaXpress</title>
        <meta name="description" content="Reliable, professional home cleaning services. Regular cleaning, deep cleans, move in/out, and end of tenancy cleaning." />
      </Head>

      {/* HERO */}
      <section className="hero hero--clean">
        <div className="container hero-grid">
          <div className="hero__content">
            <span className="hero__badge hero__badge--clean">Home Cleaning</span>
            <h1>Reliable home cleaning you can <em>depend on</em></h1>
            <p>
              From regular weekly cleans to one-off deep cleans and end of
              tenancy services, CasaXpress keeps your home fresh, tidy,
              and welcoming.
            </p>
            <div className="hero__ctas">
              <Link href="/contact" className="btn btn-clean">Book a Cleaning Visit</Link>
              <Link href="#services" className="btn btn-clean-outline">View Services</Link>
            </div>
          </div>
          <div className="hero__image">
            <img src="/images/cleaner-kitchen-real.jpg" alt="Professional home cleaning" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section--white" id="services">
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
            <div className="service-card" id="regular">
              <h3>Regular Home Cleaning</h3>
              <p>
                Consistent weekly or fortnightly cleaning to keep your home at its best.
                Kitchens, bathrooms, living areas, dusting, vacuuming, and floor cleaning.
              </p>
              <ul className="feature-list feature-list--clean" style={{ marginTop: '0.75rem' }}>
                <li>Kitchen cleaning and sanitising</li>
                <li>Bathroom cleaning</li>
                <li>Dusting and vacuuming</li>
                <li>Floor mopping</li>
                <li>Surface wiping</li>
              </ul>
            </div>

            <div className="service-card" id="deep">
              <h3>Deep Cleaning</h3>
              <p>
                A thorough, intensive clean reaching every corner. Perfect for
                seasonal refreshes or when your home needs extra attention.
              </p>
              <ul className="feature-list feature-list--clean" style={{ marginTop: '0.75rem' }}>
                <li>Intensive kitchen and appliance cleaning</li>
                <li>Bathroom deep clean and descaling</li>
                <li>Skirting boards and high surfaces</li>
                <li>Behind furniture and appliances</li>
                <li>Window sills and frames</li>
              </ul>
            </div>

            <div className="service-card" id="move">
              <h3>Move In / Move Out Cleaning</h3>
              <p>
                Professional cleaning for moving day. Leaving or settling into a property,
                we make sure every room is spotless.
              </p>
              <ul className="feature-list feature-list--clean" style={{ marginTop: '0.75rem' }}>
                <li>Full property clean</li>
                <li>Kitchen appliance cleaning</li>
                <li>All surfaces and fixtures</li>
                <li>Windows (interior)</li>
                <li>Carpets and floors</li>
              </ul>
            </div>

            <div className="service-card" id="tenancy">
              <h3>End of Tenancy Cleaning</h3>
              <p>
                A detailed professional clean that helps tenants secure deposits
                and leaves properties in excellent condition.
              </p>
              <ul className="feature-list feature-list--clean" style={{ marginTop: '0.75rem' }}>
                <li>Deep clean of all rooms</li>
                <li>Kitchen appliances inside and out</li>
                <li>Bathroom descaling and sanitising</li>
                <li>Window cleaning (interior)</li>
                <li>Carpet and floor cleaning</li>
              </ul>
            </div>

            <div className="service-card" id="seasonal">
              <h3>Spring / Seasonal Refresh</h3>
              <p>
                A comprehensive clean to mark the change of seasons. Reset your
                home with a thorough refresh covering all areas that need care.
              </p>
              <ul className="feature-list feature-list--clean" style={{ marginTop: '0.75rem' }}>
                <li>Full home deep clean</li>
                <li>Hard-to-reach areas</li>
                <li>Upholstery freshening</li>
                <li>All rooms refreshed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section--clean">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Why choose CasaXpress for your home</h2>
          </div>
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--clean">&#9989;</div>
              <h3 className="trust-card__title">Trusted Professionals</h3>
              <p className="trust-card__text">All our cleaners are vetted, trained, and insured.</p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--clean">&#128197;</div>
              <h3 className="trust-card__title">Flexible Scheduling</h3>
              <p className="trust-card__text">We work around your schedule with no disruption to your day.</p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--clean">&#128077;</div>
              <h3 className="trust-card__title">Quality Guarantee</h3>
              <p className="trust-card__text">If something is not right, we will make it right at no extra cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section--white">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">How it works</h2>
          </div>
          <ProcessSteps
            variant="clean"
            steps={[
              { title: 'Tell us what you need', text: 'Get in touch with your cleaning requirements and we will provide a tailored quote.' },
              { title: 'We arrange your visit', text: 'We schedule your clean at a time that works for you and assign a trusted cleaner.' },
              { title: 'Enjoy your clean home', text: 'Sit back while we take care of the cleaning. Consistent, thorough, every time.' },
            ]}
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--clean">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">What our clients say</h2>
          </div>
          <TestimonialCards
            testimonials={[
              { text: 'CasaXpress has been cleaning our home for months now. Always on time, always thorough, and the house is spotless every time. Highly recommend.', author: 'Rachel K.', role: 'Regular cleaning client', variant: 'clean' },
              { text: 'Used them for an end of tenancy clean and the results were fantastic. Got our full deposit back. Professional and reliable.', author: 'Mark S.', role: 'End of tenancy client', variant: 'clean' },
              { text: 'The deep clean was exactly what our home needed. They reached places we did not even think of. Very pleased with the service.', author: 'Emma J.', role: 'Deep cleaning client', variant: 'clean' },
            ]}
          />
        </div>
      </section>

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
