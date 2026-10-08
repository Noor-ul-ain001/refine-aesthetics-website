import { Link } from 'react-router-dom';
import { BRAND, IMAGES, LEAD, VALUES } from '../data';
import { CtaBand, PageHero } from '../components/ui';
import { Elements, Reviews, Stats } from './Home';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the clinic"
        title={<>Meet <em>Dr. Areesha</em></>}
        text="Medical Director of Refine Aesthetics, leading a team of certified aesthetics, skincare and dental professionals in Karachi."
        image={IMAGES.clinic}
        crumbs={[{ label: 'About' }]}
      />

      <section className="story">
        <div className="split">
          <div className="split__media reveal"><img src={IMAGES.treatment} alt="" loading="lazy" /></div>
          <div className="split__body reveal">
            <p className="eyebrow">Our story</p>
            <h2 className="h2">Expert care, <em>modern techniques</em></h2>
            <p className="lead">Refine Aesthetics was built on a simple belief: everyone deserves skin and a smile they feel confident in, cared for by professionals who take the time to understand them.</p>
            <p className="lead">Today our two Karachi branches, Gulistan-e-Johar and Clifton, offer advanced skin treatments such as Bio Re Peel, Exosomes and Microneedling, SHR Quattro laser hair removal, thread lifts and dental care, all under one roof.</p>
            <Link to="/treatments" className="link-arrow">Explore treatments</Link>
          </div>
        </div>
      </section>

      <section className="leader">
        <div className="leader__body reveal">
          <p className="eyebrow">{BRAND.sub}</p>
          <h2 className="h2">{LEAD.title}</h2>
          <p className="lead">{LEAD.text}</p>
        </div>
        <Stats />
      </section>

      <section className="pillars">
        <div className="section-head reveal">
          <p className="eyebrow">What we stand for</p>
          <h2 className="h1">Our promise</h2>
        </div>
        <div className="pillars__grid">
          {VALUES.map((v, i) => (
            <article key={v.title} className="pillar reveal">
              <span className="index">0{i + 1}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      <Elements />
      <Reviews />
      <CtaBand />
    </>
  );
}
