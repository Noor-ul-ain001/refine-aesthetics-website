import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { BRAND, LOCATIONS, NAV, TREATMENTS, waLink, BOOK_TEXT } from '../data';

export function useReveal(key) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
}

export function Ext({ href, children, ...rest }) {
  return <a href={href} target="_blank" rel="noreferrer" {...rest}>{children}</a>;
}

export function Socials() {
  return (
    <div className="socials">
      <Ext href={BRAND.instagram}>Instagram</Ext>
      <Ext href={BRAND.facebook}>Facebook</Ext>
      <Ext href={BRAND.threads}>Threads</Ext>
      <Ext href={waLink(BOOK_TEXT)}>WhatsApp</Ext>
    </div>
  );
}

function Logo({ light }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`}>
      <span className="logo__name">Refine</span>
      <span className="logo__sub">Aesthetics · Dr. Areesha</span>
    </Link>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header className={`header ${scrolled || open ? 'header--solid' : ''}`}>
        <span onClick={() => setOpen(false)}><Logo /></span>
        <nav className="header__nav" aria-label="Primary">
          {NAV.slice(1, 5).map((n) => <NavLink key={n.to} to={n.to}>{n.label}</NavLink>)}
        </nav>
        <div className="header__actions">
          <Link className="btn btn--small" to="/contact" onClick={() => setOpen(false)}>Book an appointment</Link>
          <button
            className={`burger ${open ? 'burger--open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <div className={`menu ${open ? 'menu--open' : ''}`} aria-hidden={!open} inert={!open}>
        <nav className="menu__nav">
          {NAV.map((n, i) => (
            <NavLink key={n.to} to={n.to} end onClick={() => setOpen(false)} style={{ transitionDelay: `${open ? 0.1 + i * 0.05 : 0}s` }}>
              <small>0{i + 1}</small>{n.label}
            </NavLink>
          ))}
        </nav>
        <div className="menu__aside">
          <p className="eyebrow">Get in touch</p>
          <a href={`tel:${BRAND.phoneTel}`} className="menu__phone">{BRAND.phoneDisplay}</a>
          {LOCATIONS.map((l) => <p key={l.name} className="muted">{l.address}</p>)}
          <Socials />
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <Logo light />
          <p className="footer__tag">{BRAND.tagline}.<br />{BRAND.sub}.</p>
        </div>
        <div className="footer__cols">
          <div>
            <p className="eyebrow eyebrow--light">Treatments</p>
            {TREATMENTS.map((t) => <Link key={t.slug} to={`/treatments/${t.slug}`}>{t.title}</Link>)}
          </div>
          <div>
            <p className="eyebrow eyebrow--light">Clinic</p>
            {NAV.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
          </div>
          <div>
            <p className="eyebrow eyebrow--light">Contact</p>
            <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phoneDisplay}</a>
            {LOCATIONS.map((l) => <Ext key={l.name} href={l.map}>{l.name}</Ext>)}
            <Ext href={BRAND.instagram}>Instagram</Ext>
            <Ext href={BRAND.facebook}>Facebook</Ext>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} {BRAND.name} {BRAND.byline}. Karachi, Pakistan.</span>
        <span>{BRAND.sub}</span>
      </div>
    </footer>
  );
}

export function Layout() {
  const { pathname, search } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  useReveal(pathname + search);

  return (
    <>
      <Header />
      <main key={pathname} className="page"><Outlet /></main>
      <Footer />
      <Ext className="wa-float" href={waLink(BOOK_TEXT)} aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.3Z"/></svg>
      </Ext>
    </>
  );
}

export function PageHero({ eyebrow, title, text, image, crumbs = [] }) {
  return (
    <section className="phero">
      <div className="phero__media" style={{ backgroundImage: `url(${image})` }} />
      <div className="hero__overlay" />
      <div className="phero__content">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (c.to ? <Link key={c.label} to={c.to}>{c.label}</Link> : <span key={c.label}>{c.label}</span>))}
        </nav>
        {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
        <h1 className="phero__title">{title}</h1>
        {text && <p className="phero__text">{text}</p>}
      </div>
    </section>
  );
}

export function Accordion({ items, numbered }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.title || it.q} className={`acc ${isOpen ? 'acc--open' : ''}`}>
            <button className="acc__head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
              {numbered && <span className="index">Step {i + 1}</span>}
              <span className="acc__title">{it.title || it.q}</span>
              <span className="acc__icon" aria-hidden />
            </button>
            <div className="acc__panel">
              <div><p>{it.text || it.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function TreatmentCard({ t }) {
  return (
    <Link to={`/treatments/${t.slug}`} className="card reveal">
      <div className="card__img"><img src={t.image.replace(/w=\d+/, 'w=700')} alt="" loading="lazy" /></div>
      <span className="card__kicker">{t.category} · {t.kicker}</span>
      <h3>{t.title}</h3>
      <p>{t.short}</p>
      <span className="link-arrow">Discover</span>
    </Link>
  );
}

export function CtaBand({ title = 'Ready for your consultation?', text = 'Message us on WhatsApp or book online. Our team will find a time that suits you.' }) {
  return (
    <section className="cta">
      <div className="cta__inner reveal">
        <h2 className="h2">{title}</h2>
        <p className="lead">{text}</p>
        <div className="cta__actions">
          <Link to="/contact" className="btn">Book an appointment</Link>
          <Ext href={waLink(BOOK_TEXT)} className="btn btn--ghost">WhatsApp us</Ext>
        </div>
      </div>
    </section>
  );
}
