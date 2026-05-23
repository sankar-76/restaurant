import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useStaggerReveal } from '../hooks/useGSAP';
import { IMAGES } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const textRef = useStaggerReveal(0.15);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(img1Ref.current,
        { opacity: 0, x: 50, scale: 1.05 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: img1Ref.current, start: 'top 82%' } }
      );
      gsap.fromTo(img2Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.25, ease: 'power3.out',
          scrollTrigger: { trigger: img1Ref.current, start: 'top 82%' } }
      );
      // parallax
      gsap.to(img1Ref.current, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <div ref={textRef} className="flex flex-col gap-6 order-2 md:order-1">
          <div>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gold-500 mb-4">Our Story</p>
            <h2 className="font-display text-5xl text-stone-800 leading-tight">
              Fire as the<br /><em>original spice</em>
            </h2>
          </div>
          <div className="w-12 h-px bg-gold-400" />
          <p className="font-body text-stone-600 leading-relaxed text-base">
            Ember & Salt was born from a simple conviction: that the oldest cooking technique — live fire —
            is also the most expressive. Our wood-fired hearths burn oak and applewood, imparting flavours
            no gas burner can replicate.
          </p>
          <p className="font-body text-stone-500 leading-relaxed text-sm">
            Every ingredient is sourced within 200 miles. Every dish is an act of respect toward the farmer,
            the season, and the guest. We change our menu four times a year because the land demands it.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-4 pt-4 border-t border-cream-200">
            {[{ label: 'Locally Sourced', value: '100%' }, { label: 'Menu Changes / Year', value: '4×' }].map(item => (
              <div key={item.label} className="flex flex-col gap-1">
                <p className="font-display text-4xl text-gold-500 font-medium">{item.value}</p>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-stone-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="relative order-1 md:order-2 h-[520px]">
          <div ref={img1Ref} className="opacity-0 absolute top-0 right-0 w-4/5 h-4/5 overflow-hidden shadow-2xl">
            <img src={IMAGES.about1} alt="Chef at work" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div ref={img2Ref} className="opacity-0 absolute bottom-0 left-0 w-2/5 h-2/5 overflow-hidden shadow-xl border-4 border-cream-50">
            <img src={IMAGES.about2} alt="Elegant plating" className="w-full h-full object-cover" loading="lazy" />
          </div>
          {/* Decorative element */}
          <div className="absolute bottom-8 right-0 w-20 h-20 border-2 border-gold-300/40 -z-10 translate-x-4 translate-y-4" />
        </div>
      </div>
    </section>
  );
}
