import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export interface ImageData {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  videoUrl?: string;
}

interface CircularGalleryProps {
  images?: ImageData[];
  containerSize?: number;
  className?: string;
}

const CircularGallery: React.FC<CircularGalleryProps> = ({
  images = [],
  containerSize = 800,
  className = ''
}) => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  // Auto-rotation
  useEffect(() => {
    if (!isDragging) {
      const animate = () => {
        setRotation(prev => (prev + 0.2) % 360);
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging]);

  // Circle configuration matching the reference
  const circleConfig = [
    { size: 180, radius: 0, angle: 0 }, // Center large circle
    { size: 110, radius: 220, angle: 0 },
    { size: 90, radius: 220, angle: 72 },
    { size: 90, radius: 220, angle: 144 },
    { size: 90, radius: 220, angle: 216 },
    { size: 90, radius: 220, angle: 288 },
    { size: 60, radius: 280, angle: 36 },
    { size: 60, radius: 280, angle: 108 },
    { size: 60, radius: 280, angle: 180 },
    { size: 60, radius: 280, angle: 252 },
  ];

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastMousePos.current.x;
    setRotation(prev => prev + deltaX * 0.5);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    setIsDragging(true);
    lastMousePos.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - lastMousePos.current.x;
    setRotation(prev => prev + deltaX * 0.5);
    lastMousePos.current = { x: touch.clientX, y: touch.clientY };
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  const getYouTubeVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/shorts\/)([\w-]+)/,
      /(?:youtube\.com\/watch\?v=)([\w-]+)/,
      /(?:youtu\.be\/)([\w-]+)/,
      /(?:youtube\.com\/embed\/)([\w-]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    
    return null;
  };

  const renderModal = () => {
    if (!selectedImage) return null;

    const videoId = selectedImage.videoUrl ? getYouTubeVideoId(selectedImage.videoUrl) : null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={() => setSelectedImage(null)}
        style={{
          animation: 'fadeIn 0.3s ease-out'
        }}
      >
        <div
          className="bg-[#0A0A0A] rounded-xl max-w-2xl w-full overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(74,140,255,0.3)]"
          onClick={(e) => e.stopPropagation()}
          style={{
            animation: 'scaleIn 0.3s ease-out'
          }}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 rounded-full text-white flex items-center justify-center hover:bg-[#4A8CFF] transition-all cursor-pointer border border-white/20"
          >
            <X size={20} />
          </button>

          {videoId ? (
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={selectedImage.title || 'Video'}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative aspect-square">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {(selectedImage.title || selectedImage.description) && (
            <div className="p-6 bg-gradient-to-b from-[#0A0A0A] to-black">
              {selectedImage.title && (
                <h3 className="text-xl text-white mb-2">{selectedImage.title}</h3>
              )}
              {selectedImage.description && (
                <p className="text-gray-400">{selectedImage.description}</p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  if (!images.length) {
    return (
      <div
        className="flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300"
        style={{ width: containerSize, height: containerSize }}
      >
        <div className="text-gray-400 text-center">
          <p>No images provided</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div
        ref={containerRef}
        className={`relative select-none cursor-grab active:cursor-grabbing ${className}`}
        style={{
          width: containerSize,
          height: containerSize,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isDragging ? 'none' : 'transform 0.1s linear',
          }}
        >
          {images.slice(0, 10).map((image, index) => {
            const config = circleConfig[index];
            const angleRad = (config.angle * Math.PI) / 180;
            const x = config.radius * Math.cos(angleRad);
            const y = config.radius * Math.sin(angleRad);
            const isHovered = hoveredIndex === index;
            const isCenterCircle = index === 0;

            return (
              <motion.div
                key={image.id}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: `${x}px`,
                  marginTop: `${y}px`,
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3 + index * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.1,
                }}
              >
                <motion.div
                  className="relative cursor-pointer"
                  style={{
                    width: config.size,
                    height: config.size,
                    transform: `translate(-50%, -50%) rotate(-${rotation}deg)`,
                    transition: isDragging ? 'none' : 'transform 0.1s linear',
                  }}
                  whileHover={{ scale: 1.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4A8CFF]/40 to-purple-500/40 blur-xl"
                    animate={{
                      opacity: isHovered ? 0.8 : 0.3,
                      scale: isHovered ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 bg-white shadow-[0_0_20px_rgba(74,140,255,0.3)]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      draggable={false}
                      style={{
                        transform: 'scale(1.3)',
                      }}
                    />
                  </div>

                  {/* Hover ring */}
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#4A8CFF]"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  {/* Center circle extra glow */}
                  {isCenterCircle && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/30 to-blue-500/30 blur-2xl"
                      animate={{
                        opacity: [0.4, 0.7, 0.4],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {renderModal()}
    </>
  );
};

export default CircularGallery;
