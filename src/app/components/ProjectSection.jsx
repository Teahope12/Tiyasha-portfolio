"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A Next.JS portfolio website.",
    image: "/Dashboard-portfolio.png",
    tag: ["Web"],
    gitUrl: "",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Natural-Disaster-Hotspot-Areas-Detection",
    description:
      "An Image Processing system for detecting natural disaster hotspots from satellite imagery using CNNs.",
    image: "Dashboard-litter.png",
    tag: ["Web"],
    gitUrl: "https://github.com/Teahope12/Natural-Disaster-Hotspot-Areas-Detection",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Bank Churn Management System",
    description: "A Flask-based app that predicts customer churn using ML.",
    image: "/Dashboard-churn.png",
    tag: ["Web"],
    gitUrl: "https://github.com/Teahope12/Bank-Churn-Management-System",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Online PG Accommodation System",
    description: "A full-stack system for managing PG accommodations.",
    image: "/pg-booking.png",
    tag: ["Mobile"],
    gitUrl: "https://github.com/Teahope12/Leave-Management-System-using-VB.Net",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Leave Management System",
    description: "VB.Net-based leave management system.",
    image: "/Dashborad-leave.png",
    tag: ["Web"],
    gitUrl: "https://github.com/Teahope12/Online-PG-Accommodation-System",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects =
    tag === "All"
      ? projectsData
      : projectsData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-12 px-4">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12" ref={ref}>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id} // ✅ fixed key warning
            variants={cardVariants}
            initial="initial"
            animate={isInview ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectsCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
