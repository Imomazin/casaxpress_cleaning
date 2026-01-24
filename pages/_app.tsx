import type { AppProps } from 'next/app'
import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="nav">
        <div className="container nav-container">
          <Link href="/" className="nav-logo">
            Strathmore Cleaning
          </Link>
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Component {...pageProps} />

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Strathmore Cleaning. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default MyApp
