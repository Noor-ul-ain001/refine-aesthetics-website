# Refine Aesthetics — Website

Marketing website for **Refine Aesthetics by Dr. Areesha**, an aesthetics, skincare and dental clinic in Karachi (Gulistan-e-Johar & Clifton).

Built with React 19, Vite and React Router.

## Pages

| Route | Description |
| --- | --- |
| `/` | Home: hero, values, featured services, approach, journey, reviews, FAQ |
| `/about` | About Dr. Areesha and the clinic |
| `/treatments` | All treatments with category filters |
| `/treatments/:slug` | Treatment detail pages |
| `/journey` | The 7-step patient journey and aftercare |
| `/faq` | Frequently asked questions |
| `/contact` | Booking form (opens WhatsApp), branches and map |

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Content

All clinic details, treatments, FAQs and images live in [`src/data.js`](src/data.js). Replace the placeholder stock images in `IMAGES` with clinic photography before launch.

## Deployment

Deployed on Vercel. `vercel.json` rewrites all routes to `index.html` so client-side routes work on direct visits and refreshes.
