import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function CyberBackground() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progress line
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null || 
        target.closest('a') !== null ||
        target.closest('.interactive-card') !== null;
        
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* 1. Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-blue to-purple-600 z-[9999] origin-left pointer-events-none"
        style={{ scaleX }}
      />

      {/* 2. Interactive Neon Spotlight (Cursor Glow) */}
      <div
        className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500"
        style={{
          background: `radial-gradient(${isHovering ? '400px' : '260px'} circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.06), transparent 80%)`,
        }}
      />
      
      {/* 3. Deep Cyber Backdrop */}
      <div className="fixed inset-0 bg-[#030712] -z-40 overflow-hidden">
        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px]" />
        
        {/* Horizontal linear scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px)] [background-size:100%_4px]" />

        {/* Ambient Dark-Blue & Violet Gradient Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(2,4,10,0.85))]" />

        {/* 4. Giant Floating Cyber-Blobs */}
        {/* Blob 1: Cyan, Left-Top */}
        <motion.div
          className="absolute w-[45vw] h-[45vw] rounded-full bg-brand-cyan/8 blur-[120px] top-[-10%] left-[-10%]"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 60, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Blob 2: Deep Blue, Right-Bottom */}
        <motion.div
          className="absolute w-[50vw] h-[50vw] rounded-full bg-brand-blue/6 blur-[150px] bottom-[-15%] right-[-10%]"
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 60, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Blob 3: Purple, Center-Left */}
        <motion.div
          className="absolute w-[35vw] h-[35vw] rounded-full bg-purple-600/4 blur-[130px] top-[40%] left-[15%]"
          animate={{
            x: [0, 30, -50, 0],
            y: [0, 40, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </>
  );
}
