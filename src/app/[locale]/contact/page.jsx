"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Headset } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  // const [loading, setLoading] = useState(false);

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({ ...prevState, [name]: value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   // Handle form submission here (e.g., send data to an API)
  //   console.log("Form submitted:", formData);
  //   const { name, email, subject, message } = formData;
  //   await fetch("/api/send", {
  //     method: "POST",
  //     body: JSON.stringify({ name, email, subject, message }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoading(false);
  //       if (data && data.id) {
  //         alert(
  //           `Thank you for your interest ${name}! We will get back to you soon!`
  //         );
  //         setFormData({ name: "", email: "", subject: "", message: "" });
  //       } else {
  //         alert("Apologies! Please try again.");
  //       }
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       alert("Ooops! unfortunately some error has occurred.");
  //     });
  //   // Reset form after submission
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  //   setLoading(false);
  // };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl mt-28">
      <h1 className="text-3xl font-bold mb-8 animate-fade-in-down text-text-primary text-center">
        {t("title")}
      </h1>

      <div className="grid grid-cols-1 justify-center max-w-6xl mx-auto gap-8">
        {/* <div className="animate-fade-in-left">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-text-primary">
                {t("name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-text-primary">
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1 text-text-primary">
                {t("subject")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-text-primary">
                {t("message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`bg-primary text-secondary py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300 hover:shadow-lg ${
                loading ? "opacity-50 cursor-not-allowed animate-pulse" : ""
              }`}
              disabled={loading}
            >
              {t("sendMessage")}
            </button>
          </form>
        </div> */}

        <div className="animate-fade-in-right">
          <div className="mb-8 flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-text-primary ">
              {t("location")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg flex-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3182.9530933997157!2d37.413195475316414!3d37.08242405174073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e51fc956f06d%3A0x2e35c41d89611524!2sroza%20park%20international!5e0!3m2!1sen!2sus!4v1726922368262!5m2!1sen!2sus"
                  width="100%"
                  height={200}
                  style={{ border: 0 }}
                  allowFullScreen="true"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                  Suter International
                </h2>
                <div className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-secondary transition duration-300">
                  <MapPin className="mr-2" />
                  <span>{t("suter_address")}</span>
                </div>
                <div className="flex gap-2 justify-between">
                  <div className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-secondary transition duration-300 flex-1">
                    <Headset className="mr-2" />
                    <span>{t("suter_phone1")}</span>
                  </div>
                </div>
                <div className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-secondary transition duration-300">
                  <Mail className="mr-2" />
                  <span>{t("suter_email")}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg flex-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.8889362365626!2d37.3787857!3d37.1553403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531fd3622e43b71%3A0xc7820bf3669886f9!2sSUTER%20INTERNATIONAL!5e0!3m2!1sen!2str!4v1727175996956!5m2!1sen!2str"
                  width="100%"
                  height={200}
                  style={{ border: 0 }}
                  allowFullScreen="true"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                  Suter International
                </h2>
                <div className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-secondary transition duration-300">
                  <MapPin className="mr-2" />
                  <span>{t("roza_address")}</span>
                </div>
                <div className="flex gap-2 justify-between">
                  <div className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-secondary transition duration-300 flex-1">
                    <Headset className="mr-2" />
                    <span>{t("roza_phone1")}</span>
                  </div>
                </div>

                <div className="flex items-center p-2 rounded-lg hover:bg-primary hover:text-secondary transition duration-300">
                  <Mail className="mr-2" />
                  <span>{t("roza_email")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
