import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_URL, WHATSAPP_URL } from '../data/products';

export default function FloatingCTAs() {
  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </a>
      <a
        href={PHONE_URL}
        aria-label="Call us"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#C9A24B] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 lg:hidden"
      >
        <Phone size={22} className="text-[#0B1F1A]" />
      </a>
    </>
  );
}
