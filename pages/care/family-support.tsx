import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import FAQAccordion from '../../components/FAQAccordion'
import CTASection from '../../components/CTASection'

const FamilySupport: NextPage = () => {
  return (
    <>
      <Head>
        <title>Family Support &amp; FAQs - CasaXpress Care at Home</title>
        <meta name="description" content="Information for families arranging care at home. FAQs about our services, how visits work, and how to get started." />
      </Head>

      <section className="care-subhero">
        <div className="container">
          <div className="care-subhero__content">
            <span className="hero__badge hero__badge--care">Care at Home</span>
            <h1>Family Support &amp; FAQs</h1>
            <p>
              Arranging care for someone you love is a significant decision.
              This page answers common questions and explains how our service
              works, so families can feel informed and confident.
            </p>
            <Link href="/care/enquiry" className="btn btn-care">Start a Care Enquiry</Link>
          </div>
          <div className="care-subhero__image">
            <img src="/images/IMG 4.JPG" alt="Family members together at home" />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">How our care service works</h2>
            <p className="section__subtitle">From the first conversation to ongoing support.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>1. Get in Touch</h3>
              <p>Contact us by phone or through our care enquiry form. No obligation.</p>
            </div>
            <div className="service-card">
              <h3>2. Initial Conversation</h3>
              <p>We listen and understand the needs, routines, and preferences.</p>
            </div>
            <div className="service-card">
              <h3>3. Tailored Plan</h3>
              <p>We create a support plan that fits around the individual.</p>
            </div>
            <div className="service-card">
              <h3>4. Carer Matching</h3>
              <p>We carefully match a carer based on personality and needs.</p>
            </div>
            <div className="service-card">
              <h3>5. Visits Begin</h3>
              <p>Support starts with a personal introduction and comfortable first visits.</p>
            </div>
            <div className="service-card">
              <h3>6. Ongoing Communication</h3>
              <p>We stay in touch and adapt the plan as needs change.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--care">
        <div className="container">
          <div className="image-text">
            <div className="image-text__image">
              <img src="/images/IMG 11 (1).JPG" alt="Carer and client in a moment of warmth" />
            </div>
            <div className="image-text__content">
              <h2>We are here for the whole family</h2>
              <p>
                Arranging care affects the whole family. We understand the worry
                and the emotional weight of this decision.
              </p>
              <p>
                We communicate openly, involve families in decisions, and make sure
                everyone feels heard and supported. You are never alone in this.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Frequently asked questions</h2>
          </div>
          <FAQAccordion
            items={[
              { question: 'What types of care do you provide at home?', answer: 'We offer personal care, companionship, daily living support, respite care, recovery support, and support for individuals living with memory-related challenges. Each service is tailored to individual needs.' },
              { question: 'Is your support only for older adults?', answer: 'No. Our services are available to any adult who needs support at home, including those recovering from illness or living with long-term conditions.' },
              { question: 'Can support be tailored to individual routines?', answer: 'Absolutely. Every care plan is built around the individual\'s routine, preferences, and comfort.' },
              { question: 'Do you offer companionship as well as practical help?', answer: 'Yes. Companionship is a core service. Many visits include both practical assistance and genuine companionship.' },
              { question: 'Can families arrange support on behalf of a loved one?', answer: 'Of course. Many enquiries come from family members and we welcome their involvement at every step.' },
              { question: 'How do I get started?', answer: 'Get in touch by phone or through our care enquiry form. We will have an initial conversation with no obligation.' },
              { question: 'Can support begin with just a few visits?', answer: 'Yes. Many people start with a few visits per week and adjust as needs change. No minimum commitment.' },
              { question: 'Do you offer respite support for family carers?', answer: 'We do. Our respite service provides dependable cover so family carers can take a break.' },
              { question: 'How are carers matched to clients?', answer: 'We match based on personality, experience, and specific needs to build the best possible relationship.' },
              { question: 'What if our needs change over time?', answer: 'Our plans are flexible. We adjust support as circumstances change and stay in regular contact.' },
            ]}
          />
        </div>
      </section>

      <CTASection variant="care" title="Have a question? We are here to help." text="Our friendly team is happy to answer any questions about our care services." primaryLabel="Start a Care Enquiry" primaryHref="/care/enquiry" secondaryLabel="Or call us on 01234 567 890" secondaryHref="tel:+441234567890" />
    </>
  )
}

export default FamilySupport
