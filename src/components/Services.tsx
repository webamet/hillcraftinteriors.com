import {
  MessageSquare, Layers, Ruler, PenTool, Palette, Truck, Wrench, Home, Building2,
  type LucideIcon,
} from 'lucide-react';
import { SERVICES } from '../data/products';

const ICONS: Record<string, LucideIcon> = {
  MessageSquare: MessageSquare,
  Layers: Layers,
  Ruler: Ruler,
  PenTool: PenTool,
  Palette: Palette,
  Truck: Truck,
  Wrench: Wrench,
  Home: Home,
  Building2: Building2,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F5F2EC]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Our Services</p>
          <h2 className="section-heading text-4xl lg:text-5xl text-[#0B1F1A]">End-to-End Interior Services</h2>
          <div className="w-16 h-px bg-[#C9A24B] mx-auto mt-6" />
          <p className="text-[#0B1F1A]/60 text-sm max-w-2xl mx-auto mt-6 leading-relaxed">
            From first consultation to final installation, Hillcraft Interiors handles every step of your
            interior and exterior project — for homes, offices, shops, hotels, restaurants and commercial spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#0B1F1A]/10">
          {SERVICES.map(({ icon, title, desc }) => {
            const Icon = ICONS[icon] ?? Layers;
            return (
              <div key={title} className="group p-8 border border-[#0B1F1A]/10 hover:bg-[#0B1F1A] transition-all duration-400 cursor-default">
                <div className="mb-5 w-12 h-12 border border-[#C9A24B] flex items-center justify-center group-hover:bg-[#C9A24B] transition-colors duration-300">
                  <Icon size={22} className="text-[#C9A24B] group-hover:text-[#0B1F1A] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="section-heading text-xl text-[#0B1F1A] group-hover:text-white mb-3 transition-colors duration-300">{title}</h3>
                <p className="text-[#0B1F1A]/60 group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-300">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
