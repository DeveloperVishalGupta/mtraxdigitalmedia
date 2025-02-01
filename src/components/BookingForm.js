import React, { useState } from "react";
// import axios from "axios";
// import emailjs from "emailjs-com";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: "Rohini Jain",
        email: "rohini@example.com",
        phone: "+911234567890",  // Ensure country code is included
        service: "haircut",
        notes: "Please use organic products.",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ WhatsApp API Request
        try {
            await axios.post(
                "https://graph.facebook.com/v19.0/YOUR_PHONE_NUMBER_ID/messages",
                {
                    messaging_product: "whatsapp",
                    to: formData.phone,
                    type: "text",
                    text: { body: `Hello ${formData.name}, your appointment for ${formData.service} is booked!` },
                },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_WHATSAPP_ACCESS_TOKEN}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("WhatsApp message sent!");
        } catch (error) {
            console.error("WhatsApp API Error:", error.response?.data || error.message);
        }

        // ✅ EmailJS Email Sending
        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    user_phone: formData.phone,
                    user_service: formData.service,
                    user_notes: formData.notes,
                },
                process.env.REACT_APP_EMAILJS_USER_ID
            );
            console.log("Email sent successfully!");
        } catch (error) {
            console.error("EmailJS Error:", error);
        }
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
                    <option value="haircut">Haircut & Styling</option>
                    <option value="color">Hair Coloring</option>
                    <option value="treatment">Hair Treatment</option>
                    <option value="makeup">Makeup Service</option>
                    <option value="spa">Spa Treatment</option>
                    <option value="nails">Nail Care</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors"
            >
                Book Appointment
            </button>
        </form>
    );
};

export default BookingForm;
