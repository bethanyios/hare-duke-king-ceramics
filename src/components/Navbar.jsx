import { Link } from "react-router-dom";
import "../styling/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}