import { siteConfig } from '../../lib/data';

export const metadata = {
  title: 'تواصل معنا | كاريزما للإعلان',
  description: 'بيانات التواصل الرسمية، عنوان المقر في مدينة 6 أكتوبر، مواعيد العمل ورمز QR Code للبورتفوليو.',
};

export default function ContactPage() {
  const qrMessage = encodeURIComponent('مرحباً كاريزما للإعلان، أود الاستفسار عن الخدمات والاطلاع على البورتفوليو الرقمي 2026.');
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://wa.me/${siteConfig.whatsapp}?text=${qrMessage}&margin=10`;

  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <span className="text-blue-600 font-bold text-sm tracking-wide">قنوات الاتصال المعتمدة</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">تواصل مع كاريزما</h1>
        <p className="text-slate-600 text-sm sm:text-base">
          فريقنا جاهز للإجابة عن استفساراتك الفنية وتقديم عروض الأسعار المناسبة لمشروعك.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Right Column: Contact Details (7 cols) */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-black text-slate-900 border-b border-slate-100 pb-4">
            بيانات التواصل الرسمية
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <span className="block text-xs font-bold text-slate-400 mb-1">الهاتف المباشر</span>
              <a href={`tel:${siteConfig.phone}`} className="font-extrabold text-slate-900 hover:text-blue-600 text-base" dir="ltr">
                {siteConfig.phone}
              </a>
            </div>

            <div>
              <span className="block text-xs font-bold text-slate-400 mb-1">البريد الإلكتروني</span>
              <a href={`mailto:${siteConfig.email}`} className="font-bold text-slate-900 hover:text-blue-600">
                {siteConfig.email}
              </a>
            </div>

            <div className="sm:col-span-2">
              <span className="block text-xs font-bold text-slate-400 mb-1">مقر الشركة</span>
              <p className="font-semibold text-slate-800 leading-relaxed">
                {siteConfig.address}
              </p>
            </div>

            <div className="sm:col-span-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="block text-xs font-bold text-blue-600 mb-1">مواعيد العمل الرسمية</span>
              <p className="font-bold text-slate-900 text-sm">
                {siteConfig.workingHours}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a 
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('مرحباً كاريزما للإعلان، أريد الاستفسار عن عرض سعر.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-center transition flex items-center justify-center gap-2 shadow-sm"
            >
              <span>مراسلة عبر واتساب</span>
            </a>
          </div>
        </div>

        {/* Left Column: Map & QR Code (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Location Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-black text-slate-900 text-base">موقع المقر على الخريطة</h3>
            
            {/* Interactive Embedded Map */}
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200">
              <iframe
                title="موقع كاريزما للإعلان"
                src="https://maps.google.com/maps?q=أبراج+علي+الدين+6+أكتوبر&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a 
              href={siteConfig.googleMaps}
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold text-center transition border border-slate-200"
            >
              فتح الموقع في تطبيق Google Maps &larr;
            </a>
          </div>

          {/* QR Code Card */}
          <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 text-center space-y-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">Digital Connect</span>
            <h3 className="text-base font-black">امسح رمز الـ QR Code</h3>
            
            <div className="bg-white p-2 rounded-2xl inline-block shadow-md">
              <img 
                src={qrCodeUrl} 
                alt="Charisma QR Code" 
                width="160" 
                height="160" 
                className="rounded-lg"
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
              وجّه كاميرا هاتفك لمسح الرمز وبدء محادثة واتساب فورية وتصفح البورتفوليو الرقمي.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
