import { PlayCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../data/products';

// To update videos later, replace these YouTube URLs.
const VIDEOS = [
  {
    url: 'https://www.youtube.com/embed/rbhSsKOLp5I',
    title: 'Hillcraft Interiors — Business Bench Products & Installation',
  },
  {
    url: 'https://www.youtube.com/embed/YF5_DJUiXlw',
    title: 'Hillcraft Interiors — Project Showcase Short',
  },
  {
    url: 'https://www.youtube.com/embed/ktQY8b4Lq2w',
    title: 'Hillcraft Interiors — Interior Design Short',
  },
];

export default function VideoSection() {
  return (
    <section id="video" className="py-24 bg-[#F5F2EC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-[#C9A24B]/40 px-4 py-2 mb-6">
            <PlayCircle size={16} className="text-[#C9A24B]" />
            <span className="text-[#C9A24B] text-[11px] font-semibold tracking-[0.2em] uppercase">Watch</span>
          </div>
          <h2 className="section-heading text-4xl lg:text-5xl text-[#0B1F1A] mb-4">
            See Hillcraft Interiors in Action
          </h2>
          <div className="w-16 h-px bg-[#C9A24B] mx-auto mt-6 mb-6" />
          <p className="text-[#0B1F1A]/60 text-sm max-w-2xl mx-auto leading-relaxed">
            Take a closer look at our premium Business Bench products, interior design work and professional
            installation projects across Tuensang and Nagaland.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
          {VIDEOS.map((video) => (
            <div key={video.url} className="w-full max-w-[300px] lg:max-w-none">
              <div className="relative w-full overflow-hidden shadow-2xl border border-[#C9A24B]/20 bg-[#0B1F1A]">
                <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline inline-flex items-center gap-2"
          >
            Enquire About Our Products
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
