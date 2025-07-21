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
import { WhatsappIcon } from '../../assets/brand-Icons';
import { PhoneIcon } from '../../assets/icons/icons';
import Link from 'next/link';
import { useState } from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@heroui/modal';

export const preferences = [
  { key: 'enquiry', label: 'Enquiry' },
  { key: 'request', label: 'Request' },
  { key: 'support for any services', label: 'Support for any services' },
  { key: 'revenue Sharing Plan', label: 'Revenue Sharing Plan' },
];

export default function ContactPage() {
  const {
    isOpen: isErrorOpen,
    onOpen: onErrorOpen,
    onOpenChange: onErrorOpenChange,
  } = useDisclosure();

  const {
    isOpen: isSuccessOpen,
    onOpen: onSuccessOpen,
    onOpenChange: onSuccessOpenChange,
  } = useDisclosure();

  const [missingFields, setMissingFields] = useState([]);
  const [waitingForResponse, setWaitingForResponse] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    preference: '',
    mobile: '',
    email: '',
    description: '',
  });
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
          window.open(mapsUrl, '_blank');
        },
        (error) => {
          alert(
            'Error fetching location. Please allow location access in your browser.'
          );
          console.error(error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (key) => {
    setFormData((prev) => ({ ...prev, preference: key }));
  };

  const submitQueryForm = async () => {
    const requiredFields = [
      'name',
      'preference',
      'mobile',
      'email',
      'description',
    ];
    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      setMissingFields(emptyFields);
      onErrorOpen();
      return;
    }
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SHEETDB_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ data: formData }), // Important: SheetDB expects { data: {...} }
      });
      setWaitingForResponse(true);

      const result = await response.json();
      if (!result.error) {
        onSuccessOpen();
        setFormData({
          name: '',
          preference: '',
          mobile: '',
          email: '',
          description: '',
        });
        setWaitingForResponse(false);
      }
    } catch (error) {
      console.error('Error while submitting form:', error);
    }
  };

  return (
    <div className="flex flex-col gap-y-10 lg:px-28">
      <div className="px-4 flex justify-center text-center md:text-start">
        <h1 className={title({})}>Get In Touch</h1>
      </div>
      <div className="text-center  md:text-start">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-transGray row-span-2 w-full flex flex-col gap-4 rounded-lg px-4 sm:px-10 py-8">
            <Input
              name="name"
              label="Name"
              type="text"
              variant="faded"
              placeholder="Enter your name"
              isRequired
              isClearable
              value={formData.name}
              onChange={handleChange}
            />

            <Select
              name="preference"
              label="Select your preferences"
              placeholder="Select preferences"
              variant="faded"
              isRequired
              selectedKeys={[formData.preference]}
              onSelectionChange={(keys) => handleSelectChange([...keys][0])}
            >
              {preferences.map((item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              ))}
            </Select>

            <Input
              name="mobile"
              label="Mobile"
              placeholder="Enter your Mobile no."
              variant="faded"
              type="tel"
              isRequired
              isClearable
              value={formData.mobile}
              onChange={handleChange}
            />

            <Input
              name="email"
              label="Email"
              placeholder="Enter your email"
              variant="faded"
              type="email"
              isRequired
              isClearable
              value={formData.email}
              onChange={handleChange}
            />

            <Textarea
              name="description"
              label="Description"
              placeholder="Enter your description"
              variant="faded"
              minRows={4}
              isRequired
              isClearable
              value={formData.description}
              onChange={handleChange}
            />

            <Button
              type="button"
              onPress={submitQueryForm}
              color="danger"
              variant="bordered"
              isLoading={waitingForResponse}
            >
              Send message
            </Button>
          </div>

          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">Location</h3>
            <div>
              <p className="text-neutral-400">MTrax Digital Media Office</p>
              <p className="text-neutral-400">
                D-50, IT Chauraha, Nirala Nagar,
              </p>
              <p className="text-neutral-400">Lucknow, Uttar Pradesh 226020</p>
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
                if (item.type === 1) {
                  return (
                    <div key={index}>
                      <div className="border-neutral-700 rounded-md  flex items-center justify-center gap-2  bg-neutral-600 my-2 mx-4 ">
                        <PhoneIcon color={'#fff'} />
                        <Link
                          href={`tel:+91${item.phone}`}
                          className="text-white py-2 block"
                        >{`(+91) ${item.phone}`}</Link>
                      </div>
                    </div>
                  );
                } else {
                  const message = encodeURIComponent(
                    `Hello!! MTrax Digital Media
      
I'm interested in your services.
Could you please share more details?

Here's my contact info:
Phone: +91 XXXXX XXXXX
Email: myEmail@gmail.com  

Looking forward to hearing from you. Thanks!`
                  );
                  const whatsappUrl = `https://wa.me/91${item.phone}?text=${message}`;
                  return (
                    <div key={index}>
                      <div className="border-neutral-700 rounded-md flex items-center justify-center gap-2 bg-neutral-600 my-2 mx-4 ">
                        <WhatsappIcon />
                        <Link
                          target="_blank"
                          href={whatsappUrl}
                          className="text-white py-2 block"
                        >{`(+91) ${item.phone}`}</Link>
                      </div>
                    </div>
                  );
                }
              })}
            </div>

            <div className="my-4">
              <Link
                target="_blank"
                href={`mailto:mtraxdigitalmedia@gmail.com?subject=${encodeURIComponent('Music Service Inquiry')}&body=${encodeURIComponent(
                  "Hello!! MTrax Digital Media, \n\n I'm interested in your services.\nCould you please share more details?\n\nHere's my contact info:\nPhone: +91 XXXXX XXXXX\nEmail: myEmail@gmail.com\n\nLooking forward to hearing from you. Thanks!"
                )}`}
                className="flex items-center transition-colors"
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
                mtraxdigitalmedia@gmail.com
              </Link>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Hours</h3>
              <div className="space-y-2">
                <p className="text-neutral-400">
                  Monday - Friday: 10:00 AM - 8:00 PM
                </p>
                <p className="text-neutral-400">
                  Saturday: 10:00 AM - 01:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-0">
        <Discribe />
      </div>
      {/* ❌ Error Modal for Missing Fields */}
      <Modal isOpen={isErrorOpen} onOpenChange={onErrorOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-red-400">
                Missing Required Fields
              </ModalHeader>
              <ModalBody>
                <p>Please fill the following:</p>
                <ul className="list-disc pl-5 text-red-400">
                  {missingFields.map((field) => (
                    <li key={field}>{field.toUpperCase()}</li>
                  ))}
                </ul>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* ✅ Success Modal */}
      <Modal isOpen={isSuccessOpen} onOpenChange={onSuccessOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-green-600">
                Form Submitted!
              </ModalHeader>
              <ModalBody>
                <p>
                  Your message has been successfully sent. We'll get back to you
                  soon.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onPress={onClose}>
                  OK
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
