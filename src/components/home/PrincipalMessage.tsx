import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

const PrincipalMessage = () => {
    return (
        <section className="py-20 bg-brand-grey overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Principal Photo */}
                    <div className="w-full lg:w-4/12 relative">
                        <div className="relative w-full aspect-4/5 md:w-80 md:h-[400px] mx-auto rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white">
                            <Image
                                src="/images/principal.png"
                                alt="Principal Dr. Sandhya Yadav"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-gold/10 rounded-2xl z-0 hidden md:block"></div>
                    </div>

                    {/* Message Content */}
                    <div className="w-full lg:w-8/12">
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-widest text-sm">
                                <div className="w-8 h-[2px] bg-brand-red"></div>
                                Welcome Message
                            </div>

                            <div className="relative">
                                <Quote className="absolute -top-6 -left-8 text-brand-gold/20 w-16 h-16 -z-1" />
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-blue mb-8 leading-tight">
                                    Message from the Principal
                                </h2>
                            </div>

                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-sans italic">
                                <p>
                                    "Education is not just about academic excellence; it is about character building, fostering empathy, and preparing young girls to lead with confidence in an ever-changing world."
                                </p>
                                <p className="not-italic text-gray-600">
                                    At Bishop Scott Girls School, we believe that every student has a unique potential waiting to be discovered. Our mission is to provide an environment that nurtures curiosity, encourages experimentation, and rewards resilience. We are committed to developing global citizens who are rooted in traditional values yet ready for the challenges of the future.
                                </p>
                            </div>

                            <div className="mt-8">
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
