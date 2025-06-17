"use client";
import React, { useState } from "react";

const certificationsData = [
  {
    id: 1,
    title: "AWS Workshop: Empowering Innovation with AWS",
    provider: "Corporate Gurukul & VIT Vellore",
    image: "/aws-cert.png", // 🖼️ Place this image in /public/certificates
  },
  {
    id: 2,
    title: "Networking Cardinals (Value Added Course)",
    provider: "VIT School of Computer Science",
    image: "/net-cert.png",
  },
  {
    id: 3,
    title: "SAP Build Developer Certification",
    provider: "SAP via Credly",
    image: "/sap-cert.png",
  },
  {
    id: 4,
    title: "XAA Program Completion",
    provider: "Unknown Provider",
    image: "/Tiyasha Ghosh_XAA_certificate-1.png",
  },
];

const CertificationsSection = () => {
  const [visibleImageId, setVisibleImageId] = useState(null);

  const toggleImage = (id) => {
    setVisibleImageId(visibleImageId === id ? null : id);
  };

  return (
    <section id="certifications" className="py-12 px-4">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-12">
        My Certifications
      </h2>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="border border-gray-600 rounded-lg p-6 text-white hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-gray-400 mb-4">{cert.provider}</p>

            <button
              onClick={() => toggleImage(cert.id)}
              className="text-purple-400 hover:underline"
            >
              {visibleImageId === cert.id ? "Hide Certificate" : "View Certificate"}
            </button>

            {visibleImageId === cert.id && (
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="mt-4 rounded-md shadow-lg border border-gray-700"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
