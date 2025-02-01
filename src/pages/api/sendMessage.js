// pages/api/sendMessage.js
export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, phone, service, notes } = req.body;

    // Load environment variables
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const emailSecretKey = process.env.EMAILJS_SECRET_KEY;
    // const twilioSid = process.env.TWILIO_ACCOUNT_SID;
    // const twilioAuth = process.env.TWILIO_AUTH_TOKEN;
    // const twilioNumber = process.env.TWILIO_WHATSAPP_NUMBER;
    // || !twilioSid || !twilioAuth || !twilioNumber
    if (!serviceId || !templateId || !emailSecretKey) {
        return res.status(500).json({ message: "Missing environment variables" });
    }

    try {
        // Sending Email using EmailJS API
        const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                service_id: serviceId,
                template_id: templateId,
                user_id: emailSecretKey,
                template_params: { name, email, phone, service, notes },
            }),
        });

        // Sending WhatsApp message using Twilio API
        // const twilioResponse = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
        //     method: "POST",
        //     headers: {
        //         Authorization: `Basic ${Buffer.from(`${twilioSid}:${twilioAuth}`).toString("base64")}`,
        //         "Content-Type": "application/x-www-form-urlencoded",
        //     },
        //     body: new URLSearchParams({
        //         To: `whatsapp:${phone}`,
        //         From: `whatsapp:${twilioNumber}`,
        //         Body: `Hello ${name}, your appointment for ${service} is confirmed! Notes: ${notes || "None"}`,
        //     }),
        // });
        // twilioResponse
        return res.status(200).json({ success: true, emailResponse, });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
