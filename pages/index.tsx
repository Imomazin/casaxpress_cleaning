import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CasaXpress - Care at Home &amp; Home Cleaning</title>
        <meta
          name="description"
          content="CasaXpress provides compassionate care at home and reliable home cleaning services for families across the UK."
        />
      </Head>

      <section className="gateway">
        <div className="gateway__tagline">
          <h1>Trusted support for everyday living at home</h1>
          <p>Choose the service you need</p>
        </div>

        <div className="gateway__grid">
          {/* CARE CARD */}
          <Link href="/care" className="gateway__card gateway__card--care">
            <img
              className="gateway__card-image"
              src="/images/IMG 2 (1).JPG"
              alt="Carer sharing a warm, joyful moment with an elderly client at home"
            />
            <div className="gateway__card-body">
              <span className="gateway__card-label">Our Lead Service</span>
              <h2 className="gateway__card-title">Care at Home</h2>
              <p className="gateway__card-text">
                Compassionate adult home care that helps people stay safe,
                comfortable, and independent in their own homes.
              </p>
              <span className="gateway__card-cta">
                Explore Care Services &rarr;
              </span>
            </div>
          </Link>

          {/* CLEANING CARD */}
          <Link href="/cleaning" className="gateway__card gateway__card--clean">
            <img
              className="gateway__card-image"
              src="/images/cleaner-kitchen-real.jpg"
              alt="Professional cleaner delivering a thorough home cleaning service"
            />
            <div className="gateway__card-body">
              <span className="gateway__card-label">Domestic Services</span>
              <h2 className="gateway__card-title">Home Cleaning</h2>
              <p className="gateway__card-text">
                Reliable, professional home cleaning tailored to busy
                households, regular upkeep, and one-off needs.
              </p>
              <span className="gateway__card-cta">
                Explore Cleaning Services &rarr;
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
