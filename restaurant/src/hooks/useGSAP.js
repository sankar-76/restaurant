import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useRevealOnScroll(selector = '.reveal', options = {}) {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray(selector);
      els.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: options.y ?? 50 },
          {
            opacity: 1, y: 0,
            duration: options.duration ?? 0.9,
            delay: i * (options.stagger ?? 0.1),
            ease: options.ease ?? 'power3.out',
            scrollTrigger: { trigger: el, start: options.start ?? 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return containerRef;
}

export function useParallax(yRange = 60) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const tween = gsap.to(ref.current, {
      y: yRange, ease: 'none',
      scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true },
    });
    return () => tween.kill();
  }, [yRange]);
  return ref;
}

export function useStaggerReveal(stagger = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, stagger, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        }
      );
    });
    return () => ctx.revert();
  }, [stagger]);
  return ref;
}

export function useCountUp(target, duration = 2) {
  const ref = useRef(null);
  const hasRun = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: () => {
        if (hasRun.current) return;
        hasRun.current = true;
        gsap.to({ val: 0 }, {
          val: target, duration, ease: 'power2.out',
          onUpdate: function () {
            if (ref.current) ref.current.textContent = Math.round(this.targets()[0].val).toLocaleString();
          },
        });
      },
    });
  }, [target, duration]);
  return ref;
}
