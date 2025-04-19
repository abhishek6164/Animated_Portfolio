import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion"; // Added framer-motion

import { myProjects } from "../constants/index.js";
import CanvasLoader from "../components/Loading.jsx";
import DemoComputer from "../components/DemoComputer.jsx";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-br"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        My Work
      </motion.h2>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[rgba(255,255,255,0.05)] backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[rgba(255,255,255,0.1)] h-full flex flex-col justify-between shadow-xl transition-all duration-300 hover:scale-[1.01]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.95) 50%), url(${currentProject.spotlight})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative mt-auto">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-4 backdrop-blur-3xl w-fit rounded-xl mb-6"
              style={currentProject.logoStyle}
            >
              <img
                className="w-12 h-12 shadow-lg rounded-lg"
                src={currentProject.logo}
                alt="logo"
              />
            </motion.div>

            <div className="space-y-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold animatedText">
                {currentProject.title}
              </h3>

              <p className="text-base md:text-lg opacity-90 animatedText leading-relaxed">
                {currentProject.desc}
              </p>
              <p className="text-sm md:text-base text-gray-300 animatedText">
                {currentProject.subdesc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8">
              <div className="flex flex-wrap items-center gap-4">
                {currentProject.tags.map((tag, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="tech-logo"
                  >
                    <img src={tag.path} alt={tag.name} className="w-8 h-8" />
                  </motion.div>
                ))}
              </div>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all shadow-lg"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-white font-medium">View Live Site</span>
                <img
                  src="/assets/arrow-up.png"
                  alt="arrow"
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
            </div>

            <div className="flex justify-between items-center mt-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
                onClick={() => handleNavigation("previous")}
              >
                <img
                  src="/assets/left-arrow.png"
                  alt="previous"
                  className="w-5 h-5"
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
                onClick={() => handleNavigation("next")}
              >
                <img
                  src="/assets/right-arrow.png"
                  alt="next"
                  className="w-5 h-5"
                />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] shadow-xl"
        >
          <Canvas className="w-full h-full">
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}
              enablePan={false}
            />
          </Canvas>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
