import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import CTASection from '../../components/CTASection'

const RecoverySupport: NextPage = () => {
  return (
    <>
      <Head>
        <title>Recovery Support at Home - CasaXpress</title>
        <meta
          name="description"
          content="Post-hospital and recovery support at home. Helping people regain confidence and routine after illness in the comfort of their own home."
        />
      </Head>

      <section className="care-subhero">
        <div className="container">
          <div className="care-subhero__content">
            <span className="hero__badge">Care at Home</span>
            <h1>Recovery Support</h1>
            <p>
              Coming home after illness or a hospital stay can feel daunting.
              Our recovery support helps people regain confidence, routine,
              and comfort at their own pace.
            </p>
            <Link href="/care/enquiry" className="btn btn-care">
              Arrange Recovery Support
            </Link>
          </div>
          <div className="care-subhero__image">
            <img
              src="/images/IMG 5 (1).JPG"
              alt="Person at home receiving support during recovery"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="image-text">
            <div className="image-text__image">
              <img
                src="/images/IMG 10 (1).JPG"
                alt="Carer helping with recovery support at home"
              />
            </div>
            <div className="image-text__content">
              <h2>Recovering well at home</h2>
              <p>
                Returning home after a period of illness or time in hospital
                is an important step, but it often comes with uncertainty.
                Our recovery support is designed to ease that transition.
              </p>
              <p>
                We help with the practical aspects of daily life while someone
                gets back on their feet: meals, medication reminders, wellbeing
                checks, and gentle encouragement. The goal is always to support
                recovery at a comfortable pace, in familiar surroundings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">How we support recovery</h2>
          </div>

          <div className="services-grid">
            <div className="service-card service-card--care">
              <h3>Post-Hospital Transition</h3>
              <p>
                Helping people settle back into home life after a hospital
                stay, with practical support from day one.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Meal Preparation</h3>
              <p>
                Nutritious meals prepared to support healing and energy,
                based on individual dietary needs and preferences.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Medication Reminders</h3>
              <p>
                Gentle reminders to take prescribed medication on time,
                supporting health routines during recovery.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Wellbeing Checks</h3>
              <p>
                Regular visits to check on comfort, progress, and general
                wellbeing, providing reassurance to families.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Mobility Support</h3>
              <p>
                Careful assistance with moving around the home safely,
                building confidence step by step.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Routine Rebuilding</h3>
              <p>
                Helping people gradually return to their normal routines
                and regain independence at a pace that feels right.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="care"
        title="Arrange recovery support at home"
        text="Let us help you or your loved one recover comfortably at home with thoughtful, practical support."
        primaryLabel="Start a Care Enquiry"
        primaryHref="/care/enquiry"
        secondaryLabel="Back to all care services"
        secondaryHref="/care"
      />
    </>
  )
}

export default RecoverySupport
