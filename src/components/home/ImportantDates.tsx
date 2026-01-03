import React from "react";
import { Calendar, Clock } from "lucide-react";

const dates = [
    {
        date: "Jan 15, 2026",
        event: "Admission Registration Starts",
        type: "Admissions",
    },
    {
        date: "Feb 28, 2026",
        event: "Last Date to Apply",
        type: "Deadline",
    },
    {
        date: "Mar 10, 2026",
        event: "Entrance Test",
        type: "Examination",
    },
    {
        date: "Apr 01, 2026",
        event: "New Session Begins",
        type: "Academic",
    },
];

const ImportantDates = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-blue mb-3">
                        Important Dates 2026
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Mark your calendar for key admission and academic events.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="space-y-4">
                        {dates.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-4 p-4 bg-brand-grey rounded-lg border border-gray-200 hover:border-brand-gold transition"
                            >
                                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                                    <Calendar size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                        <h4 className="font-bold text-brand-blue text-base">
                                            {item.event}
                                        </h4>
                                        <span className="text-xs font-semibold text-brand-red uppercase tracking-wide">
                                            {item.type}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                        <Clock size={14} />
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImportantDates;
