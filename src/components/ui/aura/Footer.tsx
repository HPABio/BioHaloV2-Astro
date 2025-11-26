import React from "react";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="xl:mt-0 border-slate-800 border-t mt-0">
            <div className="sm:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[130px] h-[20px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f3db1202-96e3-416d-8235-c9d02c748d03_1600w.png)] bg-cover rounded pt-2 pb-2 invert"
                        ></a>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Design with purpose. Build with precision. Creating exceptional
                            digital experiences that drive results.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 transition"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 transition"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 transition"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-white/10 transition"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 hover:text-slate-100 transition"
                                >
                                    Web Design
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 hover:text-slate-100 transition"
                                >
                                    Brand Identity
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 hover:text-slate-100 transition"
                                >
                                    UX Strategy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 hover:text-slate-100 transition"
                                >
                                    Mobile Design
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 hover:text-slate-100 transition"
                                >
                                    E-commerce
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 hover:text-slate-100 transition"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 hover:text-slate-100 transition"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 hover:text-slate-100 transition"
                                >
                                    Case Studies
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 hover:text-slate-100 transition"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-slate-400 hover:text-slate-100 transition"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider">
                            Get In Touch
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm text-slate-400">
                                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>123 Design Street, San Francisco, CA 94102</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-400">
                                <Phone className="w-4 h-4" />
                                <a
                                    href="tel:+1234567890"
                                    className="hover:text-slate-100 transition"
                                >
                                    (415) 555-0123
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-slate-400">
                                <Mail className="w-4 h-4" />
                                <a
                                    href="mailto:hello@designstudio.com"
                                    className="hover:text-slate-100 transition"
                                >
                                    hello@designstudio.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-800 gap-4">
                    <div className="text-sm text-slate-400">
                        © 2025 DesignStudio. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                        <a
                            href="#"
                            className="text-slate-400 hover:text-slate-100 transition"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 hover:text-slate-100 transition"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="text-slate-400 hover:text-slate-100 transition"
                        >
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
