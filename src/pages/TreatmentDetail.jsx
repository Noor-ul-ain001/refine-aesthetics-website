import { Link, useParams } from 'react-router-dom';
import { STEPS, TREATMENTS, waLink } from '../data';
import { CtaBand, Ext, PageHero, TreatmentCard } from '../components/ui';
import NotFound from './NotFound';

export default function TreatmentDetail() {
  const { slug } = useParams();
  const t = TREATMENTS.find((x) => x.slug === slug);
  if (!t) return <NotFound />;

  const related = TREATMENTS.filter((x) => x.slug !== t.slug && (x.category === t.category || x.featured)).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={t.kicker}
        title={t.title}
        text={t.short}
        image={t.image}
        crumbs={[{ label: 'Treatments', to: '/treatments' }, { label: t.title }]}
      />

      <section className="detail">
        <div className="detail__main reveal">
          <p className="eyebrow">Overview</p>
          <p className="detail__intro">{t.intro}</p>

          <h2 className="h3">Benefits</h2>
          <ul className="benefits">
            {t.benefits.map((b) => <li key={b}>{b}</li>)}
          </ul>

          <h2 className="h3">How it works</h2>
          <ol className="mini-steps">
            {STEPS.slice(0, 5).map((s, i) => (
              <li key={s.title}><span className="index">0{i + 1}</span><div><strong>{s.title}</strong><p>{s.text}</p></div></li>
            ))}
          </ol>
          <Link to="/journey" className="link-arrow">See the full journey</Link>
        </div>

        <aside className="facts reveal">
          <p className="eyebrow">Quick facts</p>
          <dl>
            {Object.entries(t.facts).map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
            <div><dt>Category</dt><dd>{t.category}</dd></div>
          </dl>
          <p className="facts__note">Typical guidance. Your plan is confirmed at consultation.</p>
          <Ext href={waLink(`Hello, I'd like to book ${t.title}.`)} className="btn">Book {t.title}</Ext>
          <Link to="/contact" className="link-arrow">Or use our booking form</Link>
        </aside>
      </section>

      <section className="related">
        <div className="section-head reveal">
          <p className="eyebrow">You may also like</p>
          <h2 className="h2">Related treatments</h2>
        </div>
        <div className="grid">
          {related.map((r) => <TreatmentCard key={r.slug} t={r} />)}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
