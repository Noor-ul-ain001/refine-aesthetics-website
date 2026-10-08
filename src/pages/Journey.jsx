import { AFTERCARE, IMAGES, STEPS } from '../data';
import { CtaBand, PageHero } from '../components/ui';

export default function Journey() {
  return (
    <>
      <PageHero
        eyebrow="Your journey"
        title={<>Seven steps to your <em>best skin</em></>}
        text="A clear, unhurried process, from your first conversation with us to your final follow-up."
        image={IMAGES.mask}
        crumbs={[{ label: 'Journey' }]}
      />

      <section className="timeline">
        {STEPS.map((s, i) => (
          <article key={s.title} className="timeline__item reveal">
            <span className="timeline__num">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h2 className="h3">{s.title}</h2>
              <p>{s.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="aftercare">
        <div className="section-head reveal">
          <p className="eyebrow eyebrow--light">After your treatment</p>
          <h2 className="h1">Aftercare <em>essentials</em></h2>
        </div>
        <div className="pillars__grid">
          {AFTERCARE.map((a, i) => (
            <article key={a.title} className="pillar pillar--dark reveal">
              <span className="index">0{i + 1}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Start with a consultation" />
    </>
  );
}
