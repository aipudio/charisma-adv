import { siteConfig } from '../../lib/data';

export const metadata = {
  title: 'تواصل معنا | كاريزما للإعلان',
  description: 'بيانات التواصل الرسمية مع كاريزما للإعلان لطلب عروض الأسعار أو الاستشارات الفنية.',
};

export default function ContactPage() {
  return (
    <div className="py-16 max-w-5xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-blue-600 font-bold text-sm">قنوات الاتصال</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">تواصل مع كاريزما</h1>
        <p className="text-slate-600 text-base">
          فريقنا جاهز للإجابة عن استفساراتك الفنية وتقديم عروض الأسعار المناسبة لمشروعك.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900">بيانات التواصل الرسمية</h2>
          
          <div className="space-y-4 text-sm text-slate-700">
            <div>
              <span className="block text-xs font-bold text-slate-400 mb-1">الهاتف المباشر</span>
              <a href={`tel:${siteConfig.phone}`} className="font-bold text-slate-900 hover:text-blue-600" dir="ltr">
                {siteConfig.phone}
              </a>
            </div>

            <div>
              <span className="block text-xs font-bold text-slate-400 mb-1">البريد الإلكتروني</span>
              <a href={`mailto:${siteConfig.email}`} className="font-bold text-slate-900 hover:text-blue-600">
                {siteConfig.email}
              </a>
            </div>

            <div>
              <span className="block text-xs font-bold text-slate-400 mb-1">المقر</span>
              <p className="font-semibold text-slate-800">{siteConfig.address}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a 
              href={`https://wa.me/${siteConfig.whatsapp}?text=مرحباً، أريد الاستفسار عن خدمات كاريزما للإعلان`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg text-center transition"
            >
              مراسلة عبر واتساب
            </a>
          </div>
        </div>

        <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 flex flex-col items-center justify-center text-center">
          <h3 className="font-bold text-slate-800 mb-2">موقع المقر أو المعرض</h3>
          <p className="text-sm text-slate-500 mb-4">[يتم إدراج إحداثيات خرائط جوجل المعتمدة هنا]</p>
          <span className="text-xs text-slate-400">ساعات العمل: السبت - الخميس (9:00 ص - 6:00 م)</span>
        </div>
      </div>
    </div>
  );
}
