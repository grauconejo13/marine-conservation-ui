const resources = [
  {
    name: 'NOAA Fisheries',
    region: 'United States',
    focus: 'Marine species, fisheries, habitat & science',
    description: 'Official U.S. marine resource information, conservation programs, protected species guidance, habitat work, and science.',
    url: 'https://www.fisheries.noaa.gov/',
  },
  {
    name: 'New Zealand Department of Conservation — Penguins',
    region: 'Aotearoa New Zealand',
    focus: 'Penguins, habitat & native wildlife',
    description: 'Official conservation information on New Zealand penguins, including kororā / little penguins and the pressures affecting them.',
    url: 'https://www.doc.govt.nz/penguins',
  },
  {
    name: 'Phillip Island Nature Parks — Research & Conservation',
    region: 'Victoria, Australia',
    focus: 'Little penguins, coastal wildlife & habitat',
    description: 'Research, habitat protection, wildlife response, education, and long-running little penguin conservation work on Phillip Island.',
    url: 'https://www.penguins.org.au/conservation/',
  },
  {
    name: 'Sea Turtle Conservancy',
    region: 'International',
    focus: 'Sea turtles, research & habitat protection',
    description: 'Science-based sea turtle conservation, research, education, advocacy, tracking, and habitat protection.',
    url: 'https://conserveturtles.org/',
  },
  {
    name: 'Ocean Conservancy',
    region: 'International',
    focus: 'Ocean biodiversity, climate & plastics',
    description: 'Ocean conservation programs covering biodiversity, healthy fisheries, climate solutions, plastics, cleanup, and public action.',
    url: 'https://oceanconservancy.org/',
  },
]

export default function Resources() {
  return (
    <main className="resources-page">
      <section className="resources-hero section-pad">
        <p className="eyebrow">Verified starting points</p>
        <h1>Follow the people doing the fieldwork.</h1>
        <p className="lede">
          This demo does not replace conservation organizations, wildlife authorities, or scientific sources.
          These links point to real organizations and official resources where you can learn more, support work,
          or find current guidance.
        </p>
      </section>

      <section className="section-pad resources-section" aria-labelledby="resource-list-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Marine conservation directory</p>
            <h2 id="resource-list-title">Real organizations. Real work.</h2>
          </div>
          <p>External links open the organizations’ own websites. Inclusion here does not imply partnership or endorsement.</p>
        </div>

        <div className="resource-grid">
          {resources.map((resource) => (
            <article className="resource-card" key={resource.name}>
              <div className="resource-meta">
                <span>{resource.region}</span>
                <span>{resource.focus}</span>
              </div>
              <h3>{resource.name}</h3>
              <p>{resource.description}</p>
              <a href={resource.url} target="_blank" rel="noreferrer">
                Visit official site <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="resource-note section-pad">
        <p className="eyebrow">Before acting</p>
        <h2>Wildlife emergencies should go to local authorities.</h2>
        <p>
          Do not use a portfolio demo to report an injured, stranded, entangled, or distressed animal.
          Contact the relevant local wildlife authority, rescue network, park service, or emergency response organization.
        </p>
      </section>
    </main>
  )
}
