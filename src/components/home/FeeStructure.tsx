import React from "react";
import Link from "next/link";
import { IndianRupee, FileText } from "lucide-react";

const feeCategories = [
    {
        category: "Primary Wing",
        grades: "KG - 5",
        annualFee: "₹25,000 - ₹35,000",
    },
    {
        category: "Middle Wing",
        grades: "6 - 8",
        annualFee: "₹35,000 - ₹45,000",
    },
    {
        category: "Senior Wing",
        grades: "9 - 10",
        annualFee: "₹45,000 - ₹55,000",
    },
];

const FeeStructure = () => {
    return (
        <section className="py-16 bg-brand-grey">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-blue mb-3">
                        Transparent Fee Structure
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Quality education at affordable rates with flexible payment options.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {feeCategories.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-brand-gold transition"
                            >
                                <div className="flex items-center gap-2 text-brand-blue mb-3">
                                    <IndianRupee size={20} />
                                    <h3 className="font-bold text-lg">{item.category}</h3>
                                </div>
                                <div className="text-sm text-gray-600 mb-3">
                                    Grades: <span className="font-semibold">{item.grades}</span>
                                </div>
                                <div className="text-xl font-bold text-brand-red font-serif">
                                    {item.annualFee}
                                </div>
                                <div className="text-xs text-gray-500 mt-2">
                                    *Annual tuition fee
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/admissions/fee-structure"
                            className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-md font-bold hover:bg-brand-blue-light transition"
                        >
                            <FileText size={20} />
                            View Complete Fee Details
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeeStructure;
