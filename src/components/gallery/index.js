import { Image } from '@nextui-org/image'
import React from 'react'

function Gallery() {
    return (
        <div>
            <section id="gallery" class="bg-white py-20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 class="text-4xl font-bold text-neutral-900 mb-4">Our Gallery</h2>
                        <p class="text-neutral-600">Beautiful transformations by our expert team</p>
                        <div class="w-24 h-1 bg-rose-500 mx-auto mt-4"></div>
                    </div>

                    {/* Gallery Filter  */}
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

                    {/* Gallery Grid */}
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="gallery-grid">
                        {/* Gallery items will be dynamically populated  */}
                        <div class="gallery-item bg-neutral-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 h-64 animate__animated animate__fadeIn">
                            <div class="h-full bg-neutral-200 flex items-center justify-center">
                                <span class="text-neutral-400">Image Placeholder</span>
                            </div>
                        </div>
                        <div class="gallery-item bg-neutral-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 h-64 animate__animated animate__fadeIn">
                            <div class="h-full bg-neutral-200 flex items-center justify-center">
                                <span class="text-neutral-400">Image Placeholder</span>
                            </div>
                        </div>
                        <div class="gallery-item bg-neutral-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 h-64 animate__animated animate__fadeIn">
                            <div class="h-full bg-neutral-200 flex items-center justify-center">
                                <span class="text-neutral-400">Image Placeholder</span>
                            </div>
                        </div>
                        <div class="gallery-item bg-neutral-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 h-64 animate__animated animate__fadeIn">
                            <div class="h-full bg-neutral-200 flex items-center justify-center">
                                <span class="text-neutral-400">Image Placeholder</span>
                            </div>
                        </div>
                        <div class="gallery-item bg-neutral-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 h-64 animate__animated animate__fadeIn">
                            <div class="h-full bg-neutral-200 flex items-center justify-center">
                                <span class="text-neutral-400">Image Placeholder</span>
                            </div>
                        </div>
                        <div class="gallery-item bg-neutral-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 h-64 animate__animated animate__fadeIn">
                            <div class="h-full bg-neutral-200 flex items-center justify-center">
                                <span class="text-neutral-400">Image Placeholder</span>
                            </div>
                        </div>
                    </div>

                    {/* Load More Button  */}
                    <div class="text-center mt-12">
                        <button id="load-more" class="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors">
                            Load More
                        </button>
                    </div>
                </div>

                {/* Lightbox Modal  */}
                <div id="lightbox" class="fixed inset-0 bg-black bg-opacity-90 hidden z-50">
                    <button class="absolute top-4 right-4 text-white text-4xl">&times;</button>
                    <div class="flex items-center justify-center h-full">
                        <Image id="lightbox-img" src="" alt="" class="max-h-[90vh] max-w-[90vw] object-contain" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery
