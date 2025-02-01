import { aboutSpatikaFigure, aboutSpatikaPoints } from "@/model/constant";
import Link from "next/link";
import React from "react";
import SectionHeading from "../sectionHeading";

const AboutUs = () => {
    return (
        <section id="about" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading heading={'About Spatika'} type={1} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 animate__animated animate__fadeInLeft">
                        <h3 className="text-3xl font-semibold text-neutral-800">Your Beauty Journey Starts Here</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            With over a decade of experience in the beauty industry, GlamourLux has been transforming lives through exceptional beauty services and personalized care.
                        </p>
                        <div className="space-y-4">
                            {
                                aboutSpatikaPoints.map((item, index) => {
                                    return (
                                        <div key={index} className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-100">
                                                    {item.icon}
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-neutral-800">{item.title}</h4>
                                                <p className="text-neutral-600">{item.discribe}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="relative animate__animated animate__fadeInRight">
                        <div className="absolute -inset-2 bg-rose-500 rounded-xl blur opacity-20"></div>
                        <div className="relative bg-white p-8 rounded-xl shadow-2xl">
                            <div className="grid grid-cols-2 gap-6">
                                {aboutSpatikaFigure.map((item, index) => {
                                    return (
                                        <div key={index} className="text-center">
                                            <div className="text-4xl font-bold text-rose-500">{item.figure}</div>
                                            <p className="text-neutral-600">{item.title}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="mt-8">
                                <Link href="#booking" className="block text-center bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors">
                                    Schedule Your Visit
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
