import React from 'react'
import BookingForm from '../BookingForm'
import SectionHeading from '../sectionHeading'
import WhatsappIcon from '@/assets/icons/whatsapp'
import Link from 'next/link'

function Appointment() {
    return (
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-fit">
            <SectionHeading heading={'Book Your Appointment'} headingText={'Schedule your transformation today'} />

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Booking Form  */}
                <div class="bg-neutral-900 rounded-xl p-8 animate__animated animate__fadeInLeft">
                    <BookingForm />
                </div>

                {/* Booking Information  */}
                <div class="space-y-8 animate__animated animate__fadeInRight">
                    {/* Booking on WhatsApp */}
                    <div class="bg-neutral-100 rounded-xl p-8">
                        <h3 class="text-2xl font-bold text-neutral-900 mb-4">Appointment on WhatsApp</h3>
                        <p class="text-neutral-600 mb-6">Easily Book Your Appointment with Us!</p>
                        <div class="space-y-4">
                            <Link
                                href="https://wa.me/919004101806?text=Hello,%20I'm%20interested%20to%20book%20your%20service.%20Can%20you%20explain%20the%20price?"
                                className="text-neutral-600 hover:text-pink-500 flex"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WhatsappIcon width={26} height={26} />
                                <span className='mx-2'>+91 9004101806</span>
                            </Link>
                        </div>
                    </div>
                    <div class="bg-neutral-100 rounded-xl p-8">
                        <h3 class="text-2xl font-bold text-neutral-900 mb-4">Booking Information</h3>
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <svg class="w-6 h-6 text-rose-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="text-neutral-600">Appointments available Monday to Saturday, 9 AM - 6 PM</p>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-6 h-6 text-rose-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="text-neutral-600">24-hour cancellation notice required</p>
                            </li>
                            <li class="flex items-start">
                                <svg class="w-6 h-6 text-rose-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="text-neutral-600">Consultation included with all services</p>
                            </li>
                        </ul>
                    </div>


                    <div class="bg-neutral-100 rounded-xl p-8">
                        <h3 class="text-2xl font-bold text-neutral-900 mb-4">Need Help?</h3>
                        <p class="text-neutral-600 mb-6">Contact our customer service team for assistance with booking</p>
                        <div class="space-y-4">
                            <a href="tel:+918655165656" class="flex items-center text-neutral-600 hover:text-rose-500 transition-colors">
                                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                (+91) 86551 65656
                            </a>
                            <a href="mailto:spatikachemburdesk@gmail.com" class="flex items-center text-neutral-600 hover:text-rose-500 transition-colors">
                                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                spatikachemburdesk@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment