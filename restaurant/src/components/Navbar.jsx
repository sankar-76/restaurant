import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const links = ['Menu', 'About', 'Gallery', 'Team', 'Reservations'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(logoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
      );
      gsap.fromTo(Array.from(linksRef.current?.children || []),
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.7, ease: 'power3.out', delay: 0.8 }
      );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-cream-200 py-4'
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div ref={logoRef} className="cursor-pointer opacity-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <p className={`font-display text-2xl font-medium tracking-wide transition-colors duration-300 ${scrolled ? 'text-stone-800' : 'text-white'}`}>
              Ember <span className="text-gold-400 italic">&</span> Salt
            </p>
            <p className={`text-[9px] tracking-[0.4em] uppercase font-body mt-0.5 transition-colors ${scrolled ? 'text-stone-400' : 'text-white/60'}`}>
              Fine Dining · Est. 2018
            </p>
          </div>

          <ul ref={linksRef} className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <button onClick={() => scrollTo(link)}
                  className={`font-body text-xs tracking-[0.18em] uppercase transition-colors duration-300 relative group ${
                    scrolled ? 'text-stone-600 hover:text-gold-500' : 'text-white/80 hover:text-white'
                  }`}>
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {[0,1,2].map(i => (
              <span key={i} className={`block w-6 h-px transition-all duration-300 ${scrolled ? 'bg-stone-700' : 'bg-white'} ${
                i === 0 && menuOpen ? 'rotate-45 translate-y-2.5' :
                i === 1 && menuOpen ? 'opacity-0' :
                i === 2 && menuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`} />
            ))}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center transition-all duration-500 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className="flex flex-col items-center gap-10">
          {links.map((link, i) => (
            <li key={link} style={{ transitionDelay: `${i * 60}ms` }}
              className={`transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button onClick={() => scrollTo(link)} className="font-display text-5xl font-light text-stone-800 hover:text-gold-500 transition-colors">
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
