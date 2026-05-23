import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const fieldClass = `w-full bg-transparent border-b border-cream-300 hover:border-gold-400 focus:border-gold-500
  text-stone-800 font-body text-sm py-3 outline-none transition-colors duration-300 placeholder-stone-300`;

export default function Reservations() {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: '2', occasion: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 1, delay: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      gsap.fromTo('.success-msg', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' });
    }, 1400);
  };

  const times = ['12:00','12:30','13:00','13:30','18:30','19:00','19:30','20:00','20:30','21:00','21:30'];

  return (
    <section id="reservations" ref={sectionRef} className="py-0 bg-cream-50 overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[600px]">
        {/* Left – image panel */}
        <div ref={leftRef} className="opacity-0 relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=85&auto=format&fit=crop"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-stone-900/40" />
          <div className="absolute inset-0 flex flex-col justify-end p-12">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-white/60 mb-3">Opening Hours</p>
            <div className="font-body text-sm text-white/80 space-y-2">
              <div className="flex justify-between gap-8"><span>Lunch, Wed–Sun</span><span>12:00–14:30</span></div>
              <div className="flex justify-between gap-8"><span>Dinner, Tue–Sun</span><span>18:30–22:00</span></div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="font-body text-xs text-white/60">14 Ashbourne Lane, Mayfair · London W1K 4PJ</p>
              <a href="tel:+442071234567" className="font-body text-sm text-gold-300 hover:text-gold-200 transition-colors mt-1 block">
                +44 207 123 4567
              </a>
            </div>
          </div>
        </div>

        {/* Right – form */}
        <div ref={rightRef} className="opacity-0 bg-white p-10 md:p-16 flex flex-col justify-center">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gold-500 mb-3">Join Us</p>
          <h2 className="font-display text-4xl text-stone-800 mb-2">Reserve a Table</h2>
          <div className="w-10 h-px bg-gold-400 mb-8" />

          {submitted ? (
            <div className="success-msg opacity-0 py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-stone-800 mb-2">Reservation Received</h3>
              <p className="font-body text-sm text-stone-400 leading-relaxed max-w-xs mx-auto">
                Thank you, <span className="text-stone-700">{form.name}</span>. We'll confirm via email within 2 hours.
              </p>
              <button onClick={() => { setSubmitted(false); setForm({ name:'',email:'',date:'',time:'',guests:'2',occasion:'' }); }}
                className="mt-6 font-body text-xs tracking-[0.2em] uppercase text-gold-500 hover:text-gold-600 border-b border-gold-300 pb-0.5 transition-colors">
                Make another reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2">Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={fieldClass} />
                </div>
                <div>
                  <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2">Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={fieldClass} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2">Date *</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} required className={fieldClass} />
                </div>
                <div>
                  <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2">Time *</label>
                  <select name="time" value={form.time} onChange={handleChange} required className={`${fieldClass} cursor-pointer bg-white`}>
                    <option value="" disabled>Select time</option>
                    {times.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2">Guests *</label>
                  <select name="guests" value={form.guests} onChange={handleChange} className={`${fieldClass} cursor-pointer bg-white`}>
                    {[1,2,3,4,5,6,7].map(n => <option key={n} value={n}>{n} {n===1?'guest':'guests'}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-body text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2">Occasion</label>
                  <input name="occasion" value={form.occasion} onChange={handleChange} placeholder="Birthday, anniversary…" className={fieldClass} />
                </div>
              </div>
              <div className="pt-2">
                <button type="submit" disabled={loading}
                  className="w-full py-4 bg-stone-900 hover:bg-stone-700 disabled:bg-stone-300 text-white font-body text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed">
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : 'Request Reservation'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
