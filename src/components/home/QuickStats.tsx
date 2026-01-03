import React from "react";
import { Users, Calendar, Trophy, TrendingUp } from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "500+",
        label: "Active Students",
    },
    {
        icon: Calendar,
        value: "10+",
        label: "Years of Excellence",
    },
    {
        icon: Trophy,
        value: "100%",
        label: "Board Pass Rate",
    },
    {
        icon: TrendingUp,
        value: "95%",
        label: "Parent Satisfaction",
    },
];

const QuickStats = () => {
    return (
        <section className="py-12 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-3">
                                <stat.icon size={24} strokeWidth={1.5} />
                            </div>
                            <div className="text-2xl md:text-3xl font-bold text-brand-blue font-serif">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-gray-600 font-medium mt-1">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickStats;
