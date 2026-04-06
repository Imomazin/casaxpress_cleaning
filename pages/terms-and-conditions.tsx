import type { NextPage } from 'next'
import Head from 'next/head'

const Terms: NextPage = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions - CasaXpress</title>
        <meta name="description" content="CasaXpress terms and conditions for care at home and home cleaning services." />
      </Head>

      <section className="section section--white">
        <div className="container-narrow">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Terms and Conditions</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '0.925rem' }}>Last updated: April 2026</p>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>1. About These Terms</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
            These terms and conditions apply to the services provided by CasaXpress, including care at home and home cleaning. By using our website or engaging our services, you agree to these terms.
          </p>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>2. Our Services</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
            CasaXpress provides adult care at home and domestic home cleaning services. The scope of each service is discussed and agreed upon before any work begins. We will always aim to deliver the support that was agreed.
          </p>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>3. Bookings and Enquiries</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
            Enquiries can be made via our website, phone, or email. Submitting an enquiry does not constitute a booking. All service arrangements are confirmed directly with you before visits begin.
          </p>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>4. Cancellations</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
            We understand that plans change. If you need to cancel or reschedule a visit, we ask that you give us as much notice as possible. Cancellation terms will be discussed as part of your service agreement.
          </p>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>5. Liability</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
            CasaXpress takes reasonable care in delivering all services. However, we cannot accept liability for circumstances beyond our reasonable control. Any concerns should be raised with us promptly so we can address them.
          </p>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>6. Changes to Services</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
            If your support needs change, please let us know. We will do our best to adjust the service accordingly. Any changes to the agreed plan will be discussed and confirmed with you.
          </p>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>7. Website Content</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
            The content on this website is provided for general information purposes. While we make every effort to keep the information accurate and up to date, we do not guarantee that all content is complete or current.
          </p>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>8. Contact</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
            If you have any questions about these terms, please get in touch:
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
            Email: <a href="mailto:casaxpress.ae@gmail.com" style={{ color: 'var(--care-primary)', fontWeight: 600 }}>casaxpress.ae@gmail.com</a><br />
            Phone: <a href="tel:+447398761877" style={{ color: 'var(--care-primary)', fontWeight: 600 }}>07398 761 877</a>
          </p>
        </div>
      </section>
    </>
  )
}

export default Terms
