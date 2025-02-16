import ArrowUp from "@/assets/icons/arrow-up";
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Check scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {isVisible && (
                <div onClick={scrollToTop} className="bottom-5 right-5 fixed mt-12 md:mt-0 animate__animated animate__fadeInRight">
                    <div className="absolute -inset-1 bg-rose-500 rounded-lg blur opacity-30"></div>
                    <div className="bg-neutral-600 hover:text-rose-500 px-5 py-4 relative rounded-lg text-center text-white">
                        <ArrowUp />
                    </div>
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
