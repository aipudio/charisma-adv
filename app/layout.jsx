import Navbar from '../components/Navbar';
import WhatsAppButton from '../components/WhatsAppButton';
import './globals.css';

export const metadata = {
  title: 'كاريزما للإعلان | من الفكرة إلى التنفيذ',
  description: 'شريك متكامل للعلامات التجارية والشركات في التصميم والطباعة والإنتاج والتنفيذ الإعلاني.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-slate-50 text-slate-800 antialiased font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
