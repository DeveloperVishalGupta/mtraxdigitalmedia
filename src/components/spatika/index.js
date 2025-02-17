import { spatikaServicCategories } from '@/model/constant'
import Link from 'next/link'
import React from 'react'

function Spatika() {
    return (
        <section id="Spatika" className="bg-neutral-900 min-h-[70vh] border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col md:flex-row items-center justify-between h-full py-16">
                    <div className="w-full md:w-1/2 space-y-8 animate__animated animate__fadeInLeft">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">
                            Transform Your Look at <span className="text-rose-500 font-bold">Spatika</span>
                        </h1>
                        <p className="text-lg text-gray-300">
                            Experience luxury beauty treatments and expert styling from our award-winning team of professionals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#booking" className="inline-block bg-rose-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-rose-600 transition-colors text-center animate__animated animate__pulse animate__infinite">
                                Book Appointment
                            </Link>
                            <Link href="#services" className="inline-block bg-transparent border-2 border-rose-500 text-rose-500 px-8 py-3 rounded-md text-lg font-semibold hover:bg-rose-500 hover:text-white transition-colors text-center">
                                Our Services
                            </Link>
                        </div>
                        <div className="flex items-center gap-8 pt-8">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-rose-500">2500+</p>
                                <p className="text-gray-300">Happy Clients</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-rose-500">15+</p>
                                <p className="text-gray-300">Expert Stylists</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-rose-500">50+</p>
                                <p className="text-gray-300">Services</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-12 md:mt-0 animate__animated animate__fadeInRight">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-rose-500 rounded-lg blur opacity-30"></div>
                            <div className="relative bg-neutral-800 rounded-lg p-4 md:p-8">
                                <div className="grid grid-cols-1 gap-4">
                                    {
                                        spatikaServicCategories.map((item, index) => {
                                            if (spatikaServicCategories.length - 1 !== index) {
                                                return (
                                                    <div className="bg-neutral-700 rounded-lg p-4 hover:bg-neutral-600 transition-colors">
                                                        <h3 className="text-xl font-semibold text-rose-500">{item.title}</h3>
                                                        <p className="text-gray-300">{item.discription}</p>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div className="bg-neutral-700 md:col-span-2 rounded-lg p-4 hover:bg-neutral-600 transition-colors">
                                                        <h3 className="text-xl font-semibold text-rose-500">{item.title}</h3>
                                                        <p className="text-gray-300">{item.discription}</p>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Spatika