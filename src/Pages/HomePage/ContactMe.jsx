import React from "react";
import SubmitButn from "../../Components/Buttons/SubmitButn";

function ContactMe() {
  return (
    <div className="ContactPageContainer">
      <section className="ContactSection" id="Contact">
        <div>
          <p className="SubTitle">Get In Touch</p>
          <h2>Contact Me</h2>
          <p className="text-lg">
            <br />
            I’m very approachable and would love to speak to you. Feel
            <br /> free to call, send me an email . Follow me in social media or
            <br /> simply complete the enquiry form.
          </p>
        </div>
        <form action="" className="ContactFormContainer">
          <div className="Container">
            <label htmlFor="FirstName" className="ContactLable">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="ContactInput text-md"
                name="FirstName"
                id="FirstName"
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
              required
            />
          </label>
          <label htmlFor="checkbox" className="CheckboxLable">
            <input
              type="checkbox"
              name="checkbox"
              className="checkbox"
              id="checkbox"
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
