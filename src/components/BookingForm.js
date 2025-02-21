import React, { useState } from "react";
import emailjs from '@emailjs/browser'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal";
import { Button } from "@heroui/button";
import WhatsappIcon from "@/assets/icons/whatsapp";
import { Link } from "@heroui/link";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
    });
    const [isValid, setIsValid] = useState(false)
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const message = encodeURIComponent(
        `Hello!! Spatika 👋  
      
      I’d like to book an appointment for *${formData.service}*. Could you please provide me with more details?  
      
      Here’s my contact info:  
      📞 *Phone:* ${formData.phone}  
      📧 *Email:* ${formData.email}  
      
      Looking forward to your response. Thanks! 😊`
    );
    const whatsappUrl = `https://wa.me/919004101806?text=${message}`;
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target

        const templateParams = {
            user_name: formData.name,
            user_email: formData.email,
            user_phone: formData.phone,
            selected_service: formData.service,
        };

        emailjs
            .sendForm(
                "service_gufy53j",  // Replace with actual Service ID
                "template_axz6j8l", // Replace with actual Template ID
                // templateParams,
                form,
                "wzomne5c6xqcdEf4D"   // Replace with actual Public Key from EmailJS
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    setIsValid(true)
                    // isOpen()
                },
                (error) => {
                    console.log("Email sending failed:", error);
                    setIsValid(false)
                    // isOpen()
                }
            );
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 text-white">
            <div>
                <label className="block mb-2" htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 focus:outline-none transition-colors"
                    required
                />
            </div>

            <div>
                <label className="block mb-2" htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 focus:outline-none transition-colors"
                    required
                />
            </div>

            <div>
                <label className="block mb-2" htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 focus:outline-none transition-colors"
                    required
                />
            </div>

            <div>
                <label className="block mb-2" htmlFor="service">Select Service</label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white border border-neutral-700 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 focus:outline-none transition-colors"
                    required
                >
                    <option value="">Choose a service</option>
                    <option value="Haircut & Styling">Haircut & Styling</option>
                    <option value="Hair Coloring">Hair Coloring</option>
                    <option value="Hair Treatment">Hair Treatment</option>
                    <option value="Makeup Service">Makeup Service</option>
                    <option value="Spa Treatment">Spa Treatment</option>
                    <option value="Nail Care">Nail Care</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors"
            >
                Book Appointment
            </button>

            <Link
                href={whatsappUrl}
                className="text-neutral-400 hover:text-pink-500 w-full flex flex-col items-start "
                target="_blank"
                rel="noopener noreferrer"
                isDisabled={formData.email && formData.phone ? false : true}
            >
                <button
                    type="button"
                    className="w-full flex justify-center items-center bg-rose-500 mt-4 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors"
                >
                    <span className="me-2">Book Appointment on WhatsApp</span> <WhatsappIcon width={26} height={26} />
                </button>
                <p className="text-xs text-neutral-300 m-0"> Fill out the form above to activate this button.</p>
            </Link>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                {isValid
                                    ? <p>Thank you for reaching out! Our team will contact you as soon as possible if you have provided the correct details.</p>
                                    : <p>Please fill in the correct details so we can assist you promptly.</p>
                                }
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </form>
    );
};

export default BookingForm;
