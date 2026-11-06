/**
 * Single source of truth for every donation cause, the gallery and its tabs.
 *
 * REAL PHOTOS live in /public/images/causes/ and are listed in each cause's `photos`.
 * Where a cause has fewer than 3 real photos, the carousel / "See The Impact" row is padded with
 * Unsplash PLACEHOLDERS from `pool` below (swap for real photos by adding files to `photos`).
 * If an Unsplash link ever fails, the category's local fallback image is shown instead.
 */

export type Category = "animals" | "food" | "education" | "environment" | "healthcare" | "celebrations";

export const categories: { slug: Category; label: string }[] = [
  { slug: "animals", label: "Animals" },
  { slug: "food", label: "Food" },
  { slug: "education", label: "Education" },
  { slug: "environment", label: "Environment" },
  { slug: "healthcare", label: "Healthcare" },
  { slug: "celebrations", label: "Celebrations" },
];

export const categoryFallback: Record<Category, string> = {
  animals: "/images/program-community.jpg",
  food: "/images/program-food.jpg",
  education: "/images/program-education.jpg",
  environment: "/images/program-environment.jpg",
  healthcare: "/images/program-health.jpg",
  celebrations: "/images/program-community.jpg",
};

const u = (id: string, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

/** Unsplash placeholder pools per category. */
const pool: Record<Category, string[]> = {
  animals: [
    u("photo-1587300003388-59208cc962cb"),
    u("photo-1548199973-03cce0bbc87b"),
    u("photo-1601758228041-f3b2795255f1"),
    u("photo-1583511655857-d19b40a7a54e"),
    u("photo-1543466835-00a7907e9de1"),
    u("photo-1517849845537-4d257902454a"),
  ],
  food: [
    u("photo-1593113598332-cd288d649433"),
    u("photo-1488521787991-ed7bbaae773c"),
    u("photo-1547592180-85f173990554"),
    u("photo-1606787366850-de6330128bfc"),
    u("photo-1504674900247-0877df9cc836"),
    u("photo-1559027615-cd4628902d4a"),
  ],
  education: [
    u("photo-1503676260728-1c00da094a0b"),
    u("photo-1497633762265-9d179a990aa6"),
    u("photo-1509062522246-3755977927d7"),
    u("photo-1427504494785-3a9ca7044f45"),
    u("photo-1588072432836-e10032774350"),
    u("photo-1544717305-2782549b5136"),
  ],
  environment: [
    u("photo-1542601906990-b4d3fb778b09"),
    u("photo-1530587191325-3db32d826c18"),
    u("photo-1441974231531-c6227db76b6e"),
    u("photo-1618477461853-cf6ed80faba5"),
    u("photo-1473773508845-188df298d2d1"),
    u("photo-1500382017468-9049fed747ef"),
  ],
  healthcare: [
    u("photo-1576091160399-112ba8d25d1d"),
    u("photo-1584515933487-779824d29309"),
    u("photo-1631217868264-e5b90bb7e133"),
    u("photo-1579684385127-1ef15d508118"),
    u("photo-1559757148-5c350d0d3c56"),
    u("photo-1584820927498-cfe5211fd8bf"),
  ],
  celebrations: [
    u("photo-1464349095431-e9a21285b5f3"),
    u("photo-1558636508-e0db3814bd1d"),
    u("photo-1530103862676-de8c9debad1d"),
    u("photo-1513151233558-d860c5398176"),
    u("photo-1527529482837-4698179dc6ce"),
    u("photo-1519671482749-fd09be7ccebf"),
  ],
};

/** Real photo paths: p("food-packet", 4) -> /images/causes/food-packet-1.jpg ... -4.jpg */
const p = (name: string, n: number) =>
  Array.from({ length: n }, (_, i) => `/images/causes/${name}-${i + 1}.jpg`);

/** Pad a list with category placeholders until it has at least `min` images. */
function fill(real: string[], cat: Category, min: number): string[] {
  const out = [...real];
  for (let i = 0; out.length < min; i++) out.push(pool[cat][i % pool[cat].length]);
  return out;
}

export type Cause = {
  slug: string;
  title: string;
  /** Price per unit in rupees. The charged amount is always recomputed on the server. */
  price: number;
  unit: string;
  short: string;
  category: Category;
  photos: string[]; // real photos only
  image: string; // card image
  gallery: string[]; // carousel images
  impact: string[]; // exactly 3 images for "See The Impact"
  countLabel: string;
  presets: number[];
  priceTag: string;
  includesTitle: string;
  includes: string;
  headline: string;
  about: string[];
  aboutImage: string;
  /** Optional live counter shown under the carousel. Leave undefined to hide it. */
  servedThisMonth?: number;
};

export const photoAddon = 5; // ₹ per unit for "add a photo on the parcel"

type Def = Omit<Cause, "image" | "gallery" | "impact" | "aboutImage" | "priceTag"> & { priceTag?: string };

function make(d: Def): Cause {
  const real = d.photos;
  return {
    ...d,
    priceTag: d.priceTag ?? `₹${d.price} / ${d.unit.charAt(0).toUpperCase()}${d.unit.slice(1)}`,
    image: real[0] ?? pool[d.category][0],
    gallery: fill(real, d.category, 3),
    impact: fill([...real].reverse().slice(0, 3), d.category, 3),
    aboutImage: real[1] ?? real[0] ?? pool[d.category][1],
  };
}

export const causes: Cause[] = [
  make({
    slug: "feed-a-stray-dog",
    title: "Feed a Stray Dog",
    price: 35,
    unit: "serving",
    short: "Give a hungry stray dog a meal and a little care.",
    category: "animals",
    photos: p("dog", 3),
    countLabel: "Food count",
    presets: [30, 60, 100],
    priceTag: "₹35 / Full Meal",
    includesTitle: "What is in each parcel?",
    includes:
      "800–900g of steamed white rice and freshly boiled chicken bone pieces, infused with organic anti-inflammatory turmeric powder. Prepared daily at 6:00 AM under veterinary guidance.",
    headline: "Together, We Uplift Humanity",
    about: [
      "Every single day, countless stray dogs wander our streets hungry, dehydrated and defenseless. Through FeedU Foundation’s Feed a Stray Dog mission, we serve warm, high-protein meals with rice and fresh chicken pieces daily.",
      "For just ₹35, your compassion can ease severe hunger, help heal digestive trauma with natural turmeric, and bring a wagging tail to life. When you donate, your custom tribute label is affixed directly onto the parcel, photographed on-ground, and shared straight to your WhatsApp.",
    ],
  }),
  make({
    slug: "sponsor-a-food-packet",
    title: "Sponsor a Food Packet",
    price: 30,
    unit: "packet",
    short: "Help someone facing hunger enjoy a comforting meal.",
    category: "food",
    photos: p("food-packet", 7),
    countLabel: "Packet count",
    presets: [30, 60, 100],
    includesTitle: "What is in each packet?",
    includes:
      "A freshly prepared, packed meal handed directly to a person facing hunger. Prepared and distributed by our volunteers.",
    headline: "A Meal Can Change A Day",
    about: [
      "Many people in our communities go to bed hungry. A simple packed meal can ease an immediate struggle and offer a moment of comfort and dignity.",
      "When you sponsor a packet, our volunteers prepare and distribute it, and your custom tribute label is affixed to the packet and photographed during distribution.",
    ],
  }),
  make({
    slug: "sponsor-a-thali-meal",
    title: "Sponsor a Thali Meal",
    price: 60,
    unit: "meal",
    short: "Share a filling thali with someone in need.",
    category: "food",
    photos: p("thali", 3),
    countLabel: "Meal count",
    presets: [30, 60, 100],
    priceTag: "₹60 / Thali",
    includesTitle: "What is in each thali?",
    includes:
      "A filling, home-style thali with rice, dal, vegetables and a side, served fresh to someone in need.",
    headline: "Share A Filling Meal",
    about: [
      "A thali is more than food. It is a complete, balanced meal served with care to someone who might otherwise go without.",
      "Your contribution funds each thali, and your tribute label travels with it and is photographed on the ground.",
    ],
  }),
  make({
    slug: "womens-hygiene",
    title: "Women’s Hygiene",
    price: 150,
    unit: "kit",
    short: "Support everyday comfort and dignity with essential hygiene supplies.",
    category: "healthcare",
    photos: p("hygiene", 1),
    countLabel: "Kit count",
    presets: [10, 25, 50],
    includesTitle: "What is in each kit?",
    includes:
      "Essential hygiene supplies for women and girls, including menstrual health products and basic personal care items.",
    headline: "Dignity Starts With Basics",
    about: [
      "Access to hygiene supplies shapes health, school attendance and confidence for women and girls in underserved communities.",
      "Each kit you sponsor is handed over with awareness on menstrual health and personal hygiene.",
    ],
  }),
  make({
    slug: "donate-a-blanket",
    title: "Donate a Blanket",
    price: 500,
    unit: "blanket",
    short: "Bring warmth and comfort to someone facing cold nights.",
    category: "healthcare",
    photos: p("blanket", 1),
    countLabel: "Blanket count",
    presets: [5, 10, 25],
    includesTitle: "What is in each parcel?",
    includes: "One warm, good-quality blanket handed directly to a person sleeping out in the cold.",
    headline: "Warmth For Cold Nights",
    about: [
      "Cold nights are hardest on people without shelter. A blanket can be the difference between a sleepless night and rest.",
      "Your tribute label is attached to the blanket and photographed at the time of distribution.",
    ],
  }),
  make({
    slug: "sponsor-a-grocery-kit",
    title: "Sponsor a Grocery Kit",
    price: 500,
    unit: "kit",
    short: "Help a family put food on the table.",
    category: "food",
    photos: p("grocery", 1),
    countLabel: "Kit count",
    presets: [5, 10, 25],
    includesTitle: "What is in each kit?",
    includes: "Dry ration for a family, including staples such as rice, pulses, oil and spices.",
    headline: "Help A Family Put Food On The Table",
    about: [
      "A grocery kit helps a family get through weeks of everyday meals with less worry.",
      "Each kit is handed over by our volunteers, with your tribute label and a photo of the handover.",
    ],
  }),
  make({
    slug: "happiness-kit",
    title: "Happiness Kit",
    price: 60,
    unit: "kit",
    short: "Brighten a child’s day with a little surprise.",
    category: "education",
    photos: p("happiness", 3),
    countLabel: "Kit count",
    presets: [30, 60, 100],
    includesTitle: "What is in each kit?",
    includes:
      "A clear bag with stationery such as pencils, crayons, colours, an eraser and a sharpener, to brighten a child’s day.",
    headline: "A Little Surprise Goes A Long Way",
    about: [
      "Small moments of joy matter to children. A kit with stationery and colours encourages learning and brings a smile.",
      "Your tribute label is attached to each kit and photographed during the handover.",
    ],
  }),
  make({
    slug: "plant-a-sapling",
    title: "Plant a Sapling",
    price: 200,
    unit: "plant",
    short: "Grow a greener tomorrow with a sapling planted in your name.",
    category: "environment",
    photos: p("plant", 1),
    countLabel: "Plant count",
    presets: [5, 10, 25],
    includesTitle: "What do you get?",
    includes:
      "A sapling planted by our volunteers, tagged with your tribute label and photographed on site.",
    headline: "Plant Something That Lasts",
    about: [
      "Every sapling adds shade, cleaner air and greenery to the places people live in.",
      "Your tribute label is placed beside the sapling and photographed after planting, then shared with you.",
    ],
  }),
  make({
    slug: "birthday-party-cake",
    title: "Birthday Party Cake",
    price: 700,
    unit: "cake",
    short: "Celebrate a birthday by sharing a party cake with children.",
    category: "celebrations",
    photos: p("cake-700", 1),
    countLabel: "Cake count",
    presets: [1, 2, 3],
    includesTitle: "What do you get?",
    includes:
      "A party cake cut and shared with children, with your tribute label on top and photographed at the celebration.",
    headline: "Celebrate With A Purpose",
    about: [
      "Birthdays are special, and sharing one with children who rarely get a celebration makes it more meaningful.",
      "Your tribute label goes on the cake and is photographed at the celebration, then shared with you.",
    ],
  }),
  make({
    slug: "sponsor-a-cake",
    title: "Sponsor a Cake",
    price: 300,
    unit: "cake",
    short: "Share a cake and a moment of joy with children.",
    category: "celebrations",
    photos: p("cake-300", 1),
    countLabel: "Cake count",
    presets: [1, 2, 5],
    includesTitle: "What do you get?",
    includes:
      "A cake shared with children, with your tribute label on top and photographed at the celebration.",
    headline: "Add A Little Sweetness",
    about: [
      "A cake turns an ordinary day into a celebration for children.",
      "Your tribute label goes on the cake and is photographed at the celebration, then shared with you.",
    ],
  }),
];

export const getCause = (slug: string) => causes.find((c) => c.slug === slug);

/** Gallery: real photos first, padded with placeholders so each tab has at least 6 images. */
export type GalleryItem = { src: string; alt: string; category: Category };
export const galleryItems: GalleryItem[] = categories.flatMap((c) => {
  const real: GalleryItem[] = causes
    .filter((x) => x.category === c.slug)
    .flatMap((x) => x.photos.map((src, i) => ({ src, alt: `${x.title} – photo ${i + 1}`, category: c.slug })));
  const items = [...real];
  for (let i = 0; items.length < 6; i++) {
    items.push({ src: pool[c.slug][i % pool[c.slug].length], alt: `${c.label} – photo ${items.length + 1}`, category: c.slug });
  }
  return items;
});
