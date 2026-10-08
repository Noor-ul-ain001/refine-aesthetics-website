import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BRAND, IMAGES, LOCATIONS, TREATMENTS, waLink } from '../data';
import { Ext, PageHero, Socials } from '../components/ui';

export default function Contact() {
  const [params] = useSearchParams();
  const pre = TREATMENTS.find((t) => t.slug === params.get('t'))?.title || '';
  const [form, setForm] = useState({ name: '', phone: '', treatment: pre, branch: LOCATIONS[0].name, agree: false });
  const [sent, setSent] = useState(false);
  const [mapIdx, setMapIdx] = useState(0);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = `Hello Refine Aesthetics, I'd like to book an appointment.\nName: ${form.name}\nPhone: ${form.phone}\nTreatment: ${form.treatment || 'Consultation'}\nBranch: ${form.branch}`;
    window.open(waLink(msg), '_blank', 'noopener');
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>A visit that <em>changes</em> how you feel</>}
        text="Book a consultation at our Gulistan-e-Johar or Clifton branch."
        image={IMAGES.clinic}
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="contact">
        <div className="contact__grid">
          <form className="form reveal" onSubmit={submit}>
            <h2 className="h2">Book an appointment</h2>
            {sent ? (
              <div className="form__done">
                <h3>Thank you, {form.name.split(' ')[0]}.</h3>
                <p>Your request opened in WhatsApp. Send the message and our team will contact you shortly.</p>
                <button type="button" className="link-arrow" onClick={() => setSent(false)}>Send another request</button>
              </div>
            ) : (
              <>
                <label className="field"><span>Your name</span><input required value={form.name} onChange={set('name')} autoComplete="name" /></label>
                <label className="field"><span>Phone number</span><input required type="tel" value={form.phone} onChange={set('phone')} placeholder="03xx xxxxxxx" autoComplete="tel" /></label>
                <label className="field"><span>Treatment of interest</span>
                  <select value={form.treatment} onChange={set('treatment')}>
                    <option value="">Consultation</option>
                    {TREATMENTS.map((t) => <option key={t.slug}>{t.title}</option>)}
                  </select>
                </label>
                <label className="field"><span>Preferred branch</span>
                  <select value={form.branch} onChange={set('branch')}>
                    {LOCATIONS.map((l) => <option key={l.name}>{l.name}</option>)}
                  </select>
                </label>
                <label className="check">
                  <input type="checkbox" required checked={form.agree} onChange={set('agree')} />
                  <span>I agree to be contacted about my appointment request.</span>
                </label>
                <button className="btn" type="submit">Request appointment</button>
              </>
            )}
          </form>

          <div className="contact__info reveal">
            {LOCATIONS.map((l) => (
              <div key={l.name} className="loc">
                <p className="eyebrow">{l.name} branch</p>
                <p>{l.address}</p>
                <Ext href={l.map} className="link-arrow">Open in maps</Ext>
              </div>
            ))}
            <div className="loc">
              <p className="eyebrow">Call or WhatsApp</p>
              <a href={`tel:${BRAND.phoneTel}`} className="contact__phone">{BRAND.phoneDisplay}</a>
            </div>
            <div className="loc">
              <p className="eyebrow">Follow us</p>
              <Socials />
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <div className="filters">
          {LOCATIONS.map((l, i) => (
            <button key={l.name} className={`chip ${i === mapIdx ? 'chip--active' : ''}`} onClick={() => setMapIdx(i)}>{l.name}</button>
          ))}
        </div>
        <iframe
          key={mapIdx}
          title={`Map of ${LOCATIONS[mapIdx].name} branch`}
          src={LOCATIONS[mapIdx].embed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
