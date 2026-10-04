interface VideoModalProps {
  videoSrc: string | null;
  onClose: () => void;
}

function VideoModal({ videoSrc, onClose }: VideoModalProps) {
  if (!videoSrc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-[400px] h-[500px] bg-black rounded-2xl overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/30"
        >
          ✕
        </button>

        <video
          src={videoSrc}
          autoPlay
          controls
          playsInline
          webkit-playsinline="true"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
