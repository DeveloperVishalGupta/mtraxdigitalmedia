
import React from "@/assets/icons/reactIcon";
import AboutUs from "@/components/aboutUs";
import TestimonialCarousel from "@/components/carousel/testimonial";
import Layout from "@/components/layout";
import Services from "@/components/services";
import { contactNumbers, partenrs, testimonials } from "@/model/constant";
import { Button } from "@nextui-org/button";
import GoogleMapComponent from "@/components/GoogleMapComponent";
import Spatika from "@/components/spatika";
import SectionHeading from "@/components/sectionHeading";
import Appointment from "@/components/appointment";
import Team from "@/components/team";
import Gallery from "@/components/gallery";
import SEO from "@/components/SEO";

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
    <div className="relative">
      <SEO
        title="Spatika Spa & Salon - Relax & Rejuvenate"
        description="Experience luxury with our expert salon & spa services. Book your appointment today for a rejuvenating experience."
        keywords="Salon, Spa, Haircut, Massage, Beauty, Relaxation, Wellness"
        url="http://spatikaspasalon.com"
        image={Spatika}
      />
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
        <Team />
      </div>


      {/* Appointment */}
      <section id="booking" class="bg-white py-20">
        <Appointment />
      </section>

      {/* get in touch  */}

      <section id="contact" class="bg-neutral-900 py-16 px-4">
        <div class="max-w-6xl mx-auto">
          <SectionHeading type={2} heading={'Get in Touch'} headingText={'Get in touch today and indulge in a luxurious experience.'} />

          <div class="grid md:grid-cols-2 gap-12">
            <div class=" p-6 rounded-lg overflow-hidden">
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
                    name="visit"
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
      {/* partenrs Gallery */}
      <div>
        <Gallery heading={'Our Partners'} headingText={'Trusted by Our Partners for Exceptional Transformations'} data={partenrs} />
      </div>
    </div>
  );
}
Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
export default Home