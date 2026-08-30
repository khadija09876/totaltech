import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Wrench, Store } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-14 bg-sky-50/50 text-slate-900 border-t border-sky-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 bg-sky-500/10 text-sky-700 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-sky-500/20 mb-2">
            <Wrench className="w-3 h-3 text-sky-600" /> تواصل معنا
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            احجز خدمتك التقنية اليوم
          </h2>
          <p className="mt-2 text-slate-600 text-xs leading-relaxed">
            هل تواجه مشكلة في مكيف الهواء، الثلاجة، الميكروويف، أو الأجهزة الكهربائية؟ تواصل للحصول على مساعدة فورية حتى باب المنزل أو قم بزيارة مركز الأجهزة الخاص بنا.
          </p>
        </div>

        {/* Contact Info & Store Visit Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Phone Card */}
          <div className="bg-white p-4.5 rounded-xl border border-sky-100 shadow-sm hover:border-sky-500/50 transition duration-300 text-center flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 bg-sky-500/10 text-sky-600 rounded-lg flex items-center justify-center mx-auto mb-2.5 border border-sky-500/20">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">اتصال / واتساب</h3>
              <p className="text-sm font-black text-slate-900 mb-1" dir="ltr">+966 50 763 5181</p>
              <p className="text-[11px] text-slate-500 mb-3">متاح للإرسال الطارئ الفوري.</p>
            </div>
            <div>
              <a 
                href="tel:+966507635181" 
                className="inline-flex items-center justify-center gap-1.5 w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 rounded-lg text-xs transition shadow-sm"
              >
                اتصل الآن <ArrowRight className="w-3 h-3 rotate-180" />
              </a>
            </div>
          </div>

          {/* Visit Hardware Store Card */}
          <div className="bg-white p-4.5 rounded-xl border border-sky-100 shadow-sm hover:border-sky-500/50 transition duration-300 text-center flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 bg-sky-500/10 text-sky-600 rounded-lg flex items-center justify-center mx-auto mb-2.5 border border-sky-500/20">
                <Store className="w-4 h-4" />
              </div>
              <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">زيارة معرض الأجهزة</h3>
              <p className="text-xs font-black text-slate-900 mb-1">المعرض الرئيسي، الرياض، المملكة العربية السعودية</p>
              <p className="text-[11px] text-slate-500 mb-3">مفتوح من السبت إلى الخميس: 9:00 صباحاً - 9:00 مساءً</p>
            </div>
            <div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 rounded-lg text-xs transition shadow-sm"
              >
                احصل على الاتجاهات <ArrowRight className="w-3 h-3 rotate-180" />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-4.5 rounded-xl border border-sky-100 shadow-sm hover:border-sky-500/50 transition duration-300 text-center flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 bg-sky-500/10 text-sky-600 rounded-lg flex items-center justify-center mx-auto mb-2.5 border border-sky-500/20">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">دعم البريد الإلكتروني</h3>
              <p className="text-xs font-black text-slate-900 mb-1 break-all" dir="ltr">support@totaltech-solutions.com</p>
              <p className="text-[11px] text-slate-500 mb-3">أرسل استفسارات مشروعك أو خدمتك في أي وقت.</p>
            </div>
            <div>
              <a 
                href="mailto:support@totaltech-solutions.com" 
                className="inline-flex items-center justify-center gap-1.5 w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 rounded-lg text-xs transition border border-sky-100"
              >
                إرسال بريد إلكتروني <ArrowRight className="w-3 h-3 rotate-180" />
              </a>
            </div>
          </div>

          {/* Coverage Card */}
          <div className="bg-white p-4.5 rounded-xl border border-sky-100 shadow-sm hover:border-sky-500/50 transition duration-300 text-center flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 bg-sky-500/10 text-sky-600 rounded-lg flex items-center justify-center mx-auto mb-2.5 border border-sky-500/20">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">تغطية الخدمة</h3>
              <p className="text-xs font-black text-slate-900 mb-1">دعم في الموقع وعند باب المنزل</p>
              <p className="text-[11px] text-slate-500 mb-3">يتم إرسال المهندسين المعتمدين مباشرة.</p>
            </div>
            <div>
              <span className="inline-flex items-center justify-center gap-1.5 w-full text-xs font-extrabold text-sky-700 bg-sky-50 py-2 rounded-lg border border-sky-500/20">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> خبراء معتمدون بنسبة 100%
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}