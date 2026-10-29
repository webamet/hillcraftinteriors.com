import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY = [
  { title: 'Living Room Feature Wall', img: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Residential' },
  { title: 'Bedroom Wardrobe & Paneling', img: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Residential' },
  { title: 'False Ceiling Design', img: 'https://images.pexels.com/photos/1583484/pexels-photo-1583484.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Ceiling' },
  { title: 'Modular Kitchen Finish', img: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Kitchen' },
  { title: 'Premium SPC Flooring', img: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Flooring' },
  { title: 'Shop & Retail Interior', img: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Commercial' },
  { title: 'Office Interior Setup', img: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Commercial' },
  { title: 'Decorative Stone Cladding', img: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Wall Cladding' },
  { title: 'Hotel Lobby Design', img: 'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Hospitality' },
  { title: 'Reception Counter Finish', img: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Commercial' },
  { title: 'Wallpaper Accent Wall', img: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Wall Finish' },
  { title: 'Restaurant Interior', img: 'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Hospitality' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev = () => setLightbox((p) => (p === null ? null : (p - 1 + GALLERY.length) % GALLERY.length));
  const next = () => setLightbox((p) => (p === null ? null : (p + 1) % GALLERY.length));

  return (
    <section id="gallery" className="py-24 bg-[#06120F]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Our Work</p>
          <h2 className="section-heading text-4xl lg:text-5xl text-white">Interior Gallery</h2>
          <div className="w-16 h-px bg-[#C9A24B] mx-auto mt-6" />
          <p className="text-white/55 text-sm max-w-2xl mx-auto mt-6 leading-relaxed">
            A look at interiors and finishes created using Business Bench products — across residential and
            commercial spaces in Tuensang and Nagaland.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {GALLERY.map(({ title, img, cat }, i) => (
            <button
              key={title}
              onClick={() => open(i)}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-start justify-end p-4 text-left">
                <span className="text-[#C9A24B] text-[10px] font-semibold tracking-widest uppercase mb-1">{cat}</span>
                <h3 className="section-heading text-sm text-white">{title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4" onClick={close}>
          <button className="absolute top-4 right-4 text-white p-2 hover:text-[#C9A24B]" onClick={close} aria-label="Close">
            <X size={28} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:text-[#C9A24B]"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:text-[#C9A24B]"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY[lightbox].img} alt={GALLERY[lightbox].title} className="w-full max-h-[80vh] object-contain" />
            <div className="text-center mt-4">
              <span className="text-[#C9A24B] text-[10px] font-semibold tracking-widest uppercase">{GALLERY[lightbox].cat}</span>
              <h3 className="section-heading text-lg text-white mt-1">{GALLERY[lightbox].title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
