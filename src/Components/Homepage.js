// Homepage.js
// 1) Import React (keeps code clear for beginners; with newer React it's optional,
//    but we include it to show why we need React in a component file).
import React from "react";

// 2) Import the CSS that styles this component.
//    The file must be at src/Components/Homepage.css
import "./Homepage.css";

// 3) Define the Homepage component as a JavaScript function.
//    This is a "functional component" — the simplest way to create components in React.
function Homepage() {
  // 4) The component returns JSX — HTML-like code inside JavaScript.
  return (
    // 5) Main wrapper div. className is used instead of "class" in React.
    <div className="homepage">

      {/* 6) Header with the main page title */}
      <header>
        <h1>Welcome to my Homepage</h1>
      </header>

      {/* 7) Intro paragraph: my personal summary */}
     <p className="intro">
  My name is <strong>Lokeshwari M</strong>.<br />
  I am a <strong>Software Testing Professional</strong> currently working as a <strong>Data Analyst</strong>.<br />
  I am interested to work in fields like <strong>Designer, Developer, or Tester</strong>.<br />
  I completed <strong>B.Sc. Computer Science</strong> at Chellammal Women's College, Guindy.<br />
  I completed <strong>Software Testing</strong> course at Besant Technologies.<br />
  I have strong knowledge in the following areas:
</p>

      {/* 8) Skills list. 'skills' class will style this as a grid of boxes in CSS */}
      <ul className="skills">
        <li>SDLC</li>
        <li>STLC</li>
        <li>White Box Testing</li>
        <li>Black Box Testing</li>
        <li>Grey Box Testing</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Basic knowledge in React JS</li>
        <li>Basic knowledge in Java</li>
      </ul>

      {/* 9) Education section: each item shows year, degree/school and percentage */}
      <section className="education">
        <h2>Education</h2>
        <ul>
          <li><strong>2021 – 2024:</strong> B.Sc Computer Science, Chellammal Women’s College, Guindy — <strong>80%</strong></li>
          <li><strong>2021:</strong> HSC (12th), Govt. Girls Higher Secondary School — <strong>82%</strong></li>
          <li><strong>2019:</strong> SSLC (10th), Govt. Girls Higher Secondary School — <strong>72%</strong></li>
        </ul>
      </section>
         {/* Strength Section */}
<section className="strength">
  <h2>Strength</h2>
  <ul>
    <li>I'm a person who is passionate about my work</li>
    <li>I'm a dedicated, quick learner, and focused person</li>
    <li>I'm a person who is always ready to accept challenges</li>
  </ul>
</section>


      {/* 10) Project section: describe your team role and what the project does */}
      <section className="project">
        <h2>Project</h2>
       <p>
    I worked on an <strong>Attendance Management System</strong> as part of a team.  
    My role was <strong>Tester</strong>, where I was responsible for performing testing, suggesting improvements, 
    and preparing the project presentation (PPT).
  </p>

  <p>
    The system enables professors to mark attendance and make a one-time correction if a mistaken entry occurs.  
    Students can log in to view their attendance percentage. The application was designed to be useful, 
    user-friendly, and efficient.
  </p>

  <p>
    During testing, I identified a usability gap: staff members had no option to correct mistakes 
    if they accidentally selected the wrong attendance status.  
    I suggested adding a controlled <strong>"Change Marked Attendance"</strong> option, allowing staff to update 
    their marked attendance when necessary. This improvement:
  </p>

  <ul>
    <li>Reduces errors in attendance records</li>
    <li>Improves staff flexibility while maintaining accountability</li>
    <li>Enhances the overall user experience</li>
  </ul>

  <p>
    My team lead reviewed and accepted the suggestion, and the feature was successfully implemented 
    into the application.
  </p>
      </section>
      {/* Experience Section */}
<section className="experience">
  <h2>Professional Experience</h2>

  <h3>Data Analyst – Social Media Marketing</h3>
  <p><strong>Company:</strong> Bairacorp Private Limited</p>
  <p><strong>Work Mode:</strong> Hybrid</p>
  <p><strong>Location:</strong> Chennai</p>

  <ul>
    <li>Analyzed social media performance data from platforms like Facebook, Instagram, LinkedIn.</li>
    <li>Prepared Daily, weekly and monthly analytics reports.</li>
    <li>Identified audience behavior and engagement trends.</li>
    <li>Supported marketing teams with data-driven insights.</li>
    <li>Worked with dashboards and analytics tools.</li>
  </ul>
</section>
  
    </div>
  );
}

// 11) Export the component so App.js can import and use it as <Homepage />
export default Homepage;
