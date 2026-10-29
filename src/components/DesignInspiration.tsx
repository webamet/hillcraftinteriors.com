import { ArrowRight, Lightbulb, Palette, Ruler, Sparkles } from 'lucide-react';
import { WHATSAPP_URL } from '../data/products';

const INSPIRATIONS = [
  {
    title: 'Modern Living Room Feature Walls',
    desc: 'Use WPC fluted panels or PU stone panels to create a bold feature wall behind your TV unit — adding texture and depth without overwhelming the room.',
    img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Living Room',
  },
  {
    title: 'Premium Bedroom Accent Walls',
    desc: 'Bamboo charcoal boards and designer wallpapers bring warmth and calm to bedroom walls — perfect for restful, stylish spaces.',
    img: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Bedroom',
  },
  {
    title: 'Elegant Office Interiors',
    desc: 'PVC partitions combined with smooth soffit ceilings create clean, professional office interiors that feel open and productive.',
    img: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Office',
  },
  {
    title: 'Statement Shop & Retail Fronts',
    desc: 'Polygranite sheets and stone panels make shop fronts and reception desks stand out — durable enough for daily commercial use.',
    img: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Retail',
  },
  {
    title: 'Hotel Lobbies & Corridors',
    desc: 'Soffit fluted ceilings and stone cladding transform hotel lobbies and corridors into premium, memorable arrival experiences.',
    img: 'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Hospitality',
  },
  {
    title: 'Durable SPC Flooring Throughout',
    desc: '100% waterproof SPC flooring runs seamlessly from kitchens to living rooms — scratch-resistant, stylish and easy to maintain.',
    img: 'https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Flooring',
  },
];

const TIPS = [
  { icon: Lightbulb, title: 'Mix Textures Thoughtfully', desc: 'Pair smooth SPC flooring with fluted wall panels for contrast that feels intentional, not busy.' },
  { icon: Palette, title: 'Choose a Cohesive Palette', desc: 'Stick to 2–3 core tones across walls, ceilings and floors for a premium, designed feel.' },
  { icon: Ruler, title: 'Measure Before You Buy', desc: 'Accurate site measurement prevents material shortage and wastage — we handle this for you.' },
  { icon: Sparkles, title: 'Finish with the Right Trims', desc: 'Skirting, edge trims and corner profiles are what separate a good install from a great one.' },
];

export default function DesignInspiration() {
  return (
    <section id="inspiration" className="py-24 bg-[#F5F2EC]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Design Inspiration</p>
          <h2 className="section-heading text-4xl lg:text-5xl text-[#0B1F1A]">Ideas to Inspire Your Project</h2>
          <div className="w-16 h-px bg-[#C9A24B] mx-auto mt-6" />
          <p className="text-[#0B1F1A]/60 text-sm max-w-2xl mx-auto mt-6 leading-relaxed">
            Practical design ideas using Business Bench products — curated by the Hillcraft Interiors team
            for homes, offices, shops and commercial spaces in Tuensang and Nagaland.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {INSPIRATIONS.map(({ title, desc, img, tag }) => (
            <div key={title} className="group overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-400">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-[#0B1F1A] text-[#C9A24B] text-[10px] font-semibold tracking-widest uppercase px-3 py-1">{tag}</span>
              </div>
              <div className="p-6">
                <h3 className="section-heading text-lg text-[#0B1F1A] mb-3">{title}</h3>
                <p className="text-[#0B1F1A]/55 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIPS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#0B1F1A] p-6">
              <Icon size={22} className="text-[#C9A24B] mb-4" strokeWidth={1.5} />
              <h4 className="section-heading text-sm text-white mb-2">{title}</h4>
              <p className="text-white/55 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline inline-flex items-center gap-2"
          >
            Discuss Your Design Idea
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
