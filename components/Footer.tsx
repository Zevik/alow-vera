import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-right">
            <h3 className="text-xl font-semibold mb-4">אלוורה טבעי</h3>
            <p className="text-gray-300">
              אלוורה טרייה לשימוש יומיומי ולשיפור איכות החיים.
            </p>
          </div>
          
          <div className="text-right">
            <h3 className="text-xl font-semibold mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">דף הבית</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition">על אלוורה</a></li>
              <li><a href="#usage" className="text-gray-300 hover:text-white transition">הוראות שימוש</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition">צור קשר</a></li>
            </ul>
          </div>
          
          <div className="text-right">
            <h3 className="text-xl font-semibold mb-4">פרטי יצירת קשר</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center justify-end gap-2">
                <span>info@aloe-vera.com</span>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>050-1234567</span>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-green-800 text-center text-gray-400">
          <p>© {currentYear} אלוורה טבעי. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 