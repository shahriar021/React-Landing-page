import React from "react";

import "../styles/Contact.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";

export default function Contact() {
  const handleContactButton = () => {
    toast("successfully submitted!  ");
  };

  return (
    <div>
      <h2>Get in Touch</h2>
      <form className="cf">
        <div className="half left cf">
          <input type="text" placeholder="Name" name="user_name" />
          <input type="email" placeholder="Email address" name="user_email" />
        </div>
        <div className="half right cf">
          <textarea name="message" type="text" placeholder="Message"></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          id="input-submit"
          onClick={handleContactButton}
        />
        <ToastContainer />
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
