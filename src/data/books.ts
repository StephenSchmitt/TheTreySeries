export interface Book {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  description: string;
  coverImage: string;
  status: "available" | "coming-soon";
  purchaseUrl?: string;
  /** Link to the interactive flipbook preview */
  readUrl?: string;
  themes: string[];
}

export const books: Book[] = [
  {
    id: 1,
    slug: "a-new-beginning",
    title: "Trey: A New Beginning",
    subtitle: "Book One",
    summary:
      "A gentle ocean story about loss, adoption, and discovering that family can grow through love, care, and belonging.",
    description:
      "When a tiny octopus named Trey loses his parents, the ocean feels impossibly big and quiet. But through the kindness of caring helpers and the warmth of a new family, Trey discovers that love doesn't replace what was lost — it grows around it. A New Beginning is a tender story for children and families navigating adoption, grief, and the beautiful courage it takes to belong again.",
    coverImage: "/images/books/book-1.jpg",
    status: "available",
    purchaseUrl: "#",
    readUrl: "/read/a-new-beginning",
    themes: ["Adoption", "Grief & Loss", "Belonging", "Safe Adults", "Family"],
  },
  {
    id: 2,
    slug: "book-two",
    title: "Trey: Book Two",
    subtitle: "Book Two",
    summary: "The next chapter in Trey's ocean journey. Coming soon.",
    description: "",
    coverImage: "/images/books/book-2.jpg",
    status: "coming-soon",
    themes: [],
  },
  {
    id: 3,
    slug: "book-three",
    title: "Trey: Book Three",
    subtitle: "Book Three",
    summary: "A new adventure awaits beneath the waves. Coming soon.",
    description: "",
    coverImage: "/images/books/book-3.jpg",
    status: "coming-soon",
    themes: [],
  },
  {
    id: 4,
    slug: "book-four",
    title: "Trey: Book Four",
    subtitle: "Book Four",
    summary: "More stories of heart and hope. Coming soon.",
    description: "",
    coverImage: "/images/books/book-4.jpg",
    status: "coming-soon",
    themes: [],
  },
  {
    id: 5,
    slug: "book-five",
    title: "Trey: Book Five",
    subtitle: "Book Five",
    summary: "The ocean holds endless stories to tell. Coming soon.",
    description: "",
    coverImage: "/images/books/book-5.jpg",
    status: "coming-soon",
    themes: [],
  },
  {
    id: 6,
    slug: "book-six",
    title: "Trey: Book Six",
    subtitle: "Book Six",
    summary: "New depths, new discoveries. Coming soon.",
    description: "",
    coverImage: "/images/books/book-6.jpg",
    status: "coming-soon",
    themes: [],
  },
  {
    id: 7,
    slug: "book-seven",
    title: "Trey: Book Seven",
    subtitle: "Book Seven",
    summary: "Trey's journey continues. Coming soon.",
    description: "",
    coverImage: "/images/books/book-7.jpg",
    status: "coming-soon",
    themes: [],
  },
  {
    id: 8,
    slug: "book-eight",
    title: "Trey: Book Eight",
    subtitle: "Book Eight",
    summary: "Another wave of wonder. Coming soon.",
    description: "",
    coverImage: "/images/books/book-8.jpg",
    status: "coming-soon",
    themes: [],
  },
  {
    id: 9,
    slug: "book-nine",
    title: "Trey: Book Nine",
    subtitle: "Book Nine",
    summary: "The tides are turning. Coming soon.",
    description: "",
    coverImage: "/images/books/book-9.jpg",
    status: "coming-soon",
    themes: [],
  },
  {
    id: 10,
    slug: "book-ten",
    title: "Trey: Book Ten",
    subtitle: "Book Ten",
    summary: "The grand finale of the Trey Series. Coming soon.",
    description: "",
    coverImage: "/images/books/book-10.jpg",
    status: "coming-soon",
    themes: [],
  },
];
