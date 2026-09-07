-- ==========================================================
-- Little Coast Mediterranean Kitchen - Database Schema (Supabase / Postgres)
-- ==========================================================

-- 1. Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create dishes table
CREATE TABLE IF NOT EXISTS dishes (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  price VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  tags TEXT[], -- Array of strings e.g. ['Signature', 'Gluten-Free']
  is_signature BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Enable Row Level Security (RLS) & allow public read access
ALTER TABLE dishes ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to dishes" ON dishes FOR SELECT USING (true);
CREATE POLICY "Allow public read access to categories" ON categories FOR SELECT USING (true);

-- 4. Seed initial dishes
INSERT INTO dishes (id, name, category, price, description, image, tags, is_signature)
VALUES
  -- Mezedes & Starters
  ('grilled-octopus-app', 'Grilled Octopus', 'Mezedes & Starters', '$28', 'Charred octopus with capers, pickled red onion, and lemon olive oil.', '/assets/showcased-dishes/grilled-octopus.png', ARRAY['Signature', 'Gluten-Free'], true),
  ('feta-saganaki', 'Feta Saganaki', 'Mezedes & Starters', '$15', 'Crispy pan-fried Greek barrel-aged feta drizzled with thyme honey and toasted sesame.', NULL, ARRAY['Vegetarian'], false),
  ('tzatziki-pita', 'House Tzatziki & Warm Pita', 'Mezedes & Starters', '$12', 'Strained Greek yogurt, Persian cucumber, garlic, dill, and wood-fired olive oil flatbread.', NULL, ARRAY['Vegetarian'], false),
  ('dolmadakia', 'Handmade Dolmadakia', 'Mezedes & Starters', '$14', 'Tender grape leaves stuffed with rice, fresh mint, dill, and lemon emulsion.', NULL, ARRAY['Vegetarian', 'Gluten-Free'], false),
  ('zucchini-chips', 'Kolokithokeftedes (Crispy Zucchini)', 'Mezedes & Starters', '$14', 'Shaved zucchini crisped with mint, feta, and lemon garlic dip.', NULL, ARRAY['Vegetarian'], false),

  -- From the Hearth (Meats)
  ('chicken-souvlaki', 'Chicken Souvlaki', 'From the Hearth', '$24', 'Char-grilled chicken skewers with lemon, oregano, garlic, and house tzatziki.', '/assets/showcased-dishes/chicken-souvlaki.png', ARRAY['Signature', 'Gluten-Free'], true),
  ('lamb-chops', 'Lamb Chops (Paidakia)', 'From the Hearth', '$38', 'Grilled lamb chops with rosemary, roasted garlic, sea salt, and red wine jus.', '/assets/showcased-dishes/lamb-chops.png', ARRAY['Signature', 'Gluten-Free'], true),
  ('wood-fired-beef-short-rib', 'Braised Beef Short Rib', 'From the Hearth', '$36', 'Slow-roasted beef short rib with cinnamon-tomato reduction, orzo, and grated graviera cheese.', NULL, ARRAY[]::TEXT[], false),
  ('pork-brizola', 'Bone-in Pork Brizola', 'From the Hearth', '$30', 'Thick cut heritage pork chop marinated in sage, mountain oregano, and grilled over charcoal.', NULL, ARRAY['Gluten-Free'], false),

  -- Aegean Seafood
  ('grilled-salmon', 'Grilled Salmon', 'Aegean Seafood', '$32', 'Crispy-skinned salmon with asparagus, cherry tomatoes, and lemon herb oil.', '/assets/showcased-dishes/grilled-salmon.png', ARRAY['Gluten-Free'], true),
  ('whole-lavraki', 'Whole Mediterranean Sea Bass (Lavraki)', 'Aegean Seafood', '$42', 'Wild-caught sea bass grilled whole with wild mountain oregano, sea salt, and extra virgin olive oil.', NULL, ARRAY['Signature', 'Gluten-Free'], true),
  ('garides-saganaki', 'Garides Saganaki (Prawns)', 'Aegean Seafood', '$29', 'Jumbo Aegean prawns simmered in sweet heirloom tomato sauce, ouzo, and crumbled feta cheese.', NULL, ARRAY[]::TEXT[], false),

  -- Salads & Sides
  ('greek-salad', 'Greek Salad (Horiatiki)', 'Salads & Sides', '$16', 'Tomatoes, cucumber, Kalamata olives, feta, and Greek oregano.', '/assets/showcased-dishes/greek-salad.png', ARRAY['Vegetarian', 'Gluten-Free'], true),
  ('dakos-cretan', 'Cretan Dakos', 'Salads & Sides', '$15', 'Barley rusks soaked in grated ripe tomato, myzithra cheese, wild capers, and olive oil.', NULL, ARRAY['Vegetarian'], false),
  ('lemon-potatoes', 'Lemon-Oregano Roasted Potatoes', 'Salads & Sides', '$10', 'Golden roasted Yukon potatoes steeped in lemon broth, olive oil, and crushed garlic.', NULL, ARRAY['Vegetarian', 'Gluten-Free'], false),
  ('charred-greens', 'Horta (Braised Wild Greens)', 'Salads & Sides', '$11', 'Seasonal bitter wild greens blanched and served warm with lemon and sea salt.', NULL, ARRAY['Vegetarian', 'Gluten-Free'], false),

  -- Desserts
  ('galaktoboureko', 'Galaktoboureko', 'Desserts', '$12', 'Semolina custard in crisp phyllo with syrup and cinnamon.', '/assets/showcased-dishes/galaktoboureko.png', ARRAY['Signature', 'Vegetarian'], true),
  ('baklava-ice-cream', 'Artisan Pistachio Baklava', 'Desserts', '$13', 'Layered crispy phyllo pastry packed with crushed Aegina pistachios and spiced honey syrup.', NULL, ARRAY['Vegetarian'], false),
  ('greek-yogurt-walnuts', 'Authentic Strained Yogurt & Honey', 'Desserts', '$10', 'Traditional thick Greek sheep''s yogurt, caramelized walnuts, and raw mountain thyme honey.', NULL, ARRAY['Vegetarian', 'Gluten-Free'], false),

  -- Cocktails & Wines
  ('aegean-spritz', 'Aegean Sunset Spritz', 'Cocktails & Wines', '$16', 'Mastiha liqueur, sparkling prosecco, Mediterranean tonic, fresh rosemary, and cucumber.', NULL, ARRAY['Cocktail'], false),
  ('santorini-assyrtiko', 'Santorini Assyrtiko (Glass / Bottle)', 'Cocktails & Wines', '$16 / $68', 'Crisp, mineral-driven volcanic white wine with citrus zest and refreshing saline finish.', NULL, ARRAY['Wine'], false),
  ('nemea-agiorgitiko', 'Nemea Agiorgitiko (Glass / Bottle)', 'Cocktails & Wines', '$15 / $62', 'Velvety Peloponnese red wine with ripe dark cherry, plum, and subtle sweet spice notes.', NULL, ARRAY['Wine'], false)
ON CONFLICT (id) DO NOTHING;
