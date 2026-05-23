import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { IMAGES } from '../data/content';

export default function Hero() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const overlayRef = useRef(null);
  const tagRef = useRef(null);
  const h1Ref = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });
      tl.fromTo(imgRef.current,
        { scale: 1.12 },
        { scale: 1, duration: 2.2, ease: 'power2.out' }
      )
      .fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }, '-=2'
      )
      .fromTo(tagRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6'
      )
      .fromTo(h1Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.4'
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5'
      )
      .fromTo(Array.from(ctaRef.current?.children || []),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out' }, '-=0.4'
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 }, '-=0.2'
      );

      // slow parallax on scroll
      gsap.to(imgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <img
          src={IMAGES.hero}
          alt="Elegant restaurant dining room"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Gradient overlay */}
      <div ref={overlayRef} className="absolute inset-0 opacity-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65) 100%)' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p ref={tagRef} className="opacity-0 inline-flex items-center gap-3 font-body text-[10px] tracking-[0.35em] uppercase text-white/70 mb-6">
          <span className="w-8 h-px bg-gold-400 inline-block" />
          Wood-fire · Seasonal · Artisan
          <span className="w-8 h-px bg-gold-400 inline-block" />
        </p>

        <h1 ref={h1Ref} className="opacity-0 font-display text-6xl md:text-8xl text-white leading-[0.95] mb-6" style={{ textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}>
          Where Fire<br />
          <em className="text-gold-300 not-italic font-normal">Meets Finesse</em>
        </h1>

        <p ref={subRef} className="opacity-0 font-body text-white/75 text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
          An intimate dining experience rooted in heritage ingredients, open-hearth cooking,
          and the quiet luxury of unhurried meals.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}
            className="opacity-0 px-10 py-4 bg-white text-stone-900 hover:bg-cream-100 font-body text-xs tracking-[0.22em] uppercase transition-all duration-300 hover:scale-105 active:scale-95 font-medium">
            Reserve a Table
          </button>
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="opacity-0 px-10 py-4 border border-white/60 hover:border-white text-white font-body text-xs tracking-[0.22em] uppercase transition-all duration-300 hover:bg-white/10">
            Explore Menu
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div ref={scrollRef} className="opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-white/50">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
