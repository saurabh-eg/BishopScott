"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-brand-blue text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="font-serif text-xl font-bold mb-6 text-brand-gold">Bishop Scott Girls School</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            A premier institution dedicated to empowering young minds with knowledge, integrity, and leadership skills. We provide a nurturing environment where every girl can achieve her full potential.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="bg-white/10 p-2 rounded hover:bg-brand-gold hover:text-brand-blue transition">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded hover:bg-brand-gold hover:text-brand-blue transition">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded hover:bg-brand-gold hover:text-brand-blue transition">
                                <Twitter size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-brand-gold transition">About Us</Link></li>
                            <li><Link href="/admissions" className="hover:text-brand-gold transition">Admissions</Link></li>
                            <li><Link href="/academics" className="hover:text-brand-gold transition">Academic Calendar</Link></li>
                            <li><Link href="/careers" className="hover:text-brand-gold transition">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-gold transition">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-1 shrink-0 text-brand-gold" size={16} />
                                <span>Madhopura, Purnea<br />Bihar, India - 854301</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-brand-gold" size={16} />
                                <span>+91 999 999 9999</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0 text-brand-gold" size={16} />
                                <span>info@bishopscottgirls.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Bishop Scott Girls School. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
