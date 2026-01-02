import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Microscope, BookOpen, Trophy, Bus, Palette } from "lucide-react";

const features = [
    {
        title: "Academic Excellence",
        image: "/images/classroom.png",
        icon: GraduationCap,
        desc: "Rigorous curriculum ensuring 100% board results."
    },
    {
        title: "Modern Laboratories",
        image: "/images/lab.png",
        icon: Microscope,
        desc: "State-of-the-art science and computer labs."
    },
    {
        title: "Library & Research",
        image: "/images/library.png",
        icon: BookOpen,
        desc: "Vast collection of books and digital resources."
    },
    {
        title: "Sports Academy",
        image: "/images/sports.png",
        icon: Trophy,
        desc: "Professional coaching in basketball, athletics & more."
    },
    {
        title: "Safe Transport",
        image: "/images/bus.png",
        icon: Bus,
        desc: "GPS-enabled bus fleet covering all of Purnea."
    },
    {
        title: "Arts & Culture",
        image: "/images/art.png",
        icon: Palette,
        desc: "Nurturing creativity through music, dance & drama."
    },
];

const FeatureGrid = () => {
    return (
        <section className="pt-32 pb-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-brand-blue font-serif font-bold text-3xl md:text-5xl mb-4">Your Future Is Bright!</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Explore the diverse facilities and opportunities that await you at Bishop Scott Girls School.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group relative h-64 rounded-xl overflow-hidden shadow-md cursor-pointer">
                            {/* Background Image */}
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover transition duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-brand-blue/80 opacity-60 group-hover:opacity-90 transition duration-300"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                                <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-sm group-hover:bg-brand-gold group-hover:text-brand-blue transition duration-300 transform group-hover:-translate-y-2">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold font-serif mb-2">{feature.title}</h3>
                                <p className="text-sm opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
