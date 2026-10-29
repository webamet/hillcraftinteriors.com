import { useState } from 'react';
import { ArrowRight, X, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { PRODUCTS, WHATSAPP_URL, PHONE_URL, type Product } from '../data/products';

export default function Products() {
  const [selected, setSelected] = useState<Product | null>(null);

  const openDetail = (p: Product) => setSelected(p);
  const closeDetail = () => setSelected(null);

  const enquiryText = (p: Product) =>
    `Hello Hillcraft Interiors, I'm interested in ${p.name}. Please share details and pricing.`;
  const waLink = (p: Product) => `${WHATSAPP_URL}?text=${encodeURIComponent(enquiryText(p))}`;

  return (
    <section id="products" className="py-24 bg-[#F5F2EC]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Our Products</p>
          <h2 className="section-heading text-4xl lg:text-5xl text-[#0B1F1A]">Business Bench Product Range</h2>
          <div className="w-16 h-px bg-[#C9A24B] mx-auto mt-6" />
          <p className="text-[#0B1F1A]/60 text-sm max-w-2xl mx-auto mt-6 leading-relaxed">
            Explore our complete range of 15 premium Business Bench product categories — each with its own
            dedicated detail page, enquiry option and installation support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="group overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 border-t-2 border-transparent group-hover:border-[#C9A24B] transition-all duration-300 flex flex-col flex-1">
                <span className="text-[#C9A24B] text-[10px] font-semibold tracking-[0.2em] uppercase mb-1">{p.category}</span>
                <h3 className="section-heading text-lg text-[#0B1F1A] mb-2">{p.name}</h3>
                <p className="text-[#0B1F1A]/55 text-xs leading-relaxed mb-4 flex-1">{p.tagline}</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => openDetail(p)}
                    className="text-[#C9A24B] text-xs font-semibold tracking-widest uppercase flex items-center gap-1 hover:gap-3 transition-all duration-300"
                  >
                    View Details <ArrowRight size={12} />
                  </button>
                  <a
                    href={waLink(p)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-[#0B1F1A]/50 hover:text-[#25D366] transition-colors"
                    aria-label={`Enquire about ${p.name} on WhatsApp`}
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={closeDetail}>
          <div
            className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeDetail}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#0B1F1A] text-white flex items-center justify-center hover:bg-[#C9A24B] hover:text-[#0B1F1A] transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="aspect-square md:aspect-auto md:h-full overflow-hidden">
                <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 lg:p-10">
                <span className="text-[#C9A24B] text-[10px] font-semibold tracking-[0.2em] uppercase">{selected.category}</span>
                <h3 className="section-heading text-2xl lg:text-3xl text-[#0B1F1A] mt-2 mb-2">{selected.name}</h3>
                <p className="text-[#0B1F1A]/60 text-sm italic mb-6">{selected.tagline}</p>
                <div className="w-10 h-px bg-[#C9A24B] mb-6" />
                <p className="text-[#0B1F1A]/70 text-sm leading-relaxed mb-6">{selected.description}</p>

                <h4 className="section-heading text-sm text-[#0B1F1A] mb-3">Ideal For</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.uses.map((u) => (
                    <span key={u} className="border border-[#0B1F1A]/15 text-[#0B1F1A]/70 text-[11px] px-3 py-1">{u}</span>
                  ))}
                </div>

                <h4 className="section-heading text-sm text-[#0B1F1A] mb-3">Key Features</h4>
                <ul className="space-y-2 mb-8">
                  {selected.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-[#C9A24B] mt-0.5 flex-shrink-0" />
                      <span className="text-[#0B1F1A]/70 text-xs">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={waLink(selected)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa flex items-center gap-2"
                  >
                    <MessageCircle size={14} />
                    Enquire on WhatsApp
                  </a>
                  <a href={PHONE_URL} className="btn-gold-outline flex items-center gap-2">
                    <Phone size={14} />
                    Call to Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
