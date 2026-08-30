import React, { useState } from 'react';
import { Wrench, Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-sm" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <a href="#home" className="flex items-center space-x-3 space-x-reverse group">
            <div className="bg-sky-500/10 p-2.5 rounded-xl border border-sky-500/20 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition duration-300">
              <Wrench className="w-6 h-6" />
            </div>
            <div className="text-right">
      
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
    توتال<span className="text-sky-600">تيك</span>
</span>
              
              <span className="block text-[10px] sm:text-xs font-bold text-slate-500 tracking-wider uppercase">
                حلول تقنية متكاملة
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#home" className="text-slate-700 hover:text-sky-600 transition font-bold text-sm">الرئيسية</a>
            <a href="#services" className="text-slate-700 hover:text-sky-600 transition font-bold text-sm">الخدمات</a>
            <a href="#about" className="text-slate-700 hover:text-sky-600 transition font-bold text-sm">خبراتنا</a>
            <a href="#faq" className="text-slate-700 hover:text-sky-600 transition font-bold text-sm">الأسئلة الشائعة</a>
            <a 
              href="#contact" 
              className="bg-sky-600 hover:bg-sky-500 text-white font-extrabold px-5 py-2.5 rounded-xl transition shadow-md shadow-sky-600/20 flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" /> احجز خدمة
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-700 hover:text-slate-950 p-2 rounded-xl bg-sky-50 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-sky-100 px-4 pt-3 pb-5 space-y-2.5 shadow-xl text-right">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 px-3 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600 font-bold text-sm transition"
          >
            الرئيسية
          </a>
          <a 
            href="#services" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 px-3 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600 font-bold text-sm transition"
          >
            الخدمات
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 px-3 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600 font-bold text-sm transition"
          >
            خبراتنا
          </a>
          <a 
            href="#faq" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 px-3 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600 font-bold text-sm transition"
          >
            الأسئلة الشائعة
          </a>
          <div className="pt-2">
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="flex items-center justify-center gap-2 w-full text-center bg-sky-600 hover:bg-sky-500 text-white font-extrabold py-3 rounded-xl shadow-md text-sm transition"
            >
              <Phone className="w-4 h-4" /> احجز خدمة الآن
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}