"use client";
import React, {useTransition,useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA=[
    {
        title:"Skills",
        id:"Skills",
        content:(
            <ul className="list-disc pl-2">
                <li> Frameworks: React.js, Node.js, Angular.js</li>
                <li> Programming Languages: C, C++, Javascript , HTML, CSS, Java, Python, VB. Net</li>
                <li>Data structure</li>
                <li>Databases: MongoDB, SQL</li>
                <li>Dev Tools: Visual Studio Code, Streamlit</li>
                <li>Telecom Tools :Cisco Packet Tracer</li>
            </ul>
        ),
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className="list-disc pl-2">
                <li>Vellore Institute of Technology, Vellore (MCA, 2026)</li>
                <li>Presidency College, Bengaluru (BCA, 2023)</li>
                <li>P I S Vidyapith (12th, 2019)</li>
                <li> H. S. Memorial School (10th, 2017)</li> 
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab,setTab]=useState("Skills");
    const [isPending, startTransition]=useTransition();
    
    const handleTabChange=(id)=>{
        startTransition(()=>{
           setTab(id); 
        });
    };
    return (
        <section className="text-white"><div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/about-image.png" width={500} height={500} alt="About Image" />
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full"></div>
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">Hi! I’m Tiyasha Ghosh, an MCA postgraduate from VIT Vellore with a strong background in Software Engineering, Networking, Embedded Systems, and Machine Learning. I enjoy building scalable, user-focused applications — from full-stack platforms to predictive ML models. I'm most confident with C++, React.js, and Node.js, and love using technology to solve real-world problems.When I’m not deep in code, you’ll find me writing, singing.
                </p>
                <div className="flex flex-row justify-start mt-8 gap-x-4">
                    <TabButton
                     selectTab={()=>handleTabChange("Skills")} 
                     active={tab === "Skills"}
                     >
                        {" "}
                        Skills{" "}
                        </TabButton>
                    <TabButton 
                    selectTab={()=>handleTabChange("education")} 
                    active={tab === "education"}
                    >
                        {" "}
                        Education{" "}
                        </TabButton>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
        </section>
      );
};
export default AboutSection;