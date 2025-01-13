import React from "react";

const HeroSection = () => {
  const scrollToBookReq = () => {
    const bookReqSection = document.getElementById("book-req");
    if (bookReqSection) {
      bookReqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Sunnies and Skies</h1>
        <p className="hero-subtitle">Find your sunshine between the pages!</p>
        <button className="hero-button" onClick={scrollToBookReq}>
          Request Now
        </button>
      </div>
    </header>
  );
};

export default HeroSection;