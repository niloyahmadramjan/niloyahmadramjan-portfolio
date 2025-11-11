import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend,
  FiCheckCircle,
  FiAlertCircle 
} from 'react-icons/fi';
import { 
  FaLinkedin, 
  FaGithub, 
  FaFacebook, 
  FaTwitter 
} from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get credentials from environment variables
 const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset form
        if (formRef.current) {
          formRef.current.reset();
        }
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      // Show error for 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'niloyahmadramjan@gmail.com',
      link: 'mailto:niloyahmadramjan@gmail.com',
      color: 'text-[#4BB8FF]'
    },
    {
      icon: FiPhone,
      title: 'WhatsApp',
      value: '+601135451398',
      link: 'https://wa.me/601135451398',
      color: 'text-[#25D366]'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      link: '#',
      color: 'text-[#FF6B6B]'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/niloyahmedramjan/',
      color: 'hover:text-[#0077B5]'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/niloyahmadramjan',
      color: 'hover:text-[#333]'
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      url: '#',
      color: 'hover:text-[#1877F2]'
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      url: '#',
      color: 'hover:text-[#1DA1F2]'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8 lg:mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Let's discuss your project and bring your ideas to life. I'm always open to new opportunities and collaborations.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    target={item.title !== 'Location' ? '_blank' : '_self'}
                    rel={item.title !== 'Location' ? 'noopener noreferrer' : ''}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="
                      bg-white/10 
                      backdrop-blur-md 
                      border 
                      border-white/20 
                      rounded-2xl 
                      p-6 
                      flex 
                      items-center 
                      gap-4 
                      cursor-pointer 
                      transition-all 
                      duration-300
                      hover:border-[#FF4E88]/50
                      hover:shadow-2xl
                      group
                    "
                  >
                    <div className={`
                      ${item.color} 
                      text-2xl 
                      p-3 
                      rounded-xl 
                      bg-white/10 
                      group-hover:scale-110 
                      transition-transform 
                      duration-300
                    `}>
                      <Icon />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="
                bg-white/10 
                backdrop-blur-md 
                border 
                border-white/20 
                rounded-2xl 
                p-6
              "
            >
              <h3 className="text-white font-semibold text-lg mb-4 text-center">
                Follow Me
              </h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        text-gray-400 
                        hover:text-white 
                        bg-white/5 
                        border 
                        border-white/10 
                        rounded-full 
                        p-3 
                        transition-all 
                        duration-300 
                        ${social.color}
                        hover:scale-110
                        hover:border-[#FF4E88]/50
                      `}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="
                bg-gradient-to-r 
                from-[#FF4E88]/20 
                to-[#4BB8FF]/20 
                border 
                border-[#FF4E88]/30 
                rounded-2xl 
                p-6 
                text-center
              "
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold text-sm">
                  Available for Work
                </span>
              </div>
              <p className="text-white text-sm">
                Currently accepting new projects and opportunities
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="
              bg-white/10 
              backdrop-blur-md 
              border 
              border-white/20 
              rounded-2xl 
              p-6 
              lg:p-8
            "
          >
            <h2 className="text-white font-semibold text-2xl mb-6 text-center lg:text-left">
              Send Message
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="
                      w-full 
                      bg-white/5 
                      border 
                      border-white/20 
                      rounded-xl 
                      px-4 
                      py-3 
                      text-white 
                      placeholder-gray-400 
                      focus:outline-none 
                      focus:border-[#FF4E88] 
                      focus:ring-1 
                      focus:ring-[#FF4E88] 
                      transition-all 
                      duration-300
                    "
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="
                      w-full 
                      bg-white/5 
                      border 
                      border-white/20 
                      rounded-xl 
                      px-4 
                      py-3 
                      text-white 
                      placeholder-gray-400 
                      focus:outline-none 
                      focus:border-[#FF4E88] 
                      focus:ring-1 
                      focus:ring-[#FF4E88] 
                      transition-all 
                      duration-300
                    "
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="
                    w-full 
                    bg-white/5 
                    border 
                    border-white/20 
                    rounded-xl 
                    px-4 
                    py-3 
                    text-white 
                    placeholder-gray-400 
                    focus:outline-none 
                    focus:border-[#FF4E88] 
                    focus:ring-1 
                    focus:ring-[#FF4E88] 
                    transition-all 
                    duration-300
                  "
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="
                    w-full 
                    bg-white/5 
                    border 
                    border-white/20 
                    rounded-xl 
                    px-4 
                    py-3 
                    text-white 
                    placeholder-gray-400 
                    focus:outline-none 
                    focus:border-[#FF4E88] 
                    focus:ring-1 
                    focus:ring-[#FF4E88] 
                    transition-all 
                    duration-300
                    resize-vertical
                  "
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  w-full 
                  bg-gradient-to-r 
                  from-[#FF4E88] 
                  to-[#4BB8FF] 
                  text-white 
                  font-semibold 
                  py-4 
                  px-8 
                  rounded-xl 
                  transition-all 
                  duration-300 
                  shadow-lg 
                  hover:shadow-xl 
                  disabled:opacity-50 
                  disabled:cursor-not-allowed
                  flex 
                  items-center 
                  justify-center 
                  gap-2
                "
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="text-lg" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Message */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`
                      p-4 
                      rounded-xl 
                      flex 
                      items-center 
                      gap-3 
                      ${
                        submitStatus === 'success'
                          ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                          : 'bg-red-500/20 border border-red-500/30 text-red-400'
                      }
                    `}
                  >
                    {submitStatus === 'success' ? (
                      <FiCheckCircle className="text-xl" />
                    ) : (
                      <FiAlertCircle className="text-xl" />
                    )}
                    <div>
                      <p className="font-semibold">
                        {submitStatus === 'success' ? 'Message Sent!' : 'Error!'}
                      </p>
                      <p className="text-sm">
                        {submitStatus === 'success'
                          ? 'Thank you for your message. I will get back to you soon!'
                          : 'There was an error sending your message. Please try again.'}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* Quick Response Info */}
        <motion.div
          variants={itemVariants}
          className="
            bg-white/5 
            backdrop-blur-md 
            border 
            border-white/10 
            rounded-2xl 
            p-6 
            mt-12 
            text-center
          "
        >
          <h3 className="text-white font-semibold text-lg mb-2">
            Quick Response Guaranteed
          </h3>
          <p className="text-gray-300 text-sm">
            I typically respond to all messages within 24 hours. Let's start a conversation!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}