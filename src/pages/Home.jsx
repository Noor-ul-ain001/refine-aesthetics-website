import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND, IMAGES, VALUES, LEAD, TREATMENTS, ELEMENTS, STEPS, FAQ } from '../data';
import { Accordion, CtaBand, Ext, TreatmentCard } from '../components/ui';

export function Stats() {
  return (
    <div className="leader__stats">
      {LEAD.stats.map((s) => (
        <div key={s.label} className="stat reveal">
          <span className="stat__value">{s.value}</span>
          <span className="stat__label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

export function Elements() {
  const [active, setActive] = useState(0);
  const pics = [IMAGES.treatment, IMAGES.products, IMAGES.clinic, IMAGES.dentist, IMAGES.serums, IMAGES.body];

  return (
    <section className="elements">
      <div className="section-head reveal">
        <p className="eyebrow">Our approach</p>
        <h2 className="h1">Elements of Perfection</h2>
      </div>
      <div className="elements__wrap">
        <ol className="elements__list">
          {ELEMENTS.map((e, i) => (
            <li
              key={e.title}
              className={i === active ? 'is-active' : ''}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
            >
              <span className="index">0{i + 1}</span>
              <div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="elements__media">
          {pics.map((p, i) => (
            <img key={i} src={p} alt="" loading="lazy" className={i === active ? 'is-active' : ''} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews__inner reveal">
        <p className="eyebrow">Reviews</p>
        <h2 className="h1">Real clients. <em>Real results.</em></h2>
        <p className="lead">See client reviews, influencer visits and before &amp; after results in our Instagram highlights.</p>
        <div className="reviews__actions">
          <Ext href={BRAND.instagram} className="btn">View on Instagram</Ext>
          <Ext href={BRAND.facebook} className="btn btn--ghost">Visit our Facebook</Ext>
        </div>
        <p className="reviews__handle">{BRAND.instagramHandle}</p>
      </div>
    </section>
  );
}

export default function Home() {
  const featured = TREATMENTS.filter((t) => t.featured);
  const rest = TREATMENTS.filter((t) => !t.featured);

  return (
    <>
      <section className="hero">
        <div className="hero__media" style={{ backgroundImage: `url(${IMAGES.hero})` }} />
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">{BRAND.tagline}</p>
          <h1 className="hero__title">Refined <em>to</em><br />Perfection</h1>
          <p className="hero__sub">naturally, with an expert touch</p>
          <Link to="/about" className="btn btn--light">Meet the doctor</Link>
        </div>
        <a href="#quote" className="hero__scroll" aria-label="Scroll down"><span /></a>
      </section>

      <section className="quote" id="quote">
        <div className="quote__media" style={{ backgroundImage: `url(${IMAGES.quote})` }} />
        <blockquote className="quote__text reveal">
          Beauty is rarely about change. It is about revealing what is already there, with a trained eye, a gentle hand and techniques you can trust.
          <cite>Refine Aesthetics by Dr. Areesha</cite>
        </blockquote>
      </section>

      <section className="values">
        {VALUES.map((v, i) => (
          <article key={v.title} className={`split ${i % 2 ? 'split--reverse' : ''}`}>
            <div className="split__media reveal"><img src={v.image} alt="" loading="lazy" /></div>
            <div className="split__body reveal">
              <span className="index">0{i + 1}</span>
              <h2 className="h2">{v.title}</h2>
              <p className="lead">{v.text}</p>
            </div>
          </article>
        ))}

        <article className="leader">
          <div className="leader__body reveal">
            <span className="index">04</span>
            <h2 className="h2">{LEAD.title}</h2>
            <p className="lead">{LEAD.text}</p>
            <Link to="/about" className="link-arrow">About the clinic</Link>
          </div>
          <Stats />
        </article>
      </section>

      <section className="services">
        <div className="section-head section-head--row reveal">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="h1">Main Services</h2>
          </div>
          <Link to="/treatments" className="link-arrow">All treatments</Link>
        </div>

        <div className="featured">
          {featured.map((f) => (
            <Link key={f.slug} to={`/treatments/${f.slug}`} className="featured__card reveal">
              <img src={f.image} alt="" loading="lazy" />
              <div className="featured__info">
                <span className="eyebrow eyebrow--light">{f.kicker}</span>
                <h3>{f.title}</h3>
                <p>{f.short}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid">
          {rest.map((t) => <TreatmentCard key={t.slug} t={t} />)}
        </div>
      </section>

      <Elements />

      <section className="journey">
        <div className="journey__aside reveal">
          <p className="eyebrow eyebrow--light">Your journey</p>
          <h2 className="h1">Seven steps<br />to your <em>best skin</em></h2>
          <p className="muted-light">A clear, unhurried process, from your first conversation with us to your final follow-up.</p>
          <Link to="/journey" className="link-arrow link-arrow--light">The full journey</Link>
        </div>
        <Accordion items={STEPS} numbered />
      </section>

      <Reviews />

      <section className="faq">
        <div className="section-head section-head--row reveal">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="h1">FAQ</h2>
          </div>
          <Link to="/faq" className="link-arrow">Show all answers</Link>
        </div>
        <Accordion items={FAQ.slice(0, 5)} />
      </section>

      <CtaBand title="A visit that changes how you feel" />
    </>
  );
}
