import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { menuData } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const tagStyles = {
  "Chef's Pick": 'text-amber-700 bg-amber-50 border-amber-200',
  'Seasonal': 'text-emerald-700 bg-emerald-50 border-emerald-200',
  'Signature': 'text-gold-600 bg-yellow-50 border-yellow-200',
  'Vegetarian': 'text-green-700 bg-green-50 border-green-200',
  'Order Early': 'text-rose-700 bg-rose-50 border-rose-200',
};

function MenuItem({ item, index }) {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, delay: index * 0.07, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 92%' } }
    );
  }, [index]);

  return (
    <div ref={ref} className="opacity-0 group flex items-start justify-between gap-4 py-5 border-b border-cream-200 hover:bg-cream-50 px-4 -mx-4 rounded transition-colors duration-300 cursor-default">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1.5 flex-wrap">
          <h3 className="font-display text-lg text-stone-800 group-hover:text-gold-600 transition-colors">{item.name}</h3>
          {item.tag && (
            <span className={`font-body text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 border rounded-sm ${tagStyles[item.tag] || ''}`}>
              {item.tag}
            </span>
          )}
        </div>
        <p className="font-body text-sm text-stone-400 leading-relaxed">{item.description}</p>
      </div>
      <span className="font-display text-lg text-stone-700 tabular-nums whitespace-nowrap">£{item.price}</span>
    </div>
  );
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('starters');
  const headerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' } }
    );
  }, []);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    gsap.to(listRef.current, {
      opacity: 0, y: 8, duration: 0.18, ease: 'power2.in',
      onComplete: () => {
        setActiveTab(tab);
        gsap.fromTo(listRef.current,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }
        );
      },
    });
  };

  return (
    <section id="menu" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gold-500 mb-4">The Menu</p>
          <h2 className="font-display text-5xl text-stone-800">Seasonal Offerings</h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-6 mb-4" />
          <p className="font-body text-sm text-stone-400">All menus change with the seasons. Current menu: <em>Summer 2024</em></p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-cream-200 rounded-sm overflow-hidden">
            {['starters', 'mains', 'desserts'].map((tab) => (
              <button key={tab} onClick={() => handleTabChange(tab)}
                className={`px-8 py-3 font-body text-xs tracking-[0.2em] uppercase transition-all duration-250 ${
                  activeTab === tab
                    ? 'bg-stone-800 text-white'
                    : 'text-stone-500 hover:text-stone-800 hover:bg-cream-50 bg-white'
                }`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div ref={listRef}>
          {(menuData[activeTab] || []).map((item, i) => (
            <MenuItem key={item.id} item={item} index={i} />
          ))}
        </div>

        <p className="font-body text-xs text-stone-300 text-center mt-10 leading-relaxed">
          Allergen information available on request · 12.5% discretionary service charge added
        </p>
      </div>
    </section>
  );
}
