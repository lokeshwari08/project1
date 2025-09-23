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
        I am a <strong>Fresher</strong> and ready to work.<br />
        I am  intersted to work in any fields like <strong>Designer or Developer or Tester</strong>.<br />
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
          My role was <strong>Tester</strong>: I performed testing, suggested improvements,
          and prepared the project presentation (PPT).
        </p>
        <p>
          The system allows professors to mark attendance and (one-time) correct mistaken entries.
          Students can sign in and view their attendance percentage. The system is useful,
          user-friendly, and efficient.
        </p>
      </section>
  
    </div>
  );
}

// 11) Export the component so App.js can import and use it as <Homepage />
export default Homepage;
