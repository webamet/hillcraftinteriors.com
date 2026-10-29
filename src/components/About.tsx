import { ArrowRight, CheckCircle, Award } from 'lucide-react';
import { PHONE_URL } from '../data/products';

const WHY_POINTS = [
  'Authorised Business Bench Dealer',
  'Complete Interior & Exterior Solutions',
  'Premium Product Range — 15+ Categories',
  'Professional Site Measurement',
  'Expert Design & Decoration Guidance',
  'Reliable Supply & Delivery Support',
  'Skilled Installation Teams',
  'Local Tuensang Service Across Nagaland',
];

const STATS = [
  { value: '15+', label: 'Product Categories' },
  { value: '9', label: 'End-to-End Services' },
  { value: '100%', label: 'Authentic Business Bench Products' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F5F2EC]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium interior design and installation by Hillcraft Interiors Tuensang"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#C9A24B] p-6 hidden lg:flex flex-col items-center justify-center w-36 h-36">
              <Award size={28} className="text-[#0B1F1A] mb-1" strokeWidth={1.5} />
              <p className="text-[#0B1F1A] text-xs font-bold tracking-wider text-center uppercase leading-tight">
                Authorised<br />Business Bench<br />Dealer
              </p>
            </div>
          </div>

          <div>
            <p className="section-label mb-4">About Hillcraft Interiors</p>
            <h2 className="section-heading text-4xl lg:text-5xl text-[#0B1F1A] mb-6 leading-tight">
              A Complete Interior &amp; Exterior Solution Provider in Tuensang
            </h2>
            <div className="w-16 h-px bg-[#C9A24B] mb-8" />
            <p className="text-[#0B1F1A]/70 text-base leading-relaxed mb-5">
              Hillcraft Interiors is more than a product dealer. Based in Tuensang Town, Nagaland, we are a
              complete interior and exterior solution provider — offering product consultation, material
              selection, site measurement, interior designing, decoration, supply, delivery support and
              professional installation under one roof.
            </p>
            <p className="text-[#0B1F1A]/70 text-base leading-relaxed mb-8">
              As an authorised Business Bench dealer, we supply genuine Polygranite Sheets, Stone Panels,
              WPC Fluted Panels, SPC Flooring, PU Stone Panels, Bamboo Charcoal Boards, Wallpapers, PVC
              Panels, Stone-Coated Steel Roofing, UPVC Roofing and Adhesives — and back every product with
              expert design and installation support for homes, offices, shops, hotels, restaurants and
              commercial spaces.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
              {WHY_POINTS.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#C9A24B] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-[#0B1F1A]/75 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-gold inline-flex items-center gap-2"
              >
                Book a Free Site Visit
                <ArrowRight size={14} />
              </a>
              <a href={PHONE_URL} className="btn-gold-outline inline-flex items-center gap-2">
                Speak to Our Team
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 pt-10 border-t border-[#0B1F1A]/10">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <p className="section-heading text-3xl lg:text-4xl text-[#C9A24B]">{value}</p>
                  <p className="text-[#0B1F1A]/60 text-[11px] tracking-wider uppercase font-semibold mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
