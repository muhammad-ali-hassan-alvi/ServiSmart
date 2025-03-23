"use client";

import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-blue-500 text-4xl font-bold"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
      >
        CONTACT US
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded-md w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-md w-full"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 rounded-md w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border p-3 rounded-md w-full col-span-2 h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md col-span-2 hover:bg-blue-700 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaPhoneAlt className="text-blue-600 text-3xl mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Call Us</h3>
          <p className="text-gray-600">+92 301 118 9899</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaMapMarkerAlt className="text-blue-600 text-3xl mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Our Location</h3>
          <p className="text-gray-600">Main Street, Karachi, Pakistan</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaClock className="text-blue-600 text-3xl mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Working Hours</h3>
          <p className="text-gray-600">Monday - Sunday: 9 AM - 9 PM</p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="text-center mt-8">
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <div className="flex justify-center gap-4 text-white">
          <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-blue-700">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-blue-400 p-3 rounded-full hover:bg-blue-500">
            <FaTwitter />
          </a>
          <a href="#" className="bg-pink-500 p-3 rounded-full hover:bg-pink-600">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
