import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Layers, Code, Cpu, Eye } from 'lucide-react';
import { portfolioData } from '../data';

export default function Portfolio({ isLightMode }: { isLightMode: boolean }) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Design' | 'Code' | 'Robotics'>('All');

  const filteredProjects = portfolioData.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-1/2 left-[-10%] w-96 h-96 bg-brand-cyan/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-mono font-bold tracking-widest text-brand-cyan mb-2"
          >
            My Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Featured Creative Works
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Selector list */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap shadow-md justify-center gap-1.5 p-1 bg-neutral-900/80 border border-white/5 rounded-2xl text-xs sm:text-sm font-mono overflow-hidden">
            {[
              { id: 'All', label: 'All Projects', icon: Eye },
              { id: 'Design', label: 'Design System', icon: Layers },
              { id: 'Code', label: 'Coding / Web', icon: Code },
              { id: 'Robotics', label: 'Robotics', icon: Cpu }
            ].map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-4.5 py-3 flex items-center gap-2 rounded-xl font-bold uppercase transition-all duration-300 tracking-wider ${
                    activeCategory === tab.id
                      ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-lg'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <TabIcon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio gallery matching a clean grid structure */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`relative group rounded-3xl overflow-hidden shadow-2xl border aspect-4/3 transition-all duration-300 ${
                  isLightMode ? 'bg-white border-neutral-100' : 'bg-neutral-950 border-white/5'
                }`}
              >
                {/* Image layout container */}
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Absolute subtle category label bar */}
                  <span className="absolute top-4 left-4 z-20 text-[9px] font-mono tracking-widest font-bold uppercase bg-black/75 backdrop-blur-md text-brand-cyan px-2.5 py-1.5 rounded-lg border border-brand-cyan/20">
                    {project.category}
                  </span>
                </div>

                {/* Translucent premium hover details cover overlay */}
                <div className="absolute inset-0 bg-[#02050d]/90 backdrop-blur-[6px] opacity-0 group-hover:opacity-100 flex flex-col justify-end p-6 md:p-8 transition-opacity duration-300 z-10 pointer-events-none group-hover:pointer-events-auto">
                  
                  {/* Project metadata */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <h3 className="font-display font-medium text-lg sm:text-xl text-white mb-2 text-glow">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags list */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono tracking-wider font-semibold uppercase px-2 py-1 bg-white/5 border border-white/5 text-neutral-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links Buttons */}
                    <div className="flex gap-3">
                      {/* Live Demo */}
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-brand-cyan to-brand-blue text-white rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 hover:shadow-lg hover:shadow-brand-cyan/15 hover:scale-105 transition-all duration-300"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 animate-pulse" />
                      </a>

                      {/* GitHub Link */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-neutral-900 hover:bg-neutral-950 border border-white/10 text-white rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 hover:border-brand-cyan/25 hover:scale-105 transition-all duration-300"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
