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
        <meta
          name="description"
          content="Information for families arranging care at home. Frequently asked questions about our care services, how visits work, and how to get started."
        />
      </Head>

      <section className="care-subhero">
        <div className="container">
          <div className="care-subhero__content">
            <span className="hero__badge">Care at Home</span>
            <h1>Family Support &amp; FAQs</h1>
            <p>
              We understand that arranging care for someone you love is a
              significant decision. This page answers common questions and
              explains how our care service works, so families can feel
              informed and confident.
            </p>
            <Link href="/care/enquiry" className="btn btn-care">
              Start a Care Enquiry
            </Link>
          </div>
          <div className="care-subhero__image">
            <img
              src="/images/IMG 4.JPG"
              alt="Family members together at home"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS FOR FAMILIES */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">How our care service works</h2>
            <p className="section__subtitle">
              From the first conversation to ongoing support, here is what
              families can expect.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card service-card--care">
              <h3>1. Get in Touch</h3>
              <p>
                Contact us by phone or through our care enquiry form. There
                is no obligation, and we are happy to answer any questions
                you have about our services.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>2. Initial Conversation</h3>
              <p>
                We take time to listen and understand the needs of the person
                requiring support, their routines, preferences, and what
                matters most to the family.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>3. Tailored Plan</h3>
              <p>
                Based on our conversation, we create a support plan that
                fits around the individual. This can start small and adjust
                over time as needs change.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>4. Carer Matching</h3>
              <p>
                We carefully match a carer based on personality, experience,
                and the specific needs of the person being supported.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>5. Visits Begin</h3>
              <p>
                Support starts according to the agreed schedule. We introduce
                the carer personally and make sure the first visits are
                comfortable for everyone.
              </p>
            </div>
            <div className="service-card service-card--care">
              <h3>6. Ongoing Communication</h3>
              <p>
                We stay in touch with families to ensure everything is working
                well. If needs change, we adapt the plan accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="section section--ivory">
        <div className="container">
          <div className="image-text">
            <div className="image-text__image">
              <img
                src="/images/IMG 11 (1).JPG"
                alt="Carer and client in a moment of genuine warmth"
              />
            </div>
            <div className="image-text__content">
              <h2>We are here for the whole family</h2>
              <p>
                Arranging care is not just about the person receiving support.
                It affects the whole family. We understand the worry, the
                questions, and the emotional weight of making this decision.
              </p>
              <p>
                That is why we communicate openly, involve families in
                decisions, and make sure that everyone feels heard and
                supported throughout the process. You are never alone in this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Frequently asked questions</h2>
          </div>

          <FAQAccordion
            items={[
              {
                question: 'What types of care do you provide at home?',
                answer: 'We offer personal care, companionship, daily living support, respite care for family carers, recovery support after illness or hospital stays, and support for individuals living with memory-related challenges. Each service is tailored to individual needs and preferences.',
              },
              {
                question: 'Is your support only for older adults?',
                answer: 'No. While many of our clients are older adults, our services are available to any adult who needs support at home. This includes people recovering from illness, those living with long-term conditions, or anyone who would benefit from regular in-home assistance.',
              },
              {
                question: 'Can support be tailored to individual routines?',
                answer: 'Absolutely. We take time to understand each person\'s routine, preferences, and what makes them comfortable. Every care plan is built around the individual, not a standard template. We work with the person and their family to ensure the support feels right.',
              },
              {
                question: 'Do you offer companionship as well as practical help?',
                answer: 'Yes. Companionship is one of our core services. Friendly conversation, social interaction, and emotional support are just as important as practical help. Many of our visits include both practical assistance and genuine companionship.',
              },
              {
                question: 'Can families arrange support on behalf of a loved one?',
                answer: 'Of course. Many of our enquiries come from family members who want to arrange support for a parent, relative, or partner. We are happy to speak with families, involve them in planning, and keep them informed throughout.',
              },
              {
                question: 'How do I get started?',
                answer: 'Simply get in touch by phone or through our care enquiry form. We will have an initial conversation to understand your needs and discuss how we can help. There is no obligation at this stage, and we are happy to answer any questions you may have.',
              },
              {
                question: 'Can support begin with just a few visits?',
                answer: 'Yes. Many people start with a small number of visits per week and adjust as needs change. There is no minimum commitment, and we are completely flexible about increasing or decreasing the level of support over time.',
              },
              {
                question: 'Do you offer respite support for family carers?',
                answer: 'We do. We understand the demands of caring for a loved one. Our respite service provides dependable, temporary cover so family carers can take a break knowing their loved one is being well looked after by someone they can trust.',
              },
              {
                question: 'How are carers matched to clients?',
                answer: 'We match carers based on personality, experience, and the specific needs and preferences of the person being supported. Building a good relationship between the carer and client is a priority, and we take care to get this right.',
              },
              {
                question: 'What if our needs change over time?',
                answer: 'Our care plans are designed to be flexible. If the level of support needs to increase or decrease, or if circumstances change, we adjust the plan accordingly. We stay in regular contact to make sure the service continues to meet your needs.',
              },
            ]}
          />
        </div>
      </section>

      <CTASection
        variant="care"
        title="Have a question? We are here to help."
        text="Our friendly team is happy to answer any questions and help you understand how our care services work."
        primaryLabel="Start a Care Enquiry"
        primaryHref="/care/enquiry"
        secondaryLabel="Or call us on 01234 567 890"
        secondaryHref="tel:+441234567890"
      />
    </>
  )
}

export default FamilySupport
