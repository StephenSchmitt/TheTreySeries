# The Trey Series — Website

A polished, production-ready website for **The Trey Series** by **Dr. Victoria Schmitt** — a children's book collection about adoption, belonging, emotional safety, and family built through love.

Website created by **Lifestyle Creations**.

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm (included with Node.js)

### Install & Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Google Fonts**: Nunito + Quicksand

---

## Project Structure

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx            # Home
│   ├── about/page.tsx      # About
│   ├── books/page.tsx      # Books
│   ├── characters/page.tsx # Meet the Characters
│   ├── contact/page.tsx    # Contact
│   ├── guides/page.tsx     # Companion Guides
│   ├── video/page.tsx      # Video Gallery
│   ├── terms/page.tsx      # Terms of Use
│   ├── privacy/page.tsx    # Privacy Policy
│   ├── layout.tsx          # Root layout (Header, Footer, metadata)
│   └── globals.css         # Global styles, theme colors, animations
│
├── components/             # Reusable components
│   ├── Header.tsx          # Fixed navigation bar
│   ├── Footer.tsx          # Site footer with Lifestyle Creations credit
│   ├── BookCard.tsx        # Book display card (regular + featured)
│   ├── GuideCard.tsx       # Companion guide display card
│   ├── CharacterCard.tsx   # Character portrait card
│   ├── VideoCard.tsx       # Video embed card
│   ├── ContactForm.tsx     # Contact form with inquiry types
│   ├── CTASection.tsx      # Reusable call-to-action banner
│   ├── SectionHeader.tsx   # Section title + subtitle component
│   └── OceanBackground.tsx # Ambient floating background effects
│
└── data/                   # Content data arrays
    ├── books.ts            # All 10 books
    ├── guides.ts           # All 10 companion guides
    ├── characters.ts       # All 5 characters
    ├── videos.ts           # Video entries
    └── navigation.ts       # Nav link definitions

public/
└── images/
    ├── heroes/             # Hero section images
    ├── books/              # Book cover images
    ├── guides/             # Companion guide cover images
    ├── characters/         # Character portrait images
    ├── video-thumbnails/   # Video thumbnail images
    └── og-image.jpg        # Social sharing image
```

---

## Where to Replace Images

All placeholder images are in `public/images/`. Replace them with your real assets at the same file paths:

### Book Covers
- `public/images/books/book-1.jpg` through `book-10.jpg`
- Recommended size: **600×900px** (2:3 portrait ratio)

### Companion Guide Covers
- `public/images/guides/guide-1.jpg` through `guide-10.jpg`
- Recommended size: **600×900px** (2:3 portrait ratio)

### Character Art
- `public/images/characters/trey.png`
- `public/images/characters/raya.png`
- `public/images/characters/ray.png`
- `public/images/characters/cray.png`
- `public/images/characters/marina.png`
- Recommended size: **600×800px** (3:4 portrait ratio)
- Use **transparent PNG** for best results — the cards are designed for clean character art on gradient backgrounds

### Hero Images
- `public/images/heroes/trey-hero.png` — Main hero image of Trey (3:4 portrait, 800×1000px+)
- `public/images/heroes/author.jpg` — Dr. Victoria Schmitt photo (square, 800×800px+)
- `public/images/heroes/series-art.jpg` — Series artwork (square, 800×800px+)

### Video Thumbnails
- `public/images/video-thumbnails/series-trailer.jpg`
- `public/images/video-thumbnails/book-one-trailer.jpg`
- `public/images/video-thumbnails/book-one-read-along.jpg`
- Recommended size: **1280×720px** (16:9 landscape)

### Social / OG Image
- `public/images/og-image.jpg` — **1200×630px**

---

## Where to Edit Content

### Books
Edit `src/data/books.ts` to update titles, summaries, descriptions, themes, and purchase URLs. Each book entry has a clear structure.

### Companion Guides
Edit `src/data/guides.ts` to update guide content, features, audiences, and purchase URLs.

### Characters
Edit `src/data/characters.ts` to update names, descriptions, roles, traits, and species. The `isMainCharacter` flag controls the featured layout on the Characters page.

### Videos
Edit `src/data/videos.ts` to update video titles, descriptions, and embed URLs. Replace `VIDEO_ID_HERE` in the `embedUrl` field with your actual YouTube or Vimeo embed URL.

### Navigation
Edit `src/data/navigation.ts` to add or remove navigation links.

### Contact Email
In `src/app/contact/page.tsx`, search for `hello@thetreyseries.com` and replace with the real contact email.

### SEO / Metadata
- **Global metadata**: `src/app/layout.tsx` — site title, description, keywords, OG image
- **Per-page metadata**: Each page file exports its own `metadata` object
- **Domain**: Update `metadataBase` in `src/app/layout.tsx` with the real domain

### Contact Form
The contact form in `src/components/ContactForm.tsx` currently logs to state. To make it functional:
- Wire it to a form service (Formspree, Netlify Forms, etc.)
- Or create a Next.js API route at `src/app/api/contact/route.ts`

---

## Adding Future Books

1. Add a new entry to the `books` array in `src/data/books.ts`
2. Change `status` from `"coming-soon"` to `"available"` when ready
3. Add a `purchaseUrl` for the buy button
4. Drop the cover image at `public/images/books/book-N.jpg`
5. Add a matching companion guide entry in `src/data/guides.ts`

---

## Deployment

This is a standard Next.js app. Deploy to:

- **Vercel** (recommended): Connect your Git repo and deploy automatically
- **Netlify**: Use the Next.js adapter
- **Any Node.js host**: Run `npm run build && npm start`
- **Static export**: Add `output: 'export'` to `next.config.ts` for static hosting

---

## Brand Colors Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Ocean 800 | `#1e3a5f` | Primary text |
| Ocean 900 | `#0f2744` | Dark backgrounds |
| Teal 500 | `#14b8a6` | Primary accent |
| Aqua 600 | `#0891b2` | Secondary accent |
| Coral 400 | `#fb923c` | Warm accent |
| Sand/Warm 100 | `#f5ebe0` | Warm neutral |

---

## License

All content, including text, images, character designs, and branding, is © Dr. Victoria Schmitt. All rights reserved.

Website by Lifestyle Creations.
