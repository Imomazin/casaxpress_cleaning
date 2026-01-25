import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Strathmore Cleaning - Professional Cleaning Services</title>
        <meta
          name="description"
          content="Professional cleaning services for homes and businesses across the UK."
        />
      </Head>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Professional Cleaning Services You Can Trust</h1>
            <p>
              Strathmore Cleaning provides reliable, high-quality cleaning
              services for homes and businesses throughout the UK.
            </p>
            <Link href="/contact" className="btn">
              Get a Free Quote
            </Link>
          </div>

          <img
            src="/images/cleaner-kitchen-real.jpg"
            alt="Professional cleaner cleaning a kitchen"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="content">
        <div className="container content-grid">
          <div>
            <h2>
              Life, made possible with <br />
              <strong>Strathmore Cleaning</strong>
            </h2>

            <p>
              Life's too short to spend time cleaning the house. Between work,
              family, and trying to squeeze in a little fun, your free time is
              precious.
            </p>

            <p>
              With Strathmore Cleaning, you can focus on what matters most while
              we handle the cleaning.
            </p>
          </div>

          <img
            src="/images/parent-child-home.jpg"
            alt="Family relaxing at home"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
