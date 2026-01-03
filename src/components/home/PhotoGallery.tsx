import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, ArrowRight } from "lucide-react";

const photos = [
    { src: "/images/classroom.png", alt: "Modern Classrooms" },
    { src: "/images/lab.png", alt: "Science Laboratory" },
    { src: "/images/sports.png", alt: "Sports Facilities" },
    { src: "/images/library.png", alt: "Library Resources" },
    { src: "/images/art.png", alt: "Arts & Culture" },
    { src: "/images/events.png", alt: "School Events" },
];

const PhotoGallery = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-wider text-sm mb-3">
                        <Camera size={18} />
                        <span>Gallery</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-blue mb-3">
                        Life at Bishop Scott
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Glimpses of learning, growth, and joyful moments on our campus.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
                    {photos.map((photo, idx) => (
                        <div
                            key={idx}
                            className="relative h-48 md:h-64 rounded-lg overflow-hidden border border-gray-200"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover hover:opacity-90 transition"
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-red transition"
                    >
                        View Full Gallery <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PhotoGallery;
