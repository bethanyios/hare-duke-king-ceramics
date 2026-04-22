import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import logo from "./assets/HDK-logo.png";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        
        {/* HEADER (shared across all pages) */}
        <header className="header">
          <img src={logo} alt="Logo" className="logo" />
          <Navbar />
        </header>

        {/* PAGE CONTENT */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}