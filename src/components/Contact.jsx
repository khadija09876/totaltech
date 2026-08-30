import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Wrench, Store } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const contactContent = {
  ar: {
    badge: 'تواصل معنا',
    heading: 'احجز خدمتك التقنية اليوم',
    description: 'هل تواجه مشكلة في مكيف الهواء، الثلاجة، الميكروويف، أو الأجهزة الكهربائية؟ تواصل للحصول على مساعدة فورية حتى باب المنزل أو قم بزيارة مركز الأجهزة الخاص بنا.',
    cards: [
      {
        title: 'اتصال / واتساب',
        desc: 'متاح للإرسال الطارئ الفوري.',
        btnText: 'اتصل الآن'
      },
      {
        title: 'زيارة معرض الأجهزة',
        location: 'المعرض الرئيسي، الرياض، المملكة العربية السعودية',
        desc: 'مفتوح من السبت إلى الخميس: 9:00 صباحاً - 9:00 مساءً',
        btnText: 'احصل على الاتجاهات'
      },
      {
        title: 'دعم البريد الإلكتروني',
        desc: 'أرسل استفسارات مشروعك أو خدمتك في أي وقت.',
        btnText: 'إرسال بريد إلكتروني'
      },
      {
        title: 'تغطية الخدمة',
        location: 'دعم في الموقع وعند باب المنزل',
        desc: 'يتم إرسال المهندسين المعتمدين مباشرة.',
        badge: 'خبراء معتمدون بنسبة 100%'
      }
    ],
    dir: 'rtl',
    textAlign: 'text-center',
    arrowRotate: 'rotate-180',
    flexRow: 'flex-row-reverse'
  },
  en: {
    badge: 'Contact Us',
    heading: 'Book Your Technical Service Today',
    description: 'Facing an issue with your AC, refrigerator, microwave, or electrical appliances? Reach out for immediate door-to-door assistance or visit our appliance center.',
    cards: [
      {
        title: 'Phone / WhatsApp',
        desc: 'Available for immediate emergency dispatch.',
        btnText: 'Call Now'
      },
      {
        title: 'Hardware Store Visit',
        location: 'Main Showroom, Riyadh, Saudi Arabia',
        desc: 'Open Saturday to Thursday: 9:00 AM - 9:00 PM',
        btnText: 'Get Directions'
      },
      {
        title: 'Email Support',
        desc: 'Send your project or service inquiries at any time.',
        btnText: 'Send Email'
      },
      {
        title: 'Service Coverage',
        location: 'On-site and Doorstep Support',
        desc: 'Certified engineers are dispatched directly.',
        badge: '100% Certified Experts'
      }
    ],
    dir: 'ltr',
    textAlign: 'text-center',
    arrowRotate: '',
    flexRow: 'flex-row'
  }
};

export default function Contact() {
  const { lang } = useLanguage();
  const t = contactContent[lang];

  return (
    <section id="contact" className="py-14 bg-sky-50/50 text-slate-900 border-t border-sky-100" dir={t.dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-xl mx-auto mb-10`}>
          <span className="inline-flex items-center gap-1.5 bg-sky-500/10 text-sky-700 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-sky-500/20 mb-2">
            <Wrench className="w-3 h-3 text-sky-600" /> {t.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            {t.heading}
          </h2>
          <p className="mt-2 text-slate-600 text-xs leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Contact Info & Store Visit Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Phone Card */}
          <div className={`bg-white p-4.5 rounded-xl border border-sky-100 shadow-sm hover:border-sky-500/50 transition duration-300 text-center flex flex-col justify-between ${t.textAlign}`}>
            <div>
              <div className="w-9 h-9 bg-sky-500/10 text-sky-600 rounded-lg flex items-center justify-center mx-auto mb-2.5 border border-sky-500/20">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">{t.cards[0].title}</h3>
              <p className="text-sm font-black text-slate-900 mb-1" dir="ltr">+966 50 763 5181</p>
              <p className="text-[11px] text-slate-500 mb-3">{t.cards[0].desc}</p>
            </div>
            <div>
              <a 
                href="tel:+966507635181" 
                className={`inline-flex items-center justify-center gap-1.5 w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 rounded-lg text-xs transition shadow-sm ${lang === 'en' ? 'flex-row-reverse' : ''}`}
              >
                {t.cards[0].btnText} <ArrowRight className={`w-3 h-3 ${t.arrowRotate}`} />
              </a>
            </div>
          </div>

          {/* Visit Hardware Store Card */}
          <div className={`bg-white p-4.5 rounded-xl border border-sky-100 shadow-sm hover:border-sky-500/50 transition duration-300 text-center flex flex-col justify-between ${t.textAlign}`}>
            <div>
              <div className="w-9 h-9 bg-sky-500/10 text-sky-600 rounded-lg flex items-center justify-center mx-auto mb-2.5 border border-sky-500/20">
                <Store className="w-4 h-4" />
              </div>
              <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">{t.cards[1].title}</h3>
              <p className="text-xs font-black text-slate-900 mb-1">{t.cards[1].location}</p>
              <p className="text-[11px] text-slate-500 mb-3">{t.cards[1].desc}</p>
            </div>
            <div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-1.5 w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 rounded-lg text-xs transition shadow-sm ${lang === 'en' ? 'flex-row-reverse' : ''}`}
              >
                {t.cards[1].btnText} <ArrowRight className={`w-3 h-3 ${t.arrowRotate}`} />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className={`bg-white p-4.5 rounded-xl border border-sky-100 shadow-sm hover:border-sky-500/50 transition duration-300 text-center flex flex-col justify-between ${t.textAlign}`}>
            <div>
              <div className="w-9 h-9 bg-sky-500/10 text-sky-600 rounded-lg flex items-center justify-center mx-auto mb-2.5 border border-sky-500/20">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">{t.cards[2].title}</h3>
              <p className="text-xs font-black text-slate-900 mb-1 break-all" dir="ltr">support@totaltech-solutions.com</p>
              <p className="text-[11px] text-slate-500 mb-3">{t.cards[2].desc}</p>
            </div>
            <div>
              <a 
                href="mailto:support@totaltech-solutions.com" 
                className={`inline-flex items-center justify-center gap-1.5 w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 rounded-lg text-xs transition border border-sky-100 ${lang === 'en' ? 'flex-row-reverse' : ''}`}
              >
                {t.cards[2].btnText} <ArrowRight className={`w-3 h-3 ${t.arrowRotate}`} />
              </a>
            </div>
          </div>

          {/* Coverage Card */}
          <div className={`bg-white p-4.5 rounded-xl border border-sky-100 shadow-sm hover:border-sky-500/50 transition duration-300 text-center flex flex-col justify-between ${t.textAlign}`}>
            <div>
              <div className="w-9 h-9 bg-sky-500/10 text-sky-600 rounded-lg flex items-center justify-center mx-auto mb-2.5 border border-sky-500/20">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">{t.cards[3].title}</h3>
              <p className="text-xs font-black text-slate-900 mb-1">{t.cards[3].location}</p>
              <p className="text-[11px] text-slate-500 mb-3">{t.cards[3].desc}</p>
            </div>
            <div>
              <span className={`inline-flex items-center justify-center gap-1.5 w-full text-xs font-extrabold text-sky-700 bg-sky-50 py-2 rounded-lg border border-sky-500/20 ${lang === 'en' ? 'flex-row-reverse' : ''}`}>
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> {t.cards[3].badge}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}