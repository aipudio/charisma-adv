import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black text-xl">كـ</span>
          <div>
            <span className="font-black text-xl text-slate-900 block leading-tight">كاريزما للإعلان</span>
            <span className="text-xs text-blue-600 font-bold block">من الفكرة إلى التنفيذ</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-700">
          <Link href="/" className="hover:text-blue-600 transition">الرئيسية</Link>
          <Link href="/services" className="hover:text-blue-600 transition">الخدمات</Link>
          <Link href="/portfolio" className="hover:text-blue-600 transition">معرض الأعمال</Link>
          <Link href="/industries" className="hover:text-blue-600 transition">القطاعات</Link>
          <Link href="/about" className="hover:text-blue-600 transition">من نحن</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">تواصل معنا</Link>
        </nav>
        <Link href="/quote" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition">
          اطلب عرض سعر
        </Link>
      </div>
    </header>
  );
}
