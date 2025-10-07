import React from "react";
import con from "../../assets/contact.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className="left-contact">
        <img src={con} alt="" />
      </div>

      <div className="right-contact">
        <form action="https://formspree.io/f/xblzalan" method="POST">
          <input name="Username" type="text" placeholder="Name" />
          <input name="Email" type="email" placeholder="Email" />
          <textarea name="message" id="textarea" placeholder="Message me" />
          <input type="submit" id="btn" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
