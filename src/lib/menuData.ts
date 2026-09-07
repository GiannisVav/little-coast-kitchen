export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image?: string;
  tags?: string[];
  isSignature?: boolean;
}

export const MENU_CATEGORIES = [
  "All",
  "Mezedes & Starters",
  "From the Hearth",
  "Aegean Seafood",
  "Salads & Sides",
  "Desserts",
  "Cocktails & Wines",
];

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // Mezedes & Starters
  {
    id: "grilled-octopus-app",
    name: "Grilled Octopus",
    category: "Mezedes & Starters",
    price: "$28",
    description: "Charred octopus with capers, pickled red onion, and lemon olive oil.",
    image: "/assets/showcased-dishes/grilled-octopus.png",
    tags: ["Signature", "Gluten-Free"],
    isSignature: true,
  },
  {
    id: "feta-saganaki",
    name: "Feta Saganaki",
    category: "Mezedes & Starters",
    price: "$15",
    description: "Crispy pan-fried Greek barrel-aged feta drizzled with thyme honey and toasted sesame.",
    tags: ["Vegetarian"],
  },
  {
    id: "tzatziki-pita",
    name: "House Tzatziki & Warm Pita",
    category: "Mezedes & Starters",
    price: "$12",
    description: "Strained Greek yogurt, Persian cucumber, garlic, dill, and wood-fired olive oil flatbread.",
    tags: ["Vegetarian"],
  },
  {
    id: "dolmadakia",
    name: "Handmade Dolmadakia",
    category: "Mezedes & Starters",
    price: "$14",
    description: "Tender grape leaves stuffed with rice, fresh mint, dill, and lemon emulsion.",
    tags: ["Vegetarian", "Gluten-Free"],
  },
  {
    id: "zucchini-chips",
    name: "Kolokithokeftedes (Crispy Zucchini)",
    category: "Mezedes & Starters",
    price: "$14",
    description: "Shaved zucchini crisped with mint, feta, and lemon garlic dip.",
    tags: ["Vegetarian"],
  },

  // From the Hearth (Meats)
  {
    id: "chicken-souvlaki",
    name: "Chicken Souvlaki",
    category: "From the Hearth",
    price: "$24",
    description: "Char-grilled chicken skewers with lemon, oregano, garlic, and house tzatziki.",
    image: "/assets/showcased-dishes/chicken-souvlaki.png",
    tags: ["Signature", "Gluten-Free"],
    isSignature: true,
  },
  {
    id: "lamb-chops",
    name: "Lamb Chops (Paidakia)",
    category: "From the Hearth",
    price: "$38",
    description: "Grilled lamb chops with rosemary, roasted garlic, sea salt, and red wine jus.",
    image: "/assets/showcased-dishes/lamb-chops.png",
    tags: ["Signature", "Gluten-Free"],
    isSignature: true,
  },
  {
    id: "wood-fired-beef-short-rib",
    name: "Braised Beef Short Rib",
    category: "From the Hearth",
    price: "$36",
    description: "Slow-roasted beef short rib with cinnamon-tomato reduction, orzo, and grated graviera cheese.",
  },
  {
    id: "pork-brizola",
    name: "Bone-in Pork Brizola",
    category: "From the Hearth",
    price: "$30",
    description: "Thick cut heritage pork chop marinated in sage, mountain oregano, and grilled over charcoal.",
    tags: ["Gluten-Free"],
  },

  // Aegean Seafood
  {
    id: "grilled-salmon",
    name: "Grilled Salmon",
    category: "Aegean Seafood",
    price: "$32",
    description: "Crispy-skinned salmon with asparagus, cherry tomatoes, and lemon herb oil.",
    image: "/assets/showcased-dishes/grilled-salmon.png",
    tags: ["Gluten-Free"],
    isSignature: true,
  },
  {
    id: "whole-lavraki",
    name: "Whole Mediterranean Sea Bass (Lavraki)",
    category: "Aegean Seafood",
    price: "$42",
    description: "Wild-caught sea bass grilled whole with wild mountain oregano, sea salt, and extra virgin olive oil.",
    tags: ["Signature", "Gluten-Free"],
    isSignature: true,
  },
  {
    id: "garides-saganaki",
    name: "Garides Saganaki (Prawns)",
    category: "Aegean Seafood",
    price: "$29",
    description: "Jumbo Aegean prawns simmered in sweet heirloom tomato sauce, ouzo, and crumbled feta cheese.",
  },

  // Salads & Sides
  {
    id: "greek-salad",
    name: "Greek Salad (Horiatiki)",
    category: "Salads & Sides",
    price: "$16",
    description: "Tomatoes, cucumber, Kalamata olives, feta, and Greek oregano.",
    image: "/assets/showcased-dishes/greek-salad.png",
    tags: ["Vegetarian", "Gluten-Free"],
    isSignature: true,
  },
  {
    id: "dakos-cretan",
    name: "Cretan Dakos",
    category: "Salads & Sides",
    price: "$15",
    description: "Barley rusks soaked in grated ripe tomato, myzithra cheese, wild capers, and olive oil.",
    tags: ["Vegetarian"],
  },
  {
    id: "lemon-potatoes",
    name: "Lemon-Oregano Roasted Potatoes",
    category: "Salads & Sides",
    price: "$10",
    description: "Golden roasted Yukon potatoes steeped in lemon broth, olive oil, and crushed garlic.",
    tags: ["Vegetarian", "Gluten-Free"],
  },
  {
    id: "charred-greens",
    name: "Horta (Braised Wild Greens)",
    category: "Salads & Sides",
    price: "$11",
    description: "Seasonal bitter wild greens blanched and served warm with lemon and sea salt.",
    tags: ["Vegetarian", "Gluten-Free"],
  },

  // Desserts
  {
    id: "galaktoboureko",
    name: "Galaktoboureko",
    category: "Desserts",
    price: "$12",
    description: "Semolina custard in crisp phyllo with syrup and cinnamon.",
    image: "/assets/showcased-dishes/galaktoboureko.png",
    tags: ["Signature", "Vegetarian"],
    isSignature: true,
  },
  {
    id: "baklava-ice-cream",
    name: "Artisan Pistachio Baklava",
    category: "Desserts",
    price: "$13",
    description: "Layered crispy phyllo pastry packed with crushed Aegina pistachios and spiced honey syrup.",
    tags: ["Vegetarian"],
  },
  {
    id: "greek-yogurt-walnuts",
    name: "Authentic Strained Yogurt & Honey",
    category: "Desserts",
    price: "$10",
    description: "Traditional thick Greek sheep's yogurt, caramelized walnuts, and raw mountain thyme honey.",
    tags: ["Vegetarian", "Gluten-Free"],
  },

  // Cocktails & Wines
  {
    id: "aegean-spritz",
    name: "Aegean Sunset Spritz",
    category: "Cocktails & Wines",
    price: "$16",
    description: "Mastiha liqueur, sparkling prosecco, Mediterranean tonic, fresh rosemary, and cucumber.",
    tags: ["Cocktail"],
  },
  {
    id: "santorini-assyrtiko",
    name: "Santorini Assyrtiko (Glass / Bottle)",
    category: "Cocktails & Wines",
    price: "$16 / $68",
    description: "Crisp, mineral-driven volcanic white wine with citrus zest and refreshing saline finish.",
    tags: ["Wine"],
  },
  {
    id: "nemea-agiorgitiko",
    name: "Nemea Agiorgitiko (Glass / Bottle)",
    category: "Cocktails & Wines",
    price: "$15 / $62",
    description: "Velvety Peloponnese red wine with ripe dark cherry, plum, and subtle sweet spice notes.",
    tags: ["Wine"],
  },
];
