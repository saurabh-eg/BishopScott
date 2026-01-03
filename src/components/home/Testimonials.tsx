import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Parent of Class 8 Student",
        content: "The balanced focus on academics and extracurricular activities has transformed my daughter's confidence. The teachers are incredibly supportive.",
        stars: 5
    },
    {
        name: "Anita Sharma",
        role: "Parent of Class 5 Student",
        content: "A truly holistic approach to education. The facilities are top-notch, and the environment is very safe and encouraging for young girls.",
        stars: 5
    },
    {
        name: "Sanjay Singh",
        role: "Parent of Class 10 Student",
        content: "The rigorous preparation for board exams combined with leadership training has prepared my daughter for anything life throws at her.",
        stars: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-blue mb-3">What Parents Say</h2>
                    <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-brand-grey p-6 rounded-lg relative flex flex-col h-full border border-gray-200 hover:border-brand-gold transition shadow-sm">
                            <Quote className="absolute top-4 right-4 text-brand-gold/15 w-7 h-7" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.stars)].map((_, idx) => (
                                    <Star key={idx} size={14} className="fill-brand-gold text-brand-gold" />
                                ))}
                            </div>
                            <p className="text-gray-700 text-base leading-relaxed mb-6 grow italic">
                                "{t.content}"
                            </p>
                            <div>
                                <div className="font-bold text-brand-blue text-base">{t.name}</div>
                                <div className="text-brand-red font-semibold text-xs uppercase tracking-wider mt-1">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
