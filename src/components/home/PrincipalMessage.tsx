import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const PrincipalMessage = () => {
    return (
        <section className="py-16 bg-brand-grey">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Principal Photo */}
                    <div className="w-full lg:w-4/12 relative">
                        <div className="relative w-full aspect-4/5 md:w-80 md:h-96 mx-auto rounded-lg overflow-hidden shadow-sm border-4 border-white">
                            <Image
                                src="/images/principal.png"
                                alt="Principal Dr. Sandhya Yadav"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Message Content */}
                    <div className="w-full lg:w-8/12">
                        <div className="flex flex-col gap-5">
                            <div className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-wider text-xs">
                                <div className="w-6 h-0.5 bg-brand-red"></div>
                                Welcome Message
                            </div>

                            <div className="relative">
                                <Quote className="absolute -top-4 -left-6 text-brand-gold/15 w-12 h-12" />
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-brand-blue mb-6 leading-tight">
                                    Message from the Principal
                                </h2>
                            </div>

                            <div className="space-y-4 text-gray-700 text-base leading-relaxed font-sans italic">
                                <p>
                                    "Education is not just about academic excellence; it is about character building, fostering empathy, and preparing young girls to lead with confidence in an ever-changing world."
                                </p>
                                <p className="not-italic text-gray-600">
                                    At Bishop Scott Girls School, we believe that every student has a unique potential waiting to be discovered. Our mission is to provide an environment that nurtures curiosity, encourages experimentation, and rewards resilience. We are committed to developing global citizens who are rooted in traditional values yet ready for the challenges of the future.
                                </p>
                            </div>

                            <div className="mt-6">
                                <div className="text-2xl font-serif font-bold text-brand-blue">Dr. Sandhya Yadav</div>
                                <div className="text-brand-red font-semibold uppercase tracking-wider text-sm mt-1">Founding Principal & Director</div>
                                <div className="mt-4 border-t border-gray-200 w-32 pt-2">
                                    <span className="font-serif italic text-gray-400">Signature</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrincipalMessage;
