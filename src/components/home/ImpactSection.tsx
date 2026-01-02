import React from "react";
import { Smile, ShieldCheck, Heart, Star } from "lucide-react";

const ImpactSection = () => {

    const items = [
        { icon: Smile, label: "Joy", desc: "A happy learning space" },
        { icon: ShieldCheck, label: "Safety", desc: "Secure environment" },
        { icon: Heart, label: "Wellbeing", desc: "Holistic care" },
        { icon: Star, label: "Excellence", desc: "Top-tier results" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-brand-blue font-serif font-bold text-3xl md:text-5xl mb-16">Our Impact</h2>

                <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center group">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-brand-blue flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition duration-500 shadow-lg">
                                <item.icon size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-bold text-xl text-brand-blue mb-2">{item.label}</h3>
                            <p className="text-gray-500 text-sm max-w-[150px]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
