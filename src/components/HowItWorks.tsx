import { ClipboardList, Ruler, Layers, PenTool, Truck, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { PHONE_URL, WHATSAPP_URL } from '../data/products';

const STEPS = [
  { icon: ClipboardList, step: '01', title: 'Share Your Requirement', desc: 'Tell us about your home, shop, office, hotel or commercial project — including space, style and budget.' },
  { icon: Ruler, step: '02', title: 'Site Measurement & Assessment', desc: 'Our team visits your site in Tuensang to take accurate measurements and assess the right product fit.' },
  { icon: Layers, step: '03', title: 'Product & Material Selection', desc: 'Choose from 15+ Business Bench product categories with expert guidance on finish, texture and quantity.' },
  { icon: PenTool, step: '04', title: 'Design & Decoration Planning', desc: 'We prepare a design and decoration plan tailored to your space, aesthetic and functional needs.' },
  { icon: Truck, step: '05', title: 'Supply & Delivery', desc: 'Genuine Business Bench products are supplied and delivered to your location across Tuensang and Nagaland.' },
  { icon: Wrench, step: '06', title: 'Professional Installation', desc: 'Our skilled installation team completes the fitting, finishing and cleanup — ready for you to enjoy.' },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 bg-[#0B1F1A]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">How It Works</p>
          <h2 className="section-heading text-4xl lg:text-5xl text-white">From Idea to Installed Interior</h2>
          <div className="w-16 h-px bg-[#C9A24B] mx-auto mt-6" />
          <p className="text-white/55 text-sm max-w-2xl mx-auto mt-6 leading-relaxed">
            A clear, six-step process that takes you from first conversation to fully installed interior —
            with expert guidance at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="bg-[#06120F] border border-[#C9A24B]/15 p-8 group hover:border-[#C9A24B]/50 transition-colors duration-300 relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 border border-[#C9A24B] flex items-center justify-center group-hover:bg-[#C9A24B] transition-colors duration-300">
                  <Icon size={22} className="text-[#C9A24B] group-hover:text-[#0B1F1A] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <span className="section-heading text-3xl text-white/15 group-hover:text-[#C9A24B]/40 transition-colors duration-300">{step}</span>
              </div>
              <h3 className="section-heading text-lg text-white mb-3">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-[#06120F] border border-[#C9A24B]/20 p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <CheckCircle size={24} className="text-[#C9A24B] flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h3 className="section-heading text-xl text-white mb-2">Ready to start your interior project?</h3>
              <p className="text-white/55 text-sm leading-relaxed max-w-xl">
                Book a free site visit today. Our team in Tuensang will guide you from product selection to
                final installation — no obligation, no pressure.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a href={PHONE_URL} className="btn-gold flex items-center gap-2">
              Call Now
              <ArrowRight size={14} />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa flex items-center gap-2">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
