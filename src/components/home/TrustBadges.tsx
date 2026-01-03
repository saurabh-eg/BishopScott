import React from "react";
import { Shield, Award, CheckCircle, BookOpen } from "lucide-react";

const badges = [
    {
        icon: Shield,
        title: "CBSE Affiliated",
        subtitle: "Code: 123456",
    },
    {
        icon: Award,
        title: "ISO Certified",
        subtitle: "Quality Standards",
    },
    {
        icon: CheckCircle,
        title: "NCPCR Compliant",
        subtitle: "Child Safety",
    },
    {
        icon: BookOpen,
        title: "NCERT Curriculum",
        subtitle: "Approved Textbooks",
    },
];

const TrustBadges = () => {
    return (
        <section className="py-12 bg-brand-grey">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-blue font-serif">
                        Recognized & Certified
                    </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {badges.map((badge, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-gray-200"
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-3">
                                <badge.icon size={20} strokeWidth={1.5} />
                            </div>
                            <h4 className="font-bold text-sm md:text-base text-brand-blue mb-1">
                                {badge.title}
                            </h4>
                            <p className="text-xs text-gray-600">{badge.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
