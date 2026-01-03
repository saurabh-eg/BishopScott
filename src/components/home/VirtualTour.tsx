"use client";

import React, { useState } from "react";
import { PlayCircle, X } from "lucide-react";

const VirtualTour = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const youtubeUrl = "https://www.youtube.com/embed/u9rgVzVwdK8"; // Replace with your actual YouTube video ID

    return (
        <>
            <section className="py-16 bg-brand-blue text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                                Experience Our Campus Virtually
                            </h2>
                            <p className="text-white/90 text-base md:text-lg mb-6 leading-relaxed">
                                Take a virtual tour of our state-of-the-art facilities, classrooms, 
                                and sports grounds from the comfort of your home.
                            </p>
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="inline-flex items-center gap-3 bg-brand-gold text-brand-blue px-6 py-3 rounded-md font-bold hover:bg-brand-gold-light transition"
                            >
                                <PlayCircle size={24} />
                                Start Virtual Tour
                            </button>
                        </div>

                        <div className="w-full flex-1 relative">
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="relative w-full h-48 md:h-80 rounded-lg overflow-hidden border-4 border-white/20 cursor-pointer group"
                            >
                                <img
                                    src="/images/classroom.png"
                                    alt="Virtual Campus Tour"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition flex items-center justify-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-gold flex items-center justify-center group-hover:scale-110 transition">
                                        <PlayCircle className="text-brand-blue" size={32} />
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* YouTube Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setIsVideoOpen(false)}>
                    <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute -top-12 right-0 text-white hover:text-brand-gold transition"
                            aria-label="Close video"
                        >
                            <X size={32} />
                        </button>
                        <iframe
                            className="w-full h-full rounded-lg"
                            src={youtubeUrl}
                            title="Virtual Campus Tour"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default VirtualTour;
