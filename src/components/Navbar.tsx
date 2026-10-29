import { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { PHONE_URL, WHATSAPP_URL, LOGO_PATH } from '../data/products';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Dealer', href: '#dealer' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const ids = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0B1F1A] shadow-2xl shadow-black/40 py-0' : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <button onClick={() => handleNav('#home')} className="flex-shrink-0 flex items-center gap-3">
            <img
              src={LOGO_PATH}
              alt="Hillcraft Interiors Tuensang (HIT) Logo"
              className="h-14 lg:h-16 w-auto object-contain"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className={`text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${
                  activeSection === href.replace('#', '')
                    ? 'text-[#C9A24B]'
                    : 'text-white/80 hover:text-[#C9A24B]'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_URL}
              className="btn-gold flex items-center gap-2"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <a href={PHONE_URL} className="w-9 h-9 bg-[#C9A24B] flex items-center justify-center rounded-sm">
              <Phone size={16} className="text-[#0B1F1A]" />
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-1">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#0B1F1A] border-t border-[#C9A24B]/20">
          <nav className="flex flex-col px-4 py-4">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className="text-left text-sm font-semibold tracking-widest uppercase py-3 border-b border-white/5 text-white/80 hover:text-[#C9A24B] transition-colors"
              >
                {label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-center mt-4 flex items-center justify-center gap-2"
            >
              <MessageCircle size={14} />
              WhatsApp Enquiry
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
