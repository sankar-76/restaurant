import { useCountUp } from '../hooks/useGSAP';

function StatItem({ value, suffix, label }) {
  const ref = useCountUp(value);
  return (
    <div className="flex flex-col items-center gap-2 px-8 py-8 group">
      <div className="font-display text-4xl text-stone-800 group-hover:text-gold-500 transition-colors duration-300">
        <span ref={ref}>0</span><span>{suffix}</span>
      </div>
      <div className="w-6 h-px bg-gold-400 group-hover:w-10 transition-all duration-400" />
      <p className="font-body text-[10px] tracking-[0.25em] uppercase text-stone-400 mt-1">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-white border-y border-cream-200">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-cream-200">
        {[
          { value: 6, suffix: '', label: 'Years of Excellence' },
          { value: 800, suffix: '+', label: 'Wine Labels' },
          { value: 2, suffix: '★', label: 'Michelin Stars' },
          { value: 12, suffix: '', label: 'Seasonal Menus' },
        ].map(s => <StatItem key={s.label} {...s} />)}
      </div>
    </section>
  );
}
