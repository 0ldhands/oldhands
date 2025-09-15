import React, { useState } from "react";
import { motion } from "framer-motion";
import Enquiry from "../../assets/Enquiry2.jpg";
import { RiSendPlane2Fill } from "react-icons/ri";
import { IoSendSharp } from "react-icons/io5";

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-2 py-3 sm:py-4 mt-20 sm:m-15 rounded-3xl space-y-8 m-2">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-1">Contact Us</h1>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-10">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={Enquiry}
            alt="Enquiry"
            width="800"
            className="rounded-2xl"
          />
        </div>

        {/* Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-2xl shadow-md sm:shadow-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {submitted && (
            <motion.div
              className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Your message has been sent successfully!
            </motion.div>
          )}

          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 transition ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 transition ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-semibold">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 transition ${
                errors.subject ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Enter your queries"
              className={`w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 transition ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={{ backgroundColor: "#386138" }}
            className="w-full text-white py-1 rounded-md font-semibold mt-2 hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            Send <IoSendSharp className="ml-2" />
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default FormContact;
