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
        <section className="py-16 bg-brand-grey text-brand-blue">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-serif font-bold text-2xl md:text-4xl mb-3 text-brand-blue">
                    Our Academic Wings
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-base">
                    Tailored educational stages designed to foster growth at every age.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Wing 1: Primary */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-brand-gold transition-colors duration-300 shadow-sm flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-brand-grey flex items-center justify-center text-brand-blue mb-4">
                            <BookOpen size={28} />
                        </div>
                        <h3 className="text-xl font-bold font-serif text-brand-blue mb-2">Primary Wing</h3>
                        <div className="w-10 h-1 bg-brand-gold mb-3"></div>
                        <p className="text-gray-600 mb-3 px-2 leading-relaxed text-sm">
                            Building a strong foundation with joy and curiosity through play-based learning.
                        </p>
                        <span className="text-xs font-bold text-brand-red uppercase tracking-widest border border-brand-red/20 px-3 py-1 rounded-full">
                            Grades KG - 5
                        </span>
                    </div>

                    {/* Wing 2: Middle */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-brand-gold transition-colors duration-300 shadow-sm flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-brand-grey flex items-center justify-center text-brand-blue mb-4">
                            <Compass size={28} />
                        </div>
                        <h3 className="text-xl font-bold font-serif text-brand-blue mb-2">Middle Wing</h3>
                        <div className="w-10 h-1 bg-brand-gold mb-3"></div>
                        <p className="text-gray-600 mb-3 px-2 leading-relaxed text-sm">
                            Encouraging exploration, critical thinking, and skill development.
                        </p>
                        <span className="text-xs font-bold text-brand-red uppercase tracking-widest border border-brand-red/20 px-3 py-1 rounded-full">
                            Grades 6 - 8
                        </span>
                    </div>

                    {/* Wing 3: Senior */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-brand-gold transition-colors duration-300 shadow-sm flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-brand-grey flex items-center justify-center text-brand-blue mb-4">
                            <GraduationCap size={28} />
                        </div>
                        <h3 className="text-xl font-bold font-serif text-brand-blue mb-2">Senior Wing</h3>
                        <div className="w-10 h-1 bg-brand-gold mb-3"></div>
                        <p className="text-gray-600 mb-3 px-2 leading-relaxed text-sm">
                            Preparing students for board exams and higher education with academic rigor.
                        </p>
                        <span className="text-xs font-bold text-brand-red uppercase tracking-widest border border-brand-red/20 px-3 py-1 rounded-full">
                            Grades 9 - 10
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcademicWings;
