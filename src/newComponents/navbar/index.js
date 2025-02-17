import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav id="navbar" className=" fixed w-full z-50">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-rose-500">GlamourLux</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="">
                        <div className="ml-10 flex items-center space-x-8">
                            {[
                                "Home",
                                "About",
                                "Services",
                                "Gallery",
                                "Team",
                                "Pricing",
                                "Testimonials",
                                "Contact",
                            ].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-300 hover:text-rose-500 transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                            <a
                                href="#booking"
                                className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors animate__animated animate__pulse animate__infinite"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;