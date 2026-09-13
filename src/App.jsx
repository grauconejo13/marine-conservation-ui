import { marineLife, threats, responses } from './data/marineLife.js'

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Marine Conservation UI home">
          <span className="brand-mark" aria-hidden="true">◌</span>
          <span>Marine Conservation UI</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#life">Marine Life</a>
          <a href="#threats">Threats</a>
          <a href="#responses">Conservation</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">Ocean life • ecosystems • recovery</p>
            <h1>Protecting the ocean starts with understanding what is connected.</h1>
            <p className="lede">
              A public UI concept for communicating marine biodiversity, ecosystem pressures,
              conservation responses, and the people working to restore ocean health.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#life">Explore marine life</a>
              <a className="button secondary" href="#responses">See conservation responses</a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Conservation focus">
            <span className="panel-label">Focus</span>
            <h2>From species to systems</h2>
            <p>
              Marine conservation is not only about individual animals. Food webs, habitat,
              fisheries, climate, pollution, and human communities all shape survival.
            </p>
            <div className="signal-grid">
              <div><strong>01</strong><span>Life</span></div>
              <div><strong>02</strong><span>Threats</span></div>
              <div><strong>03</strong><span>Recovery</span></div>
            </div>
          </aside>
        </section>

        <section className="intro section-pad" id="about">
          <p className="eyebrow">Why this interface exists</p>
          <div className="intro-grid">
            <h2>Conservation information should feel clear, visual, and actionable.</h2>
            <p>
              This demo explores how a marine conservation platform could organize species
              stories, ecosystem threats, restoration efforts, and responsible calls to action.
              The data shown here is illustrative rather than a live monitoring service.
            </p>
          </div>
        </section>

        <section className="section-pad" id="life">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Marine life</p>
              <h2>Different species. Shared ocean.</h2>
            </div>
            <p>Each species can reveal a different part of the ecosystem story.</p>
          </div>

          <div className="species-grid">
            {marineLife.map((animal, index) => (
              <article className="species-card" key={animal.id}>
                <div className="species-visual" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="card-body">
                  <p className="meta">{animal.ecosystem}</p>
                  <h3>{animal.name}</h3>
                  <p className="scientific">{animal.scientificName}</p>
                  <p>{animal.summary}</p>
                  <div className="pressure"><span>Pressure</span>{animal.pressure}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="dark-section section-pad" id="threats">
          <div className="section-heading inverse">
            <div>
              <p className="eyebrow">Ocean pressures</p>
              <h2>Threats rarely happen in isolation.</h2>
            </div>
            <p>Good conservation design helps people see relationships instead of disconnected headlines.</p>
          </div>
          <div className="threat-grid">
            {threats.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad" id="responses">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Conservation in action</p>
              <h2>Recovery means working on the system.</h2>
            </div>
            <p>Solutions can combine habitat, policy, science, technology, and local stewardship.</p>
          </div>
          <div className="response-list">
            {responses.map((item, index) => (
              <article key={item.title}>
                <div className="response-number">0{index + 1}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta section-pad">
          <p className="eyebrow">Public demo</p>
          <h2>Designed as a frontend showcase, not an official conservation authority.</h2>
          <p>
            A production conservation platform should cite current scientific sources,
            distinguish verified data from interpretation, protect sensitive wildlife locations,
            and route urgent wildlife reports through legitimate local organizations.
          </p>
        </section>
      </main>

      <footer>
        <span>Marine Conservation UI</span>
        <span>React + Vite frontend concept</span>
      </footer>
    </div>
  )
}

export default App
