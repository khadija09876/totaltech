import React from 'react';
import { ShieldCheck, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { lang } = useLanguage();

  const heroText = {
    ar: {
      badge: 'مهندس معتمد للأجهزة المنزلية والصناعية',
      titleFirst: 'تبريد وتكيف مركزي',
      titleHighlight: 'للمساحات السكنية الحديثة',
      description: 'إتقان تام لإصلاحات المنازل الفورية. بدءاً من الغسالات الأوتوماتيكية، الإضاءة، المراوح، وأنظمة التكييف المنفصلة وصولاً إلى مضخات المياه الثقيلة، أجهزة المطبخ، والدوائر الكهربائية المعقدة — يتم تشخيصها وإصلاحها في الموقع.',
      exploreBtn: 'استكشف الخدمات',
      stat1Num: '100%',
      stat1Text: 'ضمان الدقة',
      stat2Num: 'خبرة رائدة',
      stat2Text: 'إرسال فوري للموقع',
      stat3Num: 'أصلية',
      stat3Text: 'قطع غيار الأجهزة',
      floatingTitle: 'إرسال في نفس اليوم',
      floatingSub: 'أدوات تشخيص متقدمة ومهندسون معتمدون',
      imgAlt: 'TotalTech Professional On-Site Hardware Engineering',
      align: 'text-right',
      dir: 'rtl',
      arrowRotate: 'rotate-180',
    },
    en: {
      badge: 'Certified Home & Industrial Appliance Engineer',
      titleFirst: 'Central Cooling & Air Conditioning',
      titleHighlight: 'For Modern Residential Spaces',
      description: 'Complete mastery of instant home repairs. From automatic washing machines, lighting, fans, and split AC systems to heavy water pumps, kitchen appliances, and complex electrical circuits — diagnosed and repaired on-site.',
      exploreBtn: 'Explore Services',
      stat1Num: '100%',
      stat1Text: 'Accuracy Guarantee',
      stat2Num: 'Top Expertise',
      stat2Text: 'Instant Site Dispatch',
      stat3Num: 'Original',
      stat3Text: 'Spare Parts',
      floatingTitle: 'Same-Day Dispatch',
      floatingSub: 'Advanced diagnostic tools & certified engineers',
      imgAlt: 'TotalTech Professional On-Site Hardware Engineering',
      align: 'text-left',
      dir: 'ltr',
      arrowRotate: '',
    }
  };

  const t = heroText[lang];

  return (
    <section id="home" className="relative pt-12 pb-16 lg:py-20 overflow-hidden bg-sky-50/50 text-slate-900 border-b border-sky-100" dir={t.dir}>
      
      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Area (7 Columns) */}
          <div className={`lg:col-span-7 space-y-5 ${t.align}`}>
            
            <div className={`inline-flex items-center gap-2 bg-sky-500/10 text-sky-700 text-xs font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full border border-sky-500/20 ${lang === 'en' ? 'flex-row' : 'flex-row-reverse'}`}>
              <ShieldCheck className="w-4 h-4 text-sky-600" /> {t.badge}
            </div>

            <h1 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-[1.25] text-slate-900">
              {t.titleFirst} <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">{t.titleHighlight}</span>
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl">
              {t.description}
            </p>
            
            {/* Compact Action Buttons */}
            <div className={`flex flex-wrap items-center gap-3 pt-1 ${lang === 'en' ? 'justify-start' : 'justify-end lg:justify-start'}`}>
              <a 
                href="#services" 
                className={`bg-sky-600 hover:bg-sky-500 text-white font-extrabold px-6 py-3 rounded-xl transition shadow-md shadow-sky-600/20 flex items-center gap-2 text-xs uppercase tracking-wider ${lang === 'en' ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {t.exploreBtn} <ArrowRight className={`w-4 h-4 ${t.arrowRotate}`} />
              </a>
            </div>

            {/* Compact Trust Badges Bar */}
            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-sky-100">
              <div className={`bg-white p-3 rounded-xl border border-sky-100 shadow-sm ${t.align}`}>
                <div className="text-lg sm:text-xl font-black text-sky-600">{t.stat1Num}</div>
                <div className="text-[11px] text-slate-600 mt-0.5 font-semibold">{t.stat1Text}</div>
              </div>
              <div className={`bg-white p-3 rounded-xl border border-sky-100 shadow-sm ${t.align}`}>
                <div className="text-lg sm:text-xl font-black text-sky-600">{t.stat2Num}</div>
                <div className="text-[11px] text-slate-600 mt-0.5 font-semibold">{t.stat2Text}</div>
              </div>
              <div className={`bg-white p-3 rounded-xl border border-sky-100 shadow-sm ${t.align}`}>
                <div className="text-lg sm:text-xl font-black text-sky-600">{t.stat3Num}</div>
                <div className="text-[11px] text-slate-600 mt-0.5 font-semibold">{t.stat3Text}</div>
              </div>
            </div>

          </div>

          {/* Right Image & Floating Card Area (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none rounded-2xl p-2 bg-gradient-to-b from-sky-500/20 via-sky-50/50 to-white border border-sky-100 shadow-xl">
              
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" 
                alt={t.imgAlt} 
                className="rounded-xl w-full h-[340px] sm:h-[380px] object-cover shadow-inner"
              />

              {/* Floating Status Box */}
              <div className={`absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-sky-100 flex items-center gap-3 shadow-lg ${lang === 'ar' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                <div className="bg-sky-500/10 p-2.5 rounded-lg text-sky-600 border border-sky-500/20 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs font-bold text-slate-900 flex items-center gap-1.5 ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {t.floatingTitle} <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                  </div>
                  <div className="text-[11px] text-slate-500">{t.floatingSub}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}