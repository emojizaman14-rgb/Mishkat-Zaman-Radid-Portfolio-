import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { statsData } from '../data';

export default function Stats({ isLightMode }: { isLightMode: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10% 0px' });

  return (
    <section ref={containerRef} className="py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`rounded-2xl transition-all duration-500 overflow-hidden ${
            isLightMode
              ? 'bg-white shadow-sm border border-gray-100'
              : 'glass-panel border-white/5 shadow-2xl'
          }`}
        >
          {/* Bento-style grid with horizontal and vertical dividers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-neutral-800/10 dark:divide-white/5 py-8 md:py-10">
            {statsData.map((stat, idx) => (
              <StatItem key={idx} stat={stat} isInView={isInView} isLightMode={isLightMode} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  isInView,
  isLightMode
}: {
  key?: any;
  stat: any;
  isInView: boolean;
  isLightMode: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1500; // 1.5 seconds counted duration
    const targetValue = stat.value;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out circle expression
      const easeValue = Math.sqrt(1 - Math.pow(percentage - 1, 2));
      setCount(Math.floor(easeValue * targetValue));

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, stat.value]);

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center group">
      {/* Absolute faint backing shape */}
      <div className="absolute w-12 h-12 rounded-full bg-brand-cyan/2 blur-lg pointer-events-none group-hover:scale-150 transition-transform duration-500" />
      
      <div className="flex items-baseline justify-center mb-1">
        <span className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-cyan to-brand-blue transform group-hover:scale-105 transition-transform duration-300">
          {count}
        </span>
        <span className="text-xl sm:text-2xl font-bold text-brand-cyan ml-0.5">
          {stat.suffix}
        </span>
      </div>

      <p
        className={`text-xs uppercase font-mono tracking-widest font-semibold ${
          isLightMode ? 'text-gray-500' : 'text-neutral-400'
        }`}
      >
        {stat.label}
      </p>
    </div>
  );
}
