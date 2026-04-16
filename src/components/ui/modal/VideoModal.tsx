"use client";

interface Props {
  videoId: string | null;
  onClose: () => void;
}

export default function VideoModal({ videoId, onClose }: Props) {
  if (!videoId) return null;

  return (
    <div className=" group fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <button
        onClick={onClose}
        className="absolute  top-52 right-2 md:top-22 md:right-68 text-white text-3xl hover:text-brand-accent hover:cursor-pointer " >
        ✕
      </button>

      <div className="w-[90%] md:w-[70%] lg:w-[60%] aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}