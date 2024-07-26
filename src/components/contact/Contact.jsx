import "../contact/contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_989ugqg", "template_uvhp0yj", form.current, "Lk7WghorUbwfHxmtZ")
      .then(
        () => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error("Failed to send message, please try again later.");
          console.log("FAILED...", error.text);
        }
      );
  };

  // ======Emailjs======

  // =====message error and send via toastify

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
    // console.log(e.target.name)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, project } = formData;

    if (name.length === 0 || email.length === 0 || project.length === 0) {
      toast.error("Please fill out all fields");
    } else {
      sendEmail(e);
    }
  };

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>
            <div className="contact__info">
              <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">
                  imsachandra@gmail.com
                </span>
                <a
                  href="https://mail.google.com/mail/u/0/"
                  className="contact__button"
                >
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="bx bx-phone contact__card-icon"></i>
                <h3 className="contact__card-title">Call & WhatsApp</h3>
                <span className="contact__card-data">(+91) 00000-00000</span>
                <a href="https://web.whatsapp.com/" className="contact__button">
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__content">
            <h3 className="contact__title">Write me your Project</h3>
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              ref={form}
            >
              <div className="contact__form-div">
                <label htmlFor="name" className="contact__form-tag">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Enter your Full Name"
                  onChange={handleInputChange}
                  value={formData.name}
                />
              </div>
              <div className="contact__form-div">
                <label htmlFor="email" className="contact__form-tag">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Enter your Email"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </div>
              <div className="contact__form-div">
                <label htmlFor="project" className="contact__form-tag">
                  Your Project
                </label>
                <textarea
                  name="project"
                  className="contact__form-input contact__form-area"
                  placeholder="Discuss your project and idea"
                  cols="30"
                  rows="10"
                  onChange={handleInputChange}
                  value={formData.project}
                ></textarea>
              </div>
              <button type="submit" className="button button--flex">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Contact;
