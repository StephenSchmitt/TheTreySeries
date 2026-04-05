import fs from "fs";
import path from "path";

export interface FlipbookPage {
  src: string;
  alt: string;
}

export interface FlipbookConfig {
  bookSlug: string;
  title: string;
  subtitle?: string;
  /** Folder name inside /public/images/books/ containing page-XX.png files */
  folder: string;
  pages: FlipbookPage[];
}

interface FlipbookEntry {
  bookSlug: string;
  title: string;
  subtitle?: string;
  folder: string;
}

/**
 * Register each book here. Pages are auto-discovered from the folder.
 *
 * To add a new flipbook:
 *   1. Create a folder at /public/images/books/<folder>/
 *   2. Drop in page images named page-01.png, page-02.png, etc.
 *   3. Add an entry below.
 */
const registry: FlipbookEntry[] = [
  {
    bookSlug: "a-new-beginning",
    title: "Trey: A New Beginning",
    subtitle: "Book One",
    folder: "trey-book-01",
  },
];

/**
 * Scans /public/images/books/<folder>/ and assembles a reading-order page list:
 *   cover → front-XX.png (sorted) → page-XX.png (sorted)
 */
function discoverPages(folder: string): FlipbookPage[] {
  const dir = path.join(process.cwd(), "public", "images", "books", folder);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir);
  const pages: FlipbookPage[] = [];

  const cover = files.find((f) => /^cover\.(jpg|jpeg|png|webp)$/i.test(f));
  if (cover) {
    pages.push({ src: `/images/books/${folder}/${cover}`, alt: "Cover" });
  }

  const fronts = files
    .filter((f) => /^front-\d+\.png$/i.test(f))
    .sort((a, b) => {
      const na = parseInt(a.match(/\d+/)![0], 10);
      const nb = parseInt(b.match(/\d+/)![0], 10);
      return na - nb;
    });
  for (const f of fronts) {
    pages.push({ src: `/images/books/${folder}/${f}`, alt: f.replace(/\.png$/i, "") });
  }

  const story = files
    .filter((f) => /^page-\d+\.png$/i.test(f))
    .sort((a, b) => {
      const na = parseInt(a.match(/\d+/)![0], 10);
      const nb = parseInt(b.match(/\d+/)![0], 10);
      return na - nb;
    });
  for (let i = 0; i < story.length; i++) {
    pages.push({ src: `/images/books/${folder}/${story[i]}`, alt: `Page ${i + 1}` });
  }

  return pages;
}

function buildFlipbooks(): FlipbookConfig[] {
  return registry.map((entry) => ({
    ...entry,
    pages: discoverPages(entry.folder),
  }));
}

export const flipbooks: FlipbookConfig[] = buildFlipbooks();

export function getFlipbook(slug: string): FlipbookConfig | undefined {
  return flipbooks.find((fb) => fb.bookSlug === slug);
}
