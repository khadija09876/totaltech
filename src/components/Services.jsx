import React, { useState } from 'react';
import { Wrench, CheckCircle2, Snowflake, Flame, Droplet, Zap, Cpu, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const servicesData = {
  ar: [
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
  ],
  en: [
    {
      id: 'ac',
      category: 'AC & Cooling Systems',
      title: 'AC Repair & Climate Control',
      tagline: 'Professional-Grade Cooling Diagnosis',
      description: 'Absolute climate comfort through deep cleaning, gas optimization, and electronic circuit board tuning.',
      icon: Snowflake,
      features: ['Split & Central AC Maintenance', 'Precision Refrigerant Gas Charging', 'Inverter PCB Diagnosis']
    },
    {
      id: 'washing',
      category: 'Home Appliances',
      title: 'Washing Machines & Home Appliances',
      tagline: 'Electrical & Appliance Care for Daily Life',
      description: 'Professional maintenance and troubleshooting for automatic washing machines, ceiling fans, lighting fixtures, and essential household electrical appliances.',
      icon: Sparkles,
      features: ['Automatic & Semi-Automatic Washer Service', 'Ceiling & Wall Fan Rewinding & Repair', 'Lighting Units & Electrical Fault Finding']
    },
    {
      id: 'fridge',
      category: 'Fridges & Ovens',
      title: 'Refrigerators & Cooling Units',
      tagline: 'Advanced Thermal Restoration',
      description: 'Specialized thermal maintenance for commercial coolers and kitchen appliances.',
      icon: Flame,
      features: ['Double-Door Troubleshooting', 'Thermostat & Overload Repair', 'Comprehensive Cooling Failure Repair']
    },
    {
      id: 'water',
      category: 'Water Filters',
      title: 'Water Purification & RO Systems',
      tagline: 'Pure & Safe Hydration Engineering',
      description: 'Ensuring purity through reverse osmosis membrane restoration and UV sterilization.',
      icon: Droplet,
      features: ['RO Membrane Replacement', 'TDS & pH Level Balancing', 'UV Lamp Servicing']
    },
    {
      id: 'motors',
      category: 'Motors & Electrical',
      title: 'Electric Motors & Pumps',
      tagline: 'Heavy-Duty Electromechanical Execution',
      description: 'High-torque motor rewinding and centrifugal water pump alignment.',
      icon: Zap,
      features: ['Water Motor Rewinding', 'Shaft Seal Replacement', 'Centrifugal Pump Alignment']
    },
    {
      id: 'electrical',
      category: 'Motors & Electrical',
      title: 'Complete Electrical Systems',
      tagline: 'Certified Safety for Power Grids & Circuits',
      description: 'Distribution board configurations and rapid short-circuit tracing.',
      icon: Cpu,
      features: ['Distribution Board Setup', 'Home Grid Wiring', 'Fault Diagnosis']
    }
  ]
};

const uiText = {
  ar: {
    badge: 'القدرات الأساسية',
    heading: 'مصفوفة الحلول التقنية',
    description: 'اختر فئة الخدمة أدناه لمراجعة معايير التنفيذ الخاصة بنا.',
    ctaBtn: 'احجز هذه الخدمة',
    warrantyTitle: 'ضمان التنفيذ الاحترافي',
    warrantyDesc: 'مقدمة من مهندسين معتمدين وفق بروتوكولات السلامة القياسية وفحوصات الجودة التحقق منها.',
    status: 'متاح',
    statusLabel: 'الحالة',
    dir: 'rtl',
    textAlign: 'text-right',
    msAuto: 'ms-auto',
    flexRow: 'flex-row-reverse',
    arrowRotate: 'rotate-180 group-hover:-translate-x-1',
  },
  en: {
    badge: 'Core Capabilities',
    heading: 'Technical Solutions Matrix',
    description: 'Select a service category below to review our execution standards.',
    ctaBtn: 'Book This Service',
    warrantyTitle: 'Professional Execution Guarantee',
    warrantyDesc: 'Delivered by certified engineers according to standard safety protocols and verified quality checks.',
    status: 'Available',
    statusLabel: 'Status',
    dir: 'ltr',
    textAlign: 'text-left',
    msAuto: 'me-auto',
    flexRow: 'flex-row',
    arrowRotate: 'group-hover:translate-x-1',
  }
};

export default function Services() {
  const { lang } = useLanguage();
  const t = uiText[lang];
  const currentServices = servicesData[lang];
  const [selectedService, setSelectedService] = useState(currentServices[0]);

  // Keep selected service in sync when language changes
  const activeService = currentServices.find(s => s.id === selectedService.id) || currentServices[0];

  return (
    <section id="services" className="py-12 bg-sky-50/50 text-slate-900 border-t border-sky-100" dir={t.dir}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 bg-sky-500/10 text-sky-700 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border border-sky-500/20 mb-2">
            <Wrench className="w-3 h-3 text-sky-600" /> {t.badge}
          </span>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
            {t.heading}
          </h2>
          <p className="mt-1 text-slate-600 text-xs">
            {t.description}
          </p>
        </div>

        {/* Minimalist Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {currentServices.map((item) => {
            const TabIcon = item.icon;
            const isSelected = activeService.id === item.id;
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
            <div className={`lg:col-span-7 space-y-4 ${t.textAlign}`}>
              <div>
                <span className="text-[11px] font-extrabold text-sky-600 tracking-wider uppercase">
                  {itemTagline(activeService.category, lang)}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                  {activeService.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-2 pt-2">
                {activeService.features.map((feature, idx) => (
                  <div key={idx} className={`flex items-center gap-2 text-xs text-slate-800 font-medium ${t.flexRow}`}>
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Trigger */}
              <div className="pt-2">
                <a 
                  href="#contact" 
                  className={`inline-flex items-center gap-1.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 px-4 py-2.5 rounded-xl transition shadow-sm group ${lang === 'en' ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {t.ctaBtn} <ArrowRight className={`w-3.5 h-3.5 transition ${t.arrowRotate}`} />
                </a>
              </div>
            </div>

            {/* Right Column: Subtle Quality Box */}
            <div className={`lg:col-span-5 bg-sky-50/50 border border-sky-100 rounded-xl p-5 flex flex-col justify-between space-y-4 ${t.textAlign}`}>
              <div className="space-y-2">
                <div className={`w-8 h-8 bg-sky-500/10 text-sky-600 rounded-lg flex items-center justify-center font-bold ${t.msAuto}`}>
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">
                  {t.warrantyTitle}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {t.warrantyDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-sky-100 flex items-center justify-between text-[11px]">
                <span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-sky-100">{t.status}</span>
                <span className="text-slate-500 font-medium">{t.statusLabel}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function itemTagline(cat, lang) {
  return lang === 'en' ? `Specialty — ${cat}` : `التخصص — ${cat}`;
}