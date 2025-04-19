import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("abhishekpipriye2507@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-p5 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-s1"
    >
      <section className="max-w-7xl mx-auto" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Grid - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-s2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full h-[150px] sm:h-[200px] object-contain mb-3 sm:mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Hi, I'm Abhishek 👋
            </h2>
            <p className="text-sm sm:text-base text-p4">
              A System Administrator with 2.5 years of experience, now diving
              deep into the MERN Stack. Passionate about building real-world
              projects and turning ideas into functional web applications.
            </p>
          </motion.div>

          {/* Middle Grid - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-s2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full h-[150px] sm:h-[200px] object-contain mb-3 sm:mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Tech Stack</h2>
            <p className="text-sm sm:text-base text-p4">
              I specialize in JavaScript, focusing on the React.js ecosystem and
              the full MERN stack.
            </p>
          </motion.div>

          {/* Right Grid - Globe & Remote Work */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-s2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg flex flex-col items-center md:col-span-2 xl:col-span-1"
          >
            <div className="w-full max-w-[300px]">
              <Globe
                height={250}
                width={250}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "I'm here!",
                    color: "white",
                    size: "large",
                    font: "Helvetica",
                  },
                ]}
              />
            </div>
            <h2 className="text-lg sm:text-xl font-bold mt-4 sm:mt-6 mb-2">
              Remote Availability
            </h2>
            <p className="text-sm sm:text-base text-center text-p4">
              I'm based in India and open to working remotely across global time
              zones.
            </p>
            <LinkScroll to="projects" offset={-100} spy smooth>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 sm:mt-6"
              >
                <Button icon="/images/zap.svg">Contact ME</Button>
              </motion.div>
            </LinkScroll>
          </motion.div>

          {/* Passion Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-s2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg md:col-span-2"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full h-[150px] sm:h-[200px] object-contain mb-3 sm:mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              My Passion for Coding
            </h2>
            <p className="text-sm sm:text-base text-p4">
              I love solving problems and building things through code. Coding
              isn't just my profession - it is my passion.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-s2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg flex flex-col justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/assets/grid4.png"
              alt="grid4"
              className="w-full h-[120px] sm:h-[150px] object-cover mb-3 sm:mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-center">
              Contact Me
            </h2>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-2 sm:space-x-3 cursor-pointer bg-s3 p-2 sm:p-3 rounded-xl hover:bg-s4 transition-colors"
              onClick={handleCopy}
            >
              <img
                src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                alt="copy"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <p className="text-sm sm:text-base truncate">
                abhishekpipriye2507@gmail.com
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
