import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import CTASection from '../../components/CTASection'

const DementiaSupport: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dementia Support at Home - CasaXpress</title>
        <meta
          name="description"
          content="Gentle, person-centred home support for individuals living with memory-related challenges. Reassurance and consistency for families."
        />
      </Head>

      <section className="care-subhero">
        <div className="container">
          <div className="care-subhero__content">
            <span className="hero__badge">Care at Home</span>
            <h1>Dementia Support</h1>
            <p>
              Gentle, patient, person-centred support for individuals living
              with memory-related challenges. Familiar faces, consistent
              routines, and reassurance for the whole family.
            </p>
            <Link href="/care/enquiry" className="btn btn-care">
              Arrange Dementia Support
            </Link>
          </div>
          <div className="care-subhero__image">
            <img
              src="/images/IMG 7 (1).JPG"
              alt="Carer providing gentle emotional support"
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
                alt="Carer engaging with client in a calm and supportive way"
              />
            </div>
            <div className="image-text__content">
              <h2>Consistency, patience, and understanding</h2>
              <p>
                Living with a memory-related condition can be confusing and
                unsettling, both for the individual and for their family.
                Our support is designed to bring consistency, calm, and
                reassurance into everyday life.
              </p>
              <p>
                We focus on maintaining familiar routines, providing gentle
                reminders, and creating a sense of stability. Our carers
                are patient, understanding, and genuinely committed to
                supporting each person in a way that respects who they are.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">How we provide support</h2>
            <p className="section__subtitle">
              Our approach is person-centred, gentle, and focused on
              maintaining quality of life at home.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card service-card--care">
              <h3>Routine Consistency</h3>
              <p>
                Maintaining familiar daily routines helps reduce confusion
                and provides a sense of security and comfort.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Familiar Carers</h3>
              <p>
                Where possible, the same carer visits each time, building
                a familiar relationship that brings comfort.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Gentle Reminders</h3>
              <p>
                Patient prompts for daily tasks, medication, meals, and
                activities, delivered with kindness and understanding.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Companionship</h3>
              <p>
                Calm, friendly presence that reduces feelings of confusion,
                loneliness, and anxiety.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Safety at Home</h3>
              <p>
                Helping to maintain a safe, comfortable environment and
                providing reassurance throughout the day.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>Family Reassurance</h3>
              <p>
                Keeping families informed and supported. We understand the
                emotional toll and are here for the whole family.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            <strong>A note on our approach:</strong> CasaXpress provides supportive
            home care for individuals living with memory-related challenges. Our
            service is focused on companionship, routine support, and practical
            assistance. For specialist clinical advice or assessment, we recommend
            speaking with your GP or local health team.
          </p>
        </div>
      </section>

      <CTASection
        variant="care"
        title="Arrange dementia support at home"
        text="Consistent, gentle care that brings reassurance to the whole family. Get in touch to talk about how we can help."
        primaryLabel="Start a Care Enquiry"
        primaryHref="/care/enquiry"
        secondaryLabel="Back to all care services"
        secondaryHref="/care"
      />
    </>
  )
}

export default DementiaSupport
