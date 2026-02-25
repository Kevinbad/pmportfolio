import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Solvenza Invoices Platform",
        description: "Led the full lifecycle development of a secure financial transparency platform enabling agents to track real-time invoices, payments, and earnings, eliminating manual reporting.",
        tags: ["FinTech", "Process Automation", "Scalability"],
        link: "https://www.solvenzainvoices.com"
    },
    {
        title: "Solvenza Onboarding Platform",
        description: "Designed a digital onboarding system that streamlined contractor workflows, including contract signing and payment configuration, reducing onboarding time by over 60%.",
        tags: ["Automation", "Workflow Optimization", "UX"],
        link: "https://onboarding.solvenzasolutionsllc.com"
    },
    {
        title: "Solvenza Client Portal",
        description: "Driving development of a centralized portal providing clients real-time visibility into workforce operations, payroll expenses, and operational ROI analytics.",
        tags: ["Analytics", "Client Portal", "Data Visualization"],
        link: "https://client.solvenzasolutionsllc.com"
    },
    {
        title: "Corporate Website & Operational Infrastructure",
        description: "Deployed Solvenza Solutions' corporate website and operational systems to establish a scalable digital presence supporting recruiting and client acquisition.",
        tags: ["Digital Infrastructure", "Recruiting System", "Web Platform"],
        link: "https://www.solvenzasolutionsllc.com"
    },
    {
        title: "Regional Education Program Operations",
        description: "Managed educational operations and structured workflows across South America, coordinating 77 instructors and systems to support over 500 students.",
        tags: ["Operations", "Program Management", "Leadership"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-[#09090b] relative border-t border-zinc-900/50 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-outfit font-bold text-zinc-50 mb-4">Featured Projects</h2>
                        <div className="h-1 w-20 bg-primary-500 rounded-full"></div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const CardWrapper = project.link ? "a" : "div";
                        const linkProps = project.link ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {};

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="h-full"
                            >
                                <CardWrapper
                                    {...linkProps}
                                    className={`group p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 transition-all flex flex-col h-full ${project.link ? 'hover:border-primary-500/50 hover:bg-zinc-900/80 cursor-pointer block' : ''}`}
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className={`text-2xl font-bold font-outfit text-zinc-50 transition-colors pr-4 ${project.link ? 'group-hover:text-primary-400' : ''}`}>
                                            {project.title}
                                        </h3>
                                        {project.link && (
                                            <div className="p-2.5 rounded-full bg-zinc-800/80 text-zinc-400 group-hover:bg-primary-500 group-hover:text-zinc-950 transition-colors shrink-0">
                                                <ArrowUpRight size={20} />
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-zinc-400 flex-grow mb-8 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="px-3 py-1.5 bg-zinc-800/50 text-zinc-300 rounded-full text-sm font-medium border border-zinc-700/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardWrapper>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
