import type { NextPage } from 'next'
import Head from 'next/head'

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - CasaXpress</title>
        <meta name="description" content="CasaXpress privacy policy. How we collect, use, and protect your personal information." />
      </Head>

      <section className="section section--white">
        <div className="container-narrow">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '0.925rem' }}>Last updated: April 2026</p>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>1. Who We Are</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
            CasaXpress provides care at home and home cleaning services across the UK. When you contact us, make an enquiry, or use our services, we may collect personal information as described in this policy.
          </p>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>2. Information We Collect</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
            We may collect the following information when you use our website or contact us:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.35rem', listStyle: 'disc' }}>Name and contact details (phone number, email address)</li>
            <li style={{ marginBottom: '0.35rem', listStyle: 'disc' }}>Information provided through our enquiry or contact forms</li>
            <li style={{ marginBottom: '0.35rem', listStyle: 'disc' }}>Details about the care or cleaning support you are looking for</li>
            <li style={{ marginBottom: '0.35rem', listStyle: 'disc' }}>Any additional information you choose to share with us</li>
          </ul>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>3. How We Use Your Information</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
            We use the information you provide to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.35rem', listStyle: 'disc' }}>Respond to your enquiries and requests</li>
            <li style={{ marginBottom: '0.35rem', listStyle: 'disc' }}>Arrange and deliver our care or cleaning services</li>
            <li style={{ marginBottom: '0.35rem', listStyle: 'disc' }}>Communicate with you about your service</li>
            <li style={{ marginBottom: '0.35rem', listStyle: 'disc' }}>Improve our services and website</li>
          </ul>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>4. How We Protect Your Information</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
            We take reasonable steps to protect your personal information from unauthorised access, loss, or misuse. Information submitted through our website is handled with care and stored securely.
          </p>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>5. Sharing Your Information</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
            We do not sell, trade, or share your personal information with third parties for marketing purposes. We may share information where necessary to deliver our services or where required by law.
          </p>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>6. Your Rights</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
            You have the right to request access to, correction of, or deletion of the personal information we hold about you. To make a request, please contact us using the details below.
          </p>

          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '0.75rem', marginTop: '2.5rem' }}>7. Contact Us</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
            If you have any questions about this privacy policy or how we handle your information, please contact us:
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

export default PrivacyPolicy
