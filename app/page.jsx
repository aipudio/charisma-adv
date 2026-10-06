import Link from 'next/link';
import { siteConfig, services, whyCharisma } from '../lib/data';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 md:py-32 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
              <span>{siteConfig.tagline}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              من الفكرة إلى <span className="text-blue-500">التنفيذ</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              نجمع بين الفكر الإبداعي للوكالات الإعلانية ودقة التصنيع والتنفيذ التي تتطلبها الأسواق الحديثة لنصنع لعلامتك التجارية الكاريزما التي تستحقها.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-lg shadow-lg shadow-blue-600/30 transition">
                اطلب عرض سعر
              </Link>
              <Link href="/portfolio" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold px-8 py-3.5 rounded-lg transition">
                استعرض أعمالنا
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-8 text-center space-y-4">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-widest block">Portfolio 2026</span>
              <h3 className="text-2xl font-black text-white">الملف التعريفي للشركة</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                حلول متكاملة تجمع بين قوة التصميم ودقة الإنتاج الإعلاني لتجهيز كافة متطلبات علامتك التجارية.
              </p>
              <Link href="/about" className="inline-block bg-white text-slate-900 font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-slate-100 transition">
                تعرف على كاريزما &larr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Charisma in Numbers (كاريزما بالأرقام) */}
      <section className="bg-blue-600 text-white py-14 border-y border-blue-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-4xl sm:text-5xl font-black tracking-tight" dir="ltr">{stat.value}</div>
                <div className="text-blue-100 font-bold text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Charisma (نقاط القوة التنافسية) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-blue-600 font-bold text-sm">لماذا كاريزما؟</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">مقومات تجعلنا شريكك الإعلاني المفضل</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCharisma.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-blue-400 transition space-y-3 flex flex-col justify-between">
                <div>
                  <span className="text-blue-600 font-black text-lg block mb-2">0{idx + 1}</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <span className="text-xs text-slate-400 block mb-3 font-semibold">{item.enTitle}</span>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-slate-300 text-center max-w-3xl mx-auto border border-slate-800">
            <p className="text-sm sm:text-base font-bold italic text-white">
              "جودتنا ليست مجرد شعار، بل هي المعيار الذي نطبقه في كل طبعة وكل لافتة تخرج من مصنعنا."
            </p>
          </div>
        </div>
      </section>

      {/* 4. Full Services Grid (الخدمات الست) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-blue-600 font-bold text-sm">منظومة الإنتاج</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">خدماتنا الإعلانية والتنفيذية</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div key={item.slug} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <span className="text-blue-600 font-black text-xl mb-3 block">0{idx + 1}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
                  
                  <div className="space-y-2 mb-6">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/quote" className="text-blue-600 font-bold text-sm hover:underline pt-4 border-t border-slate-100 block">
                  اطلب تسعير هذه الخدمة &larr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-20 bg-slate-900 text-white text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">لديك مشروع أو احتياج إعلاني؟ لنبدأ.</h2>
          <p className="text-slate-300">أرسل لنا تفاصيل احتياجك، وسيتواصل معك فريق كاريزما لمناقشة الحل الفني الأنسب.</p>
          <div className="flex justify-center gap-4 pt-2">
            <Link href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition">
              اطلب عرض سعر الآن
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
