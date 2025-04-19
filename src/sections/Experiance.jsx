import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/Loading.jsx";
import { workExperiences } from "../constants/index.js";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <section className="pt-20 px-4 sm:px-6 lg:px-8" id="experience">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-p1 to-p2 bg-clip-text text-transparent mb-16"
        >
          My Work Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {/* 3D Model Canvas */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-black-300 bg-black-200"
          >
            <Canvas className="w-full h-full">
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative shadow-xl sm:shadow-2xl shadow-black-200 rounded-xl overflow-hidden"
          >
            <img
              src="/assets/spotlight2.png"
              alt="spotlight"
              className="absolute top-0 right-0 w-full h-80 object-cover opacity-20 sm:opacity-30 rounded-xl"
            />

            <div className="relative bg-transparent z-10 p-4 sm:p-6 md:p-8 space-y-8">
              {workExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group transform hover:-translate-y-1 transition-all duration-300"
                  onMouseEnter={() =>
                    setAnimationName(experience.animation.toLowerCase())
                  }
                  onMouseLeave={() => setAnimationName("idle")}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl bg-s2/80 backdrop-blur-sm hover:bg-s3/80 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 overflow-hidden rounded-lg"
                      >
                        <img
                          src={experience.icon}
                          alt={experience.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </motion.div>
                      <div className="mt-4 h-1 bg-gradient-to-r from-p1 to-p2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>

                    <div className="flex-1">
                      <motion.h3 
                        whileHover={{ scale: 1.05 }}
                        className="text-xl sm:text-2xl font-bold text-white-800 mb-2 group-hover:text-p1 transition-colors duration-300"
                      >
                        {experience.name}
                      </motion.h3>
                      <div className="flex flex-wrap gap-2 items-center mb-3">
                        <span className="text-p2 font-medium">
                          {experience.pos}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-p3" />
                        <span className="text-p4">{experience.duration}</span>
                      </div>
                      <motion.p 
                        whileHover={{ x: 10 }}
                        className="text-p4/90 group-hover:text-white transition-all duration-300 leading-relaxed"
                      >
                        {experience.title}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
