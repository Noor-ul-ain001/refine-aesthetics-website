// Business details sourced from the clinic's Instagram (@refineaestheticsbydrareesha) and Facebook page.

const img = (id, w = 1400) => `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;

export const BRAND = {
  name: 'Refine Aesthetics',
  byline: 'by Dr. Areesha',
  tagline: 'Aesthetics, Skincare & Dental Experts',
  sub: 'Certified Professionals · Modern Techniques',
  phoneDisplay: '0334 315 1514',
  phoneTel: '+923343151514',
  whatsapp: '923343151514',
  instagram: 'https://www.instagram.com/refineaestheticsbydrareesha',
  instagramHandle: '@refineaestheticsbydrareesha',
  facebook: 'https://www.facebook.com/share/14oqXLvVfYb/',
  threads: 'https://www.threads.net/@refineaestheticsbydrareesha',
};

export const waLink = (text) => `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;
export const BOOK_TEXT = 'Hello Refine Aesthetics, I would like to book a consultation.';

export const LOCATIONS = [
  {
    name: 'Gulistan-e-Johar',
    address: 'Alkhizra Heights, Block 3A, Gulistan-e-Johar, Karachi',
    query: 'Alkhizra Heights Block 3A Gulistan-e-Johar Karachi',
  },
  {
    name: 'Clifton',
    address: 'Clifton, Karachi. Message us for directions',
    query: 'Clifton Karachi',
  },
].map((l) => ({
  ...l,
  map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.query)}`,
  embed: `https://maps.google.com/maps?q=${encodeURIComponent(l.query)}&z=15&output=embed`,
}));

export const IMAGES = {
  hero: img('photo-1570172619644-dfd03ed5d881', 2000),
  quote: img('photo-1515377905703-c4788e51af15', 2000),
  clinic: img('photo-1560750588-73207b1ef5b8'),
  treatment: img('photo-1552693673-1bf958298935'),
  mask: img('photo-1616394584738-fc6e612e71b9'),
  serums: img('photo-1612817288484-6f916006741a'),
  products: img('photo-1598440947619-2c35fc9aa908'),
  body: img('photo-1519823551278-64ac92734fb1'),
  dental: img('photo-1629909613654-28e377c37b09'),
  dentist: img('photo-1606811841689-23dfddce3e95'),
};

export const VALUES = [
  {
    title: 'Aesthetic Excellence',
    text: 'Every treatment starts with your natural features. We enhance them with restraint, so the result looks like you on your best day.',
    image: IMAGES.treatment,
  },
  {
    title: 'The Glow You’ve Been Waiting For',
    text: 'Bio Re Peel, Exosomes, Microneedling, SHR Quattro laser: modern techniques chosen and combined for your skin, never a one-size protocol.',
    image: IMAGES.serums,
  },
  {
    title: 'With You Every Step',
    text: 'From the first skin analysis to aftercare at home, our team stays a message away, guiding you through every session and follow-up.',
    image: IMAGES.mask,
  },
];

export const LEAD = {
  title: 'Aesthetics, Skincare & Dental: Under One Roof',
  text: 'Refine Aesthetics is led by Dr. Areesha, Medical Director, with a team of certified professionals across two Karachi branches. Skin, face, body and smile are all cared for in one calm, clinical space.',
  stats: [
    { value: '2', label: 'branches in Karachi' },
    { value: '3', label: 'disciplines: aesthetics, skin & dental' },
    { value: '4K+', label: 'community on Instagram' },
  ],
};

export const CATEGORIES = ['All', 'Skin', 'Face', 'Laser', 'Dental'];

// "Quick facts" are typical guidance only; every plan is confirmed at consultation.
export const TREATMENTS = [
  {
    slug: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    kicker: 'SHR Quattro',
    category: 'Laser',
    featured: true,
    image: IMAGES.body,
    short: 'Fast, comfortable hair reduction with SHR Quattro technology, suitable for face and body.',
    intro: 'SHR Quattro uses gradual, in-motion heating to target hair follicles. That makes sessions faster and far more comfortable than traditional laser, and suitable for a wide range of skin types.',
    benefits: ['Comfortable, warm sensation', 'Treats face, underarms, arms, legs & body', 'Suitable for many skin types', 'Long-term reduction over a course'],
    facts: { Sessions: 'A course, spaced weeks apart', Downtime: 'None, resume your day', 'Ideal for': 'Unwanted hair on face or body' },
  },
  {
    slug: 'thread-lift',
    title: 'Thread Lift',
    kicker: 'Non-surgical lifting',
    category: 'Face',
    featured: true,
    image: IMAGES.treatment,
    short: 'Subtle lift and contour for the face and jawline, with minimal downtime and natural-looking definition.',
    intro: 'Fine dissolvable threads are placed beneath the skin to gently lift and reposition tissue, while stimulating your own collagen for continued firmness over the following months.',
    benefits: ['Lifts cheeks, jowls & jawline', 'No surgery, no general anaesthesia', 'Natural, gradual results', 'Stimulates collagen'],
    facts: { Sessions: 'Usually a single session', Downtime: 'Mild swelling for a few days', 'Ideal for': 'Early sagging & loss of definition' },
  },
  {
    slug: 'bio-re-peel',
    title: 'Bio Re Peel',
    kicker: 'Bio-stimulating peel',
    category: 'Skin',
    image: IMAGES.hero,
    short: 'A no-downtime bio-stimulating peel for brightness, texture and tone.',
    intro: 'Bio Re Peel combines TCA with skin-supporting actives to renew the skin without the visible peeling of a traditional chemical peel, leaving it brighter, smoother and more even.',
    benefits: ['Instant glow', 'Refines texture & pores', 'Fades pigmentation & marks', 'Little to no peeling'],
    facts: { Sessions: 'A short course for best results', Downtime: 'Little to none', 'Ideal for': 'Dullness, uneven tone, texture' },
  },
  {
    slug: 'microneedling',
    title: 'Microneedling',
    kicker: 'Collagen induction',
    category: 'Skin',
    image: IMAGES.mask,
    short: 'Collagen induction for scars, pores and fine lines.',
    intro: 'Controlled micro-channels trigger the skin’s natural repair response, building fresh collagen and elastin and helping serums penetrate deeper.',
    benefits: ['Softens acne scars', 'Minimises pores', 'Smooths fine lines', 'Pairs well with exosomes'],
    facts: { Sessions: 'A course, spaced weeks apart', Downtime: 'Mild redness for 1–2 days', 'Ideal for': 'Scars, pores, early ageing' },
  },
  {
    slug: 'exosomes',
    title: 'Exosomes',
    kicker: 'Regenerative therapy',
    category: 'Skin',
    image: IMAGES.serums,
    short: 'Next-generation regenerative therapy for skin renewal and repair.',
    intro: 'Exosomes carry growth factors and signalling molecules that support cell communication and repair. Often paired with microneedling, they help calm, renew and strengthen the skin.',
    benefits: ['Accelerates skin repair', 'Boosts radiance & hydration', 'Supports post-acne recovery', 'Enhances other treatments'],
    facts: { Sessions: 'As advised at consultation', Downtime: 'Minimal', 'Ideal for': 'Tired, damaged or sensitised skin' },
  },
  {
    slug: 'acne-treatment',
    title: 'Acne Treatments',
    kicker: 'Clear skin protocols',
    category: 'Skin',
    image: IMAGES.products,
    short: 'Targeted protocols to calm active breakouts and fade marks.',
    intro: 'Acne has many causes, so we start by understanding yours. Your plan may combine peels, deep cleansing, microneedling and home-care to calm breakouts and treat the marks they leave.',
    benefits: ['Calms active breakouts', 'Reduces oil & congestion', 'Fades post-acne marks', 'Personalised home-care'],
    facts: { Sessions: 'A tailored course', Downtime: 'Depends on the protocol', 'Ideal for': 'Active acne & acne marks' },
  },
  {
    slug: 'deep-cleansing',
    title: 'Deep Cleansing',
    kicker: 'Facial & exfoliation',
    category: 'Skin',
    image: IMAGES.mask,
    short: 'Professional cleansing and exfoliation for a clear, fresh complexion.',
    intro: 'A professional deep-cleansing facial that clears congestion, exfoliates dead skin and rebalances hydration. The perfect reset, or preparation before other treatments.',
    benefits: ['Clears blackheads & congestion', 'Gentle exfoliation', 'Hydrated, fresh skin', 'Great monthly maintenance'],
    facts: { Sessions: 'Monthly maintenance', Downtime: 'None', 'Ideal for': 'Congested or dull skin' },
  },
  {
    slug: 'dental-care',
    title: 'Dental Care',
    kicker: 'Smile care',
    category: 'Dental',
    image: IMAGES.dental,
    short: 'Smile care from our certified dental professionals.',
    intro: 'Our dental professionals look after your smile with the same attention to detail as your skin, from check-ups and cleaning to cosmetic smile enhancements.',
    benefits: ['Check-ups & cleaning', 'Cosmetic smile care', 'Gentle, hygienic setting', 'Advice tailored to you'],
    facts: { Sessions: 'As your dentist advises', Downtime: 'Usually none', 'Ideal for': 'A healthy, confident smile' },
  },
];

export const ELEMENTS = [
  { title: 'Proficiency', text: 'Certified professionals trained in modern aesthetic, skin and dental techniques.' },
  { title: 'Responsibility', text: 'Honest consultations: we recommend only what your skin truly needs.' },
  { title: 'Experienced Team', text: 'A dedicated team recognised for patient care, led by Dr. Areesha.' },
  { title: 'Comprehensive Care', text: 'Aesthetics, skincare and dental treatments in one place.' },
  { title: 'Quality Products', text: 'Medical-grade products and materials, chosen for safety and results.' },
  { title: 'Advanced Equipment', text: 'Technology such as SHR Quattro laser for comfortable, effective sessions.' },
];

export const STEPS = [
  { title: 'Consultation', text: 'We listen first. Share your concerns and goals, and Dr. Areesha or a team specialist will assess your skin, face or smile.' },
  { title: 'Skin Analysis', text: 'A close look at skin type, sensitivity and history so the plan suits you, including any contraindications.' },
  { title: 'Personal Treatment Plan', text: 'You receive a clear plan: which treatments, how many sessions, expected results and investment, with no surprises.' },
  { title: 'Preparation', text: 'Simple pre-care guidance, such as what to avoid and how to prepare your skin, so each session is as effective as possible.' },
  { title: 'Treatment', text: 'Your session takes place in a calm, hygienic setting, with your comfort monitored throughout.' },
  { title: 'Aftercare', text: 'Tailored post-treatment instructions and product advice to protect and prolong your results.' },
  { title: 'Follow-up', text: 'We check in on your progress and adjust future sessions. You are never on your own between visits.' },
];

export const AFTERCARE = [
  { title: 'Protect', text: 'Daily broad-spectrum SPF, every day, especially after peels, microneedling and laser.' },
  { title: 'Soothe', text: 'Keep skin calm and hydrated with gentle, fragrance-free products we recommend.' },
  { title: 'Pause', text: 'Skip actives, scrubs, saunas and heavy workouts for the period we advise.' },
  { title: 'Message us', text: 'Anything unexpected? Send us a WhatsApp. We are always a message away.' },
];

export const FAQ_GROUPS = [
  {
    group: 'Before your visit',
    items: [
      { q: 'Do I need a consultation before a treatment?', a: 'Yes. A short consultation lets us understand your skin and goals and recommend the right treatment safely.' },
      { q: 'Which branch should I visit?', a: 'We have branches in Gulistan-e-Johar and Clifton. Book at whichever is most convenient for you.' },
      { q: 'How do I book?', a: 'Send us a WhatsApp or Instagram DM, call 0334 315 1514, or use the form on our contact page.' },
    ],
  },
  {
    group: 'Treatments',
    items: [
      { q: 'Is laser hair removal painful?', a: 'SHR Quattro uses gradual heating, so most clients describe it as a warm, comfortable sensation rather than a sharp snap.' },
      { q: 'How many sessions will I need?', a: 'It depends on the treatment and your skin. Peels and microneedling are usually done as a course; we will advise a number at consultation.' },
      { q: 'Is there downtime after a Bio Re Peel or microneedling?', a: 'Bio Re Peel has little to no downtime. Microneedling may leave mild redness for a day or two.' },
      { q: 'Can treatments be combined?', a: 'Often, yes. Microneedling with exosomes is a popular pairing. We will build a combination that is safe for your skin.' },
    ],
  },
  {
    group: 'Pricing',
    items: [
      { q: 'How much do treatments cost?', a: 'Pricing depends on the treatment plan. Message us on WhatsApp or Instagram and we will share current rates and offers.' },
      { q: 'Do you offer packages?', a: 'Courses and packages are available for many treatments. Ask us about current offers when you book.' },
    ],
  },
];

export const FAQ = FAQ_GROUPS.flatMap((g) => g.items);

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Treatments', to: '/treatments' },
  { label: 'Journey', to: '/journey' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];
