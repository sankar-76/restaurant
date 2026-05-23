export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <p className="font-display text-3xl font-medium tracking-wide text-white mb-1">
              Ember <span className="text-gold-400 italic">&</span> Salt
            </p>
            <p className="font-body text-[9px] tracking-[0.4em] uppercase text-white/30 mb-5">Fine Dining · Est. 2018</p>
            <p className="font-body text-sm text-white/50 leading-relaxed max-w-xs">
              An intimate, award-winning restaurant committed to fire, craft, and the poetry of seasonal ingredients.
            </p>
            <div className="flex gap-4 mt-6">
              {['Instagram', 'Facebook', 'Twitter'].map(s => (
                <a key={s} href="#" className="font-body text-[9px] tracking-[0.2em] uppercase text-white/30 hover:text-gold-400 transition-colors">{s}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold-500 mb-4">Visit Us</p>
            <address className="not-italic font-body text-sm text-white/50 leading-relaxed space-y-1">
              <p>14 Ashbourne Lane</p><p>Mayfair, London</p><p>W1K 4PJ</p>
            </address>
            <div className="mt-4 space-y-1">
              <a href="tel:+442071234567" className="block font-body text-sm text-white/50 hover:text-gold-400 transition-colors">+44 207 123 4567</a>
              <a href="mailto:hello@emberandsalt.com" className="block font-body text-sm text-white/50 hover:text-gold-400 transition-colors">hello@emberandsalt.com</a>
            </div>
          </div>
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold-500 mb-4">Hours</p>
            <div className="space-y-3 font-body text-sm text-white/50">
              <div><p className="text-white/70">Lunch</p><p>Wed–Sun, 12:00–14:30</p></div>
              <div><p className="text-white/70">Dinner</p><p>Tue–Sun, 18:30–22:00</p></div>
              <p className="text-white/30 text-xs mt-2">Closed Mondays</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/25">© 2024 Ember & Salt. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Accessibility'].map(l => (
              <a key={l} href="#" className="font-body text-xs text-white/25 hover:text-gold-400 transition-colors tracking-wide">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
