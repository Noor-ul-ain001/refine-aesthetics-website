import { useSearchParams } from 'react-router-dom';
import { CATEGORIES, IMAGES, TREATMENTS } from '../data';
import { CtaBand, PageHero, TreatmentCard } from '../components/ui';

export default function Treatments() {
  const [params, setParams] = useSearchParams();
  const cat = CATEGORIES.includes(params.get('c')) ? params.get('c') : 'All';
  const list = cat === 'All' ? TREATMENTS : TREATMENTS.filter((t) => t.category === cat);

  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title={<>Skin, face, body <em>&amp; smile</em></>}
        text="Modern, evidence-led treatments delivered by certified professionals and always tailored to you."
        image={IMAGES.serums}
        crumbs={[{ label: 'Treatments' }]}
      />

      <section className="services services--page">
        <div className="filters" role="tablist" aria-label="Filter treatments">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={c === cat}
              className={`chip ${c === cat ? 'chip--active' : ''}`}
              onClick={() => setParams(c === 'All' ? {} : { c }, { replace: true })}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid" key={cat}>
          {list.map((t) => <TreatmentCard key={t.slug} t={t} />)}
        </div>
      </section>

      <CtaBand title="Not sure what you need?" text="Book a consultation and we will build a plan around your skin and your goals." />
    </>
  );
}
