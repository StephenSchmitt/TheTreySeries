export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Characters", href: "/characters" },
  { label: "Books", href: "/books" },
  { label: "Companion Guides", href: "/guides" },
  { label: "Video", href: "/video" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Characters", href: "/characters" },
  { label: "Books", href: "/books" },
  { label: "Companion Guides", href: "/guides" },
  { label: "Video", href: "/video" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];
