import React from 'react';
import { CheckCircle2, ShieldCheck, Award, Users, ThumbsUp, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-6 sm:py-10 bg-white text-slate-900 border-b border-sky-100 scroll-mt-32 min-h-[85vh] flex items-center" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Content (Cols 6) */}
          <div className="lg:col-span-6 space-y-2.5 text-right">
            <span className="inline-flex items-center gap-1.5 bg-sky-500/10 text-sky-700 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-sky-500/20">
              <Award className="w-3 h-3 text-sky-600" /> رواد الصناعة الموثوق بهم
            </span>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-slate-900 leading-tight">
              أكثر من 25 عاماً من التميز في الهندسة التقنية والأجهزة المنزلية
            </h2>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              عندما يتعلق الأمر بأجهزتك المنزلية ومعداتك الكهربائية الحساسة، فأنت بحاجة إلى خبراء معتمدين يقدمون تشخيصاً عميقاً بدلاً من الإصلاحات المؤقتة. نحن نقدم حل مدعوم بعقود من الخبرة العملية.
            </p>

            {/* Check Features List */}
            <div className="space-y-1.5 pt-1">
              {[
                "استكشاف الأخطاء وإصلاحها بشكل شامل لأنظمة التكييف، التبريد، والتدفئة",
                "تتبع الدوائر الكهربائية المتقدمة، لوحات المفاتيح، وتشخيص قواطع الدائرة",
                "فنيون معتمدون يستخدمون مكونات بديلة أصلية بنسبة 100%",
                "أسعار شفافة مسبقة مع ضمانات كاملة للفحص في الموقع"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 flex-row-reverse">
                  <div className="bg-sky-500/10 p-0.5 rounded-full text-sky-600 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-700 font-medium text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTA Button & Helpline */}
            <div className="pt-2 border-t border-sky-100 flex flex-wrap items-center justify-between gap-3">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-1.5 bg-sky-600 hover:bg-sky-500 text-white font-bold px-4 py-2 rounded-xl shadow-sm transition duration-200 text-xs"
              >
                احجز خبيراً معتمداً <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              </a>
              <div className="text-right">
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">خط المساعدة المباشر</p>
                <p className="text-xs sm:text-sm font-black text-slate-900" dir="ltr">+966 50 763 5181</p>
              </div>
            </div>

          </div>

          {/* Right Highlights & Stats Cards (Cols 6) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-right">
            
            <div className="bg-sky-50/40 border border-sky-100 p-4 rounded-xl hover:border-sky-500/50 transition duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-600 mb-2 ms-auto">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-900">25+ عاماً</h3>
                <h4 className="font-bold text-slate-800 text-xs">خبرة في المجال</h4>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  عقود من التنفيذ التقني المتقن عبر القطاعين السكني والتجاري.
                </p>
              </div>
            </div>

            <div className="bg-sky-50/40 border border-sky-100 p-4 rounded-xl hover:border-sky-500/50 transition duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-600 mb-2 ms-auto">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-900">100%</h3>
                <h4 className="font-bold text-slate-800 text-xs">مهندسون معتمدون</h4>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  فنيون مرخصون بالكامل ومدربون لتكييف الهواء عالي المستوى وإعدادات الأجهزة.
                </p>
              </div>
            </div>

            <div className="bg-sky-50/40 border border-sky-100 p-4 rounded-xl hover:border-sky-500/50 transition duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-600 mb-2 ms-auto">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-900">15,000+</h3>
                <h4 className="font-bold text-slate-800 text-xs">عميل سعيد</h4>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  موثوق به من قبل الآلاف لإجراء الإصلاحات اليومية الموثوقة للمنازل والشركات.
                </p>
              </div>
            </div>

            <div className="bg-sky-50/40 border border-sky-100 p-4 rounded-xl hover:border-sky-500/50 transition duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-600 mb-2 ms-auto">
                  <ThumbsUp className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-900">مضمونة</h3>
                <h4 className="font-bold text-slate-800 text-xs">ضمان الجودة</h4>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  رضا تام للعملاء مع قطع غيار أصلية ودعم الضمان.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}