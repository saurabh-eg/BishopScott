import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

const NewsSection = () => {
    const news = [
        {
            title: "Annual Sports Day Winners",
            date: "Dec 15, 2025",
            image: "/images/sports.png",
            excerpt: "Celebrating the champions of our inter-house athletics competition."
        },
        {
            title: "Science Exhibition 2025",
            date: "Jan 10, 2026",
            image: "/images/lab.png",
            excerpt: "Students showcased innovative models on sustainable energy."
        },
        {
            title: "Cultural Fest Highlights",
            date: "Feb 05, 2026",
            image: "/images/events.png",
            excerpt: "A mesmerizing evening of dance, drama, and music by our talented wings."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-brand-blue font-serif font-bold text-3xl md:text-5xl mb-4">Latest News & Updates</h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {news.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition group">
                            <div className="relative h-56 overflow-hidden">
                                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition duration-700" />
                                <div className="absolute top-4 left-4 bg-brand-gold text-brand-blue px-3 py-1 rounded text-xs font-bold flex items-center gap-1">
                                    <Calendar size={12} /> {item.date}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif font-bold text-xl text-brand-blue mb-3 group-hover:text-brand-red transition">
                                    <Link href="/news">{item.title}</Link>
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                                <Link href="/news" className="text-brand-red font-bold text-sm hover:underline">Read More &rarr;</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
