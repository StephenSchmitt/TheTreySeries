export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailImage: string;
  /** YouTube or Vimeo embed URL — replace placeholders with real URLs */
  embedUrl: string;
  type: "trailer" | "read-along" | "behind-the-scenes" | "promo";
  bookId?: number;
  isFeatured: boolean;
}

export const videos: Video[] = [
  {
    id: "series-trailer",
    title: "Welcome to The Trey Series",
    description:
      "Dive into the world of Trey — a gentle ocean adventure about love, loss, and finding where you belong. Meet the characters, feel the warmth, and discover stories that help families grow closer.",
    thumbnailImage: "/images/video-thumbnails/series-trailer.jpg",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    type: "trailer",
    isFeatured: true,
  },
  {
    id: "book-one-trailer",
    title: "Trey: A New Beginning — Book Trailer",
    description:
      "A first look at the story of a tiny octopus who loses everything and finds something he never expected — a family built through love and belonging.",
    thumbnailImage: "/images/video-thumbnails/book-one-trailer.jpg",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    type: "trailer",
    bookId: 1,
    isFeatured: false,
  },
  {
    id: "book-one-read-along",
    title: "Read Along: A New Beginning",
    description:
      "Join us for a warm read-along of Trey: A New Beginning. Perfect for bedtime, classrooms, or quiet moments together.",
    thumbnailImage: "/images/video-thumbnails/book-one-read-along.jpg",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_HERE",
    type: "read-along",
    bookId: 1,
    isFeatured: false,
  },
];
