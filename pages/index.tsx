import { Inter } from "next/font/google";
import { useEffect } from "react";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // הוספת הסקריפט באופן דינמי
  useEffect(() => {
    // העתקת הסקריפט מהתיקייה העליונה
    const script = document.createElement('script');
    script.src = '/script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>אלוורה טבעי - צמח הפלא</title>
        <meta name="description" content="אלוורה טבעי לשיפור איכות החיים" />
      </Head>
      <div dir="rtl" lang="he" className={`${inter.className} min-h-screen bg-black text-white`}>
        <header className="bg-green-900 text-white py-4 shadow-md">
          <div className="container mx-auto px-4">
            <div className="text-2xl font-bold text-center">אלוורה טבעי</div>
          </div>
        </header>
        
        <main className="flex flex-col items-center justify-center py-10">
          {/* אנימציית המילים */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-green-400 text-center mb-6">
              אלוורה טבעי <span className="text-green-300">לחיים בריאים</span>
            </h1>
            <p className="text-xl text-center max-w-xl mx-auto px-4">
              הצמח הפלאי שמשפר את איכות החיים במגוון תחומים
            </p>
          </div>
          
          <div id="word-cloud-container" className="relative w-full md:w-4/5 max-w-2xl aspect-[1.5] mx-auto">
            {/* האנימציה תופעל כאן על ידי הסקריפט */}
          </div>
          
          <div className="mt-10 text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              למידע נוסף
            </button>
          </div>
        </main>
        
        <footer className="bg-green-900 text-white py-4 mt-10">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} אלוורה טבעי - כל הזכויות שמורות</p>
          </div>
        </footer>
      </div>
    </>
  );
} 