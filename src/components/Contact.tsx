import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

interface ContactProps {
  isLightMode: boolean;
  prefillSubject?: string;
  prefillMessage?: string;
  clearPrefills?: () => void;
}

export default function Contact({ isLightMode, prefillSubject = '', prefillMessage = '', clearPrefills }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Fill in props if they change
  useEffect(() => {
    if (prefillSubject || prefillMessage) {
      setFormData((prev) => ({
        ...prev,
        subject: prefillSubject || prev.subject,
        message: prefillMessage || prev.message
      }));
    }
  }, [prefillSubject, prefillMessage]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', subject: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email satisfies essential contact';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please specify a valid email address';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please input a short message';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate sending time
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Save query locally to indexed list
      const submissions = JSON.parse(localStorage.getItem('messages') || '[]');
      submissions.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('messages', JSON.stringify(submissions));

      // Reset
      setFormData({ name: '', email: '', subject: '', message: '' });
      if (clearPrefills) clearPrefills();
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative backplane blur light */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-mono font-bold tracking-widest text-brand-cyan mb-2"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Let's Collaborate On Something Great
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT SIDE: Direct Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-between gap-6"
          >
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl text-white">Contact Info</h3>
              <p className={`text-sm leading-relaxed ${isLightMode ? 'text-gray-600' : 'text-neutral-400'}`}>
                Have an outstanding product idea, a design system proposal, or need circuit logic solutions? Reach out! I usually reply within 24 hours.
              </p>
            </div>

            <div className="space-y-4 my-8">
              {/* Card 1: Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-5 rounded-2xl border flex items-center gap-4 transition-all duration-300 ${
                  isLightMode
                    ? 'bg-white border-neutral-100 hover:shadow-md'
                    : 'glass-panel border-white/5 hover:border-brand-cyan/20 hover:bg-white/10'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0 text-glow">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider mb-0.5">Email Me</p>
                  <p className="text-sm font-semibold font-mono text-white truncate max-w-[180px] sm:max-w-xs">{personalInfo.email}</p>
                </div>
              </a>

              {/* Card 2: WhatsApp */}
              <a
                href={`https://wa.me/8801862256865`}
                target="_blank"
                rel="noreferrer"
                className={`p-5 rounded-2xl border flex items-center gap-4 transition-all duration-300 ${
                  isLightMode
                    ? 'bg-white border-neutral-100 hover:shadow-md'
                    : 'glass-panel border-white/5 hover:border-emerald-400/20 hover:bg-white/10'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 text-glow">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider mb-0.5">WhatsApp Direct</p>
                  <p className="text-sm font-semibold font-mono text-white">{personalInfo.whatsapp}</p>
                </div>
              </a>
            </div>

            {/* Micro details block */}
            <div className="p-5 rounded-2xl border border-dashed border-neutral-800 text-[11px] font-mono leading-relaxed text-gray-500 uppercase tracking-widest hidden lg:block">
              <span>LATITUDE: 23.8103° N <br /> LONGITUDE: 90.4125° E <br /> DHAKA, BANGLADESH</span>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-8"
          >
            <div
              className={`rounded-3xl border p-8 md:p-10 relative overflow-hidden h-full flex flex-col justify-center ${
                isLightMode ? 'bg-white shadow-sm border-gray-100' : 'glass-panel border-white/5 shadow-2xl'
              }`}
            >
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono tracking-widest uppercase font-bold text-neutral-400">Your Name</label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full px-4 py-3 bg-neutral-900/50 hover:bg-neutral-900/80 outline-none border rounded-xl text-sm text-white font-medium transition-all duration-200 focus:bg-neutral-950 focus:border-brand-cyan ${
                              errors.name ? 'border-red-500' : 'border-white/5'
                            }`}
                          />
                          {errors.name && (
                            <div className="flex items-center gap-1 text-red-400 text-xs mt-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{errors.name}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono tracking-widest uppercase font-bold text-neutral-400">Your Email</label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="johndoe@example.com"
                            className={`w-full px-4 py-3 bg-neutral-900/50 hover:bg-neutral-900/80 outline-none border rounded-xl text-sm text-white font-medium transition-all duration-200 focus:bg-neutral-950 focus:border-brand-cyan ${
                              errors.email ? 'border-red-500' : 'border-white/5'
                            }`}
                          />
                          {errors.email && (
                            <div className="flex items-center gap-1 text-red-400 text-xs mt-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{errors.email}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono tracking-widest uppercase font-bold text-neutral-400">Subject</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project Collaboration"
                          className={`w-full px-4 py-3 bg-neutral-900/50 hover:bg-neutral-900/80 outline-none border rounded-xl text-sm text-white font-medium transition-all duration-200 focus:bg-neutral-950 focus:border-brand-cyan ${
                            errors.subject ? 'border-red-500' : 'border-white/5'
                          }`}
                        />
                        {errors.subject && (
                          <div className="flex items-center gap-1 text-red-400 text-xs mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.subject}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono tracking-widest uppercase font-bold text-neutral-400">Message</label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Hey Mishkat, let's create a visual system..."
                          className={`w-full px-4 py-3 bg-neutral-900/50 hover:bg-neutral-900/80 outline-none border rounded-xl text-sm text-white font-medium transition-all duration-200 focus:bg-neutral-950 focus:border-brand-cyan resize-none ${
                            errors.message ? 'border-red-500' : 'border-white/5'
                          }`}
                        />
                        {errors.message && (
                          <div className="flex items-center gap-1 text-red-400 text-xs mt-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.message}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group px-6 py-3.5 flex items-center justify-center gap-2 rounded-xl text-sm font-bold tracking-widest uppercase overflow-hidden bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-lg shadow-brand-cyan/15 hover:shadow-brand-cyan/30 disabled:opacity-55 active:scale-98 transition-all duration-300"
                    >
                      <span>{isSubmitting ? 'Sending Request...' : 'Send Message'}</span>
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </button>
                  </motion.form>
                ) : (
                  // HIGH-END SUCCESS ANIMATION COMPONENT
                  <motion.div
                    key="success-screen"
                    className="flex flex-col items-center justify-center text-center p-6 space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    <div className="relative">
                      {/* Radiating pulsing rings */}
                      <div className="absolute inset-0 rounded-full bg-brand-cyan/20 animate-ping opacity-75" />
                      <div className="w-20 h-20 bg-brand-cyan/10 border-2 border-brand-cyan rounded-full flex items-center justify-center text-brand-cyan relative">
                        <CheckCircle className="w-10 h-10 text-glow" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-2xl text-white flex items-center justify-center gap-2">
                        Message Injected Successfully
                        <Sparkles className="w-5 h-5 text-brand-cyan" />
                      </h4>
                      <p className={`text-sm leading-relaxed max-w-md mx-auto ${isLightMode ? 'text-gray-600' : 'text-neutral-400'}`}>
                        Thank you! Your information has been secured. Mishkat Zaman Radid will review details and connect back within a business workday.
                      </p>
                    </div>

                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2 border border-brand-cyan/25 text-brand-cyan hover:border-brand-cyan hover:text-white rounded-xl text-xs font-mono font-bold uppercase transition-colors duration-200"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
