import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import CTASection from '../../components/CTASection'

const DailyLiving: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daily Living Support at Home - CasaXpress</title>
        <meta name="description" content="Help with everyday tasks at home including meal preparation, light housekeeping, mobility support, and routine assistance." />
      </Head>

      <section className="care-subhero">
        <div className="container">
          <div className="care-subhero__content">
            <span className="hero__badge hero__badge--care">Care at Home</span>
            <h1>Daily Living Support</h1>
            <p>
              Practical, thoughtful help with the everyday tasks that keep life
              running smoothly at home. From meals to mobility, we support
              routines with care and reliability.
            </p>
            <Link href="/care/enquiry" className="btn btn-care">Arrange Support</Link>
          </div>
          <div className="care-subhero__image">
            <img src="/images/IMG 3.JPG" alt="Carer helping with mobility and daily tasks" />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="image-text">
            <div className="image-text__image">
              <img src="/images/IMG 8 (1).JPG" alt="Carer helping with daily planning" />
            </div>
            <div className="image-text__content">
              <h2>Keeping everyday life on track</h2>
              <p>
                Sometimes it is the small, everyday things that make the biggest
                difference. A nutritious meal, a tidy living space, or a helping
                hand getting to an appointment can help someone feel comfortable,
                capable, and connected to their routine.
              </p>
              <p>
                Our daily living support makes sure these essentials are taken
                care of with reliability and warmth, so people can stay
                independent at home for as long as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--care">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">How we help with daily life</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Meal Preparation</h3>
              <p>Preparing nutritious meals based on dietary preferences and requirements.</p>
            </div>
            <div className="service-card">
              <h3>Light Housekeeping</h3>
              <p>Help with tidying, laundry, washing up, and keeping living spaces comfortable.</p>
            </div>
            <div className="service-card">
              <h3>Mobility Assistance</h3>
              <p>Safe, careful support with moving around the home and maintaining confidence.</p>
            </div>
            <div className="service-card">
              <h3>Errands &amp; Shopping</h3>
              <p>Help with prescriptions, groceries, or other essentials that keep the household running.</p>
            </div>
            <div className="service-card">
              <h3>Appointment Support</h3>
              <p>Accompaniment to medical appointments, social activities, or other outings.</p>
            </div>
            <div className="service-card">
              <h3>Wellbeing Checks</h3>
              <p>Regular check-ins to make sure everything is going well, offering reassurance to families.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="care" title="Arrange daily living support" text="Let us help with the everyday tasks that make life at home more comfortable." primaryLabel="Start a Care Enquiry" primaryHref="/care/enquiry" secondaryLabel="Back to all care services" secondaryHref="/care" />
    </>
  )
}

export default DailyLiving
