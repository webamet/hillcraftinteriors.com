import { Phone, Mail, MessageCircle, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { PHONE_URL, WHATSAPP_URL, PHONE_DISPLAY, ADDRESS, LOGO_PATH } from '../data/products';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const SERVICE_LINKS = [
  'Product Consultation',
  'Site Measurement',
  'Interior Designing',
  'Professional Installation',
  'Supply & Delivery',
  'Residential Interiors',
  'Commercial Interiors',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06120F] border-t border-[#C9A24B]/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-1">
            <img src={LOGO_PATH} alt="Hillcraft Interiors" className="h-16 w-auto object-contain mb-6" />
            <p className="text-white/45 text-xs leading-relaxed">
              Hillcraft Interiors is an authorised Business Bench dealer and complete interior &amp; exterior
              solution provider in Tuensang Town, Nagaland. We supply premium products and deliver expert
              design, supply and installation services for homes, offices, shops, hotels and commercial spaces.
            </p>
          </div>

          <div>
            <h4 className="text-[#C9A24B] text-xs font-semibold tracking-[0.25em] uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-white/45 text-xs hover:text-[#C9A24B] transition-colors duration-200 tracking-wide text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#C9A24B] text-xs font-semibold tracking-[0.25em] uppercase mb-6">Services</h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-white/45 text-xs hover:text-[#C9A24B] transition-colors duration-200 tracking-wide text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#C9A24B] text-xs font-semibold tracking-[0.25em] uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={13} className="text-[#C9A24B] mt-0.5 flex-shrink-0" />
                <span className="text-white/45 text-xs leading-relaxed">{ADDRESS}</span>
              </li>
              <li>
                <a href={PHONE_URL} className="flex items-center gap-3 text-white/45 hover:text-[#C9A24B] transition-colors text-xs">
                  <Phone size={13} className="text-[#C9A24B] flex-shrink-0" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/45 hover:text-[#C9A24B] transition-colors text-xs">
                  <MessageCircle size={13} className="text-[#C9A24B] flex-shrink-0" />
                  WhatsApp Enquiry
                </a>
              </li>
              <li>
                <a href="mailto:hillcraftinteriors@gmail.com" className="flex items-center gap-3 text-white/45 hover:text-[#C9A24B] transition-colors text-xs">
                  <Mail size={13} className="text-[#C9A24B] flex-shrink-0" />
                  hillcraftinteriors@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">&copy; {new Date().getFullYear()} Hillcraft Interiors, Tuensang. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/people/Hillcraft-Interior/61592269372199/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/45 hover:text-[#C9A24B] transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/hillcraft_interiors.26/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/45 hover:text-[#C9A24B] transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@HillcraftInteriors/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white/45 hover:text-[#C9A24B] transition-colors duration-200"
              >
                <Youtube size={18} />
              </a>
            </div>
            <p className="text-white/20 text-xs">Authorised Business Bench Dealer &middot; Tuensang Town, Nagaland</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
