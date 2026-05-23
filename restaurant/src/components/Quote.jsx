import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {
  const ref = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' } }
      );
      gsap.to(imgRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden h-[420px] flex items-center justify-center">
      <div ref={imgRef} className="absolute inset-[-15%] will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1600&q=85&auto=format&fit=crop"
          alt="Elegant plated dish"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-stone-900/65" />
      <div ref={textRef} className="relative z-10 text-center px-6 opacity-0">
        <div className="w-12 h-px bg-gold-400 mx-auto mb-6" />
        <blockquote className="font-display text-3xl md:text-5xl text-white font-light max-w-3xl mx-auto leading-tight">
          "Cooking is the art of patience,<br />
          <em className="text-gold-300">fire, and love."</em>
        </blockquote>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-white/50 mt-6">— Marco Deluca, Executive Chef</p>
        <div className="w-12 h-px bg-gold-400 mx-auto mt-6" />
      </div>
    </section>
  );
}
