import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/Services.css";

export default function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <h1>our services</h1>
      <div className="grids">
        <div data-aos="fade-down" className="boxes">
          Web development
        </div>
        <div data-aos="flip-up" className="boxes">
          App development
        </div>
        <div data-aos="flip-right" className="boxes">
          Web desgin
        </div>
        <div data-aos="flip-left" className="boxes">
          SQA
        </div>
        <div data-aos="slide-up" className="boxes">
          Problem Solving Instructor
        </div>
        <div className="boxes">Server/clent</div>
      </div>
    </div>
  );
}
