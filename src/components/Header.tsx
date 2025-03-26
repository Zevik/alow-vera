import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-900 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">אלוורה טבעי</div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-right">
            <a href="#about" className="hover:text-green-300 transition">על אלוורה</a>
            <a href="#usage" className="hover:text-green-300 transition">הוראות שימוש</a>
            <a href="#contact" className="hover:text-green-300 transition">צור קשר</a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 bg-green-800 p-4 rounded-lg text-right">
            <a href="#about" className="block hover:text-green-300 transition">על אלוורה</a>
            <a href="#usage" className="block hover:text-green-300 transition">הוראות שימוש</a>
            <a href="#contact" className="block hover:text-green-300 transition">צור קשר</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 