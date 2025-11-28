"use client";

import Image from "@/components/ui/Image";
import { MovingAtom } from "@/components/ui/MovingAtom";
import EcoliTripletsPNG from "@/assets/images/BluePrintPNGs/E.coli.png";

import LightBGWithDroplets from "@/assets/images/AdobeStock/AdobeStock_291137317.jpeg";

import BioFMonomer from "@/assets/images/BluePrintSVG/BioF-Monomer.svg";
import BioHaloLogoOnly from "@/assets/BioHaloLogoOnly.svg";
import BeakerHalfAndHalf from "@/assets/images/BluePrintPNGs/Beaker-half-and-half.png";
import BioReactor from "@/assets/images/BluePrint with Color/bio-reactor.png";


export function AlternativeWhatWeDoSection({ className }: { className?: string }) {
  return (
    <section
      className={`${className} overflow-visible z-20  mx-auto`}>
      <div className="absolute top-[0%] left-0 w-full overflow-hidden">
        <div
          className="relative w-full h-full  translate-y-[-10%]"
          style={{
            willChange: "opacity, transform, background-image, background-blend-mode",
            maskImage: "linear-gradient(to bottom,black,black,transparent,transparent)",
          }}>
          <Image
            src={LightBGWithDroplets}
            alt="LightBGWithDroplets"
            className="w-full h-full object-contain -scale-x-100 mix-blend-color-dodge opacity-40" />
          {/* <Image
            src={EnzymeImage2}
            alt="EnzymeImage2"
            className="w-full h-full object-contain -scale-x-100 mix-blend-overlay opacity-20
            [mask-image:linear-gradient(to_bottom,black,black,transparent)]"
          /> */}
        </div>
      </div>
      <div className="max-w-[800px] lg:max-w-[900px] xl:max-w-[1000px] mx-auto px-10 pt-12">
        {/* Title */}

        <div className="w-full relative z-10 mb-8">
          <div className="w-full relative">
            <h2
              className="font-poppins font-bold flex items-center justify-center text-black 
              text-[clamp(2.5rem,10vw,12rem)] w-full mx-auto tracking-tight"
            >
              <Image
                src={BioHaloLogoOnly}
                alt="BioHalo Logo"
                className="h-[0.9em] w-auto mr-2"
              />
              BioHalo
            </h2>
          </div>

          <div className="w-full relative flex flex-col items-center justify-center space-y-6">
            <div className="w-[70%] flex flex-col items-center justify-center">
              {/* Subtitle */}
              <h2
                className="text-gray-800/60 w-[80vw] font-poppins leading-tight
                          text-[clamp(1.1rem,4vw,4rem)] text-center text-nowrap"
              >
                offers a sustainable alternative to
              </h2>
              <h2
                className="font-poppins leading-tight font-black font-poppin relative uppercase
                   bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-pinkAccent to-slate-800 
                          text-[clamp(1.1rem,4vw,4rem)] text-center text-nowrap"
              >
                forever chemicals
                <MovingAtom
                  width={50}
                  height={50}
                  hoverAmplitude={4}
                  hoverDuration={4}
                  shouldRotate={false}
                  rotationDuration={5}
                  shouldScale={false}
                  scaleRange={[0.9, 1.1]}
                  scaleDuration={4}
                  color="rgba(195,12,95,1)" //pink
                  className="absolute top-[0%] left-[100%]
                      translate-x-[-50%] translate-y-[-15%] z-0 "
                />
              </h2>
            </div>
            <div className="w-full flex flex-row items-center justify-center px-6 py-8 gap-8 max-w-4xl mx-auto">
              <div className="w-full flex flex-col items-center justify-center pt-12">
                <h2
                  className="text-gray-800/60 w-full font-poppins leading-snug
                      text-2xl lg:text-3xl
                       xl:text-[clamp(1.1rem,2vw,2rem)] max-w-3xl mx-auto"
                >
                  through our <br /> microbial-based <span className="font-bold text-gray-600">biohalogenation platform</span>
                </h2>

                <div className="w-[20%] h-full border-[1px] border-gray-400/50 rounded-xl mr-auto mt-2 mb-8" />

                <p
                  className="text-gray-500/80 w-full font-poppins
                      text-[clamp(0.9rem,2.5vw,1.5rem)] leading-relaxed"
                >
                  we selectively halogenate organic molecules, opening up new
                  possibilities for{" "}<br />
                  <span className="bg-gradient-to-tr from-pinkAccent to-tealAccent/60 bg-clip-text text-transparent font-semibold">
                    fluorine
                  </span>
                  -based chemistry.
                </p>
              </div>
              <div className="w-full max-w-md flex flex-col items-center justify-center">
                <Image
                  src={EcoliTripletsPNG}
                  alt="EcoliTripletsPNG"
                  className="w-[50vw]  object-contain grayscale opacity-40 sm:opacity-20 -rotate-12 brightness-[0.1] scale-200 absolute"
                />
              </div>
            </div>
          </div>
        </div>

        {/* devider */}
        <div className="w-full h-[10vw] relative mt-12" />

        {/* Text Section */}
        <div className="bg-black/0 text-gray-800/70 w-full relative
        md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1000px] mx-auto">
          {/* Header Section */}
          <div className="relative">
            {/* Top Text Section */}
            <div className="space-y-4">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 
              font-bold mb-2 capitalize opacity-1 text-center leading-normal
                  bg-gradient-to-tl from-slate-800/80 via-gray-700/60 to-gray-400 bg-clip-text text-transparent"
              >
                We explore, design,
                <br />
                and produce, unmatched
              </h1>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 capitalize opacity-1 text-center pb-10 leading-tight
                  bg-gradient-to-tl from-slate-800/80 via-gray-700/60 to-gray-400 bg-clip-text text-transparent md:leading-none"
              >
                <span
                  className="bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent
                  uppercase drop-shadow-sm font-black font-Poppins sm:text-5xl md:text-6xl xl:text-7xl leading-tight relative "
                >
                  <MovingAtom
                    width={100}
                    height={100}
                    hoverAmplitude={0}
                    color="rgba(18,110,119,1)" //teal
                    className="absolute bottom-[0%] left-[0%] opacity-[0.3] z-5
                      translate-x-[-41%] translate-y-[27%]"
                  />
                  <MovingAtom
                    width={50}
                    height={50}
                    hoverAmplitude={0}
                    color="rgba(18,110,119,1)" //teal
                    className="absolute top-[0%] right-[0%] opacity-[0.3] z-5
                      translate-x-[50%] translate-y-[-25%]"
                  />
                  new-to-market{" "}<br className="block md:hidden" />
                </span>
                products
              </h1>
              <div className="w-1/3 h-full border-[1px] border-gray-400/50 rounded-xl mx-auto">
                <MovingAtom
                  width={80}
                  height={80}
                  hoverAmplitude={4}
                  hoverDuration={4}
                  shouldRotate={false}
                  rotationDuration={20}
                  shouldScale={false}
                  scaleRange={[0.9, 1.8]}
                  scaleDuration={24}
                  color="rgba(18,110,119,1)" //teal
                  className="absolute top-[-0%] left-[50%] translate-x-[-50%] translate-y-[0%] 
                      opacity-[0.3] rotate-[19deg] sm:scale-[1.8] sm:translate-y-[30%] hidden"
                />
              </div>

              {/* split design / Image on the right */}
              <div
                className="w-full flex flex-col items-center justify-center 
              gap-8 p-4 mt-12 px-12 md:px-0"
              >
                <div className="w-full flex flex-row items-start justify-start gap-8">
                  <div className="flex-1 flex flex-col items-start">
                    <p className="text-sm md:text-xl lg:text-2xl 2xl:text-3xl font-poppins font-medium opacity-30 leading-none">
                      Our unique
                    </p>

                    <h1
                      className="lowercase drop-shadow-sm font-semibold font-Poppins 
                    sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-none relative"
                    >
                      Bio
                      <span className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl uppercase font-black bg-gradient-to-tr from-teal-700 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                        F
                      </span>
                      Polymers
                    </h1>
                    <p className="text-sm md:text-xl lg:text-xl 2xl:text-3xl font-poppins font-normal">
                      are safe and sustainable without compromising performance
                    </p>
                  </div>
                  <div className="flex-1 relative">
                    <Image
                      src={BioFMonomer}
                      alt="BioFMonomerAllPink"
                      className="w-full object-cover grayscale opacity-30 invert rotate-[-20deg] scale-[1.2] xl:scale-[1.5]
                      translate-x-[-30%] translate-y-[60%]
                      lg:translate-x-[-30%] lg:translate-y-[40%]
                      2xl:translate-x-[-30%] 2xl:translate-y-[55%]"
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-2/3 h-[10vw] max-h-[150px] border-b border-gray-400/80 relative mx-auto" />

              {/* split design / Image on the left */}
              <div
                className="w-full flex flex-col items-center justify-center 
              gap-8 p-4 mt-12"
              >
                <div className="w-full flex flex-row items-center justify-start gap-8 pl-4 p-0">
                  <div className="flex-1 relative md:scale-150 lg:scale-125">
                    <Image
                      src={BioReactor}
                      alt="BioReactorBlueprint"
                      className="w-full object-cover grayscale opacity-40 invert scale-x-[-1]
                      z-10 translate-x-[-10%] translate-y-[0%]"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start lg:-mr-6 lg:pl-6">
                    <p className="text-sm md:text-xl lg:text-2xl 2xl:text-3xl font-poppins font-medium opacity-30 leading-none">
                      Our expandable
                    </p>

                    <h1
                      className="lowercase drop-shadow-sm font-semibold font-Poppins 
                    sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-none relative"
                    >
                      <span className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl lowercase font-bold bg-gradient-to-tr from-teal-700 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                        Bio
                      </span>
                      Halogenation platform
                    </h1>
                    <p className="text-sm md:text-xl lg:text-xl 2xl:text-3xl font-poppins font-normal">
                      offers you near limitless possibilities for
                      fluorine-enhanced compound development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-2/3 md:h-[50px] max-h-[250px] border-t border-gray-400/80 relative mt-12 mx-auto mb-[2vw]" />

              {/* centered design */}
              <div
                className="w-full flex flex-col items-center justify-center 
              gap-8 p-4 mt-12 "
              >
                <div className="w-full flex flex-row items-start justify-start gap-8">
                  <div className="relative w-full h-[100px] hidden 2xl:block">
                  </div>
                  <div className="flex-col items-start w-2/3 hidden">
                    <p className="text-sm md:text-xl lg:text-2xl 2xl:text-3xl font-poppins font-medium opacity-30 leading-none">
                      And our flexible
                    </p>

                    <h1
                      className="lowercase drop-shadow-sm font-semibold font-Poppins 
                    sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl leading-none relative"
                    >
                      <span className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl lowercase font-bold bg-gradient-to-tr from-teal-700 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                        enzyme
                      </span>
                      based <br />technology
                    </h1>
                    <p className="text-sm md:text-xl lg:text-xl 2xl:text-3xl font-poppins font-normal max-w-md">
                      lets us design custom processes tailored to your needs.
                    </p>
                  </div>
                  <div className="flex-1 relative ">
                  </div>
                </div>
              </div>

              {/* centered design */}
              {/*  <div className="w-full flex flex-col items-center justify-center gap-8 py-12">
                <h1 className="text-center text-4xl font-bold uppercase"> centered design</h1> 
                <div className="w-fit h-full relative mx-auto "> 
                    <p className="text-3xl font-poppins font-medium text-center opacity-30 leading-none">
                      Our unique
                    </p>
                    <h1 className="text-center lowercase drop-shadow-sm font-semibold font-Poppins 
                    sm:text-5xl md:text-6xl xl:text-6xl leading-none relative">
                          Bio
                          <span className="text-7xl uppercase font-black bg-gradient-to-tr from-teal-700 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                            F
                          </span>
                          Polymers
                    </h1>
                    <p className="text-3xl font-poppins text-center">
                    are safe and sustainable <br/>
                    without compromising performance
                      </p>
                    <p className="text-2xl sm:text-3xl sm:leading-tight font-poppins text-center sm:py-4 hidden">
                    don't compromise performance <br/>
                    while also being safe and sustainable
                      </p>
                </div>
                <div className="w-full flex flex-row items-center justify-center px-12 py-8 gap-8 max-w-4xl mx-auto">
                      <div className="w-full flex flex-col items-center justify-center gap-8">
                      <p className="text-lg hidden">
                      BioHalos revolutionary enzyme-based biohalogenation platform
                      offers you near limitless possibilities for{" "}
                      <span className="bg-gradient-to-tr from-pinkAccent to-red-900/80 bg-clip-text text-transparent ">
                        fluorine
                      </span>
                      -enhanced compound development.
                </p>

                      </div>
                      <div className="w-full max-w-md flex flex-col items-center justify-center">
                          <Image
                            src={BioFMonomer}
                            alt="BioFMonomerAllPink"
                            className="w-[50vw]  object-contain grayscale opacity-40 sm:opacity-20 -rotate-12 brightness-[0.1] scale-200 absolute"
                          />
                      </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div
          className="absolute w-[800px] h-[400px] 
          bottom-[-11%] left-[30%]"
        ></div>
      </div>


      <div className="relative bottom-0 left-0 w-full h-[100px] md:h-[200px]">
        {/*   <div className="w-full h-full opacity-1"
        style={{
          backgroundImage: `url(${BioReactorBP.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "opacity, transform",}}/> */}
      </div>
      <div className="relative bottom-0 left-[5%] w-full h-[200px] overflow-visible
      translate-x-[0] translate-y-[43px] md:translate-y-[0]">
        <MovingAtom
          width={80}
          height={80}
          hoverAmplitude={7}
          hoverDuration={5}
          shouldRotate={true}
          rotationDuration={25}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(195,12,95,1)" //pink
          className="absolute top-[50%] left-[50%] 2xl:top-0
            translate-x-[-50%] translate-y-[-150%] 
            md:translate-x-[-50%] md:translate-y-[-250%] 
            2xl:translate-x-[50%] 2xl:-translate-y-[390%] opacity-90 z-5"
        />
        <div
          className="absolute bottom-0 left-[50%]
            translate-x-[-50%] md:translate-y-[72px] 2xl:translate-y-[86px]
            w-[300px] h-[300px] md:w-[500px] md:h-[500px] 2xl:w-[600px] 2xl:h-[600px]"
          style={{
            backgroundImage: `url(${BeakerHalfAndHalf.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <MovingAtom
          width={80}
          height={80}
          hoverAmplitude={7}
          hoverDuration={6}
          shouldRotate={true}
          rotationDuration={20}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(18,110,119,1)" //teal
          className="absolute top-[50%] left-[50%] translate-x-[50%] translate-y-[-80%] 
           opacity-90 z-5"
        />
        <MovingAtom
          width={50}
          height={50}
          hoverAmplitude={7}
          hoverDuration={4}
          shouldRotate={true}
          rotationDuration={21}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(195,12,95,1)" //pink
          className="hidden md:block
          absolute top-[18%] left-[50%] translate-x-[350%] translate-y-[-260%] 
           opacity-90 z-5"
        />
        <MovingAtom
          width={40}
          height={40}
          hoverAmplitude={7}
          hoverDuration={7}
          shouldRotate={true}
          rotationDuration={15}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(195,12,95,1)" //pink
          className="absolute top-[2%] left-[50%] translate-x-[100%] translate-y-[20%] 
           opacity-90 z-5"
        />
        <MovingAtom
          width={50}
          height={50}
          hoverAmplitude={7}
          hoverDuration={4}
          shouldRotate={true}
          rotationDuration={25}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(18,110,119,1)" //teal
          className="hidden md:block
          absolute top-[20%] left-[47%] translate-x-[180%] translate-y-[-480%] 
           opacity-90 z-5"
        />
        <MovingAtom
          width={50}
          height={50}
          hoverAmplitude={7}
          hoverDuration={5}
          shouldRotate={true}
          rotationDuration={16}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(18,110,119,1)" //teal
          className="absolute top-[20%] left-[50%] translate-x-[-100%] translate-y-[-40%] 
          opacity-90 z-5"
        />
      </div>
    </section>
  );
};
