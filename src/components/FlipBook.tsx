"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { PageFlip } from "page-flip";
import type { FlipbookPage } from "@/data/flipbooks";

interface FlipBookProps {
  pages: FlipbookPage[];
  title: string;
}

/* ─── Shared prev/next/page-counter controls ─── */
function BookControls({
  currentPage,
  totalPages,
  isPortrait,
  ready,
  onPrev,
  onNext,
  light = false,
}: {
  currentPage: number;
  totalPages: number;
  isPortrait: boolean;
  ready: boolean;
  onPrev: () => void;
  onNext: () => void;
  light?: boolean;
}) {
  const displayPage = isPortrait
    ? `${currentPage + 1}`
    : `${currentPage + 1}–${Math.min(currentPage + 2, totalPages)}`;

  const btnBase = light
    ? "bg-white/15 border-white/20 text-white/90 hover:bg-white/25 hover:border-white/40 hover:text-white"
    : "bg-white/80 border-teal-200/60 text-ocean-600 hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 hover:shadow-md";

  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <button
        onClick={onPrev}
        disabled={currentPage <= 0}
        aria-label="Previous page"
        className={`group flex items-center justify-center w-11 h-11 rounded-full border shadow-sm
          disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 ${btnBase}`}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <span className={`text-sm font-medium min-w-[80px] text-center select-none ${light ? "text-white/70" : "text-ocean-500"}`}>
        {ready ? (
          <>Page {displayPage} of {totalPages}</>
        ) : (
          <span className={light ? "text-white/40" : "text-ocean-400"}>Loading…</span>
        )}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage >= totalPages - 1}
        aria-label="Next page"
        className={`group flex items-center justify-center w-11 h-11 rounded-full border shadow-sm
          disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 ${btnBase}`}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

/* ─── Loading spinner ─── */
function LoadingOverlay({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center z-10 ${
        light ? "bg-ocean-900/80" : "bg-gradient-to-br from-teal-50 to-ocean-50"
      }`}
    >
      <div className="text-center">
        <div
          className={`w-12 h-12 mx-auto border-3 rounded-full animate-spin mb-4 ${
            light ? "border-white/20 border-t-white/70" : "border-teal-200 border-t-teal-500"
          }`}
        />
        <p className={`text-sm font-medium ${light ? "text-white/60" : "text-ocean-600"}`}>
          Opening your book…
        </p>
      </div>
    </div>
  );
}

/* ─── Fullscreen overlay ─── */
function FullscreenView({
  pages,
  title,
  startPage,
  onClose,
}: {
  pages: FlipbookPage[];
  title: string;
  startPage: number;
  onClose: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const flipRef = useRef<PageFlip | null>(null);
  const [currentPage, setCurrentPage] = useState(startPage);
  const [totalPages, setTotalPages] = useState(pages.length);
  const [ready, setReady] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") flipRef.current?.flipPrev();
      if (e.key === "ArrowRight") flipRef.current?.flipNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const initFullscreen = useCallback(async () => {
    if (!containerRef.current || flipRef.current) return;

    const mod = await import("page-flip");
    const PF = mod.PageFlip;

    const pageFlip = new PF(containerRef.current, {
      width: 800,
      height: 800,
      size: "stretch" as const,
      minWidth: 300,
      maxWidth: 1000,
      minHeight: 300,
      maxHeight: 1000,
      showCover: true,
      maxShadowOpacity: 0.5,
      mobileScrollSupport: false,
      useMouseEvents: true,
      flippingTime: 700,
      usePortrait: true,
      startZIndex: 0,
      autoSize: true,
      drawShadow: true,
      showPageCorners: true,
      disableFlipByClick: false,
      swipeDistance: 30,
      clickEventForward: true,
      startPage,
    });

    const imagePaths = pages.map((p) => p.src);
    pageFlip.loadFromImages(imagePaths);

    pageFlip.on("flip", (e) => setCurrentPage(e.data as number));
    pageFlip.on("changeOrientation", (e) => setIsPortrait((e.data as string) === "portrait"));
    pageFlip.on("init", (e) => {
      const d = e.data as { page: number; mode: string };
      setIsPortrait(d.mode === "portrait");
      setTotalPages(pageFlip.getPageCount());
      setReady(true);
    });

    flipRef.current = pageFlip;
  }, [pages, startPage]);

  useEffect(() => {
    initFullscreen();
    return () => {
      if (flipRef.current) {
        try { flipRef.current.destroy(); } catch { /* */ }
        flipRef.current = null;
      }
    };
  }, [initFullscreen]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — full screen reader`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ocean-950/95 backdrop-blur-sm" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close full screen"
        className="absolute top-4 right-4 z-10 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-white/80
          hover:bg-white/20 hover:text-white transition-all duration-200"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <span className="text-sm font-medium hidden sm:inline">Close</span>
      </button>

      {/* Title */}
      <div className="relative z-10 text-center mb-4 px-4">
        <h2
          className="text-lg sm:text-xl font-bold text-white/90"
          style={{ fontFamily: "'Quicksand', system-ui, sans-serif" }}
        >
          {title}
        </h2>
      </div>

      {/* Book — takes up most of the screen */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center px-4 sm:px-8 md:px-16 pb-2 min-h-0">
        <div className="relative w-full h-full max-w-[2000px] max-h-[85vh] flex items-center justify-center">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.4)]">
            <div ref={containerRef} className="w-full h-full" />
            {!ready && <LoadingOverlay light />}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="relative z-10 py-3 flex flex-col items-center gap-2">
        <BookControls
          currentPage={currentPage}
          totalPages={totalPages}
          isPortrait={isPortrait}
          ready={ready}
          onPrev={() => flipRef.current?.flipPrev()}
          onNext={() => flipRef.current?.flipNext()}
          light
        />
        <p className="text-xs text-white/30 select-none">
          <span className="hidden sm:inline">Press Esc to close · Arrow keys to navigate</span>
          <span className="sm:hidden">Swipe to turn pages · Tap X to close</span>
        </p>
      </div>
    </div>
  );
}

/* ─── Main FlipBook component ─── */
export default function FlipBook({ pages, title }: FlipBookProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const flipRef = useRef<PageFlip | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(pages.length);
  const [ready, setReady] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

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

    pageFlip.on("flip", (e) => setCurrentPage(e.data as number));
    pageFlip.on("changeOrientation", (e) => setIsPortrait((e.data as string) === "portrait"));
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
        try { flipRef.current.destroy(); } catch { /* */ }
        flipRef.current = null;
      }
    };
  }, [initBook]);

  return (
    <>
      <div className="flex flex-col items-center gap-6 w-full">
        {/* Book container */}
        <div className="relative w-full max-w-[1200px] mx-auto">
          <div className="absolute inset-0 -inset-x-8 -inset-y-8 bg-gradient-to-br from-teal-400/8 via-aqua-400/5 to-ocean-400/8 rounded-[3rem] blur-2xl pointer-events-none" />

          <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_60px_rgba(14,116,144,0.15),0_2px_20px_rgba(0,0,0,0.08)]">
            <div ref={containerRef} className="w-full" />
            {!ready && <LoadingOverlay />}
          </div>
        </div>

        {/* Controls row */}
        <div className="flex items-center gap-3">
          <BookControls
            currentPage={currentPage}
            totalPages={totalPages}
            isPortrait={isPortrait}
            ready={ready}
            onPrev={() => flipRef.current?.flipPrev()}
            onNext={() => flipRef.current?.flipNext()}
          />

          {/* Fullscreen toggle */}
          <button
            onClick={() => setFullscreen(true)}
            disabled={!ready}
            aria-label="Open full screen reader"
            title="Full screen"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/80 border border-teal-200/60 text-ocean-600 shadow-sm
              hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700 hover:shadow-md
              disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
            </svg>
          </button>
        </div>

        {/* Hint */}
        <p className="text-xs text-ocean-400 text-center select-none">
          <span className="hidden sm:inline">Click the page edges or drag to turn pages · Click
            <button onClick={() => setFullscreen(true)} className="underline hover:text-ocean-600 transition-colors mx-1">
              full screen
            </button>
            for easier reading</span>
          <span className="sm:hidden">Swipe to turn pages · Tap
            <button onClick={() => setFullscreen(true)} className="underline mx-1">
              full screen
            </button>
            to zoom in</span>
        </p>

        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {ready && `Now viewing page ${currentPage + 1} of ${totalPages} of ${title}`}
        </div>
      </div>

      {/* Fullscreen overlay */}
      {fullscreen && (
        <FullscreenView
          pages={pages}
          title={title}
          startPage={currentPage}
          onClose={() => setFullscreen(false)}
        />
      )}
    </>
  );
}
