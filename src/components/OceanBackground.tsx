"use client";

export default function OceanBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50/30 via-white to-ocean-50/20" />

      {/* Soft radial glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-teal-200/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-aqua-200/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[500px] bg-ocean-200/8 rounded-full blur-3xl" />

      {/* Floating bubbles */}
      <div className="absolute w-2 h-2 rounded-full bg-teal-300/20 top-[20%] left-[10%] animate-float" />
      <div className="absolute w-3 h-3 rounded-full bg-aqua-300/15 top-[40%] right-[15%] animate-float-slow" />
      <div className="absolute w-1.5 h-1.5 rounded-full bg-teal-400/15 top-[60%] left-[60%] animate-float-delay" />
      <div className="absolute w-2.5 h-2.5 rounded-full bg-ocean-300/10 top-[75%] left-[25%] animate-float-slow" />
      <div className="absolute w-2 h-2 rounded-full bg-teal-300/12 top-[85%] right-[35%] animate-float" />
    </div>
  );
}
