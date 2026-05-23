// Unsplash images - free to use, no auth needed
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85&auto=format&fit=crop',
  about1: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900&q=85&auto=format&fit=crop',
  about2: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=85&auto=format&fit=crop',
  menu1: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format&fit=crop',
  gallery: [
    { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80&auto=format&fit=crop', label: 'The Dining Room', span: 'col-span-2 row-span-2' },
    { url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&q=80&auto=format&fit=crop', label: 'Open Kitchen' },
    { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80&auto=format&fit=crop', label: 'Evening Service' },
    { url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=500&q=80&auto=format&fit=crop', label: 'The Plate' },
    { url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&q=80&auto=format&fit=crop', label: 'Wine Cellar' },
    { url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&q=80&auto=format&fit=crop', label: 'Private Dining' },
  ],
  chefs: [
    'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80&auto=format&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80&auto=format&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400&q=80&auto=format&fit=crop',
  ],
};

export const menuData = {
  starters: [
    { id: 1, name: 'Charred Octopus', description: 'Wood-fire grilled, romesco, smoked paprika oil, crispy capers', price: 24, tag: "Chef's Pick" },
    { id: 2, name: 'Truffle Arancini', description: 'Black truffle, aged pecorino, saffron aioli, micro herbs', price: 18, tag: null },
    { id: 3, name: 'Burrata', description: 'Heirloom tomatoes, 10-year balsamic, basil oil, sea salt flakes', price: 20, tag: 'Seasonal' },
    { id: 4, name: 'Foie Gras Torchon', description: 'Brioche toast, fig preserve, micro greens, fleur de sel', price: 32, tag: null },
  ],
  mains: [
    { id: 5, name: 'Dry-Aged Ribeye', description: '45-day aged, bone marrow butter, truffle jus, roasted shallots', price: 68, tag: 'Signature' },
    { id: 6, name: 'Lamb Rack', description: 'Herb crust, pomegranate glaze, root vegetable purée, mint gremolata', price: 56, tag: null },
    { id: 7, name: 'Wild Halibut', description: 'Pan-seared, white asparagus, champagne beurre blanc, caviar', price: 52, tag: null },
    { id: 8, name: 'Wild Mushroom Risotto', description: 'Porcini, chanterelle, aged parmesan, truffle oil, chive', price: 38, tag: 'Vegetarian' },
  ],
  desserts: [
    { id: 9, name: 'Valrhona Soufflé', description: 'Dark chocolate, vanilla ice cream — allow 18 minutes', price: 18, tag: 'Order Early' },
    { id: 10, name: 'Tarte Tatin', description: 'Caramelised apple, puff pastry, crème fraîche, salted caramel', price: 16, tag: null },
    { id: 11, name: 'Cheese Selection', description: 'Five artisan cheeses, honeycomb, walnut bread, quince paste', price: 22, tag: null },
  ],
};

export const teamData = [
  { name: 'Marco Deluca', role: 'Executive Chef', bio: 'Trained under Alain Ducasse in Paris, Marco brings 20 years of Michelin-starred experience to every plate he creates.', imgIndex: 0 },
  { name: 'Aria Tanaka', role: 'Pastry Chef', bio: 'A graduate of Le Cordon Bleu Tokyo, Aria\'s desserts are architectural poems — each one a perfect balance of texture and restraint.', imgIndex: 1 },
  { name: 'James Okonkwo', role: 'Head Sommelier', bio: 'With a cellar of 800+ labels and a gift for storytelling, James turns every wine pairing into a journey across terroirs.', imgIndex: 2 },
];
