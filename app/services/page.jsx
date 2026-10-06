import Link from 'next/link';
import { services } from '../../lib/data';

export const metadata = {
  title: 'خدماتنا | كاريزما للإعلان',
  description: 'مجموعات خدمات كاريزما للإعلان: الهويات البصرية، المطبوعات التجارية، لافتات المحلات، تجهيزات المعارض، المساحات الكبيرة، والتسويق الرقمي.',
};

export default function ServicesPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-blue-600 font-bold text-sm">منظومة الإنتاج والإعلان</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">خدمات كاريزما المتكاملة</h1>
        <p className="text-slate-600 text-base">
          نجمع بين رُقي التصميم ودقة التصنيع لتلبية كافة متطلبات العلامات التجارية والشركات تحت سقف واحد.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={service.slug} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-500 hover:shadow-md transition">
            <div>
              <span className="text-blue-600 font-black text-xl mb-4 block">0{index + 1}</span>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
              
              <div className="space-y-2 mb-6">
                {service.details.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/quote" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline pt-4 border-t border-slate-100">
              <span>طلب عرض سعر لهذه الخدمة</span>
              <span>&larr;</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
