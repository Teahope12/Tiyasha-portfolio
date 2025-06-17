"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { id: 1, name: "Portfolio Website", short: "Next.js + Tailwind + Typewriter" },
  { id: 2, name: "Natural Disaster Detection", short: "CNN-based Satellite Analysis" },
  { id: 3, name: "Bank Churn Management", short: "Flask + ML + Data Visualization" },
  { id: 4, name: "Online PG Booking System", short: "React + Node.js + PostgreSQL" },
  { id: 5, name: "Leave Management System", short: "VB.Net Desktop Application" },
];

const colors = ["bg-purple-600", "bg-fuchsia-600", "bg-pink-600", "bg-rose-600", "bg-pink-300"];

const ProjectHighlightGrid = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 2000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 bg-black min-h-80 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Project Highlights
      </h2>
      <div className="relative w-full max-w-xl h-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[index].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className={`absolute w-full h-full flex flex-col items-center justify-center text-white text-center rounded-lg p-6 shadow-lg ${colors[index % colors.length]}`}
          >
            <h3 className="text-2xl font-bold mb-2">
              {projects[index].name}
            </h3>
            <p className="text-sm">{projects[index].short}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectHighlightGrid;