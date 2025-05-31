import React, { useRef } from "react";
import emailjs from "emailjs-com";
import validator from "validator";
import { useState } from "react";

export default function MailForm() {
  const form = useRef();
  const [emailError, setEmailError] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tsiw5pi",
        "template_5ehn0mf",
        form.current,
        "HianHxyWOzfPHapqQ",
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setEmailError("");
        },
        (error) => {
          alert("Failed to send message. " + error.text);
        },
      );

    e.target.reset();
  };

  const validateEmail = (e) => {
    const email = e.target.value;

    if (!validator.isEmail(email)) {
      setEmailError("Invalid Email :)");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div id="root" className="w-full max-w-lg px-4">
        <div className="w-full rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-5 text-center text-2xl font-semibold text-gray-800">
            Contact Us
          </h2>
          <p className="mb-5 text-center text-sm font-semibold text-gray-800">
            Please enter your details, query and budget
          </p>

          <form
            className="space-y-6"
            aria-label="Contact Form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div>
              <label
                htmlFor="user_name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="user_email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="you@example.com"
                required
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => validateEmail(e)}
              />
              <span className="text-sm font-medium text-red-800">
                {emailError}
              </span>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                required
                rows="6"
                className="w-full resize-none rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
