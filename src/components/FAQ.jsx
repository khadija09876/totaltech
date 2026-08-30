import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const faqsData = {
  ar: [
    {
      question: "ما هي رسوم الزيارة وفحص الأجهزة لديكم؟",
      answer: "نعم، يتم تطبيق رسوم زيارة وتشخيص قياسية لزيارات الأجهزة المنزلية لتغطية تكاليف سفر مهندسنا المعتمد وتقييمه الشامل في الموقع. تختلف هذه الرسوم بناءً على الموقع وتعقيد الأجهزة، ويتم إبلاغكم بها دائماً بشفافية قبل إرسال خبيرنا."
    },
    {
      question: "ما هي المناطق التي تغطونها للخدمات التقنية في الموقع؟",
      answer: "نعم، نقدم دعمًا تقنيًا تجاريًا وسكنيًا شاملاً في الموقع عبر المدينة مع فرق استجابة سريعة جاهزة على مدار الساعة طوال أيام الأسبوع."
    },
    {
      question: "هل فنيوكم معتمدون ومؤمن عليهم؟",
      answer: "نعم، جميع مهندسينا وفنيينا معتمدون بالكامل، وخضعوا لفحص الخلفية، ومدربون على إدارة الأجهزة الإلكترونية والكهروميكانيكية عالية الدقة."
    },
    {
      question: "هل تقدمون ضمانات على الإصلاحات وقطع الغيار البديلة؟",
      answer: "نعم، نقدم ضمانات خدمة قياسية على جودة عملنا بالإضافة إلى ضمانات الشركة المصنعة الأصلية على أي أجزاء يتم استبدالها أثناء التنفيذ، وذلك اعتماداً بشكل مباشر على الصحة العامة وسلامة الأجهزة الحالية."
    }
  ],
  en: [
    {
      question: "What are your visit and appliance inspection fees?",
      answer: "Yes, standard visit and diagnostic fees are applied for home appliance visits to cover our certified engineer's travel costs and comprehensive on-site evaluation. These fees vary based on location and appliance complexity, and you are always transparently informed before our expert is dispatched."
    },
    {
      question: "What areas do you cover for on-site technical services?",
      answer: "Yes, we provide comprehensive commercial and residential on-site technical support across the city with rapid response teams ready 24/7."
    },
    {
      question: "Are your technicians certified and insured?",
      answer: "Yes, all our engineers and technicians are fully certified, background-checked, and trained to manage high-precision electronic and electromechanical devices."
    },
    {
      question: "Do you offer warranties on repairs and replacement spare parts?",
      answer: "Yes, we offer standard service warranties on the quality of our work in addition to original manufacturer warranties on any parts replaced during execution, directly depending on the general health and safety of the existing appliances."
    }
  ]
};

const uiText = {
  ar: {
    badge: 'الدعم والإرشاد',
    heading: 'الأسئلة الشائعة',
    description: 'اعثر على إجابات واضحة بخصوص سياسات التشخيص، رسوم الفحص، ومعايير الخدمة لدينا.',
    dir: 'rtl',
    textAlign: 'text-right',
  },
  en: {
    badge: 'Support & Guidance',
    heading: 'Frequently Asked Questions',
    description: 'Find clear answers regarding diagnostic policies, inspection fees, and our service standards.',
    dir: 'ltr',
    textAlign: 'text-left',
  }
};

export default function FAQ() {
  const { lang } = useLanguage();
  const t = uiText[lang];
  const currentFaqs = faqsData[lang];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white text-slate-900 border-t border-sky-100 scroll-mt-20" dir={t.dir}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 bg-sky-500/10 text-sky-700 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border border-sky-500/20 mb-2">
            <HelpCircle className="w-3 h-3 text-sky-600" /> {t.badge}
          </span>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
            {t.heading}
          </h2>
          <p className="mt-1 text-slate-600 text-xs">
            {t.description}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {currentFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="border border-sky-100 rounded-xl overflow-hidden transition-all bg-sky-50/40"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-4 ${t.textAlign} text-xs sm:text-sm font-bold text-slate-900 hover:bg-sky-50/80 transition`}
                >
                  <ChevronDown className={`w-4 h-4 text-sky-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  <span>{faq.question}</span>
                </button>
                
                {isOpen && (
                  <div className={`px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-sky-100 bg-white ${t.textAlign}`}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}