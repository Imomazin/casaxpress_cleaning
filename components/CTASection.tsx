import Link from 'next/link'

interface CTASectionProps {
  variant: 'care' | 'clean'
  title: string
  text: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTASection({
  variant,
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className={`cta-band cta-band--${variant}`}>
      <div className="container">
        <h2 className="cta-band__title">{title}</h2>
        <p className="cta-band__text">{text}</p>
        <div className="cta-band__buttons">
          <Link href={primaryHref} className="btn btn-white">
            {primaryLabel}
          </Link>
        </div>
        {secondaryLabel && secondaryHref && (
          <Link href={secondaryHref} className="cta-band__link">
            {secondaryLabel}
          </Link>
        )}
      </div>
    </section>
  )
}
