import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { navigationItems } from '../data';

interface NavbarProps {
  isLightMode: boolean;
  toggleTheme: () => void;
  cvUrl?: string;
}

export default function Navbar({ isLightMode, toggleTheme, cvUrl = '#' }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection to add physical glass highlight or blur size
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section intersection detection
      const sections = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold for active indicator
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Custom CV download trigger with direct simulated download
  const triggerCvDownload = () => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Mishkat_Zaman_Radid_CV.pdf');
    // We can also create a mock PDF blob to make sure downloading actually triggers a file download!
    const jsonString = `Mishkat Zaman Radid CV\nUI/UX Designer & Technologist\nEmail: mishkat.zaman.one@gmail.com\nWhatsApp: +8801862256865`;
    const blob = new Blob([jsonString], { type: 'text/plain' });
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? isLightMode
            ? 'py-3 bg-white/70 shadow-sm border-b border-gray-200/50 backdrop-blur-xl'
            : 'py-3 bg-cyber-bg/75 shadow-lg border-b border-white/5 backdrop-blur-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Title */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-1"
        >
          <span className="font-display text-xl font-bold tracking-tight">
            Radid
            <span className="text-brand-cyan font-extrabold group-hover:animate-pulse">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? isLightMode
                      ? 'text-brand-blue font-semibold'
                      : 'text-brand-cyan font-semibold'
                    : isLightMode
                    ? 'text-gray-600 hover:text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}

                {/* Micro active animation dot/bar */}
                {isActive && (
                  <motion.div
                    className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full ${
                      isLightMode ? 'bg-brand-blue' : 'bg-brand-cyan'
                    }`}
                    layoutId="activeIndicator"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Actions (Theme + CV) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Switch Button */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 ${
              isLightMode
                ? 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200 hover:text-black'
                : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:border-brand-cyan/20'
            }`}
            title="Toggle theme mode"
          >
            {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-brand-cyan" />}
          </button>

          {/* CV Button */}
          <button
            onClick={triggerCvDownload}
            className={`relative group px-5 py-2.5 flex items-center gap-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 overflow-hidden ${
              isLightMode
                ? 'bg-black text-white hover:bg-neutral-800 hover:shadow-md'
                : 'bg-neutral-900 border border-brand-cyan/20 text-white hover:shadow-lg hover:shadow-brand-cyan/15 hover:border-brand-cyan/40 hover:-translate-y-[2px]'
            }`}
          >
            {/* Shimmer overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
            <span>Download CV</span>
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-[1px]" />
          </button>
        </div>

        {/* Mobile controls: Burger, Theme, Download */}
        <div className="flex md:hidden items-center gap-2">
          {/* Compact Theme Trigger */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-colors ${
              isLightMode
                ? 'bg-gray-100 border-gray-200 text-gray-700'
                : 'bg-white/5 border-white/5 text-gray-400'
            }`}
          >
            {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-brand-cyan" />}
          </button>

          {/* Menu Toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border transition-colors ${
              isLightMode
                ? 'bg-gray-100 border-gray-200 text-gray-900'
                : 'bg-white/5 border-white/5 text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Slide down Custom Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={`fixed top-[60px] left-0 right-0 bottom-0 z-40 flex flex-col p-6 backdrop-blur-2xl transition-colors ${
              isLightMode ? 'bg-white/95 text-black' : 'bg-cyber-bg/95 text-white'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-4 mt-6">
              {navigationItems.map((item, index) => {
                const isActive = activeSection === item.name;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`text-lg font-semibold tracking-wide py-1.5 border-b rounded-md border-neutral-500/10 ${
                      isActive ? 'text-brand-cyan font-bold pl-2' : ''
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-auto mb-10 flex flex-col gap-4">
              <button
                onClick={triggerCvDownload}
                className="w-full justify-center py-3.5 flex items-center gap-2 rounded-xl text-md font-bold tracking-wide bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-lg shadow-brand-cyan/15 hover:shadow-brand-cyan/25"
              >
                <span>Download CV Dossier</span>
                <Download className="w-5 h-5 animate-pulse" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
