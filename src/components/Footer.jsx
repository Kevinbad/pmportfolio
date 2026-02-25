export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-[#09090b] border-t border-zinc-900/80 text-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-zinc-500 text-sm">
                    © {currentYear} Kevin Barros. All rights reserved.
                </div>
                <div className="flex items-center gap-6">
                    <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm">
                        Back to Top
                    </a>
                </div>
            </div>
        </footer>
    );
}
