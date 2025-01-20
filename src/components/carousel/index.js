import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import product1 from '@/assets/images/product/product1.jpg'
import { Heading, primary } from "@/elements/heading";
// import Heading, { primary } from "@/elements/heading";

function SimpleSlider({ data }) {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="slider-container ">
            <Slider {...settings}>
                {data.map((item, index) => {
                    return <div key={index} className="carouselHight" >
                        <Image alt="image" src={item.image} className="w-11/12 h-full mx-auto" />
                    </div >
                })}

            </Slider >
        </div >
    );
}

export default SimpleSlider;
