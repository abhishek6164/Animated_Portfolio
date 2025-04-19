import React from "react";
import { motion } from "framer-motion";

const skills = [
  { title: "HTML5", icon: "/assets/html.png" },
  { title: "CSS3", icon: "/assets/css.png" },
  { title: "JavaScript", icon: "/assets/javascript.png" },
  { title: "React", icon: "/assets/react.svg" },
  { title: "Node.js", icon: "/assets/nodejs.png" },
  { title: "Express.js", icon: "/assets/expressjs.png" },
  { title: "MongoDB", icon: "/assets/mongodb.png" },
  { title: "Sql", icon: "/assets/sql.png" },
  { title: "Git & GitHub", icon: "/assets/github.png" },
  { title: "Tailwind CSS", icon: "/assets/tailwind.png" },
  { title: "Firebase", icon: "/assets/firebase.png" },
  { title: "Postman", icon: "/assets/postman.webp" },
  { title: "Operating Systems", icon: "/assets/OperatingSystems.png" },
  { title: "Server Admin", icon: "/assets/png.png" },
  { title: "Network Admin", icon: "/assets/network.png" },
  { title: "System Admin", icon: "/assets/system.png" },
];

const Skills = () => {
  return (
    <section
      className="container px-4 sm:px-6 lg:px-12 my-12 sm:my-16 lg:my-24"
      id="skills"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-p1 to-p2 bg-clip-text text-transparent mb-4"
      >
        My Tech Stack
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-p4 text-sm sm:text-base max-w-2xl mx-auto mb-10"
      >
        Tools & technologies I've explored in my MERN journey — constantly
        upgrading 🚀
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-s1 hover:bg-s2 border border-s3 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-sm hover:shadow-lg group"
          >
            <motion.img
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              src={skill.icon}
              alt={skill.title}
              className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300"
            />
            <p className="text-sm sm:text-base text-p5 font-medium">
              {skill.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
