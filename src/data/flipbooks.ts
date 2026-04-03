export interface FlipbookPage {
  /** Image path relative to /public */
  src: string;
  alt: string;
}

export interface FlipbookConfig {
  /** Must match the book slug from books.ts */
  bookSlug: string;
  title: string;
  subtitle?: string;
  pages: FlipbookPage[];
}

/**
 * To add pages to a book:
 *   1. Drop image files into /public/images/books/<folder>/
 *   2. Add entries to the pages array below
 *
 * To add a flipbook for a new book:
 *   1. Create a new folder under /public/images/books/
 *   2. Add a new FlipbookConfig object to the array
 */
export const flipbooks: FlipbookConfig[] = [
  {
    bookSlug: "a-new-beginning",
    title: "Trey: A New Beginning",
    subtitle: "Book One",
    pages: [
      { src: "/images/books/trey-book-1/page-01.png", alt: "Page 1" },
      { src: "/images/books/trey-book-1/page-02.png", alt: "Page 2" },
      { src: "/images/books/trey-book-1/page-03.png", alt: "Page 3" },
      { src: "/images/books/trey-book-1/page-04.png", alt: "Page 4" },
      { src: "/images/books/trey-book-1/page-05.png", alt: "Page 5" },
    ],
  },
];

export function getFlipbook(slug: string): FlipbookConfig | undefined {
  return flipbooks.find((fb) => fb.bookSlug === slug);
}
