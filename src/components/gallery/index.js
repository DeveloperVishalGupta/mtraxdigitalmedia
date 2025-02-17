import React from 'react'
import SectionHeading from '../sectionHeading'
import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/card';

function Gallery({ heading, headingText, filter = false, data, showMoreButton = false }) {
    return (
        <div>
            <section id="gallery" class="bg-white py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading heading={heading} headingText={headingText} />

                    {/* Gallery Filter  */}
                    {filter &&
                        <div class="flex justify-center flex-wrap gap-4 mb-12">
                            <button class="filter-btn active bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors" data-filter="all">
                                All
                            </button>
                            <button class="filter-btn bg-neutral-200 text-neutral-700 px-6 py-2 rounded-full hover:bg-rose-500 hover:text-white transition-colors" data-filter="hair">
                                Hair
                            </button>
                            <button class="filter-btn bg-neutral-200 text-neutral-700 px-6 py-2 rounded-full hover:bg-rose-500 hover:text-white transition-colors" data-filter="makeup">
                                Makeup
                            </button>
                            <button class="filter-btn bg-neutral-200 text-neutral-700 px-6 py-2 rounded-full hover:bg-rose-500 hover:text-white transition-colors" data-filter="nails">
                                Nails
                            </button>
                        </div>
                    }

                    {/* Gallery Grid */}
                    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6" id="gallery-grid">
                        {/* Gallery items will be dynamically populated  */}
                        {
                            data.map((item) => {
                                let partnersCardStyle = {}; // Fixed variable name
                                if (
                                    item.title === "Brazilian Hairtech" ||
                                    item.title === "Deplieve" ||
                                    item.title === 'Jeannot' ||
                                    item.title === 'Moroccan Oil' ||
                                    item.title === 'Raaga'

                                ) {
                                    partnersCardStyle.backgroundColor = '#525252'; // Fixed property name
                                }

                                return (
                                    <div class="gallery-item border rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 animate__animated animate__fadeIn">
                                        <Card className="items-center " style={partnersCardStyle}>
                                            <CardBody className="overflow-visible">
                                                <Image loading='lazy' src={item.img} alt={item.title} className='w-full max-w-44 h-auto mx-auto' />
                                            </CardBody>

                                        </Card>

                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* Load More Button  */}
                    {showMoreButton &&
                        <div div class="text-center mt-12">
                            <button id="load-more" class="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors">
                                Load More
                            </button>
                        </div>
                    }

                </div>

                {/* Lightbox Modal  */}
                <div id="lightbox" class="fixed inset-0 bg-black bg-opacity-90 hidden z-50">
                    <button class="absolute top-4 right-4 text-white text-4xl">&times;</button>
                    <div class="flex items-center justify-center h-full">
                        <Image loading='lazy' id="lightbox-img" src="" alt="" class="max-h-[90vh] max-w-[90vw] object-contain" />
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Gallery
