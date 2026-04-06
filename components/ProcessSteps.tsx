interface Step {
  title: string
  text: string
}

interface ProcessStepsProps {
  steps: Step[]
  variant?: 'care' | 'clean'
}

export default function ProcessSteps({ steps, variant = 'care' }: ProcessStepsProps) {
  return (
    <div className="process-steps">
      {steps.map((step, i) => (
        <div key={i} className="process-step">
          <div className={`process-step__number process-step__number--${variant}`}>
            {i + 1}
          </div>
          <h3 className="process-step__title">{step.title}</h3>
          <p className="process-step__text">{step.text}</p>
        </div>
      ))}
    </div>
  )
}
