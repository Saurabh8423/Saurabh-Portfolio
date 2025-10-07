import React from "react";
import con from "../../assets/contact.png";
import "./Contact.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    gsap.from(".left-contact", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".left-contact",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });

     gsap.from("form", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "form",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });
  });
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
