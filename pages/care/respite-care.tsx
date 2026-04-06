import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import CTASection from '../../components/CTASection'

const RespiteCare: NextPage = () => {
  return (
    <>
      <Head>
        <title>Respite Care at Home - CasaXpress</title>
        <meta name="description" content="Respite care that gives family carers a well-deserved break. Dependable temporary support so you can rest." />
      </Head>

      <section className="care-subhero">
        <div className="container">
          <div className="care-subhero__content">
            <span className="hero__badge hero__badge--care">Care at Home</span>
            <h1>Respite Care</h1>
            <p>
              Dependable temporary support that gives family carers the chance
              to rest and recharge, knowing their loved one is in safe, caring hands.
            </p>
            <Link href="/care/enquiry" className="btn btn-care">Arrange Respite Support</Link>
          </div>
          <div className="care-subhero__image">
            <img src="/images/IMG 6 (1).JPG" alt="Carer providing reassuring support" />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="image-text">
            <div className="image-text__image">
              <img src="/images/IMG 1 (1).JPG" alt="Supportive care in a home environment" />
            </div>
            <div className="image-text__content">
              <h2>A break you deserve</h2>
              <p>
                Caring for someone you love is one of the most important things
                a person can do, but it can also be exhausting. Taking time to
                look after yourself is not a luxury; it is a necessity.
              </p>
              <p>
                Our respite care provides reliable, temporary cover so family
                carers can step away for a few hours, a day, or longer, with
                confidence that their loved one is receiving the same quality
                of care and attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--care">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">What respite care offers</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>Short Breaks</h3>
              <p>A few hours of dependable cover so you can attend to personal needs, run errands, or rest.</p>
            </div>
            <div className="service-card">
              <h3>Extended Relief</h3>
              <p>Longer periods of support for holidays, weekends away, or times when you need extended rest.</p>
            </div>
            <div className="service-card">
              <h3>Continuity of Care</h3>
              <p>We maintain the same routines, preferences, and standards for a smooth experience.</p>
            </div>
            <div className="service-card">
              <h3>Familiar Carers</h3>
              <p>Where possible, the same carer provides respite visits so your loved one sees someone they trust.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection variant="care" title="Arrange respite care" text="You deserve a break. Let us provide dependable support so you can rest with peace of mind." primaryLabel="Start a Care Enquiry" primaryHref="/care/enquiry" secondaryLabel="Back to all care services" secondaryHref="/care" />
    </>
  )
}

export default RespiteCare
