import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[95vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-primary-900/40 rounded-full blur-[100px] opacity-60 mix-blend-screen" />
                <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-zinc-800/50 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <div className="max-w-2xl">
                        {/* Name label removed as requested */}

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit leading-[1.1] mb-6 text-zinc-50"
                        >
                            Technical Project Manager <br />
                            <span className="text-zinc-500">Portfolio</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-4 mb-10 font-light"
                        >
                            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-outfit">
                                Delivering cross-functional projects impacting 500+ stakeholders, reducing time-to-hire by 53%, and improving operational efficiency by 30% through AI-driven automation.
                            </p>
                            <p className="text-lg text-zinc-400 leading-relaxed pb-4">
                                5+ years managing full project lifecycles across staffing, education, and technology environments using Agile, Scrum, and hybrid methodologies.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row flex-wrap gap-4"
                        >
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-50 text-zinc-950 rounded-full font-medium hover:bg-zinc-200 transition-all group"
                            >
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/Kevin_Barros_CV.pdf"
                                download
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600/20 border border-primary-500/50 text-primary-400 rounded-full font-medium hover:bg-primary-600/30 hover:text-primary-300 transition-all group"
                            >
                                Download CV
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-zinc-700 text-zinc-50 rounded-full font-medium hover:bg-zinc-800 hover:border-zinc-500 transition-all"
                            >
                                <Mail size={18} className="text-zinc-400" />
                                Contact Me
                            </a>
                        </motion.div>
                    </div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
                    >
                        <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800/80 shadow-[0_0_50px_rgba(20,184,166,0.1)] group">
                            <div className="absolute inset-0 bg-primary-500/10 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay z-10 pointer-events-none"></div>
                            <img
                                src="/photokevin.jpg?v=3"
                                alt="Kevin Barros"
                                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                        </div>

                        {/* Decorative element behind image */}
                        <div className="absolute -z-10 -bottom-6 -right-6 w-1/2 h-1/2 rounded-3xl border border-primary-500/20 bg-primary-500/5 blur-sm hidden lg:block"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
