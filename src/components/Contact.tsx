import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react';
import { PRODUCTS, PHONE_URL, WHATSAPP_URL, PHONE_DISPLAY, WHATSAPP_DISPLAY, ADDRESS } from '../data/products';
import { supabase } from '../lib/supabase';

const SERVICE_OPTIONS = [
  'Product Consultation',
  'Site Measurement',
  'Interior Designing',
  'Interior Decoration',
  'Supply & Delivery',
  'Professional Installation',
  'Complete Interior Project',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', location: '', service: '', product: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('enquiries').insert({
        name: form.name,
        phone: form.phone,
        location: form.location,
        service: form.service,
        product: form.product,
        message: form.message,
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', phone: '', location: '', service: '', product: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please call or WhatsApp us.');
    }
  };

  const inputClass = 'w-full bg-white border border-[#0B1F1A]/15 text-[#0B1F1A] text-sm px-4 py-3 placeholder-[#0B1F1A]/35 focus:outline-none focus:border-[#C9A24B] transition-colors duration-200';

  const mapSrc = 'https://www.google.com/maps?q=Tuensang+Town+Nagaland&output=embed';

  return (
    <section id="contact" className="py-24 bg-[#0B1F1A]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Get In Touch</p>
          <h2 className="section-heading text-4xl lg:text-5xl text-white">
            Start Your Interior Upgrade<br />with Hillcraft Interiors
          </h2>
          <div className="w-16 h-px bg-[#C9A24B] mx-auto mt-6" />
          <p className="text-white/55 text-sm mt-6 max-w-xl mx-auto leading-relaxed">
            Planning a new home, shop, office or commercial interior in Tuensang or anywhere in Nagaland?
            Contact Hillcraft Interiors for premium products and reliable installation support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div id="quote">
            {status === 'success' ? (
              <div className="bg-[#06120F] border border-[#C9A24B]/40 p-10 text-center">
                <CheckCircle size={48} className="text-[#C9A24B] mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="section-heading text-2xl text-white mb-3">Enquiry Received</h3>
                <p className="text-white/55 text-sm mb-6">Thank you for reaching out. Our team will contact you shortly on the phone number you provided.</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex items-center gap-2">
                  <MessageCircle size={14} />
                  Also message us on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name *" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                  <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                </div>
                <input type="text" placeholder="Your Location (e.g. Tuensang Town)" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className={inputClass} />
                <div className="grid sm:grid-cols-2 gap-4">
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={`${inputClass} appearance-none`} required>
                    <option value="" disabled>Service Required *</option>
                    {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <select value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className={`${inputClass} appearance-none`}>
                    <option value="" disabled>Product (optional)</option>
                    {PRODUCTS.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
                  </select>
                </div>
                <textarea placeholder="Tell us about your project, space and requirements..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
                <button type="submit" disabled={status === 'submitting'} className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-60">
                  {status === 'submitting' ? 'Sending...' : 'Request a Quote'}
                  <Send size={14} />
                </button>
                {status === 'error' && (
                  <p className="text-red-400 text-xs text-center">{errorMsg}</p>
                )}
              </form>
            )}
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-8">
            <div className="space-y-5">
              <a href={PHONE_URL} className="flex items-start gap-4 group">
                <div className="w-10 h-10 border border-[#C9A24B] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A24B] transition-colors duration-300">
                  <Phone size={16} className="text-[#C9A24B] group-hover:text-[#0B1F1A] transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-white text-sm">{PHONE_DISPLAY}</p>
                </div>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-10 h-10 border border-[#C9A24B] flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors duration-300">
                  <MessageCircle size={16} className="text-[#C9A24B] group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                  <p className="text-white text-sm">{WHATSAPP_DISPLAY}</p>
                </div>
              </a>
              <a href="mailto:hillcraftinteriors@gmail.com" className="flex items-start gap-4 group">
                <div className="w-10 h-10 border border-[#C9A24B] flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A24B] transition-colors duration-300">
                  <Mail size={16} className="text-[#C9A24B] group-hover:text-[#0B1F1A] transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white text-sm">hillcraftinteriors@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#C9A24B] flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#C9A24B]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Address</p>
                  <p className="text-white text-sm leading-relaxed">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#C9A24B] flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-[#C9A24B]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Business Hours</p>
                  <p className="text-white text-sm">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden border border-white/10">
              <iframe
                title="Hillcraft Interiors Location — Tuensang Town, Nagaland"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
