import Link from 'next/link';
import { siteConfig } from '../../lib/data';

export const metadata = {
  title: 'من نحن | كاريزما للإعلان',
  description: 'شغف الإبداع ودقة الإنتاج - نبذة عن كاريزما للإعلان، الرؤية والرسالة والقيم التنفيذية.',
};

export default function AboutPage() {
  return (
    <div className="py-16 max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">ABOUT CHARISMA</span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
          شغف الإبداع... ودقة الإنتاج
        </h1>
        <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
          في كاريزما للإعلان، لا نكتفي بتقديم تصاميم مبتكرة أو طباعة عالية الجودة فحسب، بل نبني تجربة بصريّة متكاملة تنبض بالحياة. نجمع بين الفكر الإبداعي للوكالات الإعلانية ودقة التصنيع والتنفيذ التي تتطلبها الأسواق الحديثة.
        </p>
      </div>

      {/* Main Narrative */}
      <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm mb-12 space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">انطلاقتنا والتزامنا</h2>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
          منذ انطلاقتنا، أخذنا على عاتقنا تحويل أفكار شركائنا إلى واقع ملموس يُرى، يُلمس، ويترك أثراً مستداماً. ننطلق من دراسة هوية علامتك التجارية، لنصيغ لها حلولاً إعلانية وطباعية شاملة تعزز حضورك في السوق وتصنع لك الشخصية (الكاريزما) التي تستحقها.
        </p>
      </div>

      {/* Vision & Mission Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Vision */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-sm mb-2">ر</div>
          <h3 className="text-xl font-bold text-blue-400">رؤيتنا (Our Vision)</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            أن نكون الخيار الأول والشركة الرائدة في تقديم الحلول الإعلانية والطباعية المتكاملة، عبر الدمج المستمر بين أحدث تكنولوجيا التصنيع والإبداع البصري غير المحدود.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center font-black text-white text-sm mb-2">س</div>
          <h3 className="text-xl font-bold text-emerald-400">رسالتنا (Our Mission)</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            تمكين العلامات التجارية من البروز والمنافسة بقوة، من خلال تقديم خدمات تصميم وإنتاج إعلاني تتفوق في دقتها وجودتها، مع التزام تام بالابتكار والمواعيد والتفاصيل التي تصنع الفارق.
          </p>
        </div>
      </div>

      {/* Core Equation Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center space-y-3 mb-16">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">معادلة كاريزما الجوهرية</span>
        <div className="text-lg sm:text-xl font-black text-slate-900 flex flex-wrap items-center justify-center gap-2">
          <span className="bg-white px-3 py-1.5 rounded-lg border border-blue-200">إبداع بصري مبتكر</span>
          <span className="text-blue-600">+</span>
          <span className="bg-white px-3 py-1.5 rounded-lg border border-blue-200">تقنيات إنتاج حديثة</span>
          <span className="text-blue-600">=</span>
          <span className="bg-blue-600 text-white px-3 py-1.5 rounded-lg">حضور استثنائي لعلامتك التجارية</span>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold">جاهز لتحويل فكرتك إلى تنفيذ فعلي؟</h3>
          <p className="text-slate-400 text-sm mt-1">تواصل مع فريق كاريزما لمناقشة مواصفات مشروعك وعرض السعر.</p>
        </div>
        <Link href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition whitespace-nowrap">
          اطلب عرض سعر
        </Link>
      </div>
    </div>
  );
}