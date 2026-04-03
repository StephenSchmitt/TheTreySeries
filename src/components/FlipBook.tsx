"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { PageFlip } from "page-flip";
import type { FlipbookPage } from "@/data/flipbooks";

interface FlipBookProps {
  pages: FlipbookPage[];
  title: string;
}

export default function FlipBook({ pages, title }: FlipBookProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const flipRef = useRef<PageFlip | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(pages.length);
  const [ready, setReady] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  const initBook = useCallback(async () => {
    if (!containerRef.current || flipRef.current) return;

    const mod = await import("page-flip");
    const PF = mod.PageFlip;

    const pageFlip = new PF(containerRef.current, {
      width: 550,
      height: 550,
      size: "stretch" as const,
      minWidth: 280,
      maxWidth: 700,
      minHeight: 280,
      maxHeight: 700,
      showCover: true,
      maxShadowOpacity: 0.4,
      mobileScrollSupport: true,
      useMouseEvents: true,
      flippingTime: 800,
      usePortrait: true,
      startZIndex: 0,
      autoSize: true,
      drawShadow: true,
      showPageCorners: true,
      disableFlipByClick: false,
      swipeDistance: 30,
      clickEventForward: true,
      startPage: 0,
    });

    const imagePaths = pages.map((p) => p.src);
    pageFlip.loadFromImages(imagePaths);

    pageFlip.on("flip", (e) => {
      setCurrentPage(e.data as number);
    });

    pageFlip.on("changeOrientation", (e) => {
      setIsPortrait((e.data as string) === "portrait");
    });

    pageFlip.on("init", (e) => {
      const d = e.data as { page: number; mode: string };
      setIsPortrait(d.mode === "portrait");
      setTotalPages(pageFlip.getPageCount());
      setReady(true);
    });

    flipRef.current = pageFlip;
  }, [pages]);

  useEffect(() => {
    initBook();

    return () => {
      if (flipRef.current) {
        try {
          flipRef.current.destroy();
        } catch {
          /* container may already be removed */
        }
        flipRef.current = null;
      }
    };
  }, [initBook]);

  const handlePrev = () => {
    flipRef.current?.flipPrev();
  };

  const handleNext = () => {
    flipRef.current?.flipNext();
  };

  const displayPage = isPortrait
    ? `${currentPage + 1}`
    : `${currentPage + 1}–${Math.min(currentPage + 2, totalPages)}`;

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Book container with shadow and ambient styling */}
      <div className="relative w-full max-w-[1200px] mx-auto">
        {/* Ambient glow behind the book */}
        <div className="absolute inset-0 -inset-x-8 -inset-y-8 bg-gradient-to-br from-teal-400/8 via-aqua-400/5 to-ocean-400/8 rounded-[3rem] blur-2xl pointer-events-none" />

        {/* Book wrapper with shadow */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_60px_rgba(14,116,144,0.15),0_2px_20px_rgba(0,0,0,0.08)]">
          {/* The StPageFlip root element */}
          <div ref={containerRef} className="w-full" />

          {/* Loading state */}
          {!ready && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-50 to-ocean-50 z-10">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto border-3 border-teal-200 border-t-teal-500 rounded-full animate-spin mb-4" />
                <p className="text-ocean-600 text-sm font-medium">
                  Opening your book…
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          onClick={handlePrev}
          disabled={currentPage <= 0}
          aria-label="Previous page"
          className="group flex items-center justify-center w-11 h-11 rounded-full bg-white/80 border border-teal-200/60 text-ocean-600 shadow-sm
            hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 hover:shadow-md
            disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/80 disabled:hover:border-teal-200/60 disabled:hover:shadow-sm
            transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="text-sm text-ocean-500 font-medium min-w-[80px] text-center select-none">
          {ready ? (
            <>
              Page {displayPage} of {totalPages}
            </>
          ) : (
            <span className="text-ocean-400">Loading…</span>
          )}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages - 1}
          aria-label="Next page"
          className="group flex items-center justify-center w-11 h-11 rounded-full bg-white/80 border border-teal-200/60 text-ocean-600 shadow-sm
            hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 hover:shadow-md
            disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/80 disabled:hover:border-teal-200/60 disabled:hover:shadow-sm
            transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Hint text */}
      <p className="text-xs text-ocean-400 text-center select-none">
        <span className="hidden sm:inline">Click the page edges or drag to turn pages</span>
        <span className="sm:hidden">Swipe or tap the edges to turn pages</span>
      </p>

      {/* Accessibility: screen-reader page info */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {ready && `Now viewing page ${currentPage + 1} of ${totalPages} of ${title}`}
      </div>
    </div>
  );
}
