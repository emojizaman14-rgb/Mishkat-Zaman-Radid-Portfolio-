import { motion } from 'motion/react';
import { Compass, Laptop, Smartphone, Code, Layers, Activity, Box } from 'lucide-react';
import { servicesData } from '../data';

const iconMap: { [key: string]: any } = {
  Compass: Compass,
  Laptop: Laptop,
  Smartphone: Smartphone,
  Code: Code,
  Layers: Layers,
  Activity: Activity
};

export default function Services({ isLightMode }: { isLightMode: boolean }) {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative Blur light */}
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-mono font-bold tracking-widest text-brand-cyan mb-2"
          >
            What I Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Professional Design & Code
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Services grid displaying custom gradient borders on hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Box;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-8 rounded-2xl border transition-all duration-300 relative group overflow-hidden interactive-card ${
                  isLightMode
                    ? 'bg-white shadow-sm border-gray-100'
                    : 'glass-panel border-white/5 hover:border-brand-cyan/25 hover:shadow-[0_15px_40px_rgba(0,102,255,0.06)]'
                }`}
              >
                {/* Simulated Glow Gradient Border Corner */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/10 via-transparent to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Service Icon with motion bounce */}
                <div className="relative mb-6">
                  {/* Outer breathing background circle */}
                  <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan relative z-10 overflow-hidden">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="group-hover:scale-115 transition-transform duration-300"
                    >
                      <IconComponent className="w-6 h-6 text-brand-cyan text-glow" />
                    </motion.div>
                    
                    {/* Inner glowing dot */}
                    <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-brand-cyan animate-ping opacity-75" />
                  </div>
                </div>

                {/* Service Text Title & Desc */}
                <h3 className="font-display font-medium text-xl text-white mb-3 group-hover:text-brand-cyan transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-6 ${isLightMode ? 'text-gray-600' : 'text-neutral-400'}`}>
                  {service.description}
                </p>

                {/* Sub Tags / Tool Stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[10px] font-mono tracking-widest font-bold uppercase px-3 py-1.5 rounded-lg border leading-none ${
                        isLightMode
                          ? 'bg-neutral-50 border-neutral-200 text-neutral-600'
                          : 'bg-white/5 border-white/5 text-neutral-400 group-hover:border-brand-cyan/10 group-hover:text-brand-cyan transition-colors duration-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
