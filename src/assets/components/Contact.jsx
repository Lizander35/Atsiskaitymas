import React, { useState } from "react";
import Hero from "./Hero";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.name) {
      isValid = false;
      newErrors.name = "Name is required";
    } else {
      newErrors.name = "";
    }

    if (!formData.email) {
      isValid = false;
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      isValid = false;
      newErrors.email = "Invalid email format";
    } else {
      newErrors.email = "";
    }

    if (!formData.message) {
      isValid = false;
      newErrors.message = "Message is required";
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);

      setSuccessMessage("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Hero
        title={"Contact Me"}
        subTitle={"Got any questions? Please let me know."}
        src={"heroContact"}
      />
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto p-4 w-full md:w-2/3 lg:w-1/2 p-20">
          {successMessage && (
            <div className="bg-green-200 border-l-4 border-green-500 text-green-700 p-4 mb-4">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={`border rounded p-2 w-full ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`border rounded p-2 w-full ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className={`border rounded p-2 w-full h-32 resize-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-xs italic">{errors.message}</p>
              )}
            </div>

            <div>
              <button
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
