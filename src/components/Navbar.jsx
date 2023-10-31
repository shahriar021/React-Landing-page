import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="ITlogo">
        <Link to="/" className="nav-link">
          <span>BangladeshIT</span>
        </Link>
      </div>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/services" className="nav-link">
        Services
      </Link>
      <Link to="/faq" className="nav-link">
        faq
      </Link>
      <Link to="/feedback" className="nav-link">
        Feedback
      </Link>
      <Link to="/blog" className="nav-link">
        Blog
      </Link>
      <Link to="/jobs" className="nav-link">
        Jobs
      </Link>
    </nav>
  );
}
