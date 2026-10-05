import Link from 'next/link';
import { services, industries } from '../lib/data';

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className="bg-slate-900 text-white py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              من الفكرة إلى <span className="text-blue-500">التنفيذ</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
              نقدم حلولاً متكاملة في الدعاية والإعلان والتصميم والطباعة والإنتاج والتنفيذ، لنحول احتياجات الشركات والعلامات التجارية إلى نتائج ملموسة.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition">
                اطلب عرض سعر
              </Link>
              <Link href="/portfolio" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold px-8 py-3 rounded-lg transition">
                استعرض أعمالنا
              </Link>
            </div>
          </div>
          <div className="bg-slate-800 rounded-2xl h-80 flex items-center justify-center border border-slate-700 text-slate-400 font-semibold p-6 text-center">
            [مساحة مخصصة: فيديو أو صور عالية الجودة لعمليات الإنتاج والطباعة الحقيقية]
          </div>
        </div>
      </section>

      {/* 2. Short Intro */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">خبرة تنفيذية تمتد من التصميم إلى المنتج النهائي</h2>
          <p className="text-slate-600 leading-relaxed">
            في كاريزما، لا نتوقف عند الفكرة أو التصميم؛ نعمل على تحويلها إلى تنفيذ فعلي يناسب احتياج العلامة التجارية والشركة، بدءًا من التصميم والطباعة وصولاً إلى اللافتات والملصقات والمواد الدعائية.
          </p>
          <Link href="/about" className="inline-block text-blue-600 font-bold hover:underline">تعرف على كاريزما &larr;</Link>
        </div>
      </section>

      {/* 3. Core Services */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900">مجموعات الخدمات الرئيسية</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <div key={item.slug} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-blue-600 font-black text-lg block mb-2">0{idx + 1}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.desc}</p>
              </div>
              <Link href={`/services/${item.slug}`} className="text-blue-600 font-bold text-sm hover:underline mt-2">
                تفاصيل الخدمة &larr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Workflow */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-12">من الاحتياج إلى التنفيذ</h2>
          <div className="grid sm:grid-cols-5 gap-4 text-center">
            {['فهم الاحتياج', 'اقتراح الحل', 'التصميم والتجهيز', 'الإنتاج والتنفيذ', 'التسليم'].map((step, idx) => (
              <div key={step} className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">لديك مشروع أو احتياج إعلاني؟ لنبدأ.</h2>
          <p className="text-blue-100">أرسل لنا تفاصيل احتياجك، وسيتواصل معك فريق كاريزما لمناقشة الحل المناسب.</p>
          <div className="flex justify-center gap-4 pt-2">
            <Link href="/quote" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg shadow-md hover:bg-slate-100 transition">
              اطلب عرض سعر
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
