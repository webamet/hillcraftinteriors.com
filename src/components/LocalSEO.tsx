import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { PHONE_URL, WHATSAPP_URL, PHONE_DISPLAY } from '../data/products';

export default function LocalSEO() {
  return (
    <section className="py-20 bg-[#F5F2EC]">
      <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center">
        <p className="section-label mb-4">Serving Tuensang &amp; Nagaland</p>
        <h2 className="section-heading text-3xl lg:text-4xl text-[#0B1F1A] mb-6">
          Interior Products &amp; Installation Services in Tuensang Town, Nagaland
        </h2>
        <div className="w-16 h-px bg-[#C9A24B] mx-auto mb-10" />
        <p className="text-[#0B1F1A]/70 text-base leading-[1.9] max-w-3xl mx-auto">
          Hillcraft Interiors is an authorised Business Bench dealer based in Tuensang Town, Nagaland. We
          supply premium interior and exterior products — including Polygranite Sheets, Stone Panels, WPC
          Fluted Panels, SPC Flooring, PU Stone Panels, Bamboo Charcoal Boards, Wallpapers, PVC Panels,
          Stone-Coated Steel Roofing, UPVC Roofing and Adhesives — and provide complete design, supply,
          delivery and professional installation services for homes, offices, shops, hotels, restaurants
          and commercial spaces. If you're searching for interior products near me, wall panels in Tuensang,
          SPC flooring in Nagaland, roofing sheets in Tuensang, or an authorised Business Bench dealer near
          me, Hillcraft Interiors is your trusted local partner.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {['Polygranite Sheets', 'WPC Fluted Panels', 'SPC Flooring', 'PU Stone Panels', 'PVC Panels', 'Stone-Coated Roofing', 'UPVC Roofing', 'Wallpapers', 'Adhesives', 'Interior Installation'].map((tag) => (
            <span key={tag} className="border border-[#C9A24B]/40 text-[#0B1F1A] text-[11px] font-semibold tracking-widest px-4 py-2 uppercase">
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
          <a href={PHONE_URL} className="flex flex-col items-center gap-2 bg-white border border-[#0B1F1A]/8 p-6 hover:border-[#C9A24B] transition-colors">
            <Phone size={20} className="text-[#C9A24B]" strokeWidth={1.5} />
            <span className="text-[#0B1F1A] text-sm font-semibold">{PHONE_DISPLAY}</span>
            <span className="text-[#0B1F1A]/50 text-[10px] uppercase tracking-widest">Call Now</span>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 bg-white border border-[#0B1F1A]/8 p-6 hover:border-[#25D366] transition-colors">
            <MessageCircle size={20} className="text-[#25D366]" strokeWidth={1.5} />
            <span className="text-[#0B1F1A] text-sm font-semibold">WhatsApp Us</span>
            <span className="text-[#0B1F1A]/50 text-[10px] uppercase tracking-widest">Quick Reply</span>
          </a>
          <div className="flex flex-col items-center gap-2 bg-white border border-[#0B1F1A]/8 p-6">
            <MapPin size={20} className="text-[#C9A24B]" strokeWidth={1.5} />
            <span className="text-[#0B1F1A] text-sm font-semibold text-center leading-tight">Tuensang Town, Nagaland</span>
            <span className="text-[#0B1F1A]/50 text-[10px] uppercase tracking-widest">Visit Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
