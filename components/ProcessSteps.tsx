interface Step {
  title: string
  text: string
}

interface ProcessStepsProps {
  steps: Step[]
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="process-steps">
      {steps.map((step, i) => (
        <div key={i} className="process-step">
          <div className="process-step__number">{i + 1}</div>
          <h3 className="process-step__title">{step.title}</h3>
          <p className="process-step__text">{step.text}</p>
        </div>
      ))}
    </div>
  )
}
