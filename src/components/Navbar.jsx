import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 items-center">
                <a href="#" className="text-xl font-outfit font-bold tracking-tight text-zinc-50 justify-self-start">
                    Kevin <span className="text-primary-400">Barros</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center justify-center gap-8 w-full">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 hover:text-primary-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center justify-end gap-4">
                    <a
                        href="/Kevin Barros - CV (PM).pdf"
                        download
                        className="text-sm font-medium text-zinc-300 hover:text-primary-400 transition-colors"
                    >
                        Resume
                    </a>
                    <a
                        href="#contact"
                        className="px-5 py-2.5 text-sm font-medium bg-zinc-50 text-zinc-950 hover:bg-zinc-200 transition-colors rounded-full"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-zinc-400 hover:text-zinc-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800/50 shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col px-6 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-zinc-400 hover:text-primary-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
