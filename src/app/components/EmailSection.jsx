"use client";
import React, { useState } from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const [emailSubmitted,setEmailSubmitted]=useState(false);
  const handleSubmit=async (e) =>{
    e.preventDefault();
    const data={
      email: e.target.email.value,
      subject:e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata=JSON.stringify(data);
    const endpoint="/api/send";
    const options={
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSONdata,
    }
    const response=await fetch(endpoint,options);
    const resData=await response.json();

    if (response.status ===200)
    {
      console.log('Message sent.');
      setEmailSubmitted(true);
    }
  };
  return (
    <section className="relative isolate grid md:grid-cols-2 my-12 py-24 gap-4 overflow-hidden">
  {/* Full blur layer */}
  <div className="absolute inset-0 -z-10 bg-white/5 backdrop-blur-md"></div>

  {/* Purple radial glow */}
  <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent blur-3xl opacity-30"></div>

      {/* Left content: Social + Description */}
      <div className="relative z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, and my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Image src={GithubIcon} alt="GitHub Icon" width={30} height={30} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" width={30} height={30} />
          </Link>
        </div>
      </div>

      {/* Right content: Contact Form */}
      <div className="relative z-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="abc@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          {/* Subject Field */}
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Hey! Write something you want to say"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              placeholder="Let's talk about..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Send Message
          </button>
          {
            emailSubmitted &&(
            <p className="text-green-500 text-sm mt-2">
            Email sent successfully</p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
