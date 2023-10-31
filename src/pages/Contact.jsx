import React from "react";

import "../styles/Contact.css";

import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";

export default function Contact() {
  const handleSubmit = () => {
    alert("You will try to reach you...Thank you. ");
  };
  return (
    <div>
      <h2>Get in Touch</h2>
      <hr />
      <form onSubmit={handleSubmit} className="formStyle">
        <label htmlFor="html">Your query:</label>
        <input type="text" placeholder="your query.." />
        <label htmlFor="html">Email:</label>
        <input type="text" placeholder="your email.." />

        <button type="submit">submit</button>
      </form>

      <div className="contact-group">
        <div className="contact">
          <i>
            <BsFillTelephoneInboundFill />
          </i>
          <h3>make a call</h3>
          <span>0009785412</span>
        </div>
        <div className="contact">
          <i>
            <BsFillEnvelopeAtFill />
          </i>
          <h3>send email</h3>
          <span>anything@gmail.com</span>
        </div>
        <div className="contact">
          <i>
            <BsFillGeoAltFill />
          </i>
          <h3>visit us</h3>
          <span>Block#A,Aftabnagar,Dhaka</span>
        </div>
      </div>
    </div>
  );
}
