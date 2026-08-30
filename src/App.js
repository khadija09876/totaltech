import React from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function MainContent() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <FAQ />
      <Contact />
      
      {/* Updated Footer with Clean White Theme */}
      <footer className="bg-white border-t border-slate-200 py-10 text-center text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 space-x-reverse">
            <span className="text-slate-600">
              {lang === 'ar' ? '— حلول تقنية متكاملة' : '— Integrated Technical Solutions'}
            </span>
          </div>
          <div className="text-slate-500 font-medium">
            {lang === 'ar' 
              ? `© ${new Date().getFullYear()} جميع الحقوق محفوظة.` 
              : `© ${new Date().getFullYear()} All rights reserved.`}
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;