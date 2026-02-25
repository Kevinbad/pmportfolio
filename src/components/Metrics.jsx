import { motion } from 'framer-motion';

const metrics = [
    { value: "53%", label: "Time-to-Hire Reduction" },
    { value: "30%", label: "Operational Efficiency Improved" },
    { value: "5+", label: "Concurrent Projects Managed" },
    { value: "500+", label: "Stakeholders Supported" },
    { value: "40-50", label: "Team Members Per Project" },
    { value: "10-20", label: "Active Project Workflows" },
    { value: "60%", label: "Workflow Automation Achieved" }
];

export default function Metrics() {
    return (
        <section className="py-24 bg-[#09090b] relative border-t border-zinc-900/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-outfit font-bold text-zinc-50 mb-4">Key Achievements</h2>
                    <div className="h-1 w-20 bg-primary-500 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-primary-500/50 hover:bg-zinc-800/50 transition-all group"
                        >
                            <div className="text-4xl md:text-5xl font-outfit font-bold text-zinc-50 mb-3 group-hover:text-primary-400 transition-colors">
                                {metric.value}
                            </div>
                            <p className="text-sm font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
