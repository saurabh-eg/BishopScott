import React from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

const AdmissionBanner = () => {
    return (
        <section className="py-12 bg-brand-red text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-start gap-4 text-center md:text-left">
                        <div className="hidden md:flex w-12 h-12 rounded-full bg-white/20 items-center justify-center shrink-0">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold font-serif mb-2">
                                Admissions Open for 2026-27
                            </h3>
                            <p className="text-white/90 text-sm md:text-base">
                                Limited seats available. Apply now to secure your child&apos;s future.
                            </p>
                        </div>
                    </div>
                    <Link
                        href="/admissions"
                        className="inline-flex items-center gap-2 bg-white text-brand-red px-6 py-3 rounded-md font-bold text-sm hover:bg-gray-50 transition whitespace-nowrap"
                    >
                        Apply Now <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AdmissionBanner;
