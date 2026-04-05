import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found - CasaXpress</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Head>

      <div className="error-page">
        <div className="container">
          <h1>404</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Page Not Found
          </h2>
          <p>
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-care">
              Return Home
            </Link>
            <Link href="/care" className="btn btn-care-outline">
              Care at Home
            </Link>
            <Link href="/cleaning" className="btn btn-clean-outline">
              Home Cleaning
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Custom404
