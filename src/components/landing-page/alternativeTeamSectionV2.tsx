"use client";

import Image from "@/components/ui/Image";
import React, { useState } from "react";
import BioHaloLogoOnly from "@/assets/BioHaloLogoOnly.svg";
import { motion } from "framer-motion";
import AtomDiagram from "@/components/ui/atom-diagram";
import { MovingAtom } from "@/components/ui/MovingAtom";

// Import team member images
import nicolasImage from "@/assets/images/BioHaloTeam/NicoKrink.png";
import marielaImage from "@/assets/images/BioHaloTeam/MarielaMezzina.png";
import pabloImage from "@/assets/images/BioHaloTeam/PabloNikel.png";
import albertoImage from "@/assets/images/BioHaloTeam/AlbertoDeMaria.png";
import justineImage from "@/assets/images/BioHaloTeam/JustineTurlin.png";
import arthurImage from "@/assets/images/BioHaloTeam/ArthurVancolen.png";
import johannImage from "@/assets/images/BioHaloTeam/JohannLiebeton.png";
import artemisImage from "@/assets/images/BioHaloTeam/ArtemisTalliou.png";

// Team member type definition
type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: any;
  linkedIn?: string;
};

// Actual team members data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Nicolas Krink",
    position: "Co-founder & CEO",
    image: nicolasImage,
    linkedIn: "https://www.linkedin.com/in/nicolaskrink/",
  },
  {
    id: 3,
    name: "Pablo Nikel",
    position: "Co-founder",
    image: pabloImage,
    linkedIn: "https://www.linkedin.com/in/pabnik/",
  },
  {
    id: 4,
    name: "Johann Liebeton",
    position: "Business Development Lead",
    image: johannImage,
    linkedIn: "https://www.linkedin.com/in/johannliebeton/",
  },
  {
    id: 5,
    name: "Justine Turlin",
    position: "R&D Project Associate",
    image: justineImage,
    linkedIn: "https://www.linkedin.com/in/justine-turlin/",
  },
  {
    id: 6,
    name: "Arthur Vancolen",
    position: "Research Assistant",
    image: arthurImage,
    linkedIn: "https://www.linkedin.com/in/arthur-vancolen/",
  },
  {
    id: 7,
    name: "Alberto De Maria",
    // position: "Head of Science",
    position: "Chief Scientific Officer",
    image: albertoImage,
    linkedIn: "https://www.linkedin.com/in/aldema503039157/",
  },
  {
    id: 8,
    name: "Artemis Talliou",
    position: "Business Development Associate",
    image: artemisImage,
    linkedIn: "https://www.linkedin.com/in/artemis-talliou/",
  },
];

const alumniMembers: TeamMember[] = [
  {
    id: 2,
    name: "Mariela Mezzina",
    position: "Co-founder, CSO & COO",
    image: marielaImage,
    linkedIn: "https://www.linkedin.com/in/mariela-mezzina/",
  },
];

interface TeamSectionProps {
  className?: string;
}

export const AlternativeTeamSectionV2: React.FC<TeamSectionProps> = ({
  className = "",
}) => {
  return (
    <section className={`relative py-20 overflow-hidden ${className}`}>
      {/* Background elements */}
      <div className="absolute inset-0 "></div>
      {/* Decorative atom diagrams */}
      <div className="absolute top-0 right-0 translate-x-[60%] -translate-y-[30%] opacity-[2%] mix-blend-screen">
        <AtomDiagram width={3000} height={3000} color="rgba(18,110,119,1)" />
      </div>
      <div className="absolute bottom-0 left-0 translate-x-[-60%] translate-y-[20%] opacity-[5%] mix-blend-screen">
        <AtomDiagram width={2000} height={2000} color="rgba(18,110,119,1)" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative pt-4 lg:pt-12 flex flex-col items-center justify-center pb-12 lg:pb-20 2xl:pb-24"
        >
          <h1 className="text-center bg-gradient-to-br from-mintAccent/30 via-gray-500/40 to-lightGrey/30 bg-clip-text text-transparent text-3xl lg:text-4xl 2xl:text-5xl font-Poppins font-light relative">
            meet the team behind <br />
            <MovingAtom
              width={50}
              height={50}
              hoverAmplitude={5}
              hoverDuration={4}
              color="rgba(18,110,119,1)"
              className="absolute opacity-50 top-[0%] right-[50%] translate-x-[450%] translate-y-[-50%]"
            />
          </h1>
          <h1 className="text-center bg-gradient-to-br from-mintAccent/50 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparent relative">
            <span className="text-5xl md:text-6xl 2xl:text-7xl drop-shadow-sm font-bold font-Poppins flex flex-col sm:flex-row items-center justify-center">
              <Image
                src={BioHaloLogoOnly}
                alt="BioHalo Logo"
                className="h-[0.8em] sm:h-[1em] w-auto sm:ml-4"
              />
              <span className="mt-2 sm:mt-0 ml-2 text-gray-300/40 bg-gradient-to-br from-mintAccent/50 via-gray-500/60 to-lightGrey/50 bg-clip-text">
                BioHalo
              </span>
            </span>
            <div className="relative w-full h-0.5 bg-gradient-to-r from-transparent via-tealAccent to-transparent mt-6 opacity-60"></div>
            <div className="w-[30%] h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-6 opacity-20 absolute bottom-0 left-[50%] translate-x-[-50%] " />
            <div className="w-[10%] h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-6 opacity-20 absolute bottom-0 left-[50%] translate-x-[-50%] " />
          </h1>
        </motion.div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 lg:gap-x-12 justify-items-center md:max-w-[calc(580px+2rem)] lg:max-w-[calc(870px+2rem)]">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Alumni Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative pt-16 lg:pt-24 flex flex-col items-center justify-center pb-8 lg:pb-12 2xl:pb-16"
        >
          <h2 className="text-center bg-gradient-to-br from-mintAccent/30 via-gray-500/40 to-lightGrey/30 bg-clip-text text-transparent text-2xl lg:text-3xl 2xl:text-4xl font-Poppins font-light relative">
            a big "<b>thank you</b>" to
          </h2>
          <div className="text-center bg-gradient-to-br from-mintAccent/50 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparent relative">
            <span className="text-4xl md:text-5xl 2xl:text-6xl drop-shadow-sm font-bold font-Poppins flex flex-col sm:flex-row items-center justify-center">
              <span className="uppercase mt-2 sm:mt-0 ml-2 text-gray-300/40 bg-gradient-to-br from-mintAccent/50 via-gray-500/60 to-lightGrey/50 bg-clip-text">
                our alumni
              </span>
            </span>
            <div className="relative w-full h-0.5 bg-gradient-to-r from-transparent via-tealAccent to-transparent mt-6 opacity-60"></div>
            <div className="w-[20%] h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-6 opacity-20 absolute bottom-0 left-[50%] translate-x-[-50%] " />
            <div className="w-[6%] h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-6 opacity-20 absolute bottom-0 left-[50%] translate-x-[-50%] " />
          </div>
        </motion.div>
        <div className="mx-auto flex flex-col justify-center items-center">
          {alumniMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="overflow-hidden relative h-[420px] w-[290px] rounded-xl
      bg-gradient-to-bl from-gray-100/15 to-gray-900/50 backdrop-blur-sm 
              border border-tealAccent/10 hover:border-tealAccent/30 transition-all group"
      initial={{ y: 0 }}
      whileHover={{
        y: -8,
        filter: "grayscale(0%)",
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 15px 0 rgba(60, 224, 206, 0.05)",
      }}
      transition={{
        y: { type: "spring", stiffness: 300, damping: 15 },
        filter: { duration: 0.3 },
        boxShadow: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ filter: isHovered ? "grayscale(0%)" : "grayscale(20%)" }}
    >
      {/* Card background with gradient that changes on hover */}
      <motion.div
        className="absolute inset-0 "
        initial={{
          opacity: 0.6,
          filter: "grayscale(20%)",
        }}
        animate={{
          opacity: isHovered ? 1 : 0.6,
          filter: isHovered ? "grayscale(0%)" : "grayscale(20%)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Full-size image that spans the entire card (grayscale controlled by parent) */}
      <div className="absolute inset-0 w-full h-full border-[1px] border-mintAccent/10 rounded-xl">
        <motion.div
          className="relative w-full h-full"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top grayscale"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </motion.div>
      </div>

      {/* White overlay for text area */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[130px] bg-black bg-gradient-to-b from-slate-950/60 via-gray-800/20 to-gray-950/70 backdrop-blur-xl 
         border-t-2 rounded-b-xl border-gray-100/60 z-20"
      ></div>

      {/* Text content */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4 text-center z-30
      border-b-[0.5px] border-r-[0.5px] border-l-[0.5px] rounded-b-xl border-gray-100/40"
      >
        <motion.h3
          className="text-2xl font-semibold leading-tight translate-y-[7%]
                      bg-lightGrey bg-gradient-to-br from-gray-300/80 via-gray-900/60 to-gray-300/80 bg-clip-text text-transparent"
        >
          {member.name}
        </motion.h3>
        <p className="text-slate-600">{member.position}</p>

        <motion.div
          className="mt-4 flex justify-center space-x-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pinkAccent hover:text-tealAccent transition-colors duration-300"
              aria-label={`Visit ${member.name}'s LinkedIn profile`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
