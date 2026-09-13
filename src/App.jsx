import { useState } from 'react'
import { marineLife, threats, responses, demoPressureData } from './data/marineLife.js'

const fallbackImage = '/images/species-placeholder.svg'

function App() {
  const [selectedSpecies, setSelectedSpecies] = useState(marineLife[0])

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
            <p>Select a species to explore how its conservation story connects to the wider ecosystem.</p>
          </div>

          <div className="species-grid">
            {marineLife.map((animal) => (
              <button
                className={`species-card ${selectedSpecies.id === animal.id ? 'selected' : ''}`}
                key={animal.id}
                type="button"
                onClick={() => setSelectedSpecies(animal)}
                aria-pressed={selectedSpecies.id === animal.id}
              >
                <div className="species-visual">
                  <img
                    className="species-image"
                    src={animal.image || fallbackImage}
                    alt={animal.image ? animal.imageAlt : ''}
                  />
                </div>
                <div className="card-body">
                  <p className="meta">{animal.ecosystem}</p>
                  <h3>{animal.name}</h3>
                  <p className="scientific">{animal.scientificName}</p>
                  <p>{animal.summary}</p>
                  <div className="pressure"><span>Pressure</span>{animal.pressure}</div>
                </div>
              </button>
            ))}
          </div>

          <article className="species-detail" aria-live="polite">
            <div className="detail-art">
              <img
                className="detail-image"
                src={selectedSpecies.image || fallbackImage}
                alt={selectedSpecies.image ? selectedSpecies.imageAlt : ''}
              />
            </div>
            <div>
              <p className="eyebrow">Selected species</p>
              <h2>{selectedSpecies.name}</h2>
              <p className="scientific detail-scientific">{selectedSpecies.scientificName}</p>
              <p className="detail-story">{selectedSpecies.story}</p>
              <h3>Conservation priorities</h3>
              <ul>
                {selectedSpecies.priorities.map((priority) => <li key={priority}>{priority}</li>)}
              </ul>
            </div>
          </article>
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

          <div className="viz-panel" aria-labelledby="pressure-viz-title">
            <div className="viz-copy">
              <p className="eyebrow">Interface prototype</p>
              <h3 id="pressure-viz-title">How a conservation dashboard could compare pressures</h3>
              <p>
                These values are intentionally illustrative—not scientific measurements. The component demonstrates
                how a future platform could present sourced indicators without implying unsupported precision.
              </p>
            </div>
            <div className="bar-chart" role="img" aria-label="Illustrative bar chart of four marine conservation pressures">
              {demoPressureData.map((item) => (
                <div className="bar-row" key={item.label}>
                  <div className="bar-label"><span>{item.label}</span><strong>{item.value}</strong></div>
                  <div className="bar-track"><span style={{ width: `${item.value}%` }} /></div>
                </div>
              ))}
            </div>
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
