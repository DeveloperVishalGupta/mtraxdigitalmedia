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

                    {/* Mobile Menu Button */}
                    {/* <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div> */}
                </div>
            </div>

            {/* Mobile Menu */}
            {/* {isMobileMenuOpen && (
                <div className="md:hidden bg-neutral-900">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
                                className="block px-3 py-2 text-gray-300 hover:text-rose-500 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="#booking"
                            className="block px-3 py-2 bg-rose-500 text-white text-center rounded-md hover:bg-rose-600 transition-colors"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            )} */}
        </nav>
    );
};

export default Navbar;