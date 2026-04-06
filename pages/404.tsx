import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found - CasaXpress</title>
      </Head>

      <div className="error-page">
        <div className="container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, the page you are looking for does not exist or has been moved.</p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-neutral">Return Home</Link>
            <Link href="/care" className="btn btn-care-outline">Care at Home</Link>
            <Link href="/cleaning" className="btn btn-clean-outline">Home Cleaning</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Custom404
