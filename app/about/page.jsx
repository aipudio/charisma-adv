import Link from 'next/link';

export const metadata = {
  title: 'من نحن | كاريزما للإعلان',
  description: 'خبرة تنفيذية تمتد من التصميم إلى المنتج النهائي في الدعاية والإعلان والطباعة.',
};

export default function AboutPage() {
  return (
    <div className="py-16 max-w-5xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-blue-600 font-bold text-sm">عن الشركة</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
          خبرة في التنفيذ.. ورؤية للمستقبل
        </h1>
        <p className="text-slate-600 leading-relaxed text-base">
          كاريزما هي شريك متكامل للعلامات التجارية والشركات في التصميم والطباعة والإنتاج والتنفيذ الإعلاني، مصممة لتحويل الأفكار والاحتياجات التجارية إلى تطبيقات ملموسة وواقعية بأعلى معايير الدقة والجودة.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-slate-900">رسالتنا وقيمنا التنفيذية</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            الارتكاز على الأعمال الواقعية بدلاً من المبالغة في الوعود؛ نهتم بكل مرحلة تبدأ من فهم الاحتياج وتدقيق التصاميم، وصولاً إلى الإنتاج في ورشنا ومطابعنا والتركيب النهائي في الموقع.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-slate-900">القدرات الإنتاجية</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            منظومة مجهزة لخدمة مختلف القطاعات التجارية والمؤسسية، تشمل خطوط الطباعة الرقمية والأوفست، تجهيز وتصنيع اللافتات المضيئة والواجهات، وتوفير حلول التغليف والملصقات المتقدمة.
          </p>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold">هل ترغب بمناقشة مشروعك مع فريقنا؟</h3>
          <p className="text-slate-400 text-sm mt-1">تواصل معنا وسنقدم لك الحل الفني الأنسب لاحتياجك.</p>
        </div>
        <Link href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition whitespace-nowrap">
          اطلب عرض سعر
        </Link>
      </div>
    </div>
  );
}
