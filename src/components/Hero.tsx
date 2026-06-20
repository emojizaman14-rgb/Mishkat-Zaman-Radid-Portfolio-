import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Phone, Compass, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data';

const profilePic = "/src/assets/images/ayanokoji_portrait_1781891653182.jpg";

interface HeroProps {
  isLightMode: boolean;
  onHireClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ isLightMode, onHireClick, onContactClick }: HeroProps) {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = personalInfo.typedRoles;

  // Typing animation cycle
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const currentFullText = roles[roleIndex];
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(100); // normal typing speed

        if (displayText === currentFullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(50); // faster deleting

        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12 overflow-hidden"
    >
      {/* Absolute Decorative Grid Elements for layout reference */}
      <div className="absolute inset-0 z-0 flex items-center justify-center mix-blend-screen pointer-events-none opacity-20">
        <div className="w-[1200px] h-[1200px] rounded-full border border-neutral-500/5 flex items-center justify-center">
          <div className="w-[800px] h-[800px] rounded-full border border-neutral-500/5 flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full border border-neutral-500/10" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* LEFT SIDE: Large Circular Profile Image & Floating Elements */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] flex items-center justify-center">
            
            {/* Spinning/Animating Cyber Rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dashed border-brand-cyan/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />
            
            <motion.div
              className="absolute -inset-4 rounded-full border border-brand-blue/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />

            {/* Glowing neon ring breathing helper path */}
            <div className="absolute inset-2 rounded-full border-2 border-brand-cyan shadow-[0_0_15px_rgba(0,240,255,0.4)] animate-neon-glow" />

            {/* 3D-feeling glass backplane card */}
            <div className="absolute inset-4 rounded-full bg-cyber-deep/80 backdrop-blur-md" />

            {/* Floating blobs surrounding */}
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-tr from-brand-cyan to-brand-blue rounded-full blur-md opacity-70"
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600/30 rounded-full blur-lg"
              animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Static Grid overlay background */}
            <div className="absolute inset-4 rounded-full bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,7,18,0.9))] overflow-hidden z-10">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(0,240,255,0.06)_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            {/* The actual Avatar Image container */}
            <motion.div
              className="absolute inset-5 rounded-full overflow-hidden z-20 border border-white/10 group shadow-[0_20px_50px_rgba(3,7,18,0.6)]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={profilePic}
                alt={personalInfo.name}
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE: Personal Brand text details */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 justify-center lg:justify-start mb-4"
          >
            <span className="h-[1px] w-6 bg-brand-cyan" />
            <span className="font-mono text-sm uppercase tracking-widest text-brand-cyan font-bold">
              Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-xl sm:text-2xl md:text-3xl font-medium mb-6 flex flex-wrap gap-x-2 items-center justify-center lg:justify-start"
          >
            <span className={isLightMode ? 'text-gray-600' : 'text-gray-400'}>
              And I'm a
            </span>
            <span className="text-brand-cyan font-semibold relative text-glow inline-block">
              {displayText}
              <span className="animate-[pulse_1s_infinite] font-extralight select-none">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className={`text-md max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed ${
              isLightMode ? 'text-gray-700' : 'text-gray-400'
            }`}
          >
            A passionate UI/UX Designer specialized in creating premium, high-end visual systems and responsive interfaces, currently exploring the intersection of <span className="font-semibold text-white">Robotics</span> & <span className="font-semibold text-white">Programming</span> to spark interactive innovation.
          </motion.p>

          {/* Social Links with hover scale and neon glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-3 justify-center lg:justify-start mb-8"
          >
            {[
              { icon: <Facebook className="w-4 h-4" />, url: personalInfo.socials.facebook, label: 'Facebook' },
              { icon: <Instagram className="w-4 h-4" />, url: personalInfo.socials.instagram, label: 'Instagram' },
              { icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true"><path d="M12 0C5.372 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.775 2.169 2.13 0 3.769-2.247 3.769-5.491 0-2.871-2.063-4.878-5.01-4.878-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.628 0 12-5.372 12-12S18.628 0 12 0z"/></svg>, url: personalInfo.socials.pinterest, label: 'Pinterest' },
              { icon: <Phone className="w-4 h-4" />, url: personalInfo.socials.whatsapp, label: 'WhatsApp' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                  isLightMode
                    ? 'bg-neutral-100 border border-gray-200 text-gray-700 hover:bg-black hover:text-white hover:shadow-md'
                    : 'bg-white/5 border border-white/5 text-gray-400 hover:bg-brand-cyan/15 hover:text-brand-cyan hover:border-brand-cyan/40 hover:shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                }`}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* Action Call to Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            {/* Hire Me Interactive Trigger */}
            <button
              onClick={onHireClick}
              className="relative group px-8 py-3.5 flex items-center justify-center gap-2 rounded-xl text-md font-bold tracking-wider overflow-hidden bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/35 hover:-translate-y-[2px] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span>Hire Me Now</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Contact Me Trigger */}
            <button
              onClick={onContactClick}
              className={`px-8 py-3.5 flex items-center justify-center gap-2 rounded-xl text-md font-bold tracking-wider transition-all duration-300 hover:-translate-y-[2px] ${
                isLightMode
                  ? 'bg-neutral-100 border border-gray-200 hover:bg-neutral-200 text-gray-900'
                  : 'bg-neutral-900 border border-brand-cyan/15 hover:border-brand-cyan/30 text-white hover:bg-neutral-950 hover:shadow-md'
              }`}
            >
              <span>Contact Me</span>
              <Compass className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
