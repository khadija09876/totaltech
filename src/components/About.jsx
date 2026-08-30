import React from 'react';
import { CheckCircle2, ShieldCheck, Award, Users, ThumbsUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const aboutContent = {
  ar: {
    badge: 'رواد الصناعة الموثوق بهم',
    heading: 'أكثر من 25 عاماً من التميز في الهندسة التقنية والأجهزة المنزلية',
    description: 'عندما يتعلق الأمر بأجهزتك المنزلية ومعداتك الكهربائية الحساسة، فأنت بحاجة إلى خبراء معتمدين يقدمون تشخيصاً عميقاً بدلاً من الإصلاحات المؤقتة. نحن نقدم حل مدعوم بعقود من الخبرة العملية.',
    features: [
      'استكشاف الأخطاء وإصلاحها بشكل شامل لأنظمة التكييف، التبريد، والتدفئة',
      'تتبع الدوائر الكهربائية المتقدمة، لوحات المفاتيح، وتشخيص قواطع الدائرة',
      'فنيون معتمدون يستخدمون مكونات بديلة أصلية بنسبة 100%',
      'أسعار شفافة مسبقة مع ضمانات كاملة للفحص في الموقع'
    ],
    ctaBtn: 'احجز خبيراً معتمداً',
    helplineTitle: 'خط المساعدة المباشر',
    stats: [
      {
        value: '25+ عاماً',
        title: 'خبرة في المجال',
        desc: 'عقود من التنفيذ التقني المتقن عبر القطاعين السكني والتجاري.'
      },
      {
        value: '100%',
        title: 'مهندسون معتمدون',
        desc: 'فنيون مرخصون بالكامل ومدربون لتكييف الهواء عالي المستوى وإعدادات الأجهزة.'
      },
      {
        value: '15,000+',
        title: 'عميل سعيد',
        desc: 'موثوق به من قبل الآلاف لإجراء الإصلاحات اليومية الموثوقة للمنازل والشركات.'
      },
      {
        value: 'مضمونة',
        title: 'ضمان الجودة',
        desc: 'رضا تام للعملاء مع قطع غيار أصلية ودعم الضمان.'
      }
    ],
    dir: 'rtl',
    textAlign: 'text-right',
    msAuto: 'ms-auto',
    flexRow: 'flex-row-reverse',
    arrowRotate: 'rotate-180',
  },
  en: {
    badge: 'Trusted Industry Leaders',
    heading: 'Over 25 Years of Excellence in Technical Engineering & Home Appliances',
    description: 'When it comes to your home appliances and sensitive electrical equipment, you need certified experts who provide deep diagnosis rather than temporary fixes. We deliver solutions backed by decades of hands-on experience.',
    features: [
      'Comprehensive troubleshooting for AC, refrigeration, and heating systems',
      'Advanced electrical circuit tracking, switchboards, and breaker diagnostics',
      'Certified technicians using 100% genuine replacement components',
      'Transparent upfront pricing with complete on-site inspection warranties'
    ],
    ctaBtn: 'Book a Certified Expert',
    helplineTitle: 'Direct Helpline',
    stats: [
      {
        value: '25+ Years',
        title: 'Industry Experience',
        desc: 'Decades of precise technical execution across residential and commercial sectors.'
      },
      {
        value: '100%',
        title: 'Certified Engineers',
        desc: 'Fully licensed and trained technicians for high-level air conditioning and appliance setups.'
      },
      {
        value: '15,000+',
        title: 'Happy Clients',
        desc: 'Trusted by thousands for reliable daily repairs for homes and businesses.'
      },
      {
        value: 'Guaranteed',
        title: 'Quality Assurance',
        desc: 'Total customer satisfaction with original spare parts and warranty support.'
      }
    ],
    dir: 'ltr',
    textAlign: 'text-left',
    msAuto: 'me-auto',
    flexRow: 'flex-row',
    arrowRotate: '',
  }
};

export default function About() {
  const { lang } = useLanguage();
  const t = aboutContent[lang];

  return (
    <section id="about" className="py-6 sm:py-10 bg-white text-slate-900 border-b border-sky-100 scroll-mt-32 min-h-[85vh] flex items-center" dir={t.dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Content (Cols 6) */}
          <div className={`lg:col-span-6 space-y-2.5 ${t.textAlign}`}>
            <span className="inline-flex items-center gap-1.5 bg-sky-500/10 text-sky-700 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-sky-500/20">
              <Award className="w-3 h-3 text-sky-600" /> {t.badge}
            </span>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-900 leading-tight">
              {t.heading}
            </h2>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {t.description}
            </p>

            {/* Check Features List */}
            <div className="space-y-1.5 pt-1">
              {t.features.map((item, idx) => (
                <div key={idx} className={`flex items-start gap-2 ${t.flexRow}`}>
                  <div className="bg-sky-500/10 p-0.5 rounded-full text-sky-600 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-700 font-medium text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTA Button & Helpline */}
            <div className={`pt-2 border-t border-sky-100 flex flex-wrap items-center justify-between gap-3 ${lang === 'en' ? 'flex-row-reverse' : ''}`}>
              <a 
                href="#contact" 
                className={`inline-flex items-center gap-1.5 bg-sky-600 hover:bg-sky-500 text-white font-bold px-4 py-2 rounded-xl shadow-sm transition duration-200 text-xs ${lang === 'en' ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {t.ctaBtn} <ArrowRight className={`w-3.5 h-3.5 ${t.arrowRotate}`} />
              </a>
              <div className={t.textAlign}>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{t.helplineTitle}</p>
                <p className="text-xs sm:text-sm font-black text-slate-900" dir="ltr">+966 50 763 5181</p>
              </div>
            </div>

          </div>

          {/* Right Highlights & Stats Cards (Cols 6) */}
          <div className={`lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 ${t.textAlign}`}>
            
            <div className="bg-sky-50/40 border border-sky-100 p-4 rounded-xl hover:border-sky-500/50 transition duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className={`w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-600 mb-2 ${t.msAuto}`}>
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-900">{t.stats[0].value}</h3>
                <h4 className="font-bold text-slate-800 text-xs">{t.stats[0].title}</h4>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  {t.stats[0].desc}
                </p>
              </div>
            </div>

            <div className="bg-sky-50/40 border border-sky-100 p-4 rounded-xl hover:border-sky-500/50 transition duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className={`w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-600 mb-2 ${t.msAuto}`}>
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-900">{t.stats[1].value}</h3>
                <h4 className="font-bold text-slate-800 text-xs">{t.stats[1].title}</h4>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  {t.stats[1].desc}
                </p>
              </div>
            </div>

            <div className="bg-sky-50/40 border border-sky-100 p-4 rounded-xl hover:border-sky-500/50 transition duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className={`w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-600 mb-2 ${t.msAuto}`}>
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-900">{t.stats[2].value}</h3>
                <h4 className="font-bold text-slate-800 text-xs">{t.stats[2].title}</h4>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  {t.stats[2].desc}
                </p>
              </div>
            </div>

            <div className="bg-sky-50/40 border border-sky-100 p-4 rounded-xl hover:border-sky-500/50 transition duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className={`w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-600 mb-2 ${t.msAuto}`}>
                  <ThumbsUp className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-900">{t.stats[3].value}</h3>
                <h4 className="font-bold text-slate-800 text-xs">{t.stats[3].title}</h4>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  {t.stats[3].desc}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}