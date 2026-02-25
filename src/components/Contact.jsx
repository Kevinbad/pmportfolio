import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#09090b] relative border-t border-zinc-900/50 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-zinc-900/40 border border-zinc-800/80 p-10 md:p-16 rounded-[2.5rem] backdrop-blur-sm"
                >
                    <h2 className="text-4xl md:text-5xl font-outfit font-bold text-zinc-50 mb-6">Let's Work Together</h2>
                    <p className="text-xl text-zinc-400 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                        Open to <span className="text-zinc-200 font-medium">Technical Project Manager</span> and <span className="text-zinc-200 font-medium">Operations Leadership</span> opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="mailto:kbarros1993@gmail.com"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-400 text-zinc-950 rounded-full font-semibold transition-all group"
                        >
                            <Mail size={20} />
                            Say Hello
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kevinbarrosd/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-50 rounded-full font-medium transition-all"
                        >
                            <Linkedin size={20} className="text-[#0A66C2]" />
                            Connect on LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
