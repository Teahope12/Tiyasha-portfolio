"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#121212] text-center"
    >
      <h2 className="text-4xl font-bold text-white mb-12">Contact Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-white">
        {/* Phone */}
        <div className="bg-[#1f1f1f] rounded-lg p-6 shadow-md hover:shadow-purple-500/40 transition duration-300">
          <FaPhoneAlt className="h-8 w-8 text-purple-400 mb-4 mx-auto" />
          <h3 className="font-semibold text-xl mb-2">Phone</h3>
          <p className="text-sm text-[#aaa] mb-2">Available 10AM - 6PM</p>
          <a
            href="tel:+919382284686"
            className="text-purple-300 hover:text-pink-400 transition"
          >
            +91 93822 84686
          </a>
        </div>

        {/* Email */}
        <div className="bg-[#1f1f1f] rounded-lg p-6 shadow-md hover:shadow-purple-500/40 transition duration-300">
          <FaEnvelope className="h-8 w-8 text-purple-400 mb-4 mx-auto" />
          <h3 className="font-semibold text-xl mb-2">Email</h3>
          <p className="text-sm text-[#aaa] mb-2">Drop me a message</p>
          <a
            href="mailto:gtiyasha274@gmail.com"
            className="text-purple-300 hover:text-pink-400 transition break-all"
          >
            gtiyasha274@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="bg-[#1f1f1f] rounded-lg p-6 shadow-md hover:shadow-purple-500/40 transition duration-300">
          <FaLinkedin className="h-8 w-8 text-purple-400 mb-4 mx-auto" />
          <h3 className="font-semibold text-xl mb-2">LinkedIn</h3>
          <p className="text-sm text-[#aaa] mb-2">Let’s connect</p>
          <a
            href="https://www.linkedin.com/in/tiyasha-ghosh-4477041bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-pink-400 transition break-all"
          >
            linkedin.com/in/your-linkedin-id
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
