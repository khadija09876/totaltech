import React from 'react';
import { ShieldCheck, Clock, ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-12 pb-16 lg:py-20 overflow-hidden bg-sky-50/50 text-slate-900 border-b border-sky-100" dir="rtl">
      
      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Area (7 Columns) */}
          <div className="lg:col-span-7 space-y-5 text-right">
            
            <div className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-700 text-xs font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full border border-sky-500/20">
              <ShieldCheck className="w-4 h-4 text-sky-600" /> مهندس معتمد للأجهزة المنزلية والصناعية
            </div>

            <h1 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-[1.25] text-slate-900">
              تبريد وتكيف مركزي <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">للمساحات السكنية الحديثة</span>
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl">
              إتقان تام لإصلاحات المنازل الفورية. بدءاً من الغسالات الأوتوماتيكية، الإضاءة، المراوح، وأنظمة التكييف المنفصلة وصولاً إلى مضخات المياه الثقيلة، أجهزة المطبخ، والدوائر الكهربائية المعقدة — يتم تشخيصها وإصلاحها في الموقع.
            </p>
            
            {/* Compact Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a 
                href="#services" 
                className="bg-sky-600 hover:bg-sky-500 text-white font-extrabold px-6 py-3 rounded-xl transition shadow-md shadow-sky-600/20 flex items-center gap-2 text-xs uppercase tracking-wider"
              >
                استكشف الخدمات <ArrowRight className="w-4 h-4 rotate-180" />
              </a>
            </div>

            {/* Compact Trust Badges Bar */}
            <div className="grid grid-cols-3 gap-3 pt-5 border-t border-sky-100">
              <div className="bg-white p-3 rounded-xl border border-sky-100 shadow-sm text-right">
                <div className="text-lg sm:text-xl font-black text-sky-600">100%</div>
                <div className="text-[11px] text-slate-600 mt-0.5 font-semibold">ضمان الدقة</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-sky-100 shadow-sm text-right">
                <div className="text-lg sm:text-xl font-black text-sky-600">خبرة رائدة</div>
                <div className="text-[11px] text-slate-600 mt-0.5 font-semibold">إرسال فوري للموقع</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-sky-100 shadow-sm text-right">
                <div className="text-lg sm:text-xl font-black text-sky-600">أصلية</div>
                <div className="text-[11px] text-slate-600 mt-0.5 font-semibold">قطع غيار الأجهزة</div>
              </div>
            </div>

          </div>

          {/* Right Image & Floating Card Area (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none rounded-2xl p-2 bg-gradient-to-b from-sky-500/20 via-sky-50/50 to-white border border-sky-100 shadow-xl">
              
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" 
                alt="TotalTech Professional On-Site Hardware Engineering" 
                className="rounded-xl w-full h-[340px] sm:h-[380px] object-cover shadow-inner"
              />

              {/* Floating Status Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-sky-100 flex items-center gap-3 shadow-lg flex-row-reverse text-right">
                <div className="bg-sky-500/10 p-2.5 rounded-lg text-sky-600 border border-sky-500/20 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 flex-row-reverse">
                    إرسال في نفس اليوم <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                  </div>
                  <div className="text-[11px] text-slate-500">أدوات تشخيص متقدمة ومهندسون معتمدون</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}