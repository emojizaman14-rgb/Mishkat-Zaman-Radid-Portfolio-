import { motion } from 'motion/react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer({ isLightMode }: { isLightMode: boolean }) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative py-12 border-t overflow-hidden ${
        isLightMode
          ? 'bg-neutral-50 border-gray-200 text-gray-700'
          : 'bg-[#02050e] border-white/5 text-gray-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left copyright and credits */}
        <div className="flex flex-col text-center md:text-left gap-1">
          <p className="text-sm font-semibold text-white">
            © {new Date().getFullYear()} Mishkat Zaman Radid. All Rights Reserved.
          </p>
          <p className="text-xs text-neutral-500 font-mono">
            ENGINEERED WITH PASSION IN React & Tailwind CSS
          </p>
        </div>

        {/* Right side: Made with love & scroll top */}
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono flex items-center gap-1.5 gray-500">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> & Code
          </span>

          {/* Scoll to top trigger */}
          <button
            onClick={handleScrollTop}
            className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
              isLightMode
                ? 'bg-white border-neutral-200 hover:bg-neutral-100 text-gray-900'
                : 'bg-white/5 border-white/5 hover:bg-brand-cyan/20 hover:text-brand-cyan hover:border-brand-cyan/30 text-white'
            }`}
            title="Go to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
