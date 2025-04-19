import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Abhishek Pipriye",
          from_email: form.email,
          to_email: "abhishekpipriye2507@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative c-space my-20 pt-28 pb-10 min-h-screen flex items-center justify-center"
      id="contact"
    >
      {alert.show && <Alert {...alert} />}

      {/* Terminal Background Image */}
      {/* Terminal BG Image */}
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        src="/assets/terminal.png"
        alt="terminal-bg"
        className="absolute inset-0 w-full h-full object-contain sm:object-cover md:object-contain lg:object-contain xl:object-contain z-0"
      />

      {/* Form Card */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl z-10 bg-s1/80 backdrop-blur-md p-6 sm:p-10 rounded-xl shadow-xl"
      >
        <motion.h3 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h3 text-p5 mb-4 text-center sm:text-left"
        >
          Let's talk
        </motion.h3>
        <motion.p 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="base text-p4 mb-8 text-center sm:text-left"
        >
          Whether you're looking to build a new website, improve your existing
          platform, or bring a unique project to life, I'm here to help.
        </motion.p>

        <motion.form
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          {/* Name */}
          <motion.label 
            whileHover={{ scale: 1.02 }}
            className="flex flex-col gap-2"
          >
            <span className="base text-p4">Full Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-s2 text-p5 placeholder:text-p3 outline-none"
              placeholder="ex., John Doe"
            />
          </motion.label>

          {/* Email */}
          <motion.label 
            whileHover={{ scale: 1.02 }}
            className="flex flex-col gap-2"
          >
            <span className="base text-p4">Email address</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg bg-s2 text-p5 placeholder:text-p3 outline-none"
              placeholder="ex., johndoe@gmail.com"
            />
          </motion.label>

          {/* Message */}
          <motion.label 
            whileHover={{ scale: 1.02 }}
            className="flex flex-col gap-2"
          >
            <span className="base text-p4">Your message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="px-4 py-3 rounded-lg bg-s2 text-p5 placeholder:text-p3 outline-none resize-none"
              placeholder="Share your thoughts or inquiries..."
            />
          </motion.label>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-p2 text-white rounded-lg hover:bg-p3 transition-colors flex items-center justify-center gap-2"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
            <motion.img
              whileHover={{ y: -3 }}
              src="/assets/arrow-up.png"
              alt="arrow-up"
              className="w-4 h-4"
            />
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
