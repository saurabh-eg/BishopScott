import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface ContentBlockProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    ctaText?: string;
    ctaLink?: string;
    isReversed?: boolean; // If true, image is on the right
    features?: string[]; // Optional bullet points
}

const ContentBlock = ({
    title,
    description,
    imageSrc,
    imageAlt,
    ctaText = "Learn More",
    ctaLink = "/about",
    isReversed = false,
    features = [],
}: ContentBlockProps) => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className={clsx("flex flex-col gap-12 lg:gap-20 items-center", isReversed ? "lg:flex-row-reverse" : "lg:flex-row")}>

                    {/* Image Side - Now 5/12 on large screens */}
                    <div className="w-full lg:w-5/12 relative h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 border-8 border-white/10 pointer-events-none"></div>
                    </div>

                    {/* Text Side - Now 7/12 on large screens */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-blue mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {description}
                        </p>

                        {features.length > 0 && (
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700">
                                        <div className="w-2 h-2 rounded-full bg-brand-gold shrink-0"></div>
                                        <span className="text-base font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {ctaText && (
                            <div>
                                <Link
                                    href={ctaLink}
                                    className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-bold rounded-md text-white bg-brand-red hover:bg-brand-red/90 transition shadow-lg hover:shadow-xl uppercase tracking-wider"
                                >
                                    {ctaText}
                                </Link>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContentBlock;
