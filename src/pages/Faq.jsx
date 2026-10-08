import { FAQ_GROUPS, IMAGES } from '../data';
import { Accordion, CtaBand, PageHero } from '../components/ui';

export default function Faq() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title={<>Frequently <em>asked</em></>}
        text="Everything you may want to know before your visit. Can’t find your answer? Message us anytime."
        image={IMAGES.products}
        crumbs={[{ label: 'FAQ' }]}
      />

      <section className="faq faq--page">
        {FAQ_GROUPS.map((g) => (
          <div key={g.group} className="faq__group">
            <h2 className="h2 reveal">{g.group}</h2>
            <Accordion items={g.items} />
          </div>
        ))}
      </section>

      <CtaBand title="Still have a question?" text="Send us a message on WhatsApp or Instagram and our team will reply shortly." />
    </>
  );
}
