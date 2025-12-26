import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AuroraTextEffectProps {
  children: ReactNode;
  className?: string;
}

export function AuroraTextEffect({ children, className = '' }: AuroraTextEffectProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10 bg-gradient-to-r from-yellow-400 via-orange-500 via-[#4A8CFF] to-purple-600 bg-clip-text text-transparent font-bold"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          backgroundSize: '200% 200%',
          fontFamily: '"SouvenirGothic DemiBold", serif',
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}