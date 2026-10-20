import Link from 'next/link';

export const metadata = {
  title: 'سابقة الأعمال | كاريزما للإعلان',
  description: 'استعرض نماذج من الأعمال والمشاريع الواقعية التي نفذتها كاريزما للإعلان بمختلف القطاعات.',
};

const sampleProjects = [
  {
    id: 1,
    title: 'واجهة متجر ولافتة مضيئة',
    category: 'لافتات وإعلانات خارجية',
    industry: 'المتاجر والمطاعم',
    desc: 'تصنيع وتركيب حروف بارزة مع إضاءة LED داخلية وتجليد كلادينج عالي المقاومة.',
    // ضع مسار الصورة هنا (من مجلد public/portfolio)
    image: '/portfolio/project-1.webp',
  },
  {
    id: 2,
    title: 'تغليف واستيكرات عبوات غذائية',
    category: 'الملصقات والتغليف',
    industry: 'المصانع والمنتجات',
    desc: 'طباعة رول لاصق مقاوم للرطوبة ودرجات الحرارة المنخفضة مع علب تغليف كرتونية فاخرة.',
    image: '/portfolio/project-2.jpg',
  },
  {
    id: 3,
    title: 'مطبوعات وهوية شركة تجارية',
    category: 'التصميم والطباعة',
    industry: 'الشركات والمؤسسات',
    desc: 'تنفيذ كامل للهوية الورقية: بطاقات أعمال بخامات خاصة، فولدرات، ودفاتر مراسلات رسمية.',
    image: '/portfolio/project-3.jpg',
  },
  {
    id: 4,
    title: 'فيديو تنفيذ وتركيب واجهة إعلانية',
    category: 'لافتات وكلادينج',
    industry: 'المتاجر والشركات',
    desc: 'توثيق مراحل تصنيع وتركيب حروف الإستانلس ستيل المضيئة والتشغيل النهائي.',
    // في حال أردت عرض فيديو بدلاً من صورة:
    video: '/portfolio/project-video.mp4', 
  }
];

export default function PortfolioPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-blue-600 font-bold text-sm">واقع التنفيذ</span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">معرض الأعمال المنفذة</h1>
        <p className="text-slate-600 text-base">
          نماذج حقيقية تم تنفيذها بجودة عالية، تعكس قدراتنا الفعلية في تحويل التصاميم إلى منتجات ملموسة.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
            
            {/* مساحة عرض الصورة أو الفيديو */}
            <div className="aspect-video bg-slate-100 overflow-hidden border-b border-slate-100 relative">
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-sm">
                  [صورة المشروع]
                </div>
              )}
            </div>

            {/* تفاصيل المشروع */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-2">
                <span>{project.industry}</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
              
              <Link href="/quote" className="text-blue-600 font-bold text-sm hover:underline">
                طلب تنفيذ مشروع مشابه &larr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
