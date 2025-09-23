// App.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import WelcomePage from "./Components/WelcomePage";
import ContactUs from "./Components/ContactUs";  

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) return <WelcomePage />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
