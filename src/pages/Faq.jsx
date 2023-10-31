import React from "react";
import Faqs from "../components/faq/FAQs";
import "../styles/Faq.css";

import Slide from "react-reveal/Slide";

export default function Faq() {
  return (
    <div className="main-faq">
      <div className="medium-faq">
        <div className="small-faq">
          <h3>FAQ's</h3>
          <Slide left>
            <Faqs />
          </Slide>
        </div>
      </div>
    </div>
  );
}
