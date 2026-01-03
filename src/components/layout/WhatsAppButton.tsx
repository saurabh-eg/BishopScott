"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleWhatsAppClick = () => {
        const phoneNumber = "919999999999"; // Replace with actual number
        const message = encodeURIComponent("Hi, I'm interested in admission at Bishop Scott Girls School.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-105"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={28} />
        </button>
    );
};

export default WhatsAppButton;
