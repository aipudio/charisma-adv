'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* الشعار (Logo) */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <span className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black text-xl">كـ</span>
          <div>
            <span className="font-black text-lg sm:text-xl text-slate-900 block leading-tight">كاريزما للإعلان</span>
            <span className="text-[11px] sm:text-xs text-blue-600 font-bold block">من الفكرة إلى التنفيذ</span>
          </div>
        </Link>

        {/* روابط سطح المكتب (Desktop Navigation) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-700">
          <Link href="/" className="hover:text-blue-600 transition">الرئيسية</Link>
          <Link href="/services" className="hover:text-blue-600 transition">الخدمات</Link>
          <Link href="/portfolio" className="hover:text-blue-600 transition">معرض الأعمال</Link>
          <Link href="/industries" className="hover:text-blue-600 transition">القطاعات</Link>
          <Link href="/about" className="hover:text-blue-600 transition">من نحن</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">تواصل معنا</Link>
        </nav>

        {/* أزرار الجهة اليسرى (Desktop Button + Mobile Toggle) */}
        <div className="flex items-center gap-3">
          <Link 
            href="/quote" 
            className="hidden sm:inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition"
          >
            اطلب عرض سعر
          </Link>

          {/* زر قائمة الموبايل (Hamburger Button) */}
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none"
            aria-label="فتح القائمة الرئيسية"
          >
            {isOpen ? (
              // أيقونة الإغلاق (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // أيقونة الهامبرجر (☰)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* قائمة الموبايل المنسدلة (Mobile Dropdown Menu) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1 font-bold text-slate-700 text-sm">
            <Link 
              href="/" 
              onClick={closeMenu} 
              className="px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              الرئيسية
            </Link>
            <Link 
              href="/services" 
              onClick={closeMenu} 
              className="px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              الخدمات
            </Link>
            <Link 
              href="/portfolio" 
              onClick={closeMenu} 
              className="px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              معرض الأعمال
            </Link>
            <Link 
              href="/industries" 
              onClick={closeMenu} 
              className="px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              القطاعات
            </Link>
            <Link 
              href="/about" 
              onClick={closeMenu} 
              className="px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              من نحن
            </Link>
            <Link 
              href="/contact" 
              onClick={closeMenu} 
              className="px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
              تواصل معنا
            </Link>
          </nav>

          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/quote"
              onClick={closeMenu}
              className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow hover:bg-blue-700 transition"
            >
              اطلب عرض سعر
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
