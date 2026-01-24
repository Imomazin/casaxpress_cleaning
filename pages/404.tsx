import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found - Strathmore Cleaning</title>
        <meta name="description" content="The page you are looking for could not be found." />
      </Head>

      <div className="error-page">
        <div className="container">
          <h1>404</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
            Page Not Found
          </h2>
          <p>
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="btn">
            Return to Homepage
          </Link>
        </div>
      </div>
    </>
  )
}

export default Custom404
