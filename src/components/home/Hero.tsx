"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserPlus, Users, GraduationCap } from "lucide-react";
import clsx from "clsx";

const slides = [
    {
        id: 1,
        image: "/images/hero-bg.png", // The original building shot
        title: "Multiple Degree",
        highlight: "Graduates!",
        description: "Providing high-quality education that empowers young women to lead with confidence and integrity."
    },
    {
        id: 2,
        image: "/images/hero-slide-2.png", // Students celebrating
        title: "Empowering Future",
        highlight: "Leaders!",
        description: "Fostering creativity, critical thinking, and a spirit of excellence in every student."
    },
    {
        id: 3,
        image: "/images/hero-slide-3.png", // Teacher mentoring
        title: "World-Class",
        highlight: "Mentorship!",
        description: "Our dedicated faculty ensures personalized attention and holistic growth for your child."
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-play carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-125 md:h-150 flex flex-col justify-between">

            {/* Background Slider Container - Restricted overflow strictly for images */}
            <div className="absolute inset-0 overflow-hidden bg-gray-900">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={clsx(
                            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        )}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                ))}
            </div>

            {/* Hero Content (Text) */}
            <div className="relative container mx-auto px-4 pt-24 md:pt-32 pb-20 flex flex-col items-center lg:items-start text-center lg:text-left z-20 h-full justify-center pointer-events-none">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={clsx(
                            "absolute top-1/2 left-4 md:left-auto transform -translate-y-1/2 transition-opacity duration-500",
                            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                        )}
                    >
                        <div className="pointer-events-auto max-w-4xl">
                            <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight text-white drop-shadow-lg">
                                {slide.title} <br /> <span className="text-brand-gold">{slide.highlight}</span>
                            </h1>
                            <p className="font-sans text-lg md:text-2xl text-gray-100 max-w-2xl mb-8 leading-relaxed font-light">
                                {slide.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/enroll"
                                    className="bg-brand-red text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-red-700 transition uppercase tracking-wide shadow-lg border-2 border-brand-red"
                                >
                                    Enroll Now
                                </Link>
                                <Link
                                    href="/about"
                                    className="bg-transparent text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-white hover:text-brand-blue transition uppercase tracking-wide shadow-lg border-2 border-white"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Vertical Navigation (Right Side) */}
            <div className="hidden md:flex absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 flex-col gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={clsx(
                            "w-3 h-3 rounded-full border-2 border-white transition-all duration-300",
                            index === currentSlide ? "bg-white scale-125" : "bg-transparent hover:bg-white/50"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Floating CTA Pill Bar */}
            <div className="absolute -bottom-6 md:-bottom-10 left-0 w-full z-40 flex justify-center px-4">
                <div className="bg-white rounded-lg py-3 px-4 md:py-5 md:px-12 flex flex-row items-center gap-3 md:gap-12 shadow-sm border border-gray-200 w-auto max-w-[98%] overflow-x-auto no-scrollbar">

                    {/* CTA 1: Enroll */}
                    <div className="flex items-center gap-2 md:gap-3 cursor-pointer group shrink-0">
                        <div className="bg-brand-red text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition">
                            <UserPlus size={16} className="md:w-6 md:h-6" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-brand-blue font-bold text-xs md:text-lg leading-tight group-hover:text-brand-red transition">Enroll</span>
                            <span className="text-brand-blue text-[10px] md:text-sm font-semibold opacity-80 whitespace-nowrap hidden sm:block">With Us</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="block w-px h-6 md:h-12 bg-gray-200"></div>

                    {/* CTA 2: Parent Portal */}
                    <div className="flex items-center gap-2 md:gap-3 cursor-pointer group shrink-0">
                        <div className="bg-brand-gold text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition">
                            <Users size={16} className="md:w-6 md:h-6" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-brand-blue font-bold text-xs md:text-lg leading-tight group-hover:text-brand-gold transition">Parent</span>
                            <span className="text-brand-blue text-[10px] md:text-sm font-semibold opacity-80 whitespace-nowrap hidden sm:block">Portal</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="block w-px h-6 md:h-12 bg-gray-200"></div>

                    {/* CTA 3: Alumni */}
                    <div className="flex items-center gap-2 md:gap-3 cursor-pointer group shrink-0">
                        <div className="bg-brand-blue-light text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition">
                            <GraduationCap size={16} className="md:w-6 md:h-6" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-brand-blue font-bold text-xs md:text-lg leading-tight group-hover:text-[#0070BA] transition">Alumni</span>
                            <span className="text-brand-blue text-[10px] md:text-sm font-semibold opacity-80 whitespace-nowrap hidden sm:block">& Beyond</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
