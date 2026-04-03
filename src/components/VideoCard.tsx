import type { Video } from "@/data/videos";

interface VideoCardProps {
  video: Video;
  featured?: boolean;
}

export default function VideoCard({ video, featured = false }: VideoCardProps) {
  const typeLabels: Record<Video["type"], string> = {
    trailer: "Trailer",
    "read-along": "Read Along",
    "behind-the-scenes": "Behind the Scenes",
    promo: "Promo",
  };

  if (featured) {
    return (
      <div className="glass-card rounded-3xl overflow-hidden glow-teal">
        <div className="p-6 md:p-8">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full mb-4">
            {typeLabels[video.type]}
          </span>
          <h3
            className="text-2xl md:text-3xl font-bold text-ocean-800"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {video.title}
          </h3>
          <p className="mt-2 text-ocean-600 leading-relaxed max-w-2xl">
            {video.description}
          </p>
        </div>
        <div className="relative aspect-video bg-ocean-900 mx-6 mb-6 md:mx-8 md:mb-8 rounded-2xl overflow-hidden">
          {/* Replace embedUrl with your actual YouTube/Vimeo embed URL */}
          <iframe
            src={video.embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
          {video.embedUrl.includes("VIDEO_ID_HERE") && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ocean-800 to-ocean-900">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/60 text-sm">Video coming soon</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl group glow-ocean">
      <div className="relative aspect-video bg-ocean-900 overflow-hidden">
        <iframe
          src={video.embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
        {video.embedUrl.includes("VIDEO_ID_HERE") && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ocean-800 to-ocean-900">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/50 text-xs">Video coming soon</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <span className="inline-block px-2 py-0.5 bg-ocean-50 text-ocean-600 text-[10px] font-semibold rounded-full uppercase tracking-wider">
          {typeLabels[video.type]}
        </span>
        <h3
          className="text-lg font-bold text-ocean-800 mt-2 leading-snug"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {video.title}
        </h3>
        <p className="mt-2 text-sm text-ocean-600 leading-relaxed line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  );
}
