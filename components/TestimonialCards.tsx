interface Testimonial {
  text: string
  author: string
  role: string
  variant: 'care' | 'clean'
}

interface TestimonialCardsProps {
  testimonials: Testimonial[]
}

export default function TestimonialCards({ testimonials }: TestimonialCardsProps) {
  return (
    <div className="testimonials-grid">
      {testimonials.map((t, i) => (
        <div key={i} className={`testimonial-card testimonial-card--${t.variant}`}>
          <div className="testimonial-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p className="testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
          <p className="testimonial-card__author">{t.author}</p>
          <p className="testimonial-card__role">{t.role}</p>
        </div>
      ))}
    </div>
  )
}
