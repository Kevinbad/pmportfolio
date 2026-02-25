import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        title: "Chief Business Officer | Technical Project Manager & Operations Lead",
        company: "Solvenza Solutions",
        period: "Feb 2025 – Current",
        description: "Managed full project lifecycle for nearshore staffing and operations programs serving U.S. clients.",
        bullets: [
            "Reduced time-to-hire by 53% (15 days to 7 days) via ATS systems and workflow automation",
            "Automated 60% of recruitment workflows using AI-driven tools, improving efficiency by 30%",
            "Led Agile ceremonies, managing 10–20 active project workflows and requisitions concurrently",
            "Coordinated distributed cross-functional teams of 40–50 members for over 120 global stakeholders",
            "Created project dashboards, KPIs, and 5+ SOPs improving scalability and procedure consistency"
        ]
    },
    {
        title: "Regional Program & Operations Manager",
        company: "The Church of Jesus Christ of Latter-day Saints",
        period: "Nov 2022 – Feb 2025",
        description: "Managed full lifecycle of regional educational programs, supporting 400+ students and 500+ stakeholders annually.",
        bullets: [
            "Coordinated cross-functional teams of 77 instructors across 12 cities and 5 countries",
            "Managed COP $40M annual program budget ensuring efficient tracking and financial accountability",
            "Implemented technology-driven workflows and communication systems to improve program performance",
            "Led leadership training programs, workshops, and stakeholder alignment initiatives"
        ]
    },
    {
        title: "Sales Compensation Data Specialist (Contract)",
        company: "HP Inc.",
        period: "Jan 2022 – Nov 2022",
        description: "Supported project execution and operational reporting for global sales team compensation programs.",
        bullets: [
            "Analyzed datasets of up to 55,000 records supporting data integrity and operational accuracy",
            "Built dashboards and automated reporting workflows using Power BI and Looker Studio",
            "Collaborated with cross-functional stakeholders resolving discrepancies to meet project timelines",
            "Improved reporting efficiency through process automation and optimization"
        ]
    },
    {
        title: "Real Estate Data Analyst",
        company: "NAHREP",
        period: "Nov 2019 – Jan 2022",
        description: "Supported operational projects validating real estate production data for executive reporting.",
        bullets: [
            "Built executive dashboards guiding leadership decision-making",
            "Verified project-related datasets ensuring compliance with reporting standards",
            "Collaborated with internal teams improving workflows and operational efficiency"
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-[#09090b] relative border-t border-zinc-900/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-outfit font-bold text-zinc-50 mb-4">Professional Experience</h2>
                    <div className="h-1 w-20 bg-primary-500 rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                                <div className="hidden md:block col-span-1 text-zinc-500 font-medium pt-1">
                                    {exp.period}
                                </div>
                                <div className="md:col-span-3 relative">
                                    {/* Timeline dot style for mobile */}
                                    <div className="absolute -left-10 top-1.5 h-4 w-4 rounded-full bg-zinc-900 border-2 border-primary-500 md:hidden z-10 w-4 h-4 rounded-full"></div>

                                    {/* Timeline line for mobile */}
                                    {index !== experiences.length - 1 && (
                                        <div className="absolute -left-[34px] top-6 bottom-0 h-full w-[2px] bg-zinc-800 md:hidden z-0"></div>
                                    )}

                                    <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 hover:border-zinc-700 transition-colors group">
                                        <div className="md:hidden text-primary-400 font-medium mb-3 text-sm">
                                            {exp.period}
                                        </div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <Briefcase size={22} className="text-zinc-500 group-hover:text-primary-400 transition-colors" />
                                            <h3 className="text-2xl font-bold font-outfit text-zinc-50">{exp.title}</h3>
                                        </div>
                                        <h4 className="text-lg font-medium text-zinc-400 mb-5">{exp.company}</h4>
                                        <p className="text-zinc-300 mb-6 leading-relaxed">
                                            {exp.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {exp.bullets.map((bullet, idx) => (
                                                <li key={idx} className="flex gap-3 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                                    <span className="text-primary-500 mt-1.5 opacity-80 shrink-0">•</span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
