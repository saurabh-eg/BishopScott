import React from "react";
import Link from "next/link";
import { PlayCircle, Video } from "lucide-react";
import Image from "next/image";

const VirtualTour = () => {
    return (
        <section className="py-16 bg-brand-blue text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                            Experience Our Campus Virtually
                        </h2>
                        <p className="text-white/90 text-lg mb-6 leading-relaxed">
                            Take a virtual tour of our state-of-the-art facilities, classrooms, 
                            and sports grounds from the comfort of your home.
                        </p>
                        <Link
                            href="/virtual-tour"
                            className="inline-flex items-center gap-3 bg-brand-gold text-brand-blue px-6 py-3 rounded-md font-bold hover:bg-brand-gold-light transition"
                        >
                            <PlayCircle size={24} />
                            Start Virtual Tour
                        </Link>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-4 border-white/20">
                            <Image
                                src="/images/classroom.png"
                                alt="Virtual Campus Tour"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                                    <Video className="text-brand-blue" size={32} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VirtualTour;
