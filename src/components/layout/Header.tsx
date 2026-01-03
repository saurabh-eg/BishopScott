"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Phone, Mail } from "lucide-react";
import clsx from "clsx";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigation = [
        { name: "About", href: "/about" },
        { name: "Academics", href: "/academics" },
        { name: "Admissions", href: "/admissions" },
        { name: "Facilities", href: "/facilities" },
        { name: "Results", href: "/results" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="w-full bg-white shadow-sm font-sans z-50 relative">
            {/* Top Utility Bar */}
            <div className="bg-brand-blue text-white py-1 text-sm hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <span className="flex items-center gap-2">
                            <Phone size={14} /> +91 8789811187
                        </span>
                        <span className="flex items-center gap-2">
                            <Mail size={14} /> info@bishopscottgirls.com
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/careers" className="hover:text-brand-gold transition">Careers</Link>
                        <Link href="/login" className="hover:text-brand-gold transition">Parent Login</Link>
                        <div className="flex items-center gap-2 bg-brand-blue-light px-3 py-1 rounded cursor-pointer hover:bg-opacity-90 transition">
                            <Search size={14} /> <span className="text-xs font-semibold">SEARCH</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 py-2 flex justify-between items-center bg-white">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-12 h-12 md:w-16 md:h-16">
                        <Image
                            src="/images/logo.png"
                            alt="Bishop Scott Girls School Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-brand-blue font-serif font-bold text-lg md:text-xl leading-tight">
                            BISHOP SCOTT
                        </h1>
                        <h2 className="text-brand-red font-sans font-semibold text-sm md:text-base tracking-widest">
                            GIRLS SCHOOL
                        </h2>
                        <span className="text-gray-500 text-[10px] uppercase tracking-wide">Madhopura, Purnea</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-700 font-semibold text-sm hover:text-brand-blue hover:underline decoration-brand-gold underline-offset-4 transition"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/enroll"
                        className="bg-brand-red text-white text-sm font-bold py-2 px-5 rounded hover:bg-red-700 transition shadow-sm uppercase tracking-wider"
                    >
                        Enroll Now
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-brand-blue"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100 flex flex-col p-4 space-y-4 animate-in slide-in-from-top-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-800 font-semibold text-lg py-2 border-b border-gray-50 hover:text-brand-blue"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/enroll"
                        className="bg-brand-red text-white text-center font-bold py-3 rounded mt-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        ENROLL NOW
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
