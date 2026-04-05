import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import CTASection from '../../components/CTASection'

const DailyLiving: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daily Living Support at Home - CasaXpress</title>
        <meta
          name="description"
          content="Help with everyday tasks at home including meal preparation, light housekeeping, mobility support, and routine assistance."
        />
      </Head>

      <section className="care-subhero">
        <div className="container">
          <div className="care-subhero__content">
            <span className="hero__badge">Care at Home</span>
            <h1>Daily Living Support</h1>
            <p>
              Practical, thoughtful help with the everyday tasks that keep
              life running smoothly at home. From meals to mobility, we support
              routines with care and reliability.
            </p>
            <Link href="/care/enquiry" className="btn btn-care">
              Arrange Support
            </Link>
          </div>
          <div className="care-subhero__image">
            <img
              src="/images/IMG 3.JPG"
              alt="Carer helping an older adult with mobility and daily tasks"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="image-text">
            <div className="image-text__image">
              <img
                src="/images/IMG 8 (1).JPG"
                alt="Carer helping with daily planning and support"
              />
            </div>
            <div className="image-text__content">
              <h2>Keeping everyday life on track</h2>
              <p>
                Sometimes it is the small, everyday things that make the biggest
                difference. A nutritious meal prepared with care, a tidy living
                space, or a helping hand getting to an appointment can help
                someone feel comfortable, capable, and connected to their normal
                routine.
              </p>
              <p>
                Our daily living support is about making sure these essentials
                are taken care of with reliability and warmth, so people can
                stay independent at home for as long as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">How we help with daily life</h2>
          </div>

          <div className="services-grid">
            <div className="service-card service-card--care">
              <h3>Meal Preparation</h3>
              <p>
                Preparing nutritious meals based on dietary preferences and
                requirements, making sure eating well stays a part of the routine.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Light Housekeeping</h3>
              <p>
                Help with tidying, laundry, washing up, and keeping living
                spaces comfortable and manageable.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Mobility Assistance</h3>
              <p>
                Safe, careful support with moving around the home, getting
                in and out of chairs, and maintaining confidence with mobility.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Errands &amp; Shopping</h3>
              <p>
                Help with picking up prescriptions, groceries, or other
                essentials that keep the household running.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Appointment Support</h3>
              <p>
                Accompaniment to medical appointments, social activities,
                or other outings that are part of life.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Wellbeing Checks</h3>
              <p>
                Regular check-ins to make sure everything is going well,
                offering reassurance to both the individual and their family.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="care"
        title="Arrange daily living support"
        text="Let us help with the everyday tasks that make life at home more comfortable and manageable."
        primaryLabel="Start a Care Enquiry"
        primaryHref="/care/enquiry"
        secondaryLabel="Back to all care services"
        secondaryHref="/care"
      />
    </>
  )
}

export default DailyLiving
