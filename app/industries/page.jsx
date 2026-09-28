import Link from 'next/link';
import { industries } from '../../lib/data';

export const metadata = {
  title: 'القطاعات المستهدفة | كاريزما للإعلان',
  description: 'حلول إعلانية وإنتاجية مصممة خصيصاً لتناسب طبيعة نشاط كل قطاع تجاري ومؤسسي.',
};

export default function IndustriesPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-blue-600 font-bold text-sm">تخصيص الحلول</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">حلول مصممة حسب طبيعة نشاطك</h1>
        <p className="text-slate-600 text-base">
          ندرك اختلاف الاحتياج الإعلاني بين كل مجال وآخر، ولذلك نوفر باقات تنفيذ تناسب بيئة عملك مباشرة.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {industries.map((ind) => (
          <div key={ind.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-4">
                {ind.title}
              </span>
              <h2 className="text-2xl font-black text-slate-900 mb-2">«{ind.headline}»</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{ind.servicesText}</p>
            </div>

            <Link href="/quote" className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg text-sm transition">
              اطلب حلول قطاعك الآن
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
