import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Compass, Layers, Code2, Code, Wind, Terminal, Cpu, Smartphone, Activity, Box, Palette } from 'lucide-react';
import { skillsData } from '../data';

const iconMap: { [key: string]: any } = {
  Layout: Compass,
  Figma: Layers,
  Html5: Code2,
  Code2: Code,
  Wind: Wind,
  Terminal: Terminal,
  Cpu: Cpu,
  Smartphone: Smartphone,
  Activity: Activity,
  Palette: Palette
};

export default function Skills({ isLightMode }: { isLightMode: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'design' | 'frontend' | 'robotics'>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10% 0px' });

  const filteredSkills = skillsData.filter(
    (skill) => selectedCategory === 'all' || skill.category === selectedCategory
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Decorative Blur Backing */}
      <div className="absolute bottom-1/4 right-[-10%] w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-mono font-bold tracking-widest text-brand-cyan mb-2"
          >
            My Toolbox
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Technical & Artistic Skills
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-neutral-900/80 border border-white/5 rounded-2xl text-xs sm:text-sm font-mono overflow-hidden">
            {[
              { id: 'all', label: 'All Tech' },
              { id: 'design', label: 'UI/UX Design' },
              { id: 'frontend', label: 'Frontend & Code' },
              { id: 'robotics', label: 'Robotics Engineering' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl font-bold tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === tab.id
                    ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-lg shadow-brand-cyan/20'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        >
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Box;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`p-6 rounded-2xl border transition-all duration-300 relative group overflow-hidden interactive-card ${
                  isLightMode
                    ? 'bg-white shadow-sm border-gray-100 hover:shadow-md'
                    : 'glass-panel border-white/5 hover:border-brand-cyan/35 hover:shadow-[0_15px_30px_rgba(0,240,255,0.08)]'
                }`}
              >
                {/* Background ambient lighting corner inside the card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-cyan/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover:scale-115 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-md text-white group-hover:text-brand-cyan transition-colors duration-200">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  {/* Percentage number */}
                  <div className="text-right">
                    <span className="font-display font-bold text-lg text-white group-hover:text-brand-cyan transition-colors duration-200">
                      {isInView ? <Counter percentage={skill.percentage} /> : 0}
                    </span>
                    <span className="text-xs font-bold text-brand-cyan">%</span>
                  </div>
                </div>

                {/* Glass track & progress visual bar */}
                <div className="h-2 w-full bg-neutral-900/50 outline outline-1 outline-white/5 rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full relative"
                    initial={{ width: '0%' }}
                    animate={isInView ? { width: `${skill.percentage}%` } : { width: '0%' }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: skill.delay }}
                  >
                    {/* Glowing endpoint bulb on hover */}
                    <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-white opacity-40 blur-[1px] animate-pulse" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Custom hook-like simple counter to match progress
function Counter({ percentage }: { percentage: number }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      if (count >= percentage) {
        setVal(percentage);
        clearInterval(interval);
      } else {
        setVal(count);
      }
    }, 12);

    return () => clearInterval(interval);
  }, [percentage]);

  return <>{val}</>;
}
