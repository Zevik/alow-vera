import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-green-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">צור קשר</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-gray-800">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-right mb-2 font-medium">שם מלא</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-gray-300 border rounded-md p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="השם שלך"
                  dir="rtl"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-right mb-2 font-medium">אימייל</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-gray-300 border rounded-md p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="האימייל שלך"
                  dir="rtl"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-right mb-2 font-medium">טלפון</label>
              <input
                type="tel"
                id="phone"
                className="w-full border-gray-300 border rounded-md p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="מספר הטלפון שלך"
                dir="rtl"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-right mb-2 font-medium">הודעה</label>
              <textarea
                id="message"
                rows={5}
                className="w-full border-gray-300 border rounded-md p-3 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="הודעה"
                dir="rtl"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                שלח הודעה
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 