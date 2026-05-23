import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IMAGES } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

function GalleryCard({ item, index }) {
  const ref = useRef(null);
  const labelRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.75, delay: index * 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 90%' } }
    );
  }, [index]);

  const onEnter = () => {
    gsap.to(imgRef.current, { scale: 1.07, duration: 0.5, ease: 'power2.out' });
    gsap.to(labelRef.current, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
  };
  const onLeave = () => {
    gsap.to(imgRef.current, { scale: 1, duration: 0.5, ease: 'power2.out' });
    gsap.to(labelRef.current, { opacity: 0, y: 6, duration: 0.25 });
  };

  return (
    <div ref={ref} onMouseEnter={onEnter} onMouseLeave={onLeave}
      className={`opacity-0 relative overflow-hidden cursor-pointer ${item.span || ''}`}
      style={{ aspectRatio: item.span ? '1/1' : '4/3' }}>
      <img ref={imgRef} src={item.url} alt={item.label}
        className="w-full h-full object-cover will-change-transform" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div ref={labelRef} className="absolute bottom-4 left-4 opacity-0 translate-y-1.5">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-white/90">{item.label}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' } }
    );
  }, []);

  return (
    <section id="gallery" className="py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gold-500 mb-4">The Space</p>
          <h2 className="font-display text-5xl text-stone-800">Inside Ember & Salt</h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-6" />
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {IMAGES.gallery.map((item, i) => (
            <GalleryCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
