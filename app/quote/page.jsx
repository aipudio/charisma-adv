'use client';
import { useState } from 'react';
import { siteConfig } from '../../lib/data';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    industry: 'شركات ومؤسسات',
    service: 'التصميم والهوية البصرية',
    desc: '',
    quantity: '',
    targetDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `طلب عرض سعر جديد:%0A- الاسم: ${formData.name}%0A- الشركة: ${formData.company}%0A- الهاتف: ${formData.phone}%0A- الخدمة: ${formData.service}%0A- التفاصيل: ${formData.desc}`;
    alert('شكراً لك! تم استلام بياناتك وسيتم تحويلك مباشرة للتواصل وتأكيد الطلب.');
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-black text-slate-900 mb-2">طلب عرض سعر</h1>
        <p className="text-slate-600">أرسل لنا تفاصيل مشروعك وسيقوم فريق كاريزما بتقديم الحل الأنسب وتكلفته.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">الاسم *</label>
            <input required type="text" className="w-full border p-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-600" 
              onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">اسم الشركة *</label>
            <input required type="text" className="w-full border p-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-600" 
              onChange={e => setFormData({...formData, company: e.target.value})} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">رقم الهاتف (واتساب) *</label>
            <input required type="tel" className="w-full border p-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-600" 
              onChange={e => setFormData({...formData, phone: e.target.value})} />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">البريد الإلكتروني (اختياري)</label>
            <input type="email" className="w-full border p-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-600" 
              onChange={e => setFormData({...formData, email: e.target.value})} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">نوع النشاط</label>
            <select className="w-full border p-2.5 rounded-lg text-sm bg-white outline-none"
              onChange={e => setFormData({...formData, industry: e.target.value})}>
              <option value="المصانع والمنتجات">المصانع والمنتجات</option>
              <option value="الشركات والمؤسسات">الشركات والمؤسسات</option>
              <option value="المتاجر والمطاعم">المتاجر والمطاعم والمقاهي</option>
              <option value="المهنيون وأصحاب الأعمال">المهنيون وأصحاب الأعمال</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">الخدمة المطلوبة *</label>
            <select className="w-full border p-2.5 rounded-lg text-sm bg-white outline-none"
              onChange={e => setFormData({...formData, service: e.target.value})}>
              <option value="التصميم والهوية البصرية">التصميم والهوية البصرية</option>
              <option value="الطباعة">الطباعة الرقمية والأوفست</option>
              <option value="الملصقات والتغليف">الملصقات والتغليف</option>
              <option value="اللافتات والإعلانات الخارجية">اللافتات والإعلانات الخارجية</option>
              <option value="الحلول الدعائية والمؤسسية">الحلول الدعائية والمؤسسية</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">وصف مختصر للاحتياج والمواصفات *</label>
          <textarea required rows={4} className="w-full border p-2.5 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-600"
            onChange={e => setFormData({...formData, desc: e.target.value})} placeholder="المقاسات، الخامات، الألوان المطلوبة..."></textarea>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">الكمية إن كانت معروفة</label>
            <input type="text" className="w-full border p-2.5 rounded-lg text-sm outline-none" 
              onChange={e => setFormData({...formData, quantity: e.target.value})} />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">موعد التنفيذ المتوقع</label>
            <input type="date" className="w-full border p-2.5 rounded-lg text-sm outline-none" 
              onChange={e => setFormData({...formData, targetDate: e.target.value})} />
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg shadow-md transition">
          إرسال طلب عرض السعر
        </button>
      </form>
    </div>
  );
}
