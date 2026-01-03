import React from "react";
import { BookOpen, Compass, GraduationCap } from "lucide-react";

/**
 * AcademicWings Component
 * 
 * Clean, flat design with no gradients or scaling transforms.
 * Focuses on typography and clear information hierarchy.
 */
const AcademicWings = () => {
    return (
        <section className="py-24 bg-brand-grey text-brand-blue">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-brand-blue">
                    Our Academic Wings
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
                    Tailored educational stages designed to foster growth at every age.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Wing 1: Primary */}
                    <div className="bg-white p-10 rounded-xl border border-gray-200 hover:border-brand-gold transition-colors duration-300 shadow-sm hover:shadow-md flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-brand-grey flex items-center justify-center text-brand-blue mb-6">
                            <BookOpen size={32} />
                        </div>
                        <h3 className="text-2xl font-bold font-serif text-brand-blue mb-3">Primary Wing</h3>
                        <div className="w-12 h-1 bg-brand-gold mb-4"></div>
                        <p className="text-gray-600 mb-4 px-4 leading-relaxed">
                            Building a strong foundation with joy and curiosity through play-based learning.
                        </p>
                        <span className="text-xs font-bold text-brand-red uppercase tracking-widest border border-brand-red/20 px-3 py-1 rounded-full">
                            Grades KG - 5
                        </span>
                    </div>

                    {/* Wing 2: Middle */}
                    <div className="bg-white p-10 rounded-xl border border-gray-200 hover:border-brand-gold transition-colors duration-300 shadow-sm hover:shadow-md flex flex-col items-center relative">
                        {/* Highlights the middle card slightly without scaling */}
                        <div className="absolute top-0 w-full h-1 bg-brand-blue rounded-t-xl"></div>

                        <div className="w-16 h-16 rounded-full bg-brand-grey flex items-center justify-center text-brand-blue mb-6">
                            <Compass size={32} />
                        </div>
                        <h3 className="text-2xl font-bold font-serif text-brand-blue mb-3">Middle Wing</h3>
                        <div className="w-12 h-1 bg-brand-gold mb-4"></div>
                        <p className="text-gray-600 mb-4 px-4 leading-relaxed">
                            Encouraging exploration, critical thinking, and skill development.
                        </p>
                        <span className="text-xs font-bold text-brand-red uppercase tracking-widest border border-brand-red/20 px-3 py-1 rounded-full">
                            Grades 6 - 8
                        </span>
                    </div>

                    {/* Wing 3: Senior */}
                    <div className="bg-white p-10 rounded-xl border border-gray-200 hover:border-brand-gold transition-colors duration-300 shadow-sm hover:shadow-md flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-brand-grey flex items-center justify-center text-brand-blue mb-6">
                            <GraduationCap size={32} />
                        </div>
                        <h3 className="text-2xl font-bold font-serif text-brand-blue mb-3">Senior Wing</h3>
                        <div className="w-12 h-1 bg-brand-gold mb-4"></div>
                        <p className="text-gray-600 mb-4 px-4 leading-relaxed">
                            Preparing students for board exams and higher education with academic rigor.
                        </p>
                        <span className="text-xs font-bold text-brand-red uppercase tracking-widest border border-brand-red/20 px-3 py-1 rounded-full">
                            Grades 9 - 12
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcademicWings;
