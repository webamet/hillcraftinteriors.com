import { ShieldCheck, Award, Package, Headphones, Truck, BadgeCheck } from 'lucide-react';
import { PHONE_URL, WHATSAPP_URL } from '../data/products';

const DEALER_POINTS = [
  {
    icon: BadgeCheck,
    title: 'Genuine Business Bench Products',
    desc: 'Every product we supply is sourced directly from Business Bench as an authorised dealer — guaranteeing authenticity, warranty support and consistent quality.',
  },
  {
    icon: Package,
    title: '15+ Product Categories',
    desc: 'From Polygranite Sheets and WPC Fluted Panels to SPC Flooring, Stone-Coated Roofing and Adhesives — a complete range for every interior and exterior need.',
  },
  {
    icon: Headphones,
    title: 'Expert Consultation',
    desc: 'Our team helps you choose the right material, finish and quantity for your specific space, budget and design goal — no guesswork, no overspending.',
  },
  {
    icon: Truck,
    title: 'Supply & Delivery Support',
    desc: 'Reliable product supply and delivery support across Tuensang Town and nearby Nagaland areas, so your project stays on schedule.',
  },
];

export default function AuthorizedDealer() {
  return (
    <section id="dealer" className="py-24 bg-[#0B1F1A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #C9A24B 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-[#C9A24B]/40 px-4 py-2 mb-6">
            <ShieldCheck size={16} className="text-[#C9A24B]" />
            <span className="text-[#C9A24B] text-[11px] font-semibold tracking-[0.2em] uppercase">Authorised Dealer</span>
          </div>
          <h2 className="section-heading text-4xl lg:text-5xl text-white mb-4">
            Proudly an Authorised Business Bench Dealer
          </h2>
          <div className="w-16 h-px bg-[#C9A24B] mx-auto mt-6 mb-6" />
          <p className="text-white/60 text-sm max-w-2xl mx-auto leading-relaxed">
            Hillcraft Interiors is an authorised Business Bench dealer based in Tuensang Town, Nagaland.
            This means every product we supply is genuine, warranty-backed and supported by expert guidance
            and professional installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEALER_POINTS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#06120F] border border-[#C9A24B]/15 p-8 group hover:border-[#C9A24B]/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 border border-[#C9A24B] flex items-center justify-center mb-5 group-hover:bg-[#C9A24B] transition-colors duration-300">
                <Icon size={22} className="text-[#C9A24B] group-hover:text-[#0B1F1A] transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="section-heading text-lg text-white mb-3">{title}</h3>
              <p className="text-white/55 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={PHONE_URL} className="btn-gold flex items-center gap-2">
            <Award size={14} />
            Verify Our Dealer Status
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa flex items-center gap-2">
            Ask About Business Bench Products
          </a>
        </div>
      </div>
    </section>
  );
}
