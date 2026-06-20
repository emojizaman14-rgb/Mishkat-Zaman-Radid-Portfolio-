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
                {/* Custom Elegant Graphic Pattern in place of Unsplash stock images */}
                <div className={`w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6 select-none ${
                  isLightMode 
                    ? 'bg-gradient-to-br from-neutral-50 via-white to-neutral-100' 
                    : 'bg-gradient-to-br from-neutral-950 via-[#0a0f1d] to-[#040814]'
                }`}>
                  {/* Glowing ambient radial light block */}
                  <div className={`absolute w-36 h-36 rounded-full blur-[60px] opacity-35 pointer-events-none ${
                    project.category === 'Design' 
                      ? 'bg-purple-600' 
                      : project.category === 'Robotics' 
                      ? 'bg-brand-cyan' 
                      : 'bg-brand-blue'
                  }`} />

                  {/* Tech Grid Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

                  {/* Specific Creative Graphics Pattern per category */}
                  {project.category === 'Design' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.14] scale-90">
                      {/* Technical wireframe layout circles and crosshairs */}
                      <div className="w-48 h-48 rounded-full border border-dashed border-purple-400 flex items-center justify-center animate-[spin_55s_linear_infinite]">
                        <div className="w-32 h-32 rounded-full border border-dashed border-purple-400/60 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full border border-purple-400/40" />
                        </div>
                      </div>
                      <div className="absolute w-52 h-[1px] bg-purple-400" />
                      <div className="absolute h-52 w-[1px] bg-purple-400" />
                    </div>
                  )}

                  {project.category === 'Robotics' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.16] scale-95">
                      {/* Tech mechanical radar coordinate grids */}
                      <div className="w-40 h-40 rounded-full border-2 border-brand-cyan/30 p-4 flex items-center justify-center">
                        <div className="w-full h-full border border-dashed border-brand-cyan/60 rounded-full animate-[spin_30s_linear_infinite]" />
                      </div>
                      <div className="absolute w-8 h-8 border border-brand-cyan/50 rounded-md" />
                      <div className="absolute w-[2px] h-[2px] rounded-full bg-brand-cyan animate-ping" />
                      <div className="absolute -top-2 w-4 h-4 border-l border-t border-brand-cyan/60" />
                      <div className="absolute -bottom-2 w-4 h-4 border-r border-b border-brand-cyan/60" />
                    </div>
                  )}

                  {project.category === 'Code' && (
                    <div className="absolute inset-0 p-6 flex flex-col justify-start pointer-events-none opacity-[0.22] text-left font-mono text-[9px] text-brand-blue overflow-hidden leading-snug">
                      <div className="text-purple-400">{'import { Component } from "react";'}</div>
                      <div className="text-gray-400">{'// Auto-compiled build module'}</div>
                      <div className="mt-1">{'const AppState = {'}</div>
                      <div className="pl-3 text-brand-cyan">{'title: "' + project.title.split(' ')[0] + '",'}</div>
                      <div className="pl-3">{'completed: true,'}</div>
                      <div className="pl-3">{'performance: "99.8%",'}</div>
                      <div className="pl-3 text-purple-400">{'render: () => "neon"'}</div>
                      <div>{'};'}</div>
                    </div>
                  )}

                  {/* Core Icon represents category */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center relative z-10 mb-4 shadow-lg transition-transform duration-500 group-hover:scale-110 ${
                    isLightMode 
                      ? 'bg-neutral-100 text-neutral-800' 
                      : 'bg-neutral-900 border border-white/5 text-white'
                  }`}>
                    {project.category === 'Design' && <Layers className="w-8 h-8 text-purple-400" />}
                    {project.category === 'Robotics' && <Cpu className="w-8 h-8 text-brand-cyan" />}
                    {project.category === 'Code' && <Code className="w-8 h-8 text-brand-blue" />}
                  </div>

                  {/* Preview details inside normal card view so users know what it is before hover */}
                  <div className="text-center relative z-10 max-w-[85%] mt-1">
                    <span className={`block text-[10px] uppercase font-mono font-bold tracking-widest mb-1.5 ${
                      project.category === 'Design'
                        ? 'text-purple-400'
                        : project.category === 'Robotics'
                        ? 'text-brand-cyan'
                        : 'text-brand-blue'
                    }`}>
                      {project.category}
                    </span>
                    <h4 className={`font-display font-bold text-base line-clamp-1 ${
                      isLightMode ? 'text-neutral-800' : 'text-neutral-200'
                    }`}>
                      {project.title}
                    </h4>
                  </div>
                  
                  {/* Absolute subtle category badge */}
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
