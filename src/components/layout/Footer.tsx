import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="pt-24 pb-12 px-6 bg-slate-950 text-white" id="contact">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">
                <div className="col-span-2 space-y-8">
                    <Link href="/" className="flex items-center gap-3">
                        <img src="/optimrental-logo.png" alt="Optimrental Logo" className="h-16 md:h-24 w-auto object-contain" />
                    </Link>
                    <p className="text-slate-400 max-w-sm text-lg leading-relaxed font-medium">
                        Premium vehicle rentals and professional shuttle services across Switzerland. Quality you can trust, service you can depend on.
                    </p>
                </div>

                <div className="space-y-6">
                    <h4 className="font-black uppercase tracking-[0.2em] text-xs text-amber-500">Contact Details</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="text-[10px] font-black uppercase text-slate-500 mb-1 tracking-widest">Email Us</p>
                            <p className="text-white font-bold text-lg hover:text-amber-500 cursor-pointer transition-colors">info@optimrental.ch</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase text-slate-500 mb-1 tracking-widest">Call Us</p>
                            <p className="text-white font-bold text-lg hover:text-amber-500 cursor-pointer transition-colors">+44791226646</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h4 className="font-black uppercase tracking-[0.2em] text-xs text-amber-500">Our Network</h4>
                    <div className="space-y-4">
                        <div>
                            <p className="text-[10px] font-black uppercase text-slate-500 mb-1 tracking-widest">Coverage</p>
                            <p className="text-white font-bold opacity-80 leading-loose">
                                Zürich • Basel • Geneva • Bern • Lugano • St. Moritz
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Credits */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

                    {/* Copyright */}
                    <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
                        © {new Date().getFullYear()} Optimrental Switzerland. All rights reserved.
                    </div>

                    {/* Built by bfoundr · Grown by 7raa */}
                    <div className="c16 on-dark"><a href="https://bfoundr.com" target="_blank" rel="noopener" aria-label="Built by bfoundr">Built by <span className="lg bf">bf<span className="o"></span>undr</span></a><a href="https://7raa.com" target="_blank" rel="noopener" aria-label="Grown by 7raa">Grown by <span className="lg sr">7RAA</span></a></div>

                    {/* Legal Links */}
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-amber-500 transition-colors">Impressum</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
