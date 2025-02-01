import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import product1 from '@/assets/images/product/product1.jpg'
import { Heading, primary } from "@/elements/heading";
import { Button } from "@nextui-org/button";
// import Heading, { primary } from "@/elements/heading";

function TestimonialCarousel({ data }) {
    const [expandedReviews, setExpandedReviews] = useState({});
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    const generateStars = (count) => {
        return "★".repeat(count) + "☆".repeat(5 - count);
    };
    const toggleReadMore = (index) => {
        setExpandedReviews((prev) => ({ ...prev, [index]: !prev[index] }));
    };
    return (
        <div className="slider-container px-10 testimonialCarousel">
            <Slider {...settings}>
                {data.map((item, index) => {
                    return <div key={index} className="" >
                        {/* <Image alt="image" src={item.image} className="w-11/12 h-full mx-auto" /> */}
                        <div class="testimonial-item w-full flex-shrink-0 px-4">
                            <div class="bg-neutral-800 rounded-xl p-8 min-h-[236px]">
                                <div class="flex items-center mb-6">
                                    <div class="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center">
                                        <span class="text-rose-500 text-xl font-bold">{item.name.at(0)}</span>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-white font-semibold">{item.name}</h4>
                                    </div>
                                </div>
                                {/* <p class="text-gray-300 mb-6 line-clamp-3">`{`"${item.review}"`}</p> */}
                                <p className="text-gray-300">
                                    {expandedReviews[index] || item.review.length <= 110
                                        ? `"${item.review}"`
                                        : `"${item.review.slice(0, 110)}... `}
                                    {item.review.length > 110 && (
                                        <span

                                            onPress={() => toggleReadMore(index)}
                                            className="text-rose-500 text-small cursor-pointer"
                                        >
                                            {expandedReviews[index] ? "Read Less" : "Read"}
                                        </span>
                                    )}
                                </p>
                                <div class="flex text-rose-500 text-2xl">
                                    {generateStars(item.stars)}
                                </div>
                            </div>
                        </div>
                    </div >
                })}

            </Slider >
        </div >
    );
}

export default TestimonialCarousel;
