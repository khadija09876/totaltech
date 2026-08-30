import React, { useState } from 'react';
import { Wrench, Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const navText = {
    ar: {
      brandFirst: 'توتال',
      brandSecond: 'تيك',
      brandSub: 'حلول تقنية متكاملة',
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'خبراتنا',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
      cta: 'احجز خدمة',
      switchBtn: 'English',
      dir: 'rtl',
      spaceReverse: 'space-x-reverse',
    },
    en: {
      brandFirst: 'Total',
      brandSecond: 'Tech',
      brandSub: 'Integrated Technical Solutions',
      home: 'Home',
      services: 'Services',
      about: 'Expertise',
      faq: 'FAQs',
      contact: 'Contact',
      cta: 'Book Service',
      switchBtn: 'عربي',
      dir: 'ltr',
      spaceReverse: '',
    }
  };

  const t = navText[lang];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-sm" dir={t.dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-20 ${lang === 'en' ? 'flex-row-reverse md:flex-row' : ''}`}>
          
          {/* Logo Section */}
          <a href="#home" className={`flex items-center space-x-3 ${t.spaceReverse} group`}>
            <div className="bg-sky-500/10 p-2.5 rounded-xl border border-sky-500/20 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition duration-300">
              <Wrench className="w-6 h-6" />
            </div>
            <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                {t.brandFirst}<span className="text-sky-600">{t.brandSecond}</span>
              </span>
              <span className="block text-[10px] sm:text-xs font-bold text-slate-500 tracking-wider uppercase">
                {t.brandSub}
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center ${lang === 'ar' ? 'space-x-8 space-x-reverse' : 'space-x-8'}`}>
            {lang === 'ar' ? (
              <>
                <a href="#home" className="text-slate-700 hover:text-sky-600 transition font-bold text-sm">{t.home}</a>
                <a href="#services" className="text-slate-700 hover:text-sky-600 transition font-bold text-sm">{t.services}</a>
                <a href="#about" className="text-slate-700 hover:text-sky-600 transition font-bold text-sm">{t.about}</a>
                <a href="#faq" className="text-slate-700 hover:text-sky-600 transition font-bold text-sm">{t.faq}</a>
                <a href="#contact" className="text-slate-700 hover:text-sky-600 transition font-bold text-sm">{t.contact}</a>
              </>
            ) : (
              <>
                <a href="#home" className="text-slate-700 hover:text-sky-600 transition font-bold text-sm">{t.home}</a>
                <a href="#services" className="text-slate-700 hover:text-sky-600 transition font-bold text-sm">{t.services}</a>
                <a href="#about" className="text-slate-700 hover:text-sky-600 transition font-bold text-sm">{t.about}</a>
                <a href="#faq" className="text-slate-700 hover:text-sky-600 transition font-bold text-sm">{t.faq}</a>
                <a href="#contact" className="text-slate-700 hover:text-sky-600 transition font-bold text-sm">{t.contact}</a>
              </>
            )}
            
            <a 
              href="#contact" 
              className="bg-sky-600 hover:bg-sky-500 text-white font-extrabold px-5 py-2.5 rounded-xl transition shadow-md shadow-sky-600/20 flex items-center gap-2 text-sm ms-4"
            >
              <Phone className="w-4 h-4" /> {t.cta}
            </a>

            {/* Professional Translation Button at the End */}
            <button 
              onClick={toggleLang}
              className="bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold px-3.5 py-2.5 rounded-xl border border-sky-200 shadow-sm flex items-center gap-2 transition cursor-pointer"
            >
              <Globe className="w-4 h-4 text-sky-600" />
              <span>{t.switchBtn}</span>
            </button>
          </div>

          {/* Mobile Menu & Translation Button */}
          <div className={`md:hidden flex items-center gap-2 ${lang === 'en' ? 'flex-row-reverse' : ''}`}>
            <button 
              onClick={toggleLang}
              className="bg-sky-50 text-sky-700 text-xs font-bold px-3 py-2 rounded-xl border border-sky-200 flex items-center gap-1.5"
            >
              <Globe className="w-4 h-4 text-sky-600" />
              <span>{t.switchBtn}</span>
            </button>

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
        <div className={`md:hidden bg-white border-b border-sky-100 px-4 pt-3 pb-5 space-y-2.5 shadow-xl ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          <a href="#home" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600 font-bold text-sm transition">{t.home}</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600 font-bold text-sm transition">{t.services}</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600 font-bold text-sm transition">{t.about}</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600 font-bold text-sm transition">{t.faq}</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 px-3 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-sky-600 font-bold text-sm transition">{t.contact}</a>
          <div className="pt-2">
            <a href="#contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 w-full text-center bg-sky-600 hover:bg-sky-500 text-white font-extrabold py-3 rounded-xl shadow-md text-sm transition">
              <Phone className="w-4 h-4" /> {t.cta} الآن
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}