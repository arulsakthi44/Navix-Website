// // import { motion } from 'motion/react';
// import { Play } from 'lucide-react';
// import React, { useState, useRef, useEffect } from 'react';

// import contentVideo1 from '../assets/videos/content1.mp4';
// import contentVideo2 from '../assets/videos/content2.mp4';
// import contentVideo3 from '../assets/videos/content3.MP4';
// import contentVideo4 from '../assets/videos/content4.mp4';

// import video1 from '../assets/video1.png';
// import video2 from '../assets/video2.png';
// import video3 from '../assets/video3.png';
// import video4 from '../assets/video4.png';

// const CONTENT_ITEMS = [
//   { id: 1, image: video1, video: contentVideo1 },
//   { id: 2, image: video2, video: contentVideo2 },
//   { id: 3, image: video3, video: contentVideo3 },
//   { id: 4, image: video4, video: contentVideo4 },
// ];

// interface VideoCardProps {
//   item: typeof CONTENT_ITEMS[0];
//   isPlaying: boolean;
//   onPlay: (id: number | null) => void;
// }

// interface VideoModalProps {
//   videoSrc: string | null;
//   onClose: () => void;
// }

// function VideoModal({ videoSrc, onClose }: VideoModalProps) {
//   if (!videoSrc) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
//       <div className="relative w-[400px] h-[500px] bg-black rounded-2xl overflow-hidden">

//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 z-10 bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/30"
//         >
//           ✕
//         </button>

//         <video
//           src={videoSrc}
//           autoPlay
//           controls
//           playsInline
//           webkit-playsinline="true"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }


// function VideoCard({ item, isPlaying, onPlay }: VideoCardProps) {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (isPlaying && videoRef.current) {
//       videoRef.current.muted = false;
//       videoRef.current.play().catch((err: unknown) => {
//         console.error("Video playback failed:", err);
//       });
//     } else if (!isPlaying && videoRef.current) {
//       videoRef.current.pause();
//     }
//   }, [isPlaying]);

//   return (
//     <div
//       className="relative w-full rounded-2xl overflow-hidden cursor-pointer group"
//       style={{ height: '450px', backgroundColor: '#000' }}
//       onClick={() => onPlay(item.id)}
//     >
//       {/* Fallback Text in case video/image fails */}
//       <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl">
//         {item.id}
//       </div>

//       {/* Video Element */}
//       <video
//         ref={videoRef}
//         src={item.video}
//         poster={item.image}
//         controls={isPlaying}
//         playsInline
//         className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-100 z-20" : "opacity-0"
//           }`}
//       />

//       {/* Cover Image & Play Button overlay */}
//       {!isPlaying && (
//         <>
//           <img
//             src={item.image}
//             alt={`Content ${item.id}`}
//             className="absolute inset-0 w-full h-full object-cover z-10"
//             onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//               (e.target as HTMLImageElement).style.display = 'none';
//             }}
//           />
//           <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-black/40 transition-colors" />
//           <div className="absolute inset-0 flex items-center justify-center z-10">
//             <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform">
//               <Play className="w-6 h-6 text-white fill-white" />
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export function ContentCreations() {
//   const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

//   return (
//     <section className="relative py-20">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">

//         {/* Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
//             Our Content Creations
//           </h2>
//           <p className="text-gray-400 text-lg">
//             Engaging short-form content that captures attention and drives results.
//           </p>
//         </div>

//         {/* Video Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {CONTENT_ITEMS.map((item) => (
//             <VideoCard
//               key={item.id}
//               item={item}
//               isPlaying={playingVideoId === item.id}
//               onPlay={setPlayingVideoId}
//             />
//           ))}
//         </div>
//       </div>
//     </section >
//   );
// }

// // import { Play } from 'lucide-react';
// // import React, { useState } from 'react';

// // import contentVideo1 from '../assets/videos/content1.mp4';
// // import contentVideo2 from '../assets/videos/content2.mp4';
// // import contentVideo3 from '../assets/videos/content3.MP4';
// // import contentVideo4 from '../assets/videos/content4.mp4';

// // import video1 from '../assets/video1.png';
// // import video2 from '../assets/video2.png';
// // import video3 from '../assets/video3.png';
// // import video4 from '../assets/video4.png';

// // const CONTENT_ITEMS = [
// //   { id: 1, image: video1, video: contentVideo1 },
// //   { id: 2, image: video2, video: contentVideo2 },
// //   { id: 3, image: video3, video: contentVideo3 },
// //   { id: 4, image: video4, video: contentVideo4 },
// // ];

// // /* ---------------- VIDEO MODAL ---------------- */

// // interface VideoModalProps {
// //   videoSrc: string | null;
// //   onClose: () => void;
// // }

// // function VideoModal({ videoSrc, onClose }: VideoModalProps) {
// //   if (!videoSrc) return null;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
// //       <div className="relative w-[400px] h-[500px] bg-black rounded-2xl overflow-hidden">

// //         {/* Close Button */}
// //         <button
// //           onClick={onClose}
// //           className="absolute top-3 right-3 z-10 bg-white/20 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/30"
// //         >
// //           ✕
// //         </button>

// //         <video
// //           src={videoSrc}
// //           autoPlay
// //           controls
// //           playsInline
// //           webkit-playsinline="true"
// //           className="w-full h-full object-cover"
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // /* ---------------- VIDEO CARD ---------------- */

// // interface VideoCardProps {
// //   item: typeof CONTENT_ITEMS[0];
// //   onPlay: (video: string) => void;
// // }

// // function VideoCard({ item, onPlay }: VideoCardProps) {
// //   return (
// //     <div
// //       className="relative w-full h-[450px] rounded-2xl overflow-hidden cursor-pointer group bg-black"
// //       onClick={() => onPlay(item.video)}
// //     >
// //       {/* Thumbnail */}
// //       <img
// //         src={item.image}
// //         alt={`Content ${item.id}`}
// //         className="absolute inset-0 w-full h-full object-cover z-10"
// //       />

// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-black/40 transition-colors" />

// //       {/* Play Button */}
// //       <div className="absolute inset-0 flex items-center justify-center z-20">
// //         <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform">
// //           <Play className="w-6 h-6 text-white fill-white" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ---------------- MAIN SECTION ---------------- */

// // export function ContentCreations() {
// //   const [activeVideo, setActiveVideo] = useState<string | null>(null);

// //   return (
// //     <section className="relative py-20">
// //       <div className="max-w-7xl mx-auto px-6 lg:px-12">

// //         {/* Title */}
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
// //             Our Content Creations
// //           </h2>
// //           <p className="text-gray-400 text-lg">
// //             Engaging short-form content that captures attention and drives results.
// //           </p>
// //         </div>

// //         {/* Video Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //           {CONTENT_ITEMS.map((item) => (
// //             <VideoCard
// //               key={item.id}
// //               item={item}
// //               onPlay={setActiveVideo}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       {/* Modal */}
// //       <VideoModal
// //         videoSrc={activeVideo}
// //         onClose={() => setActiveVideo(null)}
// //       />
// //     </section>
// //   );
// // }

import { Play, X, Maximize } from "lucide-react";
import { useState } from "react";

const CONTENT_ITEMS = [
  { id: 1, youtubeUrl: "https://youtube.com/shorts/1VrlQ7egRNc" },
  { id: 2, youtubeUrl: "https://youtube.com/shorts/1lVpn3Mczqk" },
  { id: 3, youtubeUrl: "https://youtube.com/shorts/oNm4p4spx1k" },
  { id: 4, youtubeUrl: "https://youtube.com/shorts/FWm1J1PAOqI" },
];

const getYoutubeId = (url: string): string => {
  const match = url.match(/youtube\.com\/shorts\/([^?]+)/);
  return match ? match[1] : '';
};

const convertToEmbedUrl = (url: string): string => {
  const id = getYoutubeId(url);
  return `https://www.youtube.com/embed/${id}?autoplay=1`;
};

const convertToWatchUrl = (url: string): string => {
  const id = getYoutubeId(url);
  return `https://www.youtube.com/watch?v=${id}`;
};

interface VideoModalProps {
  videoUrl: string | null;
  onClose: () => void;
}

function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  if (!videoUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      style={{ animation: 'fadeIn 0.3s ease-out' }}
    >
      <div
        className="bg-zinc-900/95 rounded-xl max-w-md w-full overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'scaleIn 0.3s ease-out' }}
      >
        <div className="relative bg-black" style={{ aspectRatio: '9/16' }}>
          <iframe
            key={videoUrl}
            src={convertToEmbedUrl(videoUrl)}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            title="YouTube video player"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              onClick={() => window.open(convertToWatchUrl(videoUrl), '_blank')}
              className="w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              title="Open in fullscreen"
            >
              <Maximize size={16} />
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              title="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContentCreations() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Creations
            </h2>
            <p className="text-gray-400 text-lg">
              Engaging short-form content that captures attention and drives results.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {CONTENT_ITEMS.map((item) => {
              const thumbId = getYoutubeId(item.youtubeUrl);
              return (
                <div
                  key={item.id}
                  className="relative w-full rounded-2xl overflow-hidden cursor-pointer group bg-black"
                  style={{ aspectRatio: '9/16' }}
                  onClick={() => setActiveVideo(item.youtubeUrl)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${thumbId}/maxresdefault.jpg`}
                    alt={`Content ${item.id}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${thumbId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center" style={{ marginTop: '50px' }}>
            <a
              href="https://www.youtube.com/playlist?list=PLRRIo71rm4A1fQmgCzdMrg-KvDS5z6ek3"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 overflow-visible"
              style={{ backgroundColor: '#FF0000' }}
            >
              {/* Pulsing glow */}
              <span className="absolute inset-0 rounded-full blur-xl opacity-60 animate-pulse" style={{ backgroundColor: '#FF0000' }} />
              <span className="relative flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                See All Creations
              </span>
            </a>
          </div>
        </div>

        <VideoModal
          videoUrl={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      </section>
    </>
  );
}