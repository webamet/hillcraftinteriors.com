import { Home, Building2, Store, UtensilsCrossed, Hotel, BedDouble, ArrowRight } from 'lucide-react';
import { PHONE_URL, WHATSAPP_URL } from '../data/products';

const SOLUTIONS = [
  { icon: Home, title: 'Home Interiors', desc: 'Living rooms, bedrooms, kitchens and bathrooms — complete interior supply, design and installation for modern Nagaland homes.' },
  { icon: Building2, title: 'Office Interiors', desc: 'Professional office interiors with PVC partitions, wall panels, ceilings and flooring for productive workspaces.' },
  { icon: Store, title: 'Shop & Retail Interiors', desc: 'Eye-catching shop and showroom interiors with durable cladding, lighting-ready ceilings and premium finishes.' },
  { icon: UtensilsCrossed, title: 'Restaurant & Café', desc: 'Stylish restaurant and café interiors using fluted panels, PU stone and wallpapers for memorable dining spaces.' },
  { icon: Hotel, title: 'Hotel Interiors', desc: 'Premium hotel lobbies, corridors and rooms with stone panels, fluted ceilings and designer wall finishes.' },
  { icon: BedDouble, title: 'Commercial Spaces', desc: 'End-to-end interior and exterior solutions for clinics, salons, schools and commercial buildings across Nagaland.' },
];

const INSTALL_POINTS = [
  'Wall panel & cladding installation',
  'SPC flooring installation',
  'False ceiling & soffit installation',
  'PVC partition fitting',
  'Stone-coated & UPVC roofing installation',
  'Wallpaper application',
  'Skirting, trims & finishing work',
  'Site cleanup & handover',
];

export default function InteriorSolutions() {
  return (
    <section id="solutions" className="py-24 bg-[#F5F2EC]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Interior Solutions</p>
          <h2 className="section-heading text-4xl lg:text-5xl text-[#0B1F1A]">Solutions for Every Space</h2>
          <div className="w-16 h-px bg-[#C9A24B] mx-auto mt-6" />
          <p className="text-[#0B1F1A]/60 text-sm max-w-2xl mx-auto mt-6 leading-relaxed">
            Hillcraft Interiors designs and installs interiors for every type of space — residential or
            commercial, large or small, modern or classic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SOLUTIONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white border border-[#0B1F1A]/8 p-8 group hover:border-[#C9A24B] transition-colors duration-300">
              <div className="w-12 h-12 bg-[#0B1F1A] flex items-center justify-center mb-5 group-hover:bg-[#C9A24B] transition-colors duration-300">
                <Icon size={22} className="text-[#C9A24B] group-hover:text-[#0B1F1A] transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="section-heading text-lg text-[#0B1F1A] mb-3">{title}</h3>
              <p className="text-[#0B1F1A]/60 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Installation Services */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#0B1F1A] p-8 lg:p-12">
          <div>
            <p className="section-label mb-4" style={{ color: '#C9A24B' }}>Installation Services</p>
            <h3 className="section-heading text-3xl lg:text-4xl text-white mb-4 leading-tight">
              Professional Installation, Done Right.
            </h3>
            <div className="w-12 h-px bg-[#C9A24B] mb-6" />
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              We don't just supply products — we install them. Our skilled installation teams handle every
              aspect of fitting and finishing to ensure your interior looks premium and lasts for years.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={PHONE_URL} className="btn-gold flex items-center gap-2">
                Book Installation
                <ArrowRight size={14} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa flex items-center gap-2">
                Ask About Installation
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INSTALL_POINTS.map((p) => (
              <div key={p} className="flex items-start gap-3 bg-[#06120F] border border-[#C9A24B]/15 p-4">
                <span className="w-1.5 h-1.5 bg-[#C9A24B] rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-white/75 text-xs leading-relaxed">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
