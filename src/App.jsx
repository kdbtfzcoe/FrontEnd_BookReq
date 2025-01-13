// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookReqForm from "./components/BookReqForm";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import './styles/styles.css'; // Import your CSS file

function App() {
    return (
        <Router>
            <div className="app-container">
                <HeroSection />
                <AboutSection />
                <BookReqForm />
                <Footer />
            </div>
        </Router>
    );
}

export default App;