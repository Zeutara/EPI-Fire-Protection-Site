import type { Product, Collection, Review } from './types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Keep On Shovelin\' Blizzard Tee',
    slug: 'keep-on-shovelin-blizzard-tee',
    price: 28,
    description: 'Because nothing says New England grit like embracing the chaos of a nor\'easter. This soft, comfy tee celebrates the unbreakable spirit of anyone who\'s ever dug their car out at 5 AM. Printed on super-soft ringspun cotton.',
    shortDescription: 'For anyone who\'s survived a nor\'easter and lived to shovel about it.',
    whyYoullLoveIt: [
      'Super-soft ringspun cotton that gets better with every wash',
      'Unisex relaxed fit — cozy but not frumpy',
      'Designed right here in Providence',
      'Perfect for blizzard survivors and snow day enthusiasts'
    ],
    images: ['/images/products/shovelin-tee-1.jpg', '/images/products/shovelin-tee-2.jpg'],
    category: 'clothing',
    subcategory: 'tees',
    collections: ['best-sellers', 'new-arrivals', 'rhode-island'],
    tags: ['tee', 'rhode island', 'winter', 'humor'],
    inStock: true,
    stockCount: 23,
    isNew: true,
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 47,
    variants: [
      { id: 'v1-s', name: 'S', inStock: true },
      { id: 'v1-m', name: 'M', inStock: true },
      { id: 'v1-l', name: 'L', inStock: true },
      { id: 'v1-xl', name: 'XL', inStock: true },
      { id: 'v1-2xl', name: '2XL', inStock: false },
    ],
    relatedProductIds: ['p2', 'p5', 'p10'],
  },
  {
    id: 'p2',
    name: 'Providence Skyline Hoodie',
    slug: 'providence-skyline-hoodie',
    price: 42,
    description: 'Rep the Creative Capital in the coziest hoodie ever made. Features the iconic Providence skyline in a minimal line-art style. Heavyweight fleece that\'ll keep you warm from Federal Hill to Fox Point.',
    shortDescription: 'The coziest way to rep the Creative Capital.',
    whyYoullLoveIt: [
      'Heavyweight 10oz fleece — built for real cold',
      'Minimal skyline design that looks good everywhere',
      'Kangaroo pocket fits your phone, keys, and Del\'s',
      'Pre-shrunk so it stays true to size'
    ],
    images: ['/images/products/pvd-hoodie-1.jpg', '/images/products/pvd-hoodie-2.jpg'],
    category: 'clothing',
    subcategory: 'hoodies',
    collections: ['best-sellers', 'rhode-island'],
    tags: ['hoodie', 'providence', 'rhode island', 'cozy'],
    inStock: true,
    stockCount: 15,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 82,
    variants: [
      { id: 'v2-s', name: 'S', inStock: true },
      { id: 'v2-m', name: 'M', inStock: true },
      { id: 'v2-l', name: 'L', inStock: true },
      { id: 'v2-xl', name: 'XL', inStock: true },
    ],
    relatedProductIds: ['p1', 'p5', 'p10'],
  },
  {
    id: 'p3',
    name: 'You\'re Doing Great Greeting Card',
    slug: 'youre-doing-great-greeting-card',
    price: 6,
    description: 'Sometimes people just need to hear it. This hand-lettered card is blank inside so you can add your own words of encouragement (or just sign your name, we won\'t judge).',
    shortDescription: 'The encouragement card everyone needs right now.',
    whyYoullLoveIt: [
      'Hand-lettered design with gold foil accents',
      'Printed on thick, luxe cardstock',
      'Blank inside for your own message',
      'Comes with a kraft envelope'
    ],
    images: ['/images/products/doing-great-card-1.jpg', '/images/products/doing-great-card-2.jpg'],
    category: 'stationery',
    subcategory: 'greeting-cards',
    collections: ['best-sellers', 'stationery'],
    tags: ['card', 'encouragement', 'gold foil', 'humor'],
    inStock: true,
    stockCount: 150,
    isBestSeller: true,
    rating: 4.7,
    reviewCount: 63,
    relatedProductIds: ['p4', 'p8', 'p12'],
  },
  {
    id: 'p4',
    name: 'Sassy Cat Enamel Pin',
    slug: 'sassy-cat-enamel-pin',
    price: 12,
    description: 'This little cat has opinions and isn\'t afraid to share them. Hard enamel with a double rubber clutch back so it stays exactly where you put it. Perfect for jacket lapels, backpacks, or wherever you need a bit of cattitude.',
    shortDescription: 'A cat with cattitude for your jacket, bag, or hat.',
    whyYoullLoveIt: [
      'Hard enamel with a smooth, durable finish',
      'Double rubber clutch — this pin isn\'t going anywhere',
      'Approximately 1.25" — the perfect size',
      'Makes an excellent tiny gift'
    ],
    images: ['/images/products/sassy-cat-pin-1.jpg', '/images/products/sassy-cat-pin-2.jpg'],
    category: 'clothing',
    subcategory: 'pins-patches',
    collections: ['best-sellers', 'gifts-under-25'],
    tags: ['pin', 'enamel', 'cat', 'funny', 'gift'],
    inStock: true,
    stockCount: 89,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 124,
    relatedProductIds: ['p9', 'p12', 'p3'],
  },
  {
    id: 'p5',
    name: 'Rhode Island Cutting Board',
    slug: 'rhode-island-cutting-board',
    price: 34,
    description: 'Show your love for the Ocean State every time you prep dinner. Laser-engraved bamboo cutting board in the shape of Rhode Island (yes, including Block Island). Food-safe and gorgeous enough to use as a serving board.',
    shortDescription: 'The tiniest state makes the most charming cutting board.',
    whyYoullLoveIt: [
      'Sustainably sourced bamboo',
      'Laser-engraved — won\'t fade or wash off',
      'Food-safe mineral oil finish',
      'Doubles as a stunning cheese board'
    ],
    images: ['/images/products/ri-cutting-board-1.jpg', '/images/products/ri-cutting-board-2.jpg'],
    category: 'home',
    subcategory: 'kitchen',
    collections: ['rhode-island', 'home-goods', 'gifts-for-him'],
    tags: ['kitchen', 'rhode island', 'bamboo', 'cutting board', 'home'],
    inStock: true,
    stockCount: 18,
    rating: 4.8,
    reviewCount: 36,
    relatedProductIds: ['p6', 'p1', 'p2'],
  },
  {
    id: 'p6',
    name: 'Lavender Dreams Bath Bomb Set',
    slug: 'lavender-dreams-bath-bomb-set',
    price: 18,
    description: 'Three handmade bath bombs infused with real lavender buds and essential oils. Because you deserve to soak in something fancier than regret. Each bomb fizzes for 3-4 minutes and leaves your skin silky smooth.',
    shortDescription: 'Three handmade bombs for your fanciest bath ever.',
    whyYoullLoveIt: [
      'Handmade with real lavender buds',
      'Essential oils only — no synthetic fragrances',
      'Set of 3 in a gorgeous gift box',
      'Vegan and cruelty-free'
    ],
    images: ['/images/products/bath-bombs-1.jpg', '/images/products/bath-bombs-2.jpg'],
    category: 'home',
    subcategory: 'bath-body',
    collections: ['self-care', 'gifts-for-her', 'gifts-under-25'],
    tags: ['bath', 'lavender', 'self-care', 'gift set', 'vegan'],
    inStock: true,
    stockCount: 42,
    isNew: true,
    rating: 4.6,
    reviewCount: 28,
    relatedProductIds: ['p7', 'p13', 'p14'],
  },
  {
    id: 'p7',
    name: 'Existential Crisis Candle',
    slug: 'existential-crisis-candle',
    price: 24,
    description: 'Smells like questioning everything you\'ve ever known, but in a good way. This hand-poured soy candle features notes of cedarwood, vanilla, and a hint of sandalwood. 50+ hour burn time — plenty of time to figure it all out.',
    shortDescription: 'Smells like questioning everything, but make it cozy.',
    whyYoullLoveIt: [
      '100% soy wax — clean, even burn',
      'Hand-poured in small batches',
      '50+ hour burn time',
      'The label alone is worth the price'
    ],
    images: ['/images/products/crisis-candle-1.jpg', '/images/products/crisis-candle-2.jpg'],
    category: 'home',
    subcategory: 'candles',
    collections: ['best-sellers', 'funny-gifts', 'self-care'],
    tags: ['candle', 'soy', 'funny', 'gift', 'home'],
    inStock: true,
    stockCount: 7,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 156,
    relatedProductIds: ['p6', 'p13', 'p14'],
  },
  {
    id: 'p8',
    name: 'Plant Lady Notebook',
    slug: 'plant-lady-notebook',
    price: 14,
    description: 'For the person whose apartment is basically a greenhouse. 120 pages of dotted grid paper perfect for journaling, sketching your next plant shelf layout, or keeping track of your watering schedule (we know you need help).',
    shortDescription: '120 pages of dotted grid for the plant-obsessed.',
    whyYoullLoveIt: [
      '120 pages of premium dotted grid paper',
      'Lay-flat binding — no more fighting with your notebook',
      'Gorgeous botanical cover illustration',
      'Perfect size for bags and backpacks'
    ],
    images: ['/images/products/plant-notebook-1.jpg', '/images/products/plant-notebook-2.jpg'],
    category: 'stationery',
    subcategory: 'notebooks',
    collections: ['stationery', 'green-thumb', 'gifts-for-her'],
    tags: ['notebook', 'plants', 'journal', 'dotted grid'],
    inStock: true,
    stockCount: 65,
    rating: 4.7,
    reviewCount: 41,
    relatedProductIds: ['p3', 'p12', 'p9'],
  },
  {
    id: 'p9',
    name: 'Mushroom Sticker Pack',
    slug: 'mushroom-sticker-pack',
    price: 10,
    description: 'Ten die-cut vinyl stickers featuring the most adorable fungi you\'ve ever seen. Waterproof, dishwasher-safe, and perfect for laptops, water bottles, and everywhere else you need a little mushroom magic.',
    shortDescription: 'Ten adorable fungi for all your stickering needs.',
    whyYoullLoveIt: [
      '10 unique mushroom designs',
      'Waterproof vinyl — sticks through anything',
      'Die-cut for clean, professional edges',
      'Illustrated by a local artist'
    ],
    images: ['/images/products/mushroom-stickers-1.jpg', '/images/products/mushroom-stickers-2.jpg'],
    category: 'stationery',
    subcategory: 'stickers',
    collections: ['stationery', 'gifts-under-25', 'nerd-alert'],
    tags: ['stickers', 'mushroom', 'vinyl', 'nature', 'art'],
    inStock: true,
    stockCount: 200,
    isNew: true,
    rating: 4.8,
    reviewCount: 73,
    relatedProductIds: ['p4', 'p8', 'p12'],
  },
  {
    id: 'p10',
    name: 'Narragansett Bay Map Print',
    slug: 'narragansett-bay-map-print',
    price: 30,
    description: 'A stunning hand-illustrated map of Narragansett Bay, from Providence down to Newport. Printed on archival-quality paper with soy-based inks. Every detail lovingly rendered by a local cartographer-artist.',
    shortDescription: 'Hand-illustrated map art of the bay we love.',
    whyYoullLoveIt: [
      'Hand-illustrated by a local artist',
      'Archival-quality paper and soy-based inks',
      'Available in 8x10 and 11x14',
      'Makes a stunning gallery wall addition'
    ],
    images: ['/images/products/bay-map-1.jpg', '/images/products/bay-map-2.jpg'],
    category: 'home',
    subcategory: 'art-prints',
    collections: ['rhode-island', 'home-goods'],
    tags: ['art', 'print', 'map', 'rhode island', 'narragansett'],
    inStock: true,
    stockCount: 30,
    rating: 4.9,
    reviewCount: 55,
    variants: [
      { id: 'v10-8x10', name: '8x10', price: 30, inStock: true },
      { id: 'v10-11x14', name: '11x14', price: 45, inStock: true },
    ],
    relatedProductIds: ['p5', 'p1', 'p2'],
  },
  {
    id: 'p11',
    name: 'Totoro Garden Planter',
    slug: 'totoro-garden-planter',
    price: 22,
    description: 'The cutest little planter for your cutest little succulent. This hand-painted ceramic Totoro planter comes with a drainage hole and saucer. Ghibli fans, plant lovers, and cute-thing enthusiasts, this one\'s for you.',
    shortDescription: 'The Ghibli planter your succulent deserves.',
    whyYoullLoveIt: [
      'Hand-painted ceramic with incredible detail',
      'Drainage hole + matching saucer included',
      'Perfect size for small succulents or cacti',
      'A Ghibli fan\'s dream gift'
    ],
    images: ['/images/products/totoro-planter-1.jpg', '/images/products/totoro-planter-2.jpg'],
    category: 'home',
    subcategory: 'decor',
    collections: ['ghibli-corner', 'green-thumb', 'gifts-under-25'],
    tags: ['planter', 'totoro', 'ghibli', 'ceramic', 'plants'],
    inStock: true,
    stockCount: 12,
    rating: 4.9,
    reviewCount: 89,
    relatedProductIds: ['p8', 'p6', 'p15'],
  },
  {
    id: 'p12',
    name: 'Taco Cat Enamel Pin',
    slug: 'taco-cat-enamel-pin',
    price: 10,
    description: 'It\'s a cat. It\'s a taco. It\'s a palindrome. This hard enamel pin is everything you didn\'t know you needed. Wear it proudly and wait for the compliments to roll in.',
    shortDescription: 'A palindrome you can wear. Taco cat spelled backwards is... you get it.',
    whyYoullLoveIt: [
      'Hard enamel with gold plating',
      'Double rubber clutch back',
      'Conversation starter guaranteed',
      'Only 1" but packs maximum joy'
    ],
    images: ['/images/products/taco-cat-pin-1.jpg', '/images/products/taco-cat-pin-2.jpg'],
    category: 'clothing',
    subcategory: 'pins-patches',
    collections: ['funny-gifts', 'gifts-under-25'],
    tags: ['pin', 'enamel', 'cat', 'taco', 'funny', 'palindrome'],
    inStock: true,
    stockCount: 145,
    rating: 4.8,
    reviewCount: 97,
    relatedProductIds: ['p4', 'p9', 'p3'],
  },
  {
    id: 'p13',
    name: 'Midnight Garden Candle',
    slug: 'midnight-garden-candle',
    price: 26,
    description: 'Close your eyes and you\'re in a secret garden at midnight. Notes of jasmine, black currant, and dewy moss create a moody, romantic atmosphere. Hand-poured soy wax in a reusable matte black vessel.',
    shortDescription: 'Jasmine, black currant, and midnight vibes.',
    whyYoullLoveIt: [
      'Complex, sophisticated scent profile',
      'Hand-poured 100% soy wax',
      '55+ hour burn time',
      'Reusable matte black vessel'
    ],
    images: ['/images/products/midnight-candle-1.jpg', '/images/products/midnight-candle-2.jpg'],
    category: 'home',
    subcategory: 'candles',
    collections: ['self-care', 'home-goods', 'gifts-for-her'],
    tags: ['candle', 'soy', 'jasmine', 'luxury', 'home'],
    inStock: true,
    stockCount: 25,
    isNew: true,
    rating: 4.7,
    reviewCount: 33,
    relatedProductIds: ['p7', 'p6', 'p14'],
  },
  {
    id: 'p14',
    name: 'Cozy Reading Socks',
    slug: 'cozy-reading-socks',
    price: 16,
    description: 'The bottom says "Do Not Disturb, I\'m Reading" because boundaries are important. Ultra-soft knit with reinforced heel and toe. Your book club will be jealous.',
    shortDescription: 'Because "do not disturb" is a lifestyle.',
    whyYoullLoveIt: [
      'Ultra-soft combed cotton blend',
      'Reinforced heel and toe for durability',
      'Fun message on the sole',
      'One size fits most (women\'s 6-12)'
    ],
    images: ['/images/products/reading-socks-1.jpg', '/images/products/reading-socks-2.jpg'],
    category: 'clothing',
    subcategory: 'accessories',
    collections: ['funny-gifts', 'gifts-under-25', 'self-care'],
    tags: ['socks', 'reading', 'funny', 'cozy', 'gift'],
    inStock: true,
    stockCount: 56,
    rating: 4.6,
    reviewCount: 44,
    relatedProductIds: ['p7', 'p8', 'p6'],
  },
  {
    id: 'p15',
    name: 'Ghibli Watercolor Postcard Set',
    slug: 'ghibli-watercolor-postcard-set',
    price: 15,
    description: 'Eight dreamy watercolor postcards featuring scenes inspired by our favorite Ghibli films. Send them to friends or frame them for the tiniest art gallery your wall has ever seen. Printed on heavyweight matte cardstock.',
    shortDescription: 'Eight dreamy postcards for Ghibli dreamers.',
    whyYoullLoveIt: [
      'Set of 8 unique watercolor designs',
      'Heavyweight matte cardstock',
      'Frame-worthy quality',
      'Perfect for sending OR displaying'
    ],
    images: ['/images/products/ghibli-postcards-1.jpg', '/images/products/ghibli-postcards-2.jpg'],
    category: 'stationery',
    subcategory: 'postcards',
    collections: ['ghibli-corner', 'stationery', 'gifts-under-25'],
    tags: ['postcards', 'ghibli', 'watercolor', 'art', 'studio ghibli'],
    inStock: true,
    stockCount: 78,
    isNew: true,
    rating: 4.9,
    reviewCount: 61,
    relatedProductIds: ['p11', 'p9', 'p8'],
  },
  {
    id: 'p16',
    name: 'Hot Sauce Trio Gift Set',
    slug: 'hot-sauce-trio-gift-set',
    price: 28,
    description: 'Three locally-made hot sauces ranging from "pleasant tingle" to "why did I do this." Perfect for the person who puts hot sauce on everything. Beautifully packaged in a custom gift box.',
    shortDescription: 'From "pleasant tingle" to "why did I do this."',
    whyYoullLoveIt: [
      'Three unique flavors from mild to WILD',
      'Made locally in small batches',
      'All-natural ingredients, no preservatives',
      'Comes in a beautiful gift box'
    ],
    images: ['/images/products/hot-sauce-trio-1.jpg', '/images/products/hot-sauce-trio-2.jpg'],
    category: 'home',
    subcategory: 'food-snacks',
    collections: ['gifts-for-him', 'funny-gifts', 'f-and-t-collabs'],
    tags: ['hot sauce', 'food', 'gift set', 'local', 'spicy'],
    inStock: true,
    stockCount: 33,
    rating: 4.7,
    reviewCount: 52,
    relatedProductIds: ['p5', 'p7', 'p17'],
  },
  {
    id: 'p17',
    name: 'Retro Movie Buff Puzzle',
    slug: 'retro-movie-buff-puzzle',
    price: 22,
    description: 'A 500-piece puzzle featuring iconic movie moments reimagined in retro poster style. Perfect for rainy Sundays, movie marathons, and anyone who thinks jigsaw puzzles are cinema. Thick, premium pieces with minimal puzzle dust.',
    shortDescription: '500 pieces of pure cinema nostalgia.',
    whyYoullLoveIt: [
      '500 pieces — challenging but not rage-inducing',
      'Thick, premium-cut pieces',
      'Finished size: 18" x 24" — frame-worthy',
      'Minimal puzzle dust (you\'re welcome)'
    ],
    images: ['/images/products/movie-puzzle-1.jpg', '/images/products/movie-puzzle-2.jpg'],
    category: 'novelty',
    subcategory: 'puzzles',
    collections: ['movie-buff', 'nerd-alert', 'gifts-for-him'],
    tags: ['puzzle', 'movies', 'retro', 'game night'],
    inStock: true,
    stockCount: 40,
    rating: 4.5,
    reviewCount: 29,
    relatedProductIds: ['p18', 'p16', 'p7'],
  },
  {
    id: 'p18',
    name: 'Vinyl Record Coaster Set',
    slug: 'vinyl-record-coaster-set',
    price: 20,
    description: 'Six silicone coasters shaped like tiny vinyl records. Protect your surfaces AND flex your impeccable music taste. Non-slip, heat-resistant, and way cooler than those cork things your parents have.',
    shortDescription: 'Six tiny records for your table. Non-slip. Very cool.',
    whyYoullLoveIt: [
      'Set of 6 unique "record" designs',
      'Premium silicone — heat resistant to 480°F',
      'Non-slip bottom grips any surface',
      'Dishwasher safe for easy cleaning'
    ],
    images: ['/images/products/vinyl-coasters-1.jpg', '/images/products/vinyl-coasters-2.jpg'],
    category: 'home',
    subcategory: 'kitchen',
    collections: ['music-snob', 'home-goods', 'gifts-under-25'],
    tags: ['coasters', 'vinyl', 'music', 'kitchen', 'home'],
    inStock: true,
    stockCount: 52,
    isNew: true,
    rating: 4.8,
    reviewCount: 38,
    relatedProductIds: ['p17', 'p5', 'p16'],
  },
  {
    id: 'p19',
    name: 'Pride Rainbow Tote Bag',
    slug: 'pride-rainbow-tote-bag',
    price: 18,
    description: 'Carry your groceries, books, and pride in this sturdy canvas tote. Features a modern geometric rainbow design that\'s subtle enough for everyday but proud enough for parade day. Heavy-duty canvas with reinforced handles.',
    shortDescription: 'Sturdy canvas, modern rainbow, everyday pride.',
    whyYoullLoveIt: [
      'Heavy-duty 12oz canvas',
      'Reinforced handles for heavy loads',
      'Modern geometric rainbow design',
      'Interior pocket for keys and phone'
    ],
    images: ['/images/products/pride-tote-1.jpg', '/images/products/pride-tote-2.jpg'],
    category: 'clothing',
    subcategory: 'bags',
    collections: ['lgbtqia', 'clothing-flair'],
    tags: ['tote', 'pride', 'rainbow', 'bag', 'canvas'],
    inStock: true,
    stockCount: 67,
    rating: 4.7,
    reviewCount: 45,
    relatedProductIds: ['p4', 'p12', 'p1'],
  },
  {
    id: 'p20',
    name: 'Tiny Terrarium Kit',
    slug: 'tiny-terrarium-kit',
    price: 32,
    description: 'Everything you need to build a tiny, self-sustaining ecosystem on your desk. Includes glass globe, soil, moss, decorative stones, and a tiny figurine because everyone needs a tiny friend. Detailed instructions included (even for the plant-challenged).',
    shortDescription: 'Build a tiny world. Instructions included for the plant-challenged.',
    whyYoullLoveIt: [
      'Complete kit — everything included',
      'Glass globe is hand-blown',
      'Includes detailed, beginner-friendly instructions',
      'Makes an incredible desk companion'
    ],
    images: ['/images/products/terrarium-kit-1.jpg', '/images/products/terrarium-kit-2.jpg'],
    category: 'novelty',
    subcategory: 'kits',
    collections: ['green-thumb', 'get-crafty', 'gifts-for-her'],
    tags: ['terrarium', 'plants', 'kit', 'craft', 'desk'],
    inStock: true,
    stockCount: 19,
    rating: 4.6,
    reviewCount: 37,
    relatedProductIds: ['p11', 'p8', 'p6'],
  },
];

export const collections: Collection[] = [
  {
    id: 'c1',
    name: 'Best Sellers',
    slug: 'best-sellers',
    description: 'The crowd favorites. The things people can\'t stop buying (and we can\'t stop restocking).',
    image: '/images/collections/best-sellers.jpg',
    productIds: ['p1', 'p2', 'p3', 'p4', 'p7'],
    featured: true,
  },
  {
    id: 'c2',
    name: 'New Arrivals',
    slug: 'new-arrivals',
    description: 'Fresh finds, just landed. Be the first to get your hands on these.',
    image: '/images/collections/new-arrivals.jpg',
    productIds: ['p1', 'p6', 'p9', 'p13', 'p15', 'p18'],
    featured: true,
  },
  {
    id: 'c3',
    name: 'Rhode Island',
    slug: 'rhode-island',
    description: 'Love letters to the Ocean State. Everything that makes RI the tiny, mighty wonder it is.',
    image: '/images/collections/rhode-island.jpg',
    productIds: ['p1', 'p2', 'p5', 'p10'],
    featured: true,
  },
  {
    id: 'c4',
    name: 'Stationery',
    slug: 'stationery',
    description: 'Cards, notebooks, stickers, and all the paper goods your heart desires.',
    image: '/images/collections/stationery.jpg',
    productIds: ['p3', 'p8', 'p9', 'p15'],
  },
  {
    id: 'c5',
    name: 'Home Goods',
    slug: 'home-goods',
    description: 'Make your space as interesting as you are.',
    image: '/images/collections/home-goods.jpg',
    productIds: ['p5', 'p7', 'p10', 'p13', 'p18'],
  },
  {
    id: 'c6',
    name: 'Gifts Under $25',
    slug: 'gifts-under-25',
    description: 'Thoughtful gifts that won\'t break the bank. Big impression, small price tag.',
    image: '/images/collections/gifts-under-25.jpg',
    productIds: ['p3', 'p4', 'p6', 'p9', 'p11', 'p12', 'p14', 'p15', 'p18'],
    featured: true,
  },
  {
    id: 'c7',
    name: 'Gifts for Her',
    slug: 'gifts-for-her',
    description: 'Curated picks she\'ll actually love (we asked).',
    image: '/images/collections/gifts-for-her.jpg',
    productIds: ['p6', 'p8', 'p13', 'p20'],
  },
  {
    id: 'c8',
    name: 'Gifts for Him',
    slug: 'gifts-for-him',
    description: 'Beyond the boring. Gifts he\'ll actually use and enjoy.',
    image: '/images/collections/gifts-for-him.jpg',
    productIds: ['p5', 'p16', 'p17'],
  },
  {
    id: 'c9',
    name: 'Funny Gifts',
    slug: 'funny-gifts',
    description: 'For the person who appreciates a good laugh with their presents.',
    image: '/images/collections/funny-gifts.jpg',
    productIds: ['p7', 'p12', 'p14', 'p16'],
    featured: true,
  },
  {
    id: 'c10',
    name: 'Self Care',
    slug: 'self-care',
    description: 'Treat yourself. You\'ve earned it. (Yes, even on a Tuesday.)',
    image: '/images/collections/self-care.jpg',
    productIds: ['p6', 'p7', 'p13', 'p14'],
  },
  {
    id: 'c11',
    name: 'Ghibli Corner',
    slug: 'ghibli-corner',
    description: 'Studio Ghibli-inspired treasures for the dreamers and adventurers.',
    image: '/images/collections/ghibli-corner.jpg',
    productIds: ['p11', 'p15'],
  },
  {
    id: 'c12',
    name: 'Green Thumb Club',
    slug: 'green-thumb',
    description: 'For plant parents at every skill level (including "I killed a cactus once").',
    image: '/images/collections/green-thumb.jpg',
    productIds: ['p8', 'p11', 'p20'],
  },
  {
    id: 'c13',
    name: 'Nerd Alert',
    slug: 'nerd-alert',
    description: 'Proudly nerdy. Gloriously geeky. Unabashedly awesome.',
    image: '/images/collections/nerd-alert.jpg',
    productIds: ['p9', 'p17'],
  },
  {
    id: 'c14',
    name: 'Music Snob',
    slug: 'music-snob',
    description: 'For those whose personality is at least 40% their music taste.',
    image: '/images/collections/music-snob.jpg',
    productIds: ['p18'],
  },
  {
    id: 'c15',
    name: 'Movie Buff',
    slug: 'movie-buff',
    description: 'Lights, camera, merchandise.',
    image: '/images/collections/movie-buff.jpg',
    productIds: ['p17'],
  },
  {
    id: 'c16',
    name: 'LGBTQIA+',
    slug: 'lgbtqia',
    description: 'Celebrate love, identity, and pride. Always.',
    image: '/images/collections/lgbtqia.jpg',
    productIds: ['p19'],
  },
  {
    id: 'c17',
    name: 'F&T Collabs',
    slug: 'f-and-t-collabs',
    description: 'Special collaborations with local artists and makers.',
    image: '/images/collections/collabs.jpg',
    productIds: ['p16'],
  },
  {
    id: 'c18',
    name: 'Get Crafty',
    slug: 'get-crafty',
    description: 'DIY kits and creative projects for the maker in you.',
    image: '/images/collections/get-crafty.jpg',
    productIds: ['p20'],
  },
  {
    id: 'c19',
    name: 'Clothing & Flair',
    slug: 'clothing-flair',
    description: 'Wear your personality. Literally.',
    image: '/images/collections/clothing-flair.jpg',
    productIds: ['p1', 'p2', 'p4', 'p12', 'p14', 'p19'],
  },
];

export const reviews: Review[] = [
  {
    id: 'r1', productId: 'p7', author: 'Sarah M.', rating: 5,
    title: 'The label made me laugh out loud',
    body: 'Bought this as a joke gift and now I want one for every room. The scent is INCREDIBLE — warm and cozy without being overwhelming. 10/10 would existentially crisis again.',
    date: '2025-12-15', verified: true, helpfulCount: 23,
  },
  {
    id: 'r2', productId: 'p4', author: 'Alex K.', rating: 5,
    title: 'The sassiest pin in my collection',
    body: 'This cat judges me from my jacket lapel every day and honestly? I deserve it. Amazing quality, the clutch is super secure. Already bought two more as gifts.',
    date: '2025-11-28', verified: true, helpfulCount: 15,
  },
  {
    id: 'r3', productId: 'p2', author: 'Mike R.', rating: 5,
    title: 'Best hoodie I own, no contest',
    body: 'The weight of this thing is perfect. Not too thin, not like wearing a blanket. The skyline design is subtle and classy. I wear it literally every weekend.',
    date: '2026-01-10', verified: true, helpfulCount: 31,
  },
  {
    id: 'r4', productId: 'p11', author: 'Jen L.', rating: 5,
    title: 'My succulent has never looked happier',
    body: 'The detail on this planter is insane. My Totoro sits on my desk and brings me joy every single day. The drainage hole is a nice touch too — clearly made by someone who actually knows plants.',
    date: '2026-02-05', verified: true, helpfulCount: 19,
  },
  {
    id: 'r5', productId: 'p1', author: 'Chris D.', rating: 5,
    title: 'As a lifelong Rhode Islander, I need 5 more',
    body: 'This tee gets it. Every time I wear it someone stops me to talk about their blizzard survival story. The cotton is super soft and the fit is perfect.',
    date: '2026-01-22', verified: true, helpfulCount: 12,
  },
  {
    id: 'r6', productId: 'p3', author: 'Taylor W.', rating: 5,
    title: 'Sent this to my best friend and she cried',
    body: 'The gold foil is gorgeous, the cardstock feels expensive, and the message is just... perfect. This is my go-to card for anyone having a rough time.',
    date: '2025-10-18', verified: true, helpfulCount: 27,
  },
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  const collection = getCollectionBySlug(collectionSlug);
  if (!collection) return [];
  return collection.productIds
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined);
}

export function getRelatedProducts(product: Product): Product[] {
  return (product.relatedProductIds || [])
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined);
}

export function getReviewsForProduct(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId);
}

export function searchProducts(query: string): Product[] {
  const lower = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower) ||
      p.tags.some((t) => t.toLowerCase().includes(lower)) ||
      p.category.toLowerCase().includes(lower)
  );
}

export function getFeaturedCollections(): Collection[] {
  return collections.filter((c) => c.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.isBestSeller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getProductsUnderPrice(price: number): Product[] {
  return products.filter((p) => p.price <= price);
}
