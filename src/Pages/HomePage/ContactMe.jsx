import React, { useState } from "react";
import emailjs from "emailjs-com";
import SubmitButn from "../../Components/Buttons/SubmitButn";

function ContactMe() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    PhoneNumber: "",
    Subject: "",
    Message: "",
    checkbox: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        first_name: formData.FirstName,
        last_name: formData.LastName,
        email: formData.email,
        phone: formData.PhoneNumber,
        subject: formData.Subject,
        message: formData.Message,
      };

      await emailjs.send(
        "service_i0e15ad", // Replace with your EmailJS service ID
        "template_l0rusfa", // Replace with your EmailJS template ID
        templateParams,
        "wwWaum74b0mcDRvkC" // Replace with your EmailJS user ID
      );

      alert("Message sent successfully!");
      // Reset the form data
      setFormData({
        FirstName: "",
        LastName: "",
        email: "",
        PhoneNumber: "",
        Subject: "",
        Message: "",
        checkbox: false,
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="ContactPageContainer">
      <section className="ContactSection" id="Contact">
        <div>
          <p className="SubTitle">Get In Touch</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
            <br />
            I’m very approachable and would love to speak to you. Feel
            <br /> free to call, send me an email. Follow me in social media or
            <br /> simply complete the enquiry form.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="ContactFormContainer">
          <div className="Container">
            <label htmlFor="FirstName" className="ContactLable">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="ContactInput text-md"
                name="FirstName"
                id="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="LastName" className="ContactLable">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="ContactInput text-md"
                name="LastName"
                id="LastName"
                value={formData.LastName}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="email" className="ContactLable">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="ContactInput text-md"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="PhoneNumber" className="ContactLable">
              <span className="text-md">Phone No.</span>
              <input
                type="number"
                className="ContactInput text-md"
                name="PhoneNumber"
                id="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="Subject" className="ContactLable">
              <span className="text-md">Subject</span>
              <input
                type="text"
                className="ContactInput text-md"
                name="Subject"
                id="Subject"
                value={formData.Subject}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label htmlFor="Message" className="ContactLable">
            <span className="text-md">Message</span>
            <textarea
              className="ContactInput text-md"
              name="Message"
              id="Message"
              rows="8"
              placeholder="Type Your Message..."
              value={formData.Message}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="checkbox" className="CheckboxLable">
            <input
              type="checkbox"
              name="checkbox"
              className="checkbox"
              id="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}
              required
            />
            <span className="text-sm">I accept the terms</span>
          </label>
          <div className="SubmitButton">
            <SubmitButn />
          </div>
        </form>
      </section>
    </div>
  );
}

export default ContactMe;
