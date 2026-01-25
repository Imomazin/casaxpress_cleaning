import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCalendarCheck, FaCheckCircle, FaStar, FaHandsHelping } from 'react-icons/fa'

const Home: NextPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Strathmore Cleaning - Exceptional Home Cleaning Services in Scotland</title>
        <meta
          name="description"
          content="Exceptional home cleaning services in Hamilton, Bothwell, Uddingston, Motherwell & East Kilbride. Bright energy • Gentle care • Professional results."
        />
      </Head>

      {/* Hero Section with Background Image */}
      {/* IMAGE NEEDED: Family scene - Scottish family (parents + child) in living room, relaxed and happy. Clean, bright interior. Predominantly Scottish but natural diversity. */}
      <section style={{
        position: 'relative',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.85) 0%, rgba(59, 130, 246, 0.75) 100%), url(/images/hero-family.svg) center/cover',
        backgroundAttachment: 'fixed',
        color: 'white',
        textAlign: 'center',
        padding: '6rem 1rem'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              marginBottom: '1.5rem',
              lineHeight: 1.2,
              color: 'white',
              fontFamily: 'Georgia, serif'
            }}>
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Exceptional</span> Home<br />
              Cleaning Services
            </h1>
            <Link
              href="/contact"
              className="btn"
              style={{
                background: '#a3e635',
                color: '#1e293b',
                fontSize: '1.1rem',
                padding: '1rem 2.5rem',
                fontWeight: 600,
                border: 'none',
                marginTop: '1rem'
              }}
            >
              FREE QUOTE
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators - 4 Cards */}
      <section style={{
        background: 'white',
        padding: '0',
        marginTop: '-4rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <motion.div
              style={{
                background: 'white',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#3b82f6', display: 'flex', justifyContent: 'center' }}>
                <FaCalendarCheck />
              </div>
              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                Time-tested
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We have years of experience providing premium home-cleaning services.
              </p>
            </motion.div>

            <motion.div
              style={{
                background: 'white',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#3b82f6', display: 'flex', justifyContent: 'center' }}>
                <FaCheckCircle />
              </div>
              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                We&apos;ve got this
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Every year, clients like you trust us to deliver exceptional services.
              </p>
            </motion.div>

            <motion.div
              style={{
                background: 'white',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#3b82f6', display: 'flex', justifyContent: 'center' }}>
                <FaStar />
              </div>
              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                Personalised clean
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Flexible, personalised cleaning options allow you to enjoy life&apos;s moments.
              </p>
            </motion.div>

            <motion.div
              style={{
                background: 'white',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                textAlign: 'center'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#3b82f6', display: 'flex', justifyContent: 'center' }}>
                <FaHandsHelping />
              </div>
              <h3 style={{ color: '#1e293b', fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>
                Trusted team members
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Each team member is bonded and insured to ensure everyone&apos;s peace of mind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Life, made possible section */}
      {/* IMAGE NEEDED: Parent and child reading together on couch, warm Scottish home interior */}
      <section className="content-section" style={{ paddingTop: '6rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: '1.5rem',
                color: '#1e293b',
                lineHeight: 1.3
              }}>
                <span style={{ fontStyle: 'italic', fontWeight: 400, fontFamily: 'Georgia, serif' }}>Life,</span> made possible with Strathmore Cleaning
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.9', marginBottom: '1.25rem' }}>
                Life&apos;s too short to spend time cleaning the house! Between work, family, and trying to squeeze in a
                little fun, your to-do list is long, but your free time is in short supply. With Strathmore Cleaning you won&apos;t
                spend those rare unscheduled moments scrubbing showers.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.9', marginBottom: '1.25rem' }}>
                Strathmore Cleaning provides more than a sparkling clean home – for years we&apos;ve been helping busy
                people like you take back your time, so you can focus on the things that truly matter – whether that&apos;s
                spending time with your little ones, focusing on your career or enjoying a hobby. We understand that
                overwhelmed feeling, and we strive to make your life easier with free quotes, flexible scheduling,
                convenient communication options and cleaning services tailored to your unique needs.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.9' }}>
                Stop spending your nights and weekends scrubbing sinks and mopping floors. Let Strathmore Cleaning take
                the burden off your shoulders—so you can finally enjoy your home, your time, and your life. Don&apos;t wait
                another week to feel peace in your own space.
              </p>
            </motion.div>

            <motion.div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Placeholder for image */}
              <div style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1e40af',
                fontSize: '1rem',
                textAlign: 'center',
                padding: '2rem'
              }}>
                [Image: Parent and child reading together at home]
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clean, tailored to your lifestyle section */}
      {/* IMAGE NEEDED: Parent and children in kitchen, preparing food together, happy family moment */}
      <section className="content-section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '0',
            alignItems: 'stretch',
            maxWidth: '1400px',
            margin: '0 auto',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 12px 40px rgba(0,0,0,0.12)'
          }}>
            <motion.div
              style={{
                borderRadius: '0',
                overflow: 'hidden'
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Placeholder for image */}
              <div style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1e40af',
                fontSize: '1rem',
                textAlign: 'center',
                padding: '2rem',
                height: '100%'
              }}>
                [Image: Family in kitchen together, diverse Scottish family]
              </div>
            </motion.div>

            <motion.div
              style={{
                background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
                padding: 'clamp(3rem, 6vw, 5rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: '1.5rem',
                color: '#1e293b',
                lineHeight: 1.3
              }}>
                <span style={{ fontStyle: 'italic', fontWeight: 400, fontFamily: 'Georgia, serif' }}>Clean,</span> tailored to your lifestyle.
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: '1.8' }}>
                Services tailored to you, so you can savour the moments that matter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="content-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <motion.div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              color: '#1e293b',
              lineHeight: '1.8',
              marginBottom: '2rem',
              fontStyle: 'italic'
            }}>
              &quot;Sarah and her team were an absolute delight to work with! They put their heart and soul into making sure
              that everything in my house was sparkling clean for my upcoming family guests. I felt that they really
              went above and beyond in doing a great job! Communication with the office was easy and efficient. I
              highly recommend Strathmore Cleaning to anyone who wants a good cleaning job done well!&quot;
            </p>
            <p style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#1e40af',
              marginBottom: '1.5rem'
            }}>
              Margaret S.
            </p>
            <Link
              href="/contact"
              className="btn"
              style={{
                background: 'transparent',
                color: '#1e40af',
                border: '2px solid #1e40af',
                padding: '0.875rem 2rem'
              }}
            >
              ALL REVIEWS
            </Link>
          </motion.div>
        </div>
      </section>

      {/* We promise you'll love section */}
      {/* IMAGE NEEDED: Female cleaner (Chinese or South Asian descent) in professional uniform, standing in bright hallway with cleaning supplies, friendly and professional. Scottish home interior. */}
      <section className="content-section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                marginBottom: '1.5rem',
                color: '#1e293b',
                lineHeight: 1.3
              }}>
                We promise you&apos;ll love our exceptional clean
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.9', marginBottom: '1.25rem' }}>
                Our 5-Star Promise means delivering exceptional service in every interaction. We strive to anticipate your needs, exceed your expectations,
                and create a premium, memorable experience worthy of a 5-star rating.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.9', marginBottom: '2rem' }}>
                Our thousands of 5-star reviews and recurring customers demonstrate our commitment to your complete satisfaction.
              </p>
              <Link
                href="/about"
                className="btn"
                style={{
                  background: 'transparent',
                  color: '#1e40af',
                  border: '2px solid #1e40af',
                  padding: '0.875rem 2rem'
                }}
              >
                READ OUR REVIEWS
              </Link>
            </motion.div>

            <motion.div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* 5-star promise badge */}
              <div style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                zIndex: 2,
                background: '#a3e635',
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#1e293b',
                textAlign: 'center',
                lineHeight: 1.3
              }}>
                <div style={{ marginBottom: '0.25rem' }}>5 star</div>
                <div style={{ fontSize: '0.85rem' }}>promise</div>
                <div style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>★★★★★</div>
              </div>

              {/* Professional Cleaner Image */}
              <Image
                src="/images/cleaner-professional.svg"
                alt="Professional cleaner in uniform"
                width={600}
                height={800}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* IMAGES NEEDED:
          1. Female cleaner smiling (Scottish/White), working in home
          2. Cleaning products bottles (Strathmore branded if possible)
          3. Female cleaner (Pakistani/Indian descent) cleaning kitchen cabinets
      */}
      <section className="content-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <motion.div
            style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              marginBottom: '1rem',
              color: '#1e293b'
            }}>
              Cleaning services that meet your needs
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto 4rem'
          }}>
            <motion.div
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/cleaner-professional.svg"
                alt="Smiling professional cleaner"
                width={800}
                height="600"
                style={{ width: '100%', height: '220px', objectFit: 'cover', objectPosition: 'center' }}
              />
              <div style={{ padding: '2rem' }}>
                <h3 style={{ color: '#1e293b', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>
                  Recurring cleaning
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  We recommend our popular weekly or bi-weekly cleaning, perfect for maintaining a tidy home. Our routine
                  cleaning includes dusting, vacuuming, bathroom cleaning, and kitchen cleaning. Our recurring services are ideal
                  for busy people who don&apos;t have time to clean but appreciate the serenity and peace of mind of a clean house.
                </p>
              </div>
            </motion.div>

            <motion.div
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src="/images/cleaning-service.svg"
                alt="Professional cleaning products"
                width={800}
                height={600}
                style={{ width: '100%', height: '220px', objectFit: 'cover', objectPosition: 'center' }}
              />
              <div style={{ padding: '2rem' }}>
                <h3 style={{ color: '#1e293b', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>
                  Detailed cleaning
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  We&apos;ll reach those often-neglected areas like baseboards, inside appliances and ceiling fans. Our detailed cleaning
                  services are perfect for move-ins/move-outs, seasonal tasks such as spring cleaning, and prior to special occasions
                  such as an open house, holiday party or birthday gathering. Contact Strathmore Cleaning today and leave the details to us!
                </p>
              </div>
            </motion.div>

            <motion.div
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Image placeholder */}
              <div style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                minHeight: '220px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1e40af',
                fontSize: '0.9rem',
                textAlign: 'center',
                padding: '1rem'
              }}>
                [Image: Female cleaner (Pakistani/Indian) cleaning kitchen]
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ color: '#1e293b', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>
                  Specialty cleaning
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.8' }}>
                  Need your grimy appliances deep-cleaned? Want your walls washed before painting or a special occasion? Our
                  specialised cleaning services have you covered. If your house has unique cleaning needs, this is your solution. We
                  tailor our cleaning services to fit your specific needs, leaving your space ready for any event.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Here to help - FAQ Section */}
      {/* IMAGE NEEDED: Female cleaner (any ethnicity showing diversity) making bed in bright bedroom */}
      <section className="content-section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                marginBottom: '2rem',
                color: '#1e293b'
              }}>
                Here to <span style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>help</span>
              </h2>

              {/* FAQ Accordion */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  {
                    question: 'Can I ask for special requests or request focus on certain areas?',
                    answer: 'Absolutely! We encourage you to let us know about any specific areas or tasks you&apos;d like us to focus on. Just mention your preferences when booking.'
                  },
                  {
                    question: 'How often should I schedule a deep cleaning service?',
                    answer: 'We typically recommend a deep clean every 3-6 months, or seasonally. However, it depends on your lifestyle, pets, and personal preferences.'
                  },
                  {
                    question: 'Are your cleaners insured and bonded?',
                    answer: 'Yes! Every member of our team is fully insured, bonded, and DBS checked for your complete peace of mind.'
                  },
                  {
                    question: 'Are your cleaning products safe for pets and children?',
                    answer: 'Yes, we use professional-grade, eco-friendly cleaning products that are safe for pets and children. We can also accommodate specific product preferences upon request.'
                  },
                  {
                    question: 'What is the difference between Strathmore Cleaning and other cleaning companies?',
                    answer: 'We&apos;re a local Scottish company with a gentle, respectful approach perfect for elderly clients and busy families. Our team is vetted, reliable, and committed to building long-term trust with every customer.'
                  }
                ].map((faq, index) => (
                  <div
                    key={index}
                    style={{
                      borderBottom: '2px solid #e2e8f0',
                      paddingBottom: '1rem'
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        padding: '1rem 0',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <span style={{
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        color: '#1e293b',
                        fontFamily: 'Georgia, serif'
                      }}>
                        {faq.question}
                      </span>
                      <span style={{
                        fontSize: '1.5rem',
                        color: '#1e40af',
                        transition: 'transform 0.3s',
                        transform: expandedFaq === index ? 'rotate(45deg)' : 'rotate(0deg)'
                      }}>
                        +
                      </span>
                    </button>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                          paddingTop: '0.5rem',
                          paddingBottom: '1rem'
                        }}
                      >
                        <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: '0.95rem' }}>
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="btn"
                style={{
                  background: 'transparent',
                  color: '#1e40af',
                  border: '2px solid #1e40af',
                  padding: '0.875rem 2rem',
                  marginTop: '2rem',
                  display: 'inline-block'
                }}
              >
                ALL FAQS
              </Link>
            </motion.div>

            <motion.div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                position: 'sticky',
                top: '2rem'
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Placeholder for image */}
              <div style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1e40af',
                fontSize: '1rem',
                textAlign: 'center',
                padding: '2rem'
              }}>
                [Image: Female cleaner making bed in bright bedroom, diverse team member]
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Award-Worthy Clean */}
      <section className="content-section" style={{ background: '#f8fafc' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              marginBottom: '1.5rem',
              color: '#1e293b'
            }}>
              Award-Worthy Clean
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: '1.9', marginBottom: '3rem' }}>
              Our expertly trained team members use advanced cleaning processes to ensure a consistent cleaning every time.
            </p>

            {/* Trust badges */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: 700,
                textAlign: 'center',
                boxShadow: '0 6px 20px rgba(251, 191, 36, 0.3)',
                padding: '1rem'
              }}>
                TRUSTED<br />CHOICE<br />AWARD
              </div>
              <div style={{
                width: '120px',
                height: '140px',
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                borderRadius: '8px 8px 50% 50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.75rem',
                fontWeight: 700,
                textAlign: 'center',
                boxShadow: '0 6px 20px rgba(30, 64, 175, 0.3)',
                padding: '1rem'
              }}>
                CONSUMER<br/>AFFAIRS<br />ACCREDITED
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Your spotless home */}
      <section style={{
        background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
        padding: '5rem 1rem',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              marginBottom: '2rem',
              color: '#1e293b',
              lineHeight: 1.3
            }}>
              Your spotless home starts with a free quote from Strathmore Cleaning!
            </h2>

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <label htmlFor="cta-address" style={{
                display: 'block',
                textAlign: 'left',
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#1e293b',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                ADDRESS
              </label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input
                  type="text"
                  id="cta-address"
                  placeholder="Start typing to search"
                  style={{
                    flex: 1,
                    padding: '1rem 1.25rem',
                    fontSize: '1rem',
                    border: '2px solid #cbd5e1',
                    borderRadius: '8px',
                    background: 'white'
                  }}
                />
                <Link
                  href="/contact"
                  className="btn"
                  style={{
                    background: '#a3e635',
                    color: '#1e293b',
                    fontSize: '1rem',
                    padding: '1rem 2rem',
                    fontWeight: 600,
                    border: 'none',
                    whiteSpace: 'nowrap'
                  }}
                >
                  START MY QUOTE
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
