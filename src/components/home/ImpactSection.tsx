import React from "react";
import { Smile, ShieldCheck, Heart, Star } from "lucide-react";
import Image from "next/image";

const ImpactSection = () => {

    const items = [
        { icon: Smile, label: "Joy", desc: "A happy learning space" },
        { icon: ShieldCheck, label: "Safety", desc: "Secure environment" },
        { icon: Heart, label: "Wellbeing", desc: "Holistic care" },
        { icon: Star, label: "Excellence", desc: "Top-tier results" },
    ];

    return (
        <section className="relative py-24 bg-gray-900 overflow-hidden">
            {/* Background Image with Parallax-like feel */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/impact-bg-v2.png"
                    alt="Students studying in campus"
                    fill
                    className="object-cover opacity-60"
                />
                {/* Gradient Overlay for better readability */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-blue/90 to-black/40"></div>
            </div>

            <div className="container relative mx-auto px-4 text-center z-10">
                <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-white drop-shadow-md">
                    Our Growing Impact
                </h2>
                <p className="text-gray-200 max-w-2xl mx-auto mb-16 text-lg font-light">
                    Nurturing minds and building character through a holistic educational approach.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white/95 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition duration-500 hover:shadow-2xl border-b-4 border-brand-gold group"
                        >
                            <div className="w-20 h-20 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                                <item.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-2xl text-gray-800 mb-3 group-hover:text-brand-blue transition-colors">
                                {item.label}
                            </h3>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
