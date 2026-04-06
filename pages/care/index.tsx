import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import FAQAccordion from '../../components/FAQAccordion'
import TestimonialCards from '../../components/TestimonialCards'
import ProcessSteps from '../../components/ProcessSteps'
import CTASection from '../../components/CTASection'

const CareHome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Care at Home - CasaXpress | Compassionate Adult Home Care</title>
        <meta
          name="description"
          content="CasaXpress Care at Home provides compassionate adult care that helps people stay safe, comfortable, and independent in their own homes."
        />
      </Head>

      {/* HERO */}
      <section className="hero hero--care">
        <div className="container hero-grid">
          <div className="hero__content">
            <span className="hero__badge hero__badge--care">Care at Home</span>
            <h1>
              Compassionate adult care at home, built around <em>everyday life</em>
            </h1>
            <p>
              Our care services help adults stay comfortable, safe, and independent
              at home. Every visit is personal, every plan is thoughtful, and every
              moment is guided by genuine warmth.
            </p>
            <div className="hero__ctas">
              <Link href="/care/enquiry" className="btn btn-care">
                Start a Care Enquiry
              </Link>
              <Link href="#services" className="btn btn-care-outline">
                View Our Services
              </Link>
            </div>
          </div>
          <div className="hero__image">
            <img
              src="/images/IMG 2 (1).JPG"
              alt="Carer sharing a joyful moment with an elderly client"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section--white">
        <div className="container">
          <div className="image-text">
            <div className="image-text__image">
              <img
                src="/images/IMG 10 (1).JPG"
                alt="Carer supporting client with warmth and genuine care"
              />
            </div>
            <div className="image-text__content">
              <h2>Support that helps people live well at home</h2>
              <p>
                CasaXpress Care at Home is built on a simple belief: that people
                deserve to live comfortably and independently in their own homes,
                surrounded by the things and routines they love.
              </p>
              <p>
                Whether it is help with daily tasks, companionship, personal
                care, or support after illness, our team provides thoughtful
                assistance that respects individual preferences, routines, and
                the dignity of every person we work with.
              </p>
              <p>
                We work closely with families to understand what matters most,
                and we shape our support around those needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="section section--care" id="services">
        <div className="container">
          <div className="section__header">
            <span className="section__badge section__badge--care">Our Care Services</span>
            <h2 className="section__title">Support tailored to individual needs</h2>
            <p className="section__subtitle">
              From personal care to companionship, our services are designed to help
              adults maintain comfort, routine, and quality of life at home.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card service-card--image">
              <img src="/images/IMG 1 (1).JPG" alt="Personal care support" />
              <div className="service-card__body">
                <h3>Personal Care</h3>
                <p>Respectful help with washing, dressing, and grooming, tailored to individual routines.</p>
                <Link href="/care/personal-care" className="service-card__link service-card__link--care">Learn more &rarr;</Link>
              </div>
            </div>

            <div className="service-card service-card--image">
              <img src="/images/IMG 4.JPG" alt="Companionship care" />
              <div className="service-card__body">
                <h3>Companionship</h3>
                <p>Friendly visits bringing conversation, connection, and emotional wellbeing into everyday life.</p>
                <Link href="/care/companionship" className="service-card__link service-card__link--care">Learn more &rarr;</Link>
              </div>
            </div>

            <div className="service-card service-card--image">
              <img src="/images/IMG 3.JPG" alt="Daily living support" />
              <div className="service-card__body">
                <h3>Daily Living Support</h3>
                <p>Help with meals, light household tasks, errands, and everyday routines.</p>
                <Link href="/care/daily-living-support" className="service-card__link service-card__link--care">Learn more &rarr;</Link>
              </div>
            </div>

            <div className="service-card service-card--image">
              <img src="/images/IMG 9 (1).JPG" alt="Respite care" />
              <div className="service-card__body">
                <h3>Respite Care</h3>
                <p>Temporary, dependable support so family carers can take a well-deserved break.</p>
                <Link href="/care/respite-care" className="service-card__link service-card__link--care">Learn more &rarr;</Link>
              </div>
            </div>

            <div className="service-card service-card--image">
              <img src="/images/IMG 5 (1).JPG" alt="Recovery support" />
              <div className="service-card__body">
                <h3>Recovery Support</h3>
                <p>Helping people regain confidence and routine after illness or a hospital stay.</p>
                <Link href="/care/recovery-support" className="service-card__link service-card__link--care">Learn more &rarr;</Link>
              </div>
            </div>

            <div className="service-card service-card--image">
              <img src="/images/IMG 7 (1).JPG" alt="Dementia support" />
              <div className="service-card__body">
                <h3>Dementia Support</h3>
                <p>Gentle, person-centred support for individuals living with memory-related challenges.</p>
                <Link href="/care/dementia-support" className="service-card__link service-card__link--care">Learn more &rarr;</Link>
              </div>
            </div>

            <div className="service-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'var(--care-bg)', border: '1px dashed var(--care-border)', minHeight: '200px' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Live-In &amp; Overnight Care</h3>
              <p style={{ marginBottom: '0.75rem' }}>Round-the-clock support for those who need a greater level of presence at home.</p>
              <span style={{ display: 'inline-block', padding: '0.3rem 0.85rem', borderRadius: '50px', background: 'var(--care-primary)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em' }}>Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* PERSON-CENTRED */}
      <section className="section section--white">
        <div className="container">
          <div className="image-text image-text--reverse">
            <div className="image-text__image">
              <img src="/images/IMG 8 (1).JPG" alt="Carer reviewing a personalised care plan" />
            </div>
            <div className="image-text__content">
              <h2>Person-centred care, every visit</h2>
              <p>
                No two people are the same, and neither is our care. We take time
                to understand each individual, their routines, their likes, and
                what makes them feel comfortable and supported.
              </p>
              <p>
                Every care plan is built around the person, not a template.
                Whether support is needed for a few hours a week or every day,
                we shape our service to fit naturally into life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY REASSURANCE */}
      <section className="section section--care">
        <div className="container">
          <div className="image-text">
            <div className="image-text__image">
              <img src="/images/IMG 11 (1).JPG" alt="Carer and client sharing a happy moment" />
            </div>
            <div className="image-text__content">
              <h2>Reassurance for families</h2>
              <p>
                Arranging care for someone you love can feel like a significant step.
                That is why we keep families informed and involved at every stage.
              </p>
              <p>
                From the first conversation to ongoing support, we communicate
                openly and honestly. Families can feel confident their loved one
                is receiving thoughtful, consistent, and respectful care.
              </p>
              <Link href="/care/family-support" className="btn btn-care-outline">
                Family Support &amp; FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section--white">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Why choose CasaXpress Care at Home</h2>
          </div>

          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--care">&#9829;</div>
              <h3 className="trust-card__title">Compassionate Approach</h3>
              <p className="trust-card__text">Kindness is at the heart of everything we do. Our team genuinely cares about the people they support.</p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--care">&#128197;</div>
              <h3 className="trust-card__title">Dependable Scheduling</h3>
              <p className="trust-card__text">We keep to agreed times so families can plan with confidence. Consistency builds trust.</p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--care">&#129309;</div>
              <h3 className="trust-card__title">Thoughtful Matching</h3>
              <p className="trust-card__text">We match carers with clients based on personality, needs, and preferences.</p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--care">&#9876;</div>
              <h3 className="trust-card__title">Dignified Support</h3>
              <p className="trust-card__text">Every person is treated with the respect and sensitivity they deserve.</p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--care">&#128172;</div>
              <h3 className="trust-card__title">Clear Communication</h3>
              <p className="trust-card__text">We keep families informed. Open, honest communication is central to how we work.</p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--care">&#8635;</div>
              <h3 className="trust-card__title">Flexible Services</h3>
              <p className="trust-card__text">Support can start small and grow as needs change. We adapt to fit, not the other way around.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & SAFETY */}
      <section className="section section--care">
        <div className="container">
          <div className="section__header">
            <span className="section__badge section__badge--care">Trust &amp; Safety</span>
            <h2 className="section__title">Your peace of mind matters</h2>
          </div>
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--care">&#128274;</div>
              <h3 className="trust-card__title">Carefully Selected Team</h3>
              <p className="trust-card__text">Every member of our care team is carefully selected, interviewed, and trained to deliver dependable home support.</p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--care">&#9876;</div>
              <h3 className="trust-card__title">Dignity &amp; Respect</h3>
              <p className="trust-card__text">All care is delivered with a focus on dignity, respect, and the individual needs of the person we are supporting.</p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon trust-card__icon--care">&#129309;</div>
              <h3 className="trust-card__title">Family Involvement</h3>
              <p className="trust-card__text">We work closely with families to ensure the right level of support is in place and everyone feels informed and confident.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW CARE BEGINS */}
      <section className="section section--white">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">How care begins</h2>
            <p className="section__subtitle">Starting care should feel simple and supportive.</p>
          </div>

          <ProcessSteps
            variant="care"
            steps={[
              { title: 'Have an initial conversation', text: 'Get in touch to tell us about the support needed. We listen carefully and take time to understand.' },
              { title: 'We understand your needs', text: 'We discuss routines, preferences, and the level of support required to create a plan that feels right.' },
              { title: 'Support is arranged', text: 'We match the right carer, agree on a schedule, and visits begin. We stay in touch to ensure everything works well.' },
            ]}
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--white">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">What families say</h2>
          </div>

          <TestimonialCards
            testimonials={[
              { text: 'The support has made a real difference for my mum. She looks forward to her visits now and the carers always remember the little things that matter to her.', author: 'Sarah M.', role: 'Family member', variant: 'care' },
              { text: 'We needed help quite quickly after Dad was discharged and CasaXpress made the whole process straightforward. No pressure, just practical support from day one.', author: 'James T.', role: 'Family member', variant: 'care' },
              { text: 'Having someone reliable come in a few times a week has taken a real weight off our shoulders. Mum is more settled and we worry less knowing she is looked after.', author: 'Karen L.', role: 'Family member', variant: 'care' },
            ]}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--care">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Frequently asked questions</h2>
          </div>

          <FAQAccordion
            items={[
              { question: 'What types of care do you provide at home?', answer: 'We offer personal care, companionship, daily living support, respite care, recovery support after illness, and support for individuals living with memory-related challenges. Each service is tailored to individual needs.' },
              { question: 'Is your support only for older adults?', answer: 'While many of our clients are older adults, our care services are available to any adult who needs support at home. This includes people recovering from illness, those with long-term conditions, or anyone who would benefit from regular in-home assistance.' },
              { question: 'Can support be tailored to individual routines?', answer: 'Absolutely. We take time to understand each person\'s routine, preferences, and what makes them comfortable. Every care plan is built around the individual.' },
              { question: 'Can families arrange support on behalf of a loved one?', answer: 'Of course. Many of our enquiries come from family members. We are happy to speak with families and involve them in every step.' },
              { question: 'How do I get started?', answer: 'Simply get in touch by phone or through our care enquiry form. We will have an initial conversation to understand your needs. There is no obligation.' },
              { question: 'Can support begin with just a few visits?', answer: 'Yes. Many people start with a small number of visits per week and adjust as needs change. We are flexible about increasing or decreasing support over time.' },
              { question: 'Do you offer respite support for family carers?', answer: 'We do. Our respite service provides dependable cover so family carers can take a break knowing their loved one is well looked after.' },
            ]}
          />
        </div>
      </section>

      <CTASection
        variant="care"
        title="Ready to arrange care at home?"
        text="Our friendly team is here to help you find the right support. Start a conversation today."
        primaryLabel="Start a Care Enquiry"
        primaryHref="/care/enquiry"
        secondaryLabel="Or call us on 07398 761 877"
        secondaryHref="tel:+447398761877"
      />
    </>
  )
}

export default CareHome
