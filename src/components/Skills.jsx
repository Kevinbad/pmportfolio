import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Project Management",
        skills: ["Agile", "Scrum", "Waterfall", "Hybrid", "Kanban", "Project Lifecycle Management", "Stakeholder Management", "Process Optimization", "Risk Management"]
    },
    {
        title: "Technical Tools",
        skills: ["Asana", "ClickUp", "Notion", "Jira", "Slack", "Microsoft Office Suite", "Google Workspace"]
    },
    {
        title: "Data & Automation",
        skills: ["Power BI", "Looker Studio", "SQL", "Python", "Excel", "Workflow Automation", "ATS Automation", "AI Tools / LLMs"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-[#09090b] relative border-t border-zinc-900/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-outfit font-bold text-zinc-50 mb-4">Technical Skills & Tools</h2>
                    <div className="h-1 w-20 bg-primary-500 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-zinc-300">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-xl font-bold font-outfit text-zinc-100 mb-6 flex items-center gap-3">
                                <span className="text-primary-500 font-medium">{`0${index + 1}.`}</span>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg text-sm font-medium hover:border-primary-500/50 hover:text-primary-400 hover:bg-primary-500/5 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
