import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

const logs = [
  'BOOTING DESIGN ENGINE...',
  'INITIALIZING ATOMIC FIGMA TOKENS...',
  'CALIBRATING ROBOTIC ARMATURE CONTROLS...',
  'BUNDLING TAILWIND UTILITIES...',
  'COMPILING OUTSTANDING INTERFACES v19.0...',
  'ESTABLISHING CYBER NETWORKS...'
];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 4600; // 4.6 seconds for loading bar animation

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 400); // Wait remaining 400ms to total exactly 5 seconds (5000ms)
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Cycle log labels
    const tInterval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 700);

    return () => clearInterval(tInterval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#02050e] text-white overflow-hidden p-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Abstract Grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#083b66_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      {/* Center Loader */}
      <div className="relative w-full max-w-md flex flex-col z-10">
        {/* Profile Branding Header */}
        <div className="flex justify-between items-center mb-1 text-xs font-mono text-brand-cyan tracking-widest uppercase">
          <span>MR.RADID // Portfolio</span>
          <span>SYSTEM ONLINE</span>
        </div>

        {/* Loading Progress Frame */}
        <div className="h-[2px] w-full bg-white/5 relative overflow-hidden rounded">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-cyan to-brand-blue"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />

          {/* Neon Pulse Blob Behind */}
          <div className="absolute w-32 h-32 -top-16 left-1/2 -translate-x-1/2 bg-brand-cyan/20 blur-2xl rounded-full animate-pulse pointer-events-none" />
        </div>

        {/* Stat Labels and Details */}
        <div className="flex justify-between items-start mt-4 font-mono">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-500 uppercase tracking-wider">SYSTEM_LOG</span>
            <span className="text-xs text-neutral-300 font-semibold h-4 overflow-hidden truncate max-w-[280px]">
              &gt; {logs[logIndex]}
            </span>
          </div>

          <div className="text-right">
            <span className="text-3xl font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-cyan to-brand-blue">
              {progress}
            </span>
            <span className="text-xs text-brand-cyan font-bold">%</span>
          </div>
        </div>
      </div>

      {/* Cyberpunk Decorative bottom details */}
      <div className="absolute bottom-10 left-10 right-10 flex justify-between text-[10px] font-mono text-gray-600 uppercase tracking-widest pointer-events-none">
        <span>EST 2026</span>
        <span>LATENCY: 14MS</span>
        <span>MISHKAT_ZAMAN_RADID</span>
      </div>
    </motion.div>
  );
}
