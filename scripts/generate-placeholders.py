#!/usr/bin/env python3
"""One-off generator for ocean-themed placeholder images (Pillow)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

BASE = Path(__file__).resolve().parent.parent / "public"
FONT_PATH = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"

OCEAN_TOP = (186, 228, 232)
OCEAN_BOTTOM = (38, 105, 120)


def gradient_rgb(w: int, h: int) -> Image.Image:
    img = Image.new("RGB", (w, h))
    px = img.load()
    r1, g1, b1 = OCEAN_TOP
    r2, g2, b2 = OCEAN_BOTTOM
    hm = max(h - 1, 1)
    for y in range(h):
        t = y / hm
        r = int(r1 + (r2 - r1) * t)
        g = int(g1 + (g2 - g1) * t)
        b = int(b1 + (b2 - b1) * t)
        row = (r, g, b)
        for x in range(w):
            px[x, y] = row
    return img


def load_font(size: int):
    for path in (FONT_BOLD, FONT_PATH):
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def wrap_lines(draw, text, font, max_width):
    words = text.split()
    if not words:
        return []
    lines = []
    line = words[0]
    for word in words[1:]:
        trial = f"{line} {word}"
        bbox = draw.textbbox((0, 0), trial, font=font)
        if bbox[2] - bbox[0] <= max_width:
            line = trial
        else:
            lines.append(line)
            line = word
    lines.append(line)
    return lines


def draw_label(img, label):
    draw = ImageDraw.Draw(img)
    w, h = img.size
    margin = max(24, min(w, h) // 25)
    max_text_w = w - 2 * margin
    fontsize = max(22, min(w, h) // 14)
    font = load_font(fontsize)
    lines = wrap_lines(draw, label, font, max_text_w)
    line_spacing = 8
    while fontsize > 16:
        heights = []
        for line in lines:
            bb = draw.textbbox((0, 0), line, font=font)
            heights.append(bb[3] - bb[1])
        total = sum(heights) + line_spacing * (len(lines) - 1)
        if total <= h - 2 * margin:
            break
        fontsize -= 2
        font = load_font(fontsize)
        lines = wrap_lines(draw, label, font, max_text_w)

    heights = []
    for line in lines:
        bb = draw.textbbox((0, 0), line, font=font)
        heights.append(bb[3] - bb[1])
    total_h = sum(heights) + line_spacing * max(len(lines) - 1, 0)
    y = (h - total_h) // 2
    shadow = (25, 65, 75)
    fill = (248, 252, 253)
    for i, line in enumerate(lines):
        bb = draw.textbbox((0, 0), line, font=font)
        tw = bb[2] - bb[0]
        x = (w - tw) // 2
        draw.text((x + 2, y + 2), line, fill=shadow, font=font)
        draw.text((x, y), line, fill=fill, font=font)
        y += heights[i] + line_spacing


def save_jpeg(img, path):
    path.parent.mkdir(parents=True, exist_ok=True)
    rgb = img.convert("RGB")
    rgb.save(path, "JPEG", quality=88, optimize=True)


def save_png(img, path):
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, "PNG", optimize=True)


def main():
    jobs = []

    heroes = BASE / "images" / "heroes"
    jobs.append((heroes / "trey-hero.png", 800, 1000, "png", "Hero — Trey Series (replace with final art)"))
    jobs.append((heroes / "author.jpg", 800, 800, "jpg", "Author photo placeholder"))
    jobs.append((heroes / "series-art.jpg", 800, 800, "jpg", "Series artwork placeholder"))

    books = BASE / "images" / "books"
    for n in range(1, 11):
        jobs.append((books / f"book-{n}.jpg", 600, 900, "jpg", f"Book {n} cover placeholder"))

    guides = BASE / "images" / "guides"
    for n in range(1, 11):
        jobs.append((guides / f"guide-{n}.jpg", 600, 900, "jpg", f"Guide {n} cover placeholder"))

    chars = BASE / "images" / "characters"
    for name, cap in [
        ("trey", "Trey"),
        ("raya", "Raya"),
        ("ray", "Ray"),
        ("cray", "Cray"),
        ("marina", "Marina"),
    ]:
        jobs.append((chars / f"{name}.png", 600, 800, "png", f"Character — {cap} (portrait placeholder)"))

    thumbs = BASE / "images" / "video-thumbnails"
    jobs.append((thumbs / "series-trailer.jpg", 1280, 720, "jpg", "Series trailer thumbnail"))
    jobs.append((thumbs / "book-one-trailer.jpg", 1280, 720, "jpg", "Book One trailer thumbnail"))
    jobs.append((thumbs / "book-one-read-along.jpg", 1280, 720, "jpg", "Book One read-along thumbnail"))

    jobs.append((BASE / "images" / "og-image.jpg", 1200, 630, "jpg", "Open Graph — Trey Series"))

    for path, width, height, fmt, label in jobs:
        img = gradient_rgb(width, height)
        draw_label(img, label)
        if fmt == "png":
            save_png(img, path)
        else:
            save_jpeg(img, path)
        print(path.relative_to(BASE))

    print(f"\nCreated {len(jobs)} files under {BASE}")


if __name__ == "__main__":
    main()
