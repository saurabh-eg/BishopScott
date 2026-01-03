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
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className={clsx("flex flex-col gap-10 lg:gap-16 items-center", isReversed ? "lg:flex-row-reverse" : "lg:flex-row")}>

                    {/* Image Side */}
                    <div className="w-full lg:w-5/12 relative h-[280px] md:h-[360px] lg:h-[400px] rounded-lg overflow-hidden shadow-sm border border-gray-200">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center text-left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-brand-blue mb-4 leading-tight">
                            {title}
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed mb-6">
                            {description}
                        </p>

                        {features.length > 0 && (
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
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
                                    className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold rounded-md text-white bg-brand-red hover:bg-brand-red/90 transition shadow-sm uppercase tracking-wider"
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
