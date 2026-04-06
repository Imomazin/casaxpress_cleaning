import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import CTASection from '../../components/CTASection'

const PersonalCare: NextPage = () => {
  return (
    <>
      <Head>
        <title>Personal Care at Home - CasaXpress</title>
        <meta name="description" content="Respectful personal care support at home. Help with washing, dressing, and grooming delivered with dignity." />
      </Head>

      <section className="care-subhero">
        <div className="container">
          <div className="care-subhero__content">
            <span className="hero__badge hero__badge--care">Care at Home</span>
            <h1>Personal Care</h1>
            <p>
              Respectful, dignified support with everyday personal care needs.
              Delivered at home, tailored to individual routines, and guided
              by genuine warmth and sensitivity.
            </p>
            <Link href="/care/enquiry" className="btn btn-care">Arrange Personal Care</Link>
            <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>or call us on <a href="tel:+447398761877" style={{ color: 'var(--care-primary)', fontWeight: 600 }}>07398 761 877</a></p>
          </div>
          <div className="care-subhero__image">
            <img src="/images/IMG 1 (1).JPG" alt="Carer providing personal care with warmth and respect" />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="image-text">
            <div className="image-text__image">
              <img src="/images/IMG 11 (1).JPG" alt="Carer and client sharing a moment of trust" />
            </div>
            <div className="image-text__content">
              <h2>Support that respects your routine</h2>
              <p>
                Personal care is one of the most intimate forms of support, and
                we understand the trust it requires. Our carers approach every
                visit with patience, sensitivity, and a genuine commitment to
                preserving dignity and independence.
              </p>
              <p>
                Whether it is help getting ready in the morning, support with
                bathing, or assistance with dressing, we follow each person's
                preferred routine and make sure they feel comfortable and in control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--care">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">What personal care includes</h2>
            <p className="section__subtitle">Every visit is shaped around individual needs and preferences.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Washing &amp; Bathing</h3>
              <p>Gentle support with bathing, showering, and washing, always respecting privacy and preferences.</p>
            </div>
            <div className="service-card">
              <h3>Dressing</h3>
              <p>Help with choosing clothes and getting dressed, following the person's own style and routine.</p>
            </div>
            <div className="service-card">
              <h3>Grooming</h3>
              <p>Support with hair care, oral hygiene, skincare, and looking and feeling your best every day.</p>
            </div>
            <div className="service-card">
              <h3>Continence Support</h3>
              <p>Discreet, respectful assistance when needed, handled with complete professionalism.</p>
            </div>
            <div className="service-card">
              <h3>Morning &amp; Bedtime Routines</h3>
              <p>Support at the start and end of each day, tailored to personal habits and rhythms.</p>
            </div>
            <div className="service-card">
              <h3>Medication Reminders</h3>
              <p>Gentle reminders to take prescribed medication on time, helping maintain health routines.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="image-text image-text--reverse">
            <div className="image-text__image">
              <img src="/images/IMG 10 (1).JPG" alt="Warm interaction between carer and client" />
            </div>
            <div className="image-text__content">
              <h2>Built on trust and sensitivity</h2>
              <p>
                We know that accepting personal care support is a big step. That
                is why we build a relationship with each person, so they feel
                comfortable, respected, and genuinely cared for.
              </p>
              <p>
                Families can be reassured that their loved one is receiving
                thoughtful, consistent care from people who take pride in doing
                their job with kindness.
              </p>
              <Link href="/care/enquiry" className="btn btn-care-outline">Start a Care Enquiry</Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="care" title="Arrange personal care at home" text="Get in touch to discuss respectful, tailored personal care for you or your loved one." primaryLabel="Start a Care Enquiry" primaryHref="/care/enquiry" secondaryLabel="Back to all care services" secondaryHref="/care" />
    </>
  )
}

export default PersonalCare
