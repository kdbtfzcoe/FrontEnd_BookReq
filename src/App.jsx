import React from "react";
import BookReqForm from "./components/BookReqForm";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import './styles/styles.css'; // Import your CSS file

function App() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <BookReqForm />
            <Footer />
        </div>
    );
}

export default App;