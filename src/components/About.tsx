import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Calendar, Award, BookOpen, GraduationCap, Download, ArrowRight } from 'lucide-react';
import { personalInfo, timelineData } from '../data';

export default function About({ isLightMode, cvUrl = '#' }: { isLightMode: boolean; cvUrl?: string }) {
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'experience'>('all');

  const filteredTimeline = timelineData.filter(
    (item) => activeTab === 'all' || item.type === activeTab
  );

  const triggerCvDownload = () => {
    const link = document.createElement('a');
    const jsonString = `Mishkat Zaman Radid CV\nUI/UX Designer & Technologist\nEmail: mishkat.zaman.one@gmail.com\nWhatsApp: +8801862256865`;
    const blob = new Blob([jsonString], { type: 'text/plain' });
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'Mishkat_Zaman_Radid_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative Blur light */}
      <div className="absolute top-1/3 left-[-10%] w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-mono font-bold tracking-widest text-brand-cyan mb-2"
          >
            Get To Know Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-100 to-neutral-400"
          >
            About My Journey
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT Bento credential tiles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div
              className={`p-6 rounded-2xl relative overflow-hidden transition-all duration-300 ${
                isLightMode ? 'bg-white shadow-sm border border-gray-100' : 'glass-panel text-white'
              }`}
            >
              <h3 className="font-display font-bold text-xl mb-4 text-brand-cyan">Core Profile Data</h3>
              
              <div className="flex flex-col gap-4">
                {/* Email tile */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 ${
                    isLightMode ? 'hover:bg-neutral-50 border border-neutral-100' : 'hover:bg-white/5 border border-white/5'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/15 text-brand-cyan flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-mono text-gray-500 uppercase">Primary Email</p>
                    <p className="text-sm font-medium font-mono truncate">{personalInfo.email}</p>
                  </div>
                </a>

                {/* WhatsApp tile */}
                <a
                  href={`https://wa.me/8801862256865`}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 ${
                    isLightMode ? 'hover:bg-neutral-50 border border-neutral-100' : 'hover:bg-white/5 border border-white/5'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase">WhatsApp Connect</p>
                    <p className="text-sm font-medium font-mono">{personalInfo.whatsapp}</p>
                  </div>
                </a>

                {/* Learning Pursuits */}
                <div
                  className={`flex items-center gap-4 p-3 rounded-xl ${
                    isLightMode ? 'bg-neutral-50 border border-neutral-100' : 'bg-white/5 border border-white/5'
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/15 text-brand-blue flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-400 uppercase">Learning Pursuits</p>
                    <p className="text-sm font-semibold">Robotics & Programming</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats visual design quote mock */}
            <div
              className={`p-6 rounded-2xl relative overflow-hidden ${
                isLightMode ? 'bg-gray-50 border border-gray-100' : 'glass-panel border-white/5'
              }`}
            >
              <div className="absolute top-[-30px] right-[-10px] text-10xl text-brand-cyan/5 font-display select-none select-none pointer-events-none font-bold">
                ”
              </div>
              <p className="font-sans italic leading-relaxed text-sm text-neutral-400 mb-4 relative z-10">
                "Design is not just what it looks like and feels like. Design is how it works. My goal is to synthesize beautiful pixel UI with the physics and logic of code."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-400">
                  Mishkat Zaman Radid
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT Timeline and biography layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Bio summary paragraph */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl">Creative Biography</h3>
              <p className={`text-md leading-relaxed ${isLightMode ? 'text-gray-700' : 'text-neutral-300'}`}>
                {personalInfo.bio}
              </p>
            </div>

            {/* Academic timeline and experiences */}
            <div className="space-y-6">
              {/* Timeline Header and toggle tabs */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-neutral-800/20 dark:border-white/5">
                <h4 className="font-display font-bold text-xl flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-cyan" />
                  Education & Experience History
                </h4>

                <div className="flex gap-1.5 p-1 bg-neutral-900 border border-white/5 rounded-xl text-xs font-mono">
                  {(['all', 'education', 'experience'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 rounded-lg font-semibold tracking-wider uppercase transition-colors duration-200 ${
                        activeTab === tab
                          ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-md'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sequential Timeline nodes */}
              <div className="relative pl-6 border-l border-neutral-800 dark:border-white/5 space-y-8 py-2">
                {filteredTimeline.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="relative"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Glowing junction node */}
                    <div className="absolute left-[-31px] top-1.5 w-4 h-4 rounded-full bg-cyber-bg border-2 border-brand-cyan flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs font-mono font-bold text-brand-cyan mb-1.5 uppercase tracking-wide">
                        {item.period}
                      </span>
                      <h5 className="font-display font-bold text-lg text-white">
                        {item.title}
                      </h5>
                      <span className="text-xs text-brand-blue font-semibold mb-2 block">
                        {item.subtitle}
                      </span>
                      <p className={`text-sm leading-relaxed ${isLightMode ? 'text-gray-600' : 'text-neutral-400'}`}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom CV download trigger */}
            <div className="pt-4 flex justify-start">
              <button
                onClick={triggerCvDownload}
                className="group px-7 py-3 flex items-center gap-3 rounded-xl font-bold tracking-wide text-sm bg-neutral-900 border border-brand-cyan/20 hover:border-brand-cyan/40 hover:shadow-lg hover:shadow-brand-cyan/10 hover:-translate-y-[2px] text-white transition-all duration-300"
              >
                <span>Download CV Document</span>
                <Download className="w-4 h-4 text-brand-cyan group-hover:translate-y-[1px] transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
