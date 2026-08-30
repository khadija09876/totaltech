import React, { useState } from 'react';
import { Wrench, CheckCircle2, Snowflake, Flame, Droplet, Zap, Cpu, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

const servicesData = [
  {
    id: 'ac',
    category: 'التكييف وأنظمة التبريد',
    title: 'إصلاح المكيفات والتحكم بالمناخ',
    tagline: 'تشخيص تبريد بمستوى احترافي',
    description: 'راحة مناخية مطلقة من خلال التنظيف العميق، تحسين الغاز، وتخفيف لوحات الدوائر الإلكترونية.',
    icon: Snowflake,
    features: ['صيانة المكيفات المنفصلة والمركزية', 'شحن الغاز بدقة', 'تشخيص لوحات الإنفرتر (PCB)']
  },
  {
    id: 'washing',
    category: 'الأجهزة والأدوات المنزلية',
    title: 'إصلاح الغسالات والأجهزة المنزلية',
    tagline: 'صيانة الكهرباء والأجهزة للحياة اليومية',
    description: 'صيانة احترافية واستكشاف الأخطاء وإصلاحها للغسالات الأتوماتيكية، مراوح السقف، وحدات الإضاءة، والأجهزة الكهربائية المنزلية الأساسية.',
    icon: Sparkles,
    features: ['خدمة الغسالات الأتوماتيكية ونصف الأتوماتيكية', 'لف وإصلاح مراوح السقف والجدران', 'استكشاف أخطاء وحدات الإضاءة والأجهزة الكهربائية']
  },
  {
    id: 'fridge',
    category: 'الثلاجات والأفران',
    title: 'الثلاجات ووحدات التبريد',
    tagline: 'استعادة الحرارة المتقدمة',
    description: 'صيانة حرارية متخصصة للمبردات التجارية وأجهزة المطبخ.',
    icon: Flame,
    features: ['استكشاف أخطاء الأبواب المزدوجة', 'إصلاح منظم الحرارة والحمل الزائد', 'إصلاح شامل لعطل التبريد']
  },
  {
    id: 'water',
    category: 'فلاتر المياه',
    title: 'تنقية المياه وأنظمة التناضح العكسي (RO)',
    tagline: 'هندسة ترطيب نقية وآمنة',
    description: 'ضمان النقاء من خلال استعادة غشاء التناضح العكسي وتعقيم الأشعة فوق البنفسجية.',
    icon: Droplet,
    features: ['استبدال غشاء التناضح العكسي (RO)', 'موازنة مستويات إجمالي المواد الصلبة الذائبة (TDS) والـ pH', 'خدمة مصابيح الأشعة فوق البنفسجية (UV)']
  },
  {
    id: 'motors',
    category: 'المحركات والكهرباء',
    title: 'المحركات الكهربائية والمضخات',
    tagline: 'تنفيذ الكهروميكانيكا للخدمات الشاقة',
    description: 'لف المحركات ذات عزم الدوران العالي ومحاذاة مضخات مياه الطرد المركزي.',
    icon: Zap,
    features: ['لف محركات المياه', 'استبدال موانع تسرب الأعمدة (Shaft Seals)', 'محاذاة مضخات الطرد المركزي']
  },
  {
    id: 'electrical',
    category: 'المحركات والكهرباء',
    title: 'الأجهزة الكهربائية الكاملة',
    tagline: 'السلامة المعتمدة لشبكات الطاقة والدوائر',
    description: 'تكوينات لوحات التوزيع وتتبع أعطال الدوائر القصيرة بسرعة.',
    icon: Cpu,
    features: ['إعداد لوحات التوزيع', 'تمديدات الشبكة المنزلية', 'تشخيص الأعطال']
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <section id="services" className="py-12 bg-sky-50/50 text-slate-900 border-t border-sky-100" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 bg-sky-500/10 text-sky-700 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border border-sky-500/20 mb-2">
            <Wrench className="w-3 h-3 text-sky-600" /> القدرات الأساسية
          </span>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
            مصفوفة الحلول التقنية
          </h2>
          <p className="mt-1 text-slate-600 text-xs">
            اختر فئة الخدمة أدناه لمراجعة معايير التنفيذ الخاصة بنا.
          </p>
        </div>

        {/* Minimalist Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {servicesData.map((item) => {
            const TabIcon = item.icon;
            const isSelected = selectedService.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedService(item)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-sm scale-105'
                    : 'bg-white text-slate-700 border border-sky-100 hover:border-sky-500 hover:text-sky-600'
                }`}
              >
                <TabIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-sky-600'}`} />
                {item.category}
              </button>
            );
          })}
        </div>

        {/* Clean Content Display Card */}
        <div className="bg-white rounded-2xl border border-sky-100 shadow-sm p-6 sm:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-4 text-right">
              <div>
                <span className="text-[11px] font-extrabold text-sky-600 tracking-wider uppercase">
                  {itemTagline(selectedService.category)}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                  {selectedService.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2 pt-2">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-medium flex-row-reverse">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Trigger */}
              <div className="pt-2">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 px-4 py-2.5 rounded-xl transition shadow-sm group"
                >
                  احجز هذه الخدمة <ArrowRight className="w-3.5 h-3.5 group-hover:-translate-x-1 transition rotate-180" />
                </a>
              </div>
            </div>

            {/* Right Column: Subtle Quality Box */}
            <div className="lg:col-span-5 bg-sky-50/50 border border-sky-100 rounded-xl p-5 flex flex-col justify-between space-y-4 text-right">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-sky-500/10 text-sky-600 rounded-lg flex items-center justify-center font-bold ms-auto">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">
                  ضمان التنفيذ الاحترافي
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  مقدمة من مهندسين معتمدين وفق بروتوكولات السلامة القياسية وفحوصات الجودة التحقق منها.
                </p>
              </div>

              <div className="pt-3 border-t border-sky-100 flex items-center justify-between text-[11px]">
                <span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-sky-100">متاح</span>
                <span className="text-slate-500 font-medium">الحالة</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function itemTagline(cat) {
  return `التخصص — ${cat}`;
}