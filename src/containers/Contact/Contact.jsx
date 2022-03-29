import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
          <div className="contact__container">
              <h2 className="gradient__text" id="contact">Contact Me</h2>
        <form action="" method="post">
          <div className="contact__name">
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First Name"
            />
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Last Name"
            />
          </div>
          <div className="contact__rest">
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Email"
            />
            <textarea
              name="user_message"
              id="user_message"
              cols="30"
              rows="10"
              placeholder="Message"
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
