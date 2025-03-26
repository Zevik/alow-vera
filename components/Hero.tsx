import React from 'react';
import AloeAnimation from './AloeAnimation';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6">
            אלוורה טבעי <span className="text-green-600">לחיים בריאים</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            הצמח הפלאי שמשפר את איכות החיים במגוון תחומים - בריאות העור, מערכת העיכול, המטבוליזם והמערכת החיסונית
          </p>
        </div>
        
        <div className="relative mx-auto">
          <AloeAnimation />
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#usage" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            כיצד להשתמש באלוורה
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 