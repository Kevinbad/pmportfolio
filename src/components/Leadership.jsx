import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const leadershipSkills = [
    "Project Lifecycle Management",
    "Agile, Scrum & Hybrid Methodologies",
    "Stakeholder & Cross-Functional Coordination",
    "Process Improvement & Workflow Automation",
    "Project Dashboards & KPI Reporting",
    "Risk Management & Blocker Resolution"
];

export default function Leadership() {
    return (
        <section className="py-24 bg-[#09090b] relative border-t border-zinc-900/50 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold text-zinc-50 mb-4">Leadership & Operations Expertise</h2>
                        <div className="h-1 w-20 bg-primary-500 rounded-full mb-8"></div>
                        <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-xl font-light">
                            Demonstrated ability to align technical initiatives with strategic business objectives, optimizing workflows to drive scalability and efficiency across diverse international markets.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {leadershipSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/80 hover:border-zinc-700/80 transition-colors"
                            >
                                <CheckCircle2 className="text-primary-500 shrink-0 mt-0.5" size={24} />
                                <span className="text-zinc-300 font-medium leading-relaxed">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
