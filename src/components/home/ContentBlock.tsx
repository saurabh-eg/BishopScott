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
}

const ContentBlock = ({
    title,
    description,
    imageSrc,
    imageAlt,
    ctaText = "Learn More",
    ctaLink = "/about",
    isReversed = false,
}: ContentBlockProps) => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className={clsx("flex flex-col gap-12 items-center", isReversed ? "lg:flex-row-reverse" : "lg:flex-row")}>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-500">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                        />
                        {/* Decorative blob/shape in background - simplified as a colored border/shadow for requested clean look */}
                        <div className="absolute inset-0 border-4 border-white/20 pointer-events-none"></div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-left lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-blue mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {description}
                        </p>
                        {ctaText && (
                            <div>
                                <Link
                                    href={ctaLink}
                                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-red hover:bg-red-700 transition shadow-sm"
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
