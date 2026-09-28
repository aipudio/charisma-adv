import { siteConfig } from '../lib/data';

export default function WhatsAppButton() {
  return (
    <aside aria-label="أزرار التواصل السريع" className="fixed bottom-6 left-6 z-40">
      <a 
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="تواصل فوري عبر واتساب"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.57 3.74 1.57 5.27L2 22l4.98-1.63c1.47.88 3.19 1.38 5.06 1.38 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.78 14.07c-.24.68-1.22 1.25-1.78 1.31-.5.06-1.14.09-3.32-.8-2.61-1.07-4.28-3.73-4.41-3.9-.13-.18-1.04-1.39-1.04-2.65 0-1.26.66-1.88.89-2.14.24-.25.52-.32.69-.32.18 0 .35 0 .5.01.17.01.39-.06.6.46.24.58.81 1.98.88 2.13.07.15.11.33.02.53-.1.19-.15.31-.3.49-.15.18-.32.4-.46.54-.15.15-.31.32-.13.63.18.31.78 1.29 1.68 2.09 1.15 1.03 2.12 1.35 2.43 1.5.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.11 1.78.84 2.09.99.31.15.52.23.6.35.08.12.08.7-.16 1.38z"/>
        </svg>
      </a>
    </aside>
  );
}
