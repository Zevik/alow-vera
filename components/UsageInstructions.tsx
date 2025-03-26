import React from 'react';

const UsageInstructions = () => {
  return (
    <section id="usage" className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">הוראות שימוש</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4 text-right">
              <li className="flex items-start gap-3 rtl">
                <span className="text-2xl">🪴</span>
                <span>יש להמיס את האלוורה בכוס מים פושרים (לא חמים) ולשתות על קיבה ריקה. מינון: ביום הראשון יש לקחת 2 קוביות ואז לעלות ל3 קוביות אלוורה וכן הלאה לפי משקל הגוף (קוביה לכל 20 ק"ג- אדם השוקל 60+ יצרוך 4 קוביות).</span>
              </li>
              <li className="flex items-start gap-3 rtl">
                <span className="text-2xl">🪴</span>
                <span>מומלץ לחכות עם האוכל כחצי שעה לאחר לקיחת האלוורה (יעילות מוגברת- לא מחייב).</span>
              </li>
              <li className="flex items-start gap-3 rtl">
                <span className="text-2xl">🪴</span>
                <span>טעים! להוסיף קוביות אלוורה בשייק פירות.</span>
              </li>
              <li className="flex items-start gap-3 rtl">
                <span className="text-2xl">🪴</span>
                <span>מומלץ לשתות הרבה מים במהלך היום.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-red-600 text-center">אזהרות</h3>
            <ul className="space-y-4 text-right">
              <li className="flex items-start gap-3 rtl">
                <span className="text-2xl">🧊</span>
                <span>שתית אלוורה לא מומלצת לאנשים הצורכים קומדין.</span>
              </li>
              <li className="flex items-start gap-3 rtl">
                <span className="text-2xl">🧊</span>
                <span>צריכת אלוורה אסורה לנשים בהריון.</span>
              </li>
              <li className="flex items-start gap-3 rtl">
                <span className="text-2xl">🧊</span>
                <span>חולי סכרת שצורכים תרופות להורדת רמת הסוכר, צריכים לבצע בדיקות סוכר בתדירות גבוהה יותר מהרגיל עקב ההשפעה של האלוורה על רמת הסוכר.</span>
              </li>
              <li className="flex items-start gap-3 rtl">
                <span className="text-2xl">🧊</span>
                <span>המוצר אינו תרופה או תוסף תזונה, אינו בא להחליף טיפול רפואי כלשהו. ההסתמכות על המידע המפורט להלן היא על אחריות הקורא בלבד ומומלץ להתייעץ עם רופא מוסמך טרם השימוש במוצר.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageInstructions; 