import { motion } from 'framer-motion';

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="about" className="py-24 bg-[#09090b] relative border-t border-zinc-900/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="sticky top-32"
                        >
                            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-zinc-50 mb-4">About Me</h2>
                            <div className="h-1 w-20 bg-primary-500 rounded-full"></div>

                        </motion.div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-8 space-y-6 text-zinc-400 text-lg font-light leading-relaxed pt-2"
                    >
                        <motion.p variants={itemVariants} className="text-zinc-300 font-medium text-xl">
                            Technical Project Manager with 5+ years managing full project lifecycles across staffing, education, and technology environments.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Proven track record delivering concurrent cross-functional projects impacting 500+ stakeholders, reducing time-to-hire by 53%, and improving operational efficiency by 30% through AI-driven automation and workflow optimization.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Experienced in Agile, Scrum, and hybrid methodologies, managing distributed international teams, coordinating stakeholders, and ensuring on-time project delivery.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Strong expertise in project planning, risk management, KPI reporting, and process automation using modern tools like Asana, ClickUp, Notion, and Jira in remote, fast-paced environments.
                        </motion.p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
