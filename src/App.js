import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950" dir="rtl">
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
            <span className="text-slate-600">— حلول تقنية متكاملة</span>
          </div>
          <div className="text-slate-500 font-medium">
            © {new Date().getFullYear()} جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;