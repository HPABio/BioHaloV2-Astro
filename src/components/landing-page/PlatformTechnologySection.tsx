"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "@/components/ui/Image";
import { MovingAtom } from "@/components/ui/MovingAtom";
import AtomDiagram from "@/components/ui/atom-diagram";
// import BioReactorBP from "@/assets/images/BluePrintSVG/bio-reactor.svg";
import BioReactorBP2 from "@/assets/images/BluePrintSVG/bio-reactor-product.svg";
import DNALogo from "@/assets/images/BluePrintSVG/dna-logo.svg";
import BioHaloStep2 from "@/assets/images/BluePrintSVG/BioHalo-step2.svg";



import enzymeImage from "@/assets/images/BluePrint with Color/Enzyme.png";

import {
  Beaker,
  Sprout,
  Dna,
  Microscope,
  Atom,
  // Flask,
  Leaf,
  Recycle,
  Zap,
  ArrowRight,
  Droplet,
  TrendingDown,
} from "lucide-react";
import NetworkDiagramWithNodes from "@/components/ui/NetworkDiagramWithNodes";
interface TechnologyFeature {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface PlatformTechnologySectionProps {
  className?: string;
}

const technologyFeatures: TechnologyFeature[] = [
  {
    id: 9,
    title: "Reduced Fluorine Usage",
    description:
      "Our technology requires significantly less fluorine while maintaining or enhancing material performance.",
    icon: (
      <TrendingDown className="" />
    ),
  },
  {
    id: 8,
    title: "Bio-Based Materials",
    description:
      "We utilize biological systems and renewable resources to create sustainable and safe fluorinated polymers.",
    icon: <Sprout className="" />,
  },
  {
    id: 7,
    title: "Minimal By-Products",
    description:
      "Our precision technology produces fewer unwanted by-products, increasing efficiency and reducing waste.",
    icon: <Zap className="" />,
  },
  /* {
    id: 1,
    title: "Bio-Based Enzyme Platform",
    description:
      "Our computational platform predicts and optimizes enzyme performance for specific substrates and reaction conditions.",
    icon: <Dna className="" />,
  }, */
  /* {
    id: 2,
    title: "Biocatalysis",
    description:
      "We harness the power of biocatalysts to perform chemical transformations with unprecedented selectivity and efficiency.",
    icon: <Microscope className="" />,
  }, */
  {
    id: 6,
    title: "Circular Economy",
    description:
      "Our platform is designed with end-of-life considerations, enabling recyclability and biodegradability.",
    icon: <Recycle className="" />,
  },
  {
    id: 4,
    title: "Green Chemistry",
    description:
      "Our processes operate under mild conditions, using renewable resources and generating minimal waste.",
    icon: <Leaf className="" />,
  },
  /* {
    id: 5,
    title: "Scalable Production",
    description:
      "Our technology seamlessly scales from laboratory to industrial production while maintaining performance and sustainability.",
    icon: <Beaker className="w-8 h-8 text-teal-700 hover:text-teal-500" />,
  }, */

  /* {
    id: 3,
    title: "Enzyme Engineering",
    description:
      "Our proprietary enzyme engineering platform enables precise control over fluorination reactions, targeting specific molecular positions.",
    icon: <Atom className="w-8 h-8 text-teal-700 hover:text-teal-500" />,
  }, */
];

// Add new interface for technology process steps
interface TechnologyProcessStep {
  id: number;
  title: string;
  description: string;
  image: any;
  alt: string;
}

// Create process step data
const technologyProcessSteps: TechnologyProcessStep[] = [
  {
    id: 1,
    title: "DNA Engineering",
    description:
      "Our genetic engineering platform enables precise control over microbial gene expression.",
    image: DNALogo,
    alt: "DNA Structure",
  },
  {
    id: 2,
    title: "Metabolic Engineering",
    description:
      "We rewire the metabolism of microorganisms tailored for the production of fluorinated monomers and polymers containing fluorine atoms at specific molecular positions.",
    image: enzymeImage,
    alt: "Enzyme Structure",
  },
  {
    id: 3,
    title: "Screening & Optimization",
    description:
      "In an iterative process, we screen and optimize the enzymes and strains for optimal performance.",
    image: BioHaloStep2,
    alt: "BioHalo Process",
  },
  {
    id: 4,
    title: "Industrial Scaling",
    description:
      "Our fermentation process enables sustainable production compatible with industrial scale.",
    image: BioReactorBP2,
    alt: "Bioreactor Blueprint",
  },
];

export const PlatformTechnologySection = ({
  className = "",
}: PlatformTechnologySectionProps) => {
  return (
    <section className={`w-full relative ${className} overflow-hidden`}>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-8 pt-[200px]">
        <div className="absolute bottom-[100%] left-[100%] translate-x-[-50%] translate-y-[50%] opacity-[6%] mix-blend-screen blur-lg">
          <AtomDiagram width={5300} height={5300} color="rgba(108,200,209,1)" />
        </div>
        <div className="absolute top-[100%] right-[100%] translate-x-[50%] -translate-y-[50%] opacity-[35%] blur-xl">
          <AtomDiagram width={2300} height={2300} color="rgba(70,90,100,1)" />
        </div>
        <div className="absolute top-[100%] left-[100%] translate-x-[-50%] -translate-y-[50%] opacity-[15%]">
          <AtomDiagram width={600} height={600} color="rgba(70,90,100,1)" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          <h1 className="text-center bg-gradient-to-br from-mintAccent/30 via-gray-500/40 to-lightGrey/30 bg-clip-text text-transparent
          text-3xl md:text-3xl font-Poppins font-light relative">
            discover our revolutionary <br />
            <MovingAtom
              width={50}
              height={50}
              hoverAmplitude={5}
              hoverDuration={4}
              color="rgba(18,110,119,1)"
              className="absolute opacity-50
            top-[0%] right-[50%]
            translate-x-[450%] translate-y-[-50%]"
            />
          </h1>
          <h1
            className="relative text-center bg-gradient-to-br from-mintAccent/50 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparent">
            <span
              className="text-5xl md:text-6xl lg:text-7xl  
              bg-gradient-to-tr from-teal-900 via-teal-500 to-teal-800 bg-clip-text text-transparent
              uppercase drop-shadow-sm font-black font-Poppins "
            >
              biohalogenation <br />
            </span>
            <span
              className="text-5xl md:text-6xl lg:text-7xl uppercase drop-shadow-sm font-normal font-Poppins
              bg-gradient-to-br from-mintAccent/60 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparentt"
            >
              Technology
              <br />
            </span>

            {/* <span className="text-4xl md:text-6xl">
              The{" "}
              <span className="text-4xl md:text-6xl bg-gradient-to-br from-mintAccent/40 to-mintAccent/70 bg-clip-text text-transparent">
                Platform
              </span>{" "}
              Offers
            </span> */}
            <div className="relative w-[50%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-tealAccent to-transparent mt-6 opacity-60">
            </div>
            <div className="w-[25%] h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-6 opacity-20
                absolute bottom-0 left-[50%] translate-x-[-50%] "/>
            <div className="w-[15%] h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-6 opacity-20
                absolute bottom-0 left-[50%] translate-x-[-50%] "/>
          </h1>

          <p className="text-gray-500 md:w-[70%] min-w-[600px] lg:w-1/2 mx-auto mt-24 font-light text-lg leading-snug 
          xl:text-xl xl:leading-tight xl:min-w-[650px]">
            {/* Harnessing the potential of biology for controlled{" "} */}
            By harnessing the potential of biology <br /> we can achieve  <span className="font-bold bg-tealAccent bg-gradient-to-r from-mintAccent/10 via-mintAccent/60 to-mintAccent/10 bg-clip-text text-transparent">
              controlled fluorination
            </span>{" "}on a level of precision  which is deemed impossible by standard chemical approaches.
          </p>

        </motion.div>

        {/* Process Steps Section */}
        <div className="space-y-14 xl:space-y-12 mb-24 mt-12">
          {technologyProcessSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                // delay: index * 0.1
              }}
              viewport={{ once: true }}
              className={`max-sm:text-center px-4 md:px-12 lg:px-24 xl:px-32 2xl:px-24 flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-8 lg:gap-10 xl:gap-12`}
            >
              {/* Image */}
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-tealAccent/20 rounded-2xl blur-3xl group-hover:blur-2xl opacity-70 transition-all duration-500 -z-10"></div>
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 rounded-2xl border border-tealAccent/20 backdrop-blur-sm shadow-xl overflow-hidden 
                h-[200px] lg:h-[250px] xl:h-[300px] flex items-center justify-center">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={450}
                    height={450}
                    style={{ objectFit: "contain" }}
                    className="opacity-90 w-full h-auto max-h-[350px] transition-all duration-500 filter hover:grayscale-[30%] group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-tealAccent/80 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.id}
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 text-left">
                <h3 className="text-2xl xl:text-3xl font-bold mb-4 bg-gradient-to-br from-lightGrey to-gray-600 bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-md xl:text-lg mb-6 leading-tight xl:leading-snug">{step.description}</p>
                <div className="w-24 h-1 bg-gradient-to-r from-tealAccent to-mintAccent/50 rounded-full mb-6"></div>

                {index < technologyProcessSteps.length - 1 && (
                  <div className="hidden md:flex items-center text-tealAccent/70">
                    {/* <span className="mr-2">Next Step</span>
                    <ArrowRight className="w-5 h-5 animate-pulse" /> */}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div
          className="grid grid-cols-1 gap-12 mb-20 px-4 md:px-12  md:pt-16 mt-16 relative"
          id="platform-features-content"
        >
          {/* Section detection helper - invisible element to help with intersection detection */}
          <div
            className="absolute top-0 left-0 w-full h-24 -mt-16 pointer-events-none"
            aria-hidden="true"
          ></div>

          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-visible">
            <div className="absolute top-0 left-0 w-64 h-64 bg-tealAccent/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-tealAccent/10 rounded-full blur-3xl transform translate-x-1/3"></div>
            <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-pinkAccent/5 rounded-full blur-xl"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center relative pt-4 lg:pt-12
          flex flex-col items-center justify-center pb-12 lg:pb-20 2xl:pb-24"
          >
            <h1 className="text-center bg-gradient-to-br from-mintAccent/30 via-gray-500/40 to-lightGrey/30 bg-clip-text text-transparent
          text-3xl lg:text-4xl 2xl:text-5xl font-Poppins font-light relative">
              explore our <br />
              <MovingAtom
                width={50}
                height={50}
                hoverAmplitude={5}
                hoverDuration={4}
                color="rgba(18,110,119,1)"
                className="absolute opacity-50
            top-[0%] right-[50%]
            translate-x-[450%] translate-y-[-50%]"
              />
            </h1>
            <h1
              className="text-center bg-gradient-to-br from-mintAccent/50 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparent
            relative">
              <span
                className="text-5xl md:text-6xl 2xl:text-7xl  
              bg-gradient-to-tr from-teal-900 via-teal-500 to-teal-800 bg-clip-text text-transparent
              uppercase drop-shadow-sm font-black font-Poppins "
              >
                biohalogenation <br />
              </span>
              <span
                className="text-5xl md:text-6xl 2xl:text-7xl uppercase drop-shadow-sm font-normal font-Poppins
              bg-gradient-to-br from-mintAccent/60 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparentt"
              >
                key features
                <br />
              </span>
              <div className="relative w-full h-0.5 bg-gradient-to-r from-transparent via-tealAccent to-transparent mt-6 opacity-60">
              </div>
              <div className="w-[30%] h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-6 opacity-20
                absolute bottom-0 left-[50%] translate-x-[-50%] "/>
              <div className="w-[10%] h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-6 opacity-20
                absolute bottom-0 left-[50%] translate-x-[-50%] "/>
            </h1>
          </motion.div>

          {/* Right side: Features list */}
          <div className="flex flex-col justify-center items-center w-full">
            <p className="text-gray-500 sm:w-[80%] md:w-[65%] xl:max-w-[550px] mx-auto font-light text-base lg:text-lg 
          2xl:text-xl  
          leading-tight 2xl:leading-snug text-center pb-4 lg:pb-6
          ">
              Our revolutionary biohalogenation platform offers unique
              advantages over traditional fluorination methods
            </p>
            <NetworkDiagramWithNodes
              enzymeImage={enzymeImage.src}
              enzymeImageAlt="Enzyme"
              width="max-w-3xl"
              imageWidth={600}
              imageHeight={400}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6 -mt-6">
            {technologyFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="pl-6 pr-5 py-4
              bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm 
              border border-tealAccent/10 rounded-lg hover:border-tealAccent/30 transition-all group"
              >
                <div className="flex items-center space-x-3 h-full w-full ">
                  <div
                    className="flex-shrink-0 w-12 lg:w-14 aspect-square xl:w-14 rounded-full flex items-center justify-center 
                group-hover:shadow-[0px_0px_15px_1px_rgba(18,110,99,0.3)] text-tealAccent
                bg-gradient-to-tl from-gray-900/50 to-gray-800/60 backdrop-blur-xl 
              border-[0.75px] border-mintAccent/10 group-hover:border-mintAccent/30"
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold leading-tight sm:text-xl sm:leading-snug sm:mb-1
                      bg-lightGrey bg-gradient-to-br from-lightGrey via-gray-900/60 to-gray-300 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm pb-2 pt-1 leading-tight
                      sm:font-normal sm:leading-tight">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center bg-gradient-to-br from-tealAccent/10 to-mintAccent/20 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4 text-gray-400">
            Transforming Industries with Sustainable Solutions
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform technology enables the creation of bio-based
            alternatives to traditional fluorinated materials, offering superior
            performance while eliminating the environmental and health concerns
            associated with PFAS.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex capitalize items-center justify-center px-6 py-3 bg-tealAccent text-white font-medium rounded-lg hover:bg-tealAccent/90 transition-colors"
            >
              Learn More About Our Technology via our newsletter
              <Zap className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
 */}

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center bg-gradient-to-br from-tealAccent/10 to-mintAccent/20 p-8 rounded-xl"
        >
          <p className="text-lg font-semibold mb-4 text-gray-400">
            When working with our highly specialized enzyme platform, our team
            of highly skilled scientists and engineers scout and tailor
            enzymatic functions for your specific application. We use a
            combination of computational tools and experimental techniques to
            optimize enzyme performance, ensuring that your application receives
            the best possible variant for your specific usecase.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform technology enables the creation of bio-based
            alternatives to traditional fluorinated materials, offering superior
            performance while eliminating the environmental and health concerns
            associated with PFAS.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex capitalize items-center justify-center px-6 py-3 bg-tealAccent text-white font-medium rounded-lg hover:bg-tealAccent/90 transition-colors"
            >
              Learn More About Our Technology via our newsletter
              <Zap className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};
