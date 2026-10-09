const focusAreas = [
  {
    label: 'Career clarity',
    title: 'Understand how AI is changing your field',
    description: 'Explore emerging roles, changing responsibilities, and the human skills that remain essential.',
  },
  {
    label: 'Personal roadmap',
    title: 'Turn your goals into practical next steps',
    description: 'Build a focused learning plan around your interests, current skills, and career ambitions.',
  },
  {
    label: 'Job readiness',
    title: 'Connect your skills to real opportunities',
    description: 'Strengthen your CV, identify skill gaps, and prepare for roles aligned with your potential.',
  },
]

export default function App() {
  return (
    <main className="app-shell">
      <nav className="navigation" aria-label="Primary navigation">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            AI
          </div>
          <span>Skill Navigator</span>
        </div>
        <div className="status-pill">
          <span className="status-dot" />
          Platform ready
        </div>
      </nav>

      <section className="hero">
        <div className="eyebrow">Your future, mapped with confidence</div>
        <div className="hero-title">
          Find your place in an
          <span> AI-powered world.</span>
        </div>
        <p className="hero-copy">
          Discover how careers are evolving, understand the skills that matter, and build a roadmap made for you.
        </p>
        <div className="hero-actions" aria-label="Suggested actions">
          <div className="primary-action">Explore careers</div>
          <div className="secondary-action">Build my roadmap</div>
        </div>
      </section>

      <section className="focus-grid" aria-label="Platform features">
        {focusAreas.map((area, index) => (
          <article className="focus-card" key={area.title}>
            <div className="card-topline">
              <span>{area.label}</span>
              <span className="card-number">0{index + 1}</span>
            </div>
            <div className="card-title">{area.title}</div>
            <p>{area.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
