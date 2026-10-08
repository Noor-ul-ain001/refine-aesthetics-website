import { Link } from 'react-router-dom';
import { IMAGES } from '../data';
import { PageHero } from '../components/ui';

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title={<>Page <em>not found</em></>} text="The page you are looking for has moved or no longer exists." image={IMAGES.quote} crumbs={[{ label: '404' }]} />
      <section className="cta">
        <div className="cta__inner">
          <div className="cta__actions">
            <Link to="/" className="btn">Back to home</Link>
            <Link to="/treatments" className="btn btn--ghost">View treatments</Link>
          </div>
        </div>
      </section>
    </>
  );
}
