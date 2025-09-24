import React from "react";
import "./ContactUs.css";
import { FaEnvelope, FaLinkedin, FaDownload } from "react-icons/fa";

export const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        {/* ================= LEFT SECTION ================= */}
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p className="contact-text">
            I’d love to connect with you!  
            Feel free to reach out through email or LinkedIn.
          </p>

          {/* Contact Links */}
          <div className="contact-links">
            <a
              href="mailto:yourgmail@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaEnvelope className="icon" />
              lokeshwariloki0804@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/lokeshwari-m-800127293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin className="icon" />
              LinkedIn Profile
            </a>
          </div>

          {/* Resume Download Button */}
          <a
  href="/Assets/lokeshwari
  M.pdf"
  download
  className="resume-btn"
>
  <FaDownload className="icon" />
  Download Resume
</a>

        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="contact-right">
          <h3>Why Connect With Me?</h3>
          <p>
            I’m passionate about learning, growing, and contributing.  
            If given the opportunity, I’ll bring my dedication, energy,  
            and problem-solving skills to your team.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;