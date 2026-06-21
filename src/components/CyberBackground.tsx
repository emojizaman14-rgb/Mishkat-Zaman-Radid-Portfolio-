import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

interface RainDrop {
  x: number;
  y: number;
  len: number;
  speed: number;
  opacity: number;
  width: number;
}

interface Spark {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  pulseSpeed: number;
  pulseTime: number;
}

interface BoltNode {
  x: number;
  y: number;
}

export default function CyberBackground() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const { scrollYProgress } = useScroll();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Spawn optimized high-visibility raindrops with depth categories (3D Parallax system)
    const dropCount = Math.floor(Math.min(window.innerWidth / 8, 120));
    const drops: RainDrop[] = [];
    for (let i = 0; i < dropCount; i++) {
      const isForeground = Math.random() < 0.4; // 40% are foreground drops
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        len: isForeground ? Math.random() * 16 + 22 : Math.random() * 10 + 10,
        speed: isForeground ? Math.random() * 6 + 18 : Math.random() * 6 + 11,
        opacity: isForeground ? Math.random() * 0.24 + 0.22 : Math.random() * 0.14 + 0.10,
        width: isForeground ? Math.random() * 0.6 + 1.3 : Math.random() * 0.4 + 0.7,
      });
    }

    // Spawn beautiful interactive rising Sparks (Up to 80 embers for rich visuals)
    const sparkCount = Math.min(Math.floor(window.innerWidth / 11), 80);
    const sparks: Spark[] = [];
    const colors = [
      'rgba(0, 240, 255, ', // Neon cyan
      'rgba(147, 51, 234, ', // Violet/Purple
      'rgba(234, 179, 8, ',  // Golden amber
      'rgba(100, 255, 218, ' // Teal mint
    ];

    for (let i = 0; i < sparkCount; i++) {
      sparks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.2 + 1.2, // Slightly larger embers (1.2px - 3.4px)
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: -(Math.random() * 1.4 + 0.5), // Drift upwards at a clean pace
        opacity: Math.random() * 0.45 + 0.35, // Brighter base opacity (35% to 80%)
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.04 + 0.02,
        pulseTime: Math.random() * Math.PI
      });
    }

    // Lightning variables
    let flashAlpha = 0;
    let flashActive = false;
    let boltPaths: BoltNode[][] = [];
    let strikeCount = 0;
    let framesUntilNextStrike = 40; // Approx 40-42 frames for 0.7 second recurrence at 60fps
    let lightningJitterX = 0;
    let lightningJitterY = 0;

    const generateLightningBolt = (startX: number, startY: number, angleMode: number): BoltNode[] => {
      const path: BoltNode[] = [{ x: startX, y: startY }];
      let currentX = startX;
      let currentY = startY;
      const step = 20;

      let stepsCount = 0;
      while (currentY < canvas.height && currentX >= -50 && currentX <= canvas.width + 50 && stepsCount < 45) {
        stepsCount++;
        let dy = Math.random() * step + 8;
        let dx = (Math.random() - 0.5) * 36;

        if (angleMode === 1) { // Left to Right-Down偏向
          dx = Math.random() * step + 6;
        } else if (angleMode === 2) { // Right to Left-Down偏向
          dx = -(Math.random() * step + 6);
        }

        currentY += dy;
        currentX += dx;
        path.push({ x: currentX, y: currentY });

        // High realistic branching probability
        if (Math.random() < 0.08 && currentY < canvas.height * 0.6) {
          const branchPath = [{ x: currentX, y: currentY }];
          let bX = currentX;
          let bY = currentY;
          let bSteps = 0;
          while (bY < canvas.height && bX >= -10 && bX <= canvas.width + 10 && bSteps < 20) {
            bSteps++;
            let bDy = Math.random() * step + 12;
            let bDx = (Math.random() - 0.5) * 40;
            if (angleMode === 1) bDx = Math.random() * step + 8;
            else if (angleMode === 2) bDx = -(Math.random() * step + 8);

            bY += bDy;
            bX += bDx;
            branchPath.push({ x: bX, y: bY });
          }
          boltPaths.push(branchPath);
        }
      }
      return path;
    };

    const triggerLightningStrike = () => {
      flashActive = true;
      flashAlpha = 1.0;
      strikeCount = Math.random() < 0.45 ? 2 : 1; // Real double power flashes
      boltPaths = [];

      // Determine randomized start location (Modes: 0=Top, 1=Left border, 2=Right border)
      const angleMode = Math.floor(Math.random() * 3);
      let startX = 0;
      let startY = 0;

      if (angleMode === 0) {
        startX = Math.random() * canvas.width;
        startY = 0;
      } else if (angleMode === 1) {
        startX = 0;
        startY = Math.random() * (canvas.height * 0.35);
      } else {
        startX = canvas.width;
        startY = Math.random() * (canvas.height * 0.35);
      }

      boltPaths.push(generateLightningBolt(startX, startY, angleMode));
    };

    const updateAndDraw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- 1. UPDATE & DRAW CONTINUOUS NEON SPARKS (Always running) ---
      sparks.forEach((spark) => {
        spark.pulseTime += spark.pulseSpeed;
        const currentOpacity = spark.opacity * (0.6 + Math.sin(spark.pulseTime) * 0.4);
        
        ctx.beginPath();
        // Inner core
        ctx.fillStyle = `${spark.color}${currentOpacity})`;
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        ctx.fill();

        // Soft outer spark glow using cheap radial gradient or small layered stroke
        ctx.beginPath();
        ctx.fillStyle = `${spark.color}${currentOpacity * 0.35})`;
        ctx.arc(spark.x, spark.y, spark.size * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Update Position
        spark.x += spark.speedX;
        spark.y += spark.speedY;

        // Reset spark when it floats off current top screen
        if (spark.y < -10) {
          spark.y = canvas.height + 10;
          spark.x = Math.random() * canvas.width;
          spark.opacity = Math.random() * 0.45 + 0.35;
          spark.size = Math.random() * 2.2 + 1.2;
        }
        // Reset if drifted too far left or right
        if (spark.x < -10 || spark.x > canvas.width + 10) {
          spark.x = Math.random() * canvas.width;
        }
      });

      // --- 2. UPDATE & DRAW OPTIMIZED HIGH-VISIBILITY RAINDROPS ---
      ctx.lineCap = 'round';

      drops.forEach((drop) => {
        ctx.beginPath();
        ctx.lineWidth = drop.width;
        ctx.strokeStyle = `rgba(0, 240, 255, ${drop.opacity})`;
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - drop.speed * 0.04, drop.y + drop.len); // Elegant natural wind slant
        ctx.stroke();

        // Update position
        drop.y += drop.speed;
        drop.x -= drop.speed * 0.04;

        // Reset drop if offscreen
        if (drop.y > canvas.height) {
          drop.y = -drop.len;
          drop.x = Math.random() * canvas.width;
        } else if (drop.x < -20) {
          drop.x = canvas.width + 20;
          drop.y = Math.random() * canvas.height * 0.6;
        }
      });

      // --- 3. HIGH-PERFORMANCE LIGHTNING ---
      if (flashActive) {
        // High frequency vibration/shimmy offsets ("কাপবে")
        lightningJitterX = (Math.random() - 0.5) * 16;
        lightningJitterY = (Math.random() - 0.5) * 12;

        if (flashAlpha > 0) {
          flashAlpha -= 0.12; // Rapid fade out for lightning fast snaps ("দ্রুত হারিয়ে যাবে")
        } else {
          strikeCount--;
          if (strikeCount > 0) {
            flashAlpha = 0.9;
            const angleMode = Math.floor(Math.random() * 3);
            let startX = 0;
            let startY = 0;
            if (angleMode === 0) {
              startX = Math.random() * canvas.width;
              startY = 0;
            } else if (angleMode === 1) {
              startX = 0;
              startY = Math.random() * (canvas.height * 0.35);
            } else {
              startX = canvas.width;
              startY = Math.random() * (canvas.height * 0.35);
            }
            boltPaths.push(generateLightningBolt(startX, startY, angleMode));
          } else {
            flashActive = false;
            boltPaths = [];
          }
        }

        // Ambient sky flash glow (drawn at higher opacity overlaying content)
        if (flashAlpha > 0) {
          ctx.fillStyle = `rgba(180, 245, 255, ${flashAlpha * 0.16})`;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Draw lightning bolts with high-performance multi-stroke + VIBRATIVE JITTER
        boltPaths.forEach((path) => {
          if (path.length > 1) {
            ctx.beginPath();
            ctx.moveTo(path[0].x + lightningJitterX, path[0].y + lightningJitterY);
            for (let i = 1; i < path.length; i++) {
              ctx.lineTo(path[i].x + lightningJitterX, path[i].y + lightningJitterY);
            }

            // High performance glow layers (Draw several fast strokes at different width/opacity)
            // Outer soft aura
            ctx.strokeStyle = `rgba(0, 240, 255, ${flashAlpha * 0.45})`;
            ctx.lineWidth = 14.0;
            ctx.stroke();

            // Middle glow branch
            ctx.strokeStyle = `rgba(0, 240, 255, ${flashAlpha * 0.8})`;
            ctx.lineWidth = 6.0;
            ctx.stroke();

            // White Inner blazing core
            ctx.strokeStyle = `rgba(255, 255, 255, ${flashAlpha})`;
            ctx.lineWidth = 1.6;
            ctx.stroke();
          }
        });
      } else {
        // Precise countdown triggering strikes approximately every 0.7 seconds (40 to 45 frames)
        framesUntilNextStrike--;
        if (framesUntilNextStrike <= 0) {
          triggerLightningStrike();
          // Reset countdown to target ~0.7 seconds range (38 to 44 frames)
          framesUntilNextStrike = 38 + Math.floor(Math.random() * 8);
        }
      }

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    updateAndDraw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* 2D Hardware-Accelerated Blob Animation Keyframes */}
      <style>{`
        @keyframes floatBlob1 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          33% { transform: translate3d(40px, -20px, 0) scale(1.08); }
          66% { transform: translate3d(-20px, 40px, 0) scale(0.95); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes floatBlob2 {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-30px, 50px, 0) scale(0.9); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes floatBlob3 {
          0% { transform: translate3d(0, 0, 0) ; }
          50% { transform: translate3d(20px, -30px, 0) ; }
          100% { transform: translate3d(0, 0, 0) ; }
        }
        .hardware-gpu {
          will-change: transform;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
      `}</style>

      {/* 1. Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan via-brand-blue to-purple-600 z-[9999] origin-left pointer-events-none"
        style={{ scaleX }}
      />

      {/* 2. Interactive Neon Spotlight (Cursor Glow) */}
      <div
        className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500"
        style={{
          background: `radial-gradient(${isHovering ? '380px' : '230px'} circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.05), transparent 80%)`,
        }}
      />
      
      {/* 3. HTML5 Canvas for optimized Rain, Lightning, and Sparks, layered on top of text & images */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[45] w-full h-full"
      />

      {/* 4. Deep Cyber Backdrop */}
      <div className="fixed inset-0 bg-[#030712] -z-40 overflow-hidden">
        {/* Subtle dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px]" />
        
        {/* Horizontal linear scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px)] [background-size:100%_4px]" />

        {/* Ambient Dark-Blue & Violet Gradient Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(2,4,10,0.85))]" />

        {/* 5. Gpu-Accelerated CSS-Floating Cyber Blobs (Smoothly prevents Main-Thread lag) */}
        {/* Blob 1: Cyan, Left-Top */}
        <div
          className="absolute w-[45vw] h-[45vw] rounded-full bg-brand-cyan/8 blur-[120px] top-[-10%] left-[-10%] hardware-gpu"
          style={{ animation: 'floatBlob1 15s infinite ease-in-out' }}
        />

        {/* Blob 2: Deep Blue, Right-Bottom */}
        <div
          className="absolute w-[50vw] h-[50vw] rounded-full bg-brand-blue/6 blur-[150px] bottom-[-15%] right-[-10%] hardware-gpu"
          style={{ animation: 'floatBlob2 18s infinite ease-in-out' }}
        />

        {/* Blob 3: Purple, Center-Left */}
        <div
          className="absolute w-[35vw] h-[35vw] rounded-full bg-purple-600/4 blur-[130px] top-[40%] left-[15%] hardware-gpu"
          style={{ animation: 'floatBlob3 12s infinite ease-in-out' }}
        />
      </div>
    </>
  );
}
