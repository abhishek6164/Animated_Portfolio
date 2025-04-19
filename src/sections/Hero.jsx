import { Element, Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-52 pb-20 max-lg:pt-48 max-lg:pb-36 max-md:pt-28 max-md:pb-20">
      <Element name="hero">
        <div className="container">
          {/* TEXT ANIMATION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="data relative z-2 max-w-512 max-lg:max-w-388 max-md:max-w-full max-md:text-center"
          >
            <motion.div
              className="caption small-2 uppercase text-p3 max-md:text-base max-md:mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Full Stack Web Developer
            </motion.div>

            <motion.h1
              className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-4xl max-md:leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Hello, I'm Abhishek
            </motion.h1>

            <motion.p
              className="max-w-440 mb-14 body-1 max-md:mb-8 max-md:text-sm max-md:leading-relaxed max-md:mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              A passionate MERN Stack Developer who turns ideas into interactive
              web experiences. I build modern, responsive, and
              performance-driven applications with clean code and big dreams.
            </motion.p>

            <motion.a
              href="/assets/Abhishek_Pipriye.pdf"
              download="Abhishek_Pipriye_Resume.pdf"
              className="inline-block max-md:w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button
                icon="/images/zap.svg"
                className="w-auto max-md:w-full max-md:justify-center max-md:text-base max-md:py-3 max-md:px-6 hover:scale-105 transition-transform"
              >
                Download Resume
              </Button>
            </motion.a>
          </motion.div>

          {/* IMAGE ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
            className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res max-md:fixed max-md:inset-0 max-md:w-full max-md:h-full"
          >
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto max-md:w-full max-md:h-full max-md:object-cover max-md:opacity-20"
              alt="hero"
            />
          </motion.div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
