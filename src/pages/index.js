import Crown from "@/assets/icons/crown";
import Explosion from "@/assets/icons/explosion";
import ReactIcon from "@/assets/icons/reactIcon";
import React from "@/assets/icons/reactIcon";
import AboutUs from "@/components/aboutUs";
import Responsive from "@/components/carousel";
import SimpleSlider from "@/components/carousel";
import TestimonialCarousel from "@/components/carousel/testimonial";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Query from "@/components/inqueryForm";
import Layout from "@/components/layout";
import Services from "@/components/services";
import { aboutSpatikaFigure, aboutSpatikaPoints, CarouselItem, contactNumbers, services, spatikaServicCategories, spatikaTeam, testimonials } from "@/model/constant";
import Image from "next/image";
import Link from "next/link";
// import 'dotenv/config'
import BookingForm from "@/components/BookingForm";
import { Button } from "@nextui-org/button";
import GoogleMapComponent from "@/components/GoogleMapComponent";
import Spatika from "@/components/spatika";
import SectionHeading from "@/components/sectionHeading";
import Appointment from "@/components/appointment";

function Home() {
  const destinationLatitude = 19.055764;
  const destinationLongitude = 72.900436;

  const handleShowRoute = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const origin = `${latitude},${longitude}`;
          const destination = `${destinationLatitude},${destinationLongitude}`;
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
          window.open(mapsUrl, "_blank");
        },
        (error) => {
          alert("Error fetching location. Please allow location access in your browser.");
          console.error(error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  return (
    <>
      <div>
        <Spatika />
      </div>
      {/* about  */}
      <div>
        <AboutUs />
      </div>
      {/* service */}
      <div>
        <div>
          <section id="services" className="bg-neutral-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading type={2} heading={'Our Services'} headingText={'Discover our range of premium beauty services'} />
              <Services />
            </div>
          </section>
        </div>
      </div>
      {/* testimonial  */}
      <div>
        <section id="testimonials" className=" py-20">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading heading={'Client Testimonials'} headingText={'What our clients say about us'} />
            <div className="relative">
              <TestimonialCarousel data={testimonials} />
            </div>
          </div>
        </section>
      </div>

      {/* our team  */}
      <div>
        <section id="team" className="bg-neutral-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading type={2} heading={'Meet Our Team'} headingText={'Expert stylists dedicated to your transformation'} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {
                spatikaTeam.map((item, index) => {
                  return (
                    <div className="bg-neutral-800 rounded-xl overflow-hidden group animate__animated animate__fadeInUp">
                      <div className="aspect-w-1 aspect-h-1 bg-neutral-700">
                        <div className="w-full h-80 bg-neutral-700 flex items-center justify-center overflow-hidden">
                          {/* <span className="text-neutral-400">Stylist Photo</span> */}
                          <Image src={item.image} className="max-w-64" />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                        <p className="text-rose-500 mb-4">{item.role}</p>
                        <p className="text-gray-300 mb-6">{item.description}</p>
                        <div className="flex space-x-4 text-gray-300">
                          <Link href="#" className="hover:text-rose-500 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                          </Link>
                          <Link href="#" className="hover:text-rose-500 transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>

            <div className="text-center mt-12">
              <Link href="#booking" className="inline-block bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors">
                Book an Appointment
              </Link>
            </div>
          </div>
        </section>
      </div>


      {/* Appointment */}
      <section id="booking" class="bg-white py-20">
        <Appointment />
      </section>

      {/* get in touch  */}

      <section id="contact" class="bg-neutral-900 py-16 px-4">
        <div class="max-w-6xl mx-auto">
          <SectionHeading type={2} heading={'Get in Touch'} headingText={'Book your appointment today and treat yourself to a luxurious experience'} />

          <div class="grid md:grid-cols-2 gap-12">
            <div class="bg-neutral-800 p-8 rounded-lg">
              <GoogleMapComponent />
            </div>

            <div class="space-y-8">
              <div class="bg-neutral-800 p-6 rounded-lg">
                <h3 class="text-2xl font-semibold text-white mb-4">Location</h3>
                <div>
                  <p class="text-neutral-400">101,Spatika salon and spa,Silvento Building first floor,</p>
                  <p class="text-neutral-400">Central Avenue, Opposite OLPS church</p>
                  <p class="text-neutral-400"> Chembur East, Mumbai, Maharashtra 400071</p>
                </div>
                <div className="text-end mt-3">
                  <Button
                    className="rounded-md bg-rose-500 hover:bg-rose-600 text-white font-medium py-1 h-9"
                    radius="full"
                    onPress={() => {
                      handleShowRoute()
                    }}
                  >
                    Visit
                  </Button>
                </div>

              </div>

              <div class="bg-neutral-800 p-6 rounded-lg">
                <h3 class="text-2xl font-semibold text-white mb-4">Hours</h3>
                <div class="space-y-2">
                  <p class="text-neutral-400">Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p class="text-neutral-400">Saturday: 9:00 AM - 6:00 PM</p>
                  <p class="text-neutral-400">Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div class="bg-neutral-800 p-6 rounded-lg">
                <h3 class="text-xl font-semibold text-white mb-4">Contact Info</h3>
                <div className="grid text-center grid-cols-2">
                  {contactNumbers.map((item) => {
                    return <div>
                      {/* <div className="absolute -inset-1 bg-rose-500 rounded-lg blur opacity-30"></div> */}
                      <div className="border-neutral-700 rounded-md  bg-neutral-600 my-2 mx-4 ">

                        <a href={`tel:+91${item}`} className="text-white py-2 block">{`(+91) ${item}`}</a></div>
                    </div>
                  })}
                </div>

                <div className="my-4">
                  <a href="mailto:spatikachemburdesk@gmail.com" class="flex items-center text-white hover:text-rose-500 transition-colors">
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
      </section>
    </>
  );
}
Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
export default Home