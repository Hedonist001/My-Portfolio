import { Link } from "react-router-dom";
import React from "react";
const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="flex justify-between items-center max-w-5xl mx-auto">
      <h1 className="text-xl font-bold">MyPortfolio</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  </header>
);

export default Header;
