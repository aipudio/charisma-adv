import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '../../../lib/data';

export default function ServiceDetailPage({ params }) {
  const service = services.find((s) => s.slug === params.service);

  if (!service) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/services" className="text-blue-600 text-sm font-bold">&rarr; العودة لجميع الخدمات</Link>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">{service.title}</h1>
        <p className="text-slate-600 text-lg mt-3 leading-relaxed">{service.desc}</p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">ما الذي تقدمه كاريزما ضمن هذه الخدمة:</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {service.details.map((detail, idx) => (
            <li key={idx} className="flex items-center gap-2 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              {detail}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold">جاهز لبدء مشروعك مع كاريزما؟</h3>
          <p className="text-slate-400 text-sm mt-1">احصل على استشارة فنية وعرض سعر مخصص لمشروعك.</p>
        </div>
        <Link href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition whitespace-nowrap">
          اطلب عرض سعر
        </Link>
      </div>
    </div>
  );
}
