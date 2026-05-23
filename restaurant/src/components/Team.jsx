import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { teamData, IMAGES } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

function TeamCard({ member, index }) {
  const ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, delay: index * 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' } }
    );
  }, [index]);

  const onEnter = () => gsap.to(imgRef.current, { scale: 1.06, duration: 0.5, ease: 'power2.out' });
  const onLeave = () => gsap.to(imgRef.current, { scale: 1, duration: 0.5, ease: 'power2.out' });

  return (
    <div ref={ref} onMouseEnter={onEnter} onMouseLeave={onLeave}
      className="opacity-0 group bg-white border border-cream-200 overflow-hidden hover:shadow-xl transition-shadow duration-400">
      <div className="overflow-hidden aspect-[4/3]">
        <img ref={imgRef} src={IMAGES.chefs[member.imgIndex]} alt={member.name}
          className="w-full h-full object-cover object-top will-change-transform" loading="lazy" />
      </div>
      <div className="p-7">
        <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold-500 mb-2">{member.role}</p>
        <h3 className="font-display text-2xl text-stone-800 mb-3">{member.name}</h3>
        <div className="w-8 h-px bg-gold-300 mb-4 group-hover:w-16 transition-all duration-500" />
        <p className="font-body text-sm text-stone-500 leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
}

export default function Team() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1,
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' } }
    );
  }, []);

  return (
    <section id="team" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gold-500 mb-4">The People</p>
          <h2 className="font-display text-5xl text-stone-800">Crafted by Hands</h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-6" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {teamData.map((member, i) => <TeamCard key={member.name} member={member} index={i} />)}
        </div>
      </div>
    </section>
  );
}
