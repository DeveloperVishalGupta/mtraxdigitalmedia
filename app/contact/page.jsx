'use client';
import { Input, Textarea } from '@heroui/input';
import { title } from '../../components/primitives';
import { Select, SelectItem } from '@heroui/select';
import { Button } from '@heroui/button';
import Discribe from '../../components/discribe';
import GetInTouch from '../../components/GetInTouch';
import { Card, CardBody } from '@heroui/card';
import GoogleMap from '../../components/GoogleMap';
import { contactNumbers } from '../../constant';
// import {Card, CardHeader, CardBody, CardFooter} from "@heroui/react";

export const prefrences = [
  { key: 'inquiry', label: 'Inquiry' },
  { key: 'request', label: 'Request' },
  { key: 'support for any services', label: 'Support for any services' },
  { key: 'revenue shareing plan', label: 'Revenue shareing plan' },
];

export default function ContactPage() {
  const destinationLatitude = 26.872576;
  const destinationLongitude = 80.937831;
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
    <div className="flex flex-col gap-y-10 ">
       <div className="px-4 flex justify-center text-center md:text-start">
          <h1 className={title({  })}>Get In Touch</h1>
         
        </div>
      {/* <div className=":ps-10"> */}
        <div className="text-center  md:text-start">
          {/* <div className="max-w-6xl mx-auto"> */}
            <div className="grid md:grid-cols-2 gap-12">
          <div> <GoogleMap /></div>
           <div className=" bg-transGray row-span-2 w-full flex flex-col gap-4  rounded-lg px-4 sm:px-10 py-8">
            <Input
              label="Name"
              type="email"
              variant="faded"
              placeholder="Enter your name"
              isRequired
              isClearable
            />
            <Select
              isRequired
              className=""
              variant="faded"
              label="Select your prefrences"
              placeholder="Select prefrences"
            >
              {prefrences.map((item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              ))}
            </Select>
            <Input
              label="Mobile"
              placeholder="Enter your Mobile no."
              variant="faded"
              type="mobile"
              isRequired
              isClearable
            /> <Input
              label="Email"
              placeholder="Enter your email"
              variant="faded"
              type="email"
              isRequired
              isClearable
            />
            <Textarea
              isRequired
              isClearable
              variant="faded"
              minRows={4}
              label="Description"
              placeholder="Enter your description"
            />
            <Button color="danger" variant="bordered">
              Send message
            </Button>
          </div>

              {/* <div className="space-y-8"> */}
                <div className="bg-neutral-800 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Location
                  </h3>
                  <div>
                    <p className="text-neutral-400">
                      MTrax Digital Media Office 

                    </p>
                    <p className="text-neutral-400">
                D-50, IT Chauraha, Nirala Nagar,
                
              </p>
                <p className="text-neutral-400">
                Lucknow, Uttar Pradesh 226020
                    </p>
                  </div>
                  <div className="text-end mt-3">
                    <Button
                      name="visit"
                      className="rounded-md bg-rose-500 hover:bg-rose-600 text-white font-medium py-1 h-9"
                      radius="full"
                      onPress={() => {
                        handleShowRoute();
                      }}
                    >
                      Visit
                    </Button>
                  </div>
                </div>

          <div className="bg-neutral-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Contact Info
                  </h3>
                  <div className="grid text-center grid-cols-2">
                    {contactNumbers.map((item, index) => {
                      return (
                        <div key={index}>
                          <div className="border-neutral-700 rounded-md  bg-neutral-600 my-2 mx-4 ">
                            <a
                              href={`tel:+91${item}`}
                              className="text-white py-2 block"
                            >{`(+91) ${item}`}</a>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="my-4">
                    <a
                      href="mailto:spatikachemburdesk@gmail.com"
                      className="flex items-center text-white hover:text-rose-500 transition-colors"
                    >
                      <svg
                        className="w-6 h-6 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      spatikachemburdesk@gmail.com
                    </a>
                  </div>
                </div>
                <div className="bg-neutral-800 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-white mb-4">Hours</h3>
                  <div className="space-y-2">
                    <p className="text-neutral-400">
                      Monday - Friday: 9:00 AM - 8:00 PM
                    </p>
                    <p className="text-neutral-400">Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-neutral-400">Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>

                
              {/* </div> */}
            </div>
          {/* </div> */}
        </div>
       
      {/* </div> */}
      <div className="px-4 sm:px-0">
        <Discribe />
      </div>
    </div>
  );
}
