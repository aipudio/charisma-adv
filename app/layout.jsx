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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased font-['Cairo',sans-serif]">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
