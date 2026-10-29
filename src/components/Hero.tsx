import { ArrowRight, Phone, MessageCircle, ShieldCheck, MapPin } from 'lucide-react';
import { PHONE_URL, WHATSAPP_URL, PHONE_DISPLAY } from '../data/products';

const TRUST_BADGES = [
  'Authorised Business Bench Dealer',
  'Complete Interior & Exterior Solutions',
  'Professional Installation',
  'Serving Tuensang & Nagaland',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#06120F]/95 via-[#0B1F1A]/80 to-[#0B1F1A]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06120F]/70 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] items-center gap-12 lg:gap-16">
          <div className="max-w-3xl">
          <p className="section-label mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Hillcraft Interiors &middot; Tuensang Town, Nagaland
          </p>

          <h1
            className="section-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.08] animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Crafting Premium Interiors &amp; Exteriors Across Nagaland.
          </h1>

          <p
            className="text-white/75 text-base lg:text-lg leading-relaxed mb-10 max-w-xl font-['Montserrat'] animate-fade-up"
            style={{ animationDelay: '0.35s' }}
          >
            Hillcraft Interiors is your authorised Business Bench dealer in Tuensang — supplying premium
            interior &amp; exterior products and delivering expert design, supply and installation services
            for homes, offices, shops, hotels and commercial spaces.
          </p>

          <div className="flex flex-wrap gap-4 mb-14 animate-fade-up" style={{ animationDelay: '0.45s' }}>
            <a
              href="#quote"
              onClick={(e) => { e.preventDefault(); document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-gold flex items-center gap-2"
            >
              Request a Quote
              <ArrowRight size={14} />
            </a>
            <a href={PHONE_URL} className="btn-gold-outline flex items-center gap-2">
              <Phone size={14} />
              {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa flex items-center gap-2">
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            {TRUST_BADGES.map((badge) => (
              <div key={badge} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2">
                <ShieldCheck size={14} className="text-[#C9A24B]" />
                <span className="text-white/85 text-[11px] font-semibold tracking-wider uppercase">{badge}</span>
              </div>
            ))}
          </div>

          </div>

          <div className="flex flex-col items-center justify-center text-center animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <div className="w-52 h-60 sm:w-60 sm:h-72 lg:w-64 lg:h-80 flex items-end justify-center border border-white/15 bg-black/10 backdrop-blur-sm overflow-hidden">
              <img
                src="/assets/images/WhatsApp_Image_2026-10-10_at_11.06.41_AM-removebg-preview.png"
                alt="Hillcraft Interiors representative"
                className="w-full h-full object-contain object-bottom"
              />
            </div>
            <p className="text-white text-sm font-semibold tracking-[0.16em] uppercase mt-5">Hillcraft Interiors</p>
            <div className="flex items-start justify-center gap-2 mt-2 max-w-xs text-white/60 text-xs leading-relaxed">
              <MapPin size={13} className="text-[#C9A24B] mt-0.5 flex-shrink-0" />
              <span>Bazaar-A, Near SBI ATM Booth, Below Parade Ground, Tuensang Town, Nagaland – 798612</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-[#C9A24B] to-transparent" />
      </div>
    </section>
  );
}
