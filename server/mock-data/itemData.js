const items = [
    {
    name: 'Tatcha, The Dewy SKin Cream',
    description: 'A moisturizer that drenches skin in rich, long-lasting hydration with hyaluronic acid for a dewy glow and more. Proven to visibly plump fine lines, seal in moisture, and protect skin from oxidative stress for softer, more supple skin.' ,
    price: 72.00,
    qty: 25,
    imageUrl: 'assets/item_1.webp'
    },
    {
        name: 'Kiehls Ultra Facial Refillable Moisturizing Cream with Squalane',
        description: 'A face cream formulated with squalane, glacial glycoprotein, and pro-ceramides to support your skin’s barrier for up to 72-hour hydration.',
        price: 39.00,
        qty: 25,
        imageUrl: 'assets/item_2.webp'
      },
      {
        name: 'Glow Recipe Plum Plump Refillable Hyaluronic Acid Moisturizer',
        description: 'A hydrating, skin-balancing, whipped gel cream in a refillable jar, packed with polyglutamic acid, hyaluronic acid, and plum for visibly plump, glowing skin.',
        price: 40.00,
        qty: 25,
        imageUrl: 'assets/item_3.webp'
      },
      {
        name: 'The Ordinary Natural Moisturizing Factors + HA',
        description: 'A hydrating formula with amino acids, dermal lipids, and hyaluronic acid.',
        price: 14.00,
        qty: 25,
        imageUrl: 'assets/item_4.webp'
      },
      {
        name: 'Dr. Dennis Gross Skincare Advanced Retinol + Ferulic Intense Wrinkle Cream',
        description: 'An intensely hydrating retinol cream formulated to visibly lift and firm skin, reduce fine lines and wrinkles, replenish dull, dry skin, and smooth uneven texture.',
        price: 77.00,
        qty: 25,
        imageUrl: 'assets/item_5.webp'
      },
      {
        name: 'Belif The True Cream Aqua Bomb with Hyaluronic Acid and Nicacinamide',
        description: 'A moisturizer that boosts skin hydration levels by 231.4 percent and delivers hydration to ten layers of the skin in as little as ten seconds.',
        price: 38.00,
        qty: 25,
        imageUrl: 'assets/item_6.webp'
      },
      {
        name: 'Fresh Lotus Youth Preserve Line & Texture Smoothing Moisturizer',
        description: 'A daily lightweight moisturizer that helps smooth texture and the look of fine lines while boosting hydration for radiant, youthful-looking skin.',
        price: 56.00,
        qty: 25,
        imageUrl: 'assets/item_7.webp'
      },
      {
        name: 'The INKEY List',
        description: 'A silky, oil-free face moisturizer with Niacinamide. Clinically proven increase skin hydration and help minimize excess oiliness in the skin.',
        price: 12.00,
        qty: 25,
        imageUrl: 'assets/item_8.webp'
      },
      {
        name: 'First Aid Beauty Ultra Repair Cream Intense Hydration',
        description: 'This award-winning moisturizer instantly relieves dry, distressed skin and eczema, plus strengthens skin barrier in 7 days for calm, comfortable skin.',
        price: 38.00,
        qty: 25,
        imageUrl: 'assets/item_9.webp'
      },
      {
        name: 'Farmacy Honey Milk Hydrating Essence with Chamonile + Ceramides',
        description: 'A nurturing milky essence that drenches skin in hydration as it comforts and calms redness.',
        price: 34.00,
        qty: 25,
        imageUrl: 'assets/item_10.webp'
      },
      {
        name: 'The INKEY List Caffeine De-puffing + Dark Circle Eye Cream',
        description: 'A lightweight, hydrating eye cream with a blend of caffeine and peptides, clinically proven to reduce the appearance of puffiness & dark circles.',
        price: 11.00,
        qty: 25,
        imageUrl: 'assets/item_11.webp'
      },
      {
        name: 'Belif Moisturing Eye Bomb with Peptide and Caramide',
        description: 'A lightweight cream that floods the eye area with explosive moisture for up to 48 hours, visibly firming and reducing fine lines and wrinkles.',
        price: 48.00,
        qty: 25,
        imageUrl: 'assets/item_12.webp'
      },
      {
        name: 'Dieux Auracle Peptide & Antioxidant Eye Gel',
        description: 'A juicy eye gel that intensely hydrates with 10 percent glycerin while visibly softening dark circles, wrinkles, and puffiness with renewable algae extracts and peptides.',
        price: 44.00,
        qty: 25,
        imageUrl: 'assets/item_13.webp'
      },
      {
        name: 'Fresh Lotus Youth Preserve Depuffing Eye Cream',
        description: 'A lightweight, visibly depuffing cream that smooths the look of lines around the delicate eye area for a radiant, youthful look.',
        price: 47.00,
        qty: 25,
        imageUrl: 'assets/item_14.webp'
      },
      {
        name: 'Shiseido Benefiance Wrinkle Smoothing Eye Cream',
        description: 'A daily, visibly age-defying eye cream that diminishes the appearance of wrinkles and dark circles.',
        price: 65.00,
        qty: 25,
        imageUrl: 'assets/item_15.webp'
      },
      {
        name: 'Olenhenriksen Banana Bright+ Vitamin C Brightening Eye Cream',
        description: 'A bestselling fragrance-free eye cream, powered by gold-complexed vitamin C, that brightens, visibly diminishes dark circles and crow’s feet and improves concealer application and wear.',
        price: 44.00,
        qty: 25,
        imageUrl: 'assets/item_16.webp'
      },
      {
        name: 'Clarins Double Serum Eye Firming & Hydrating Anti-Aging Concentrate',
        description: 'A two-in-one formula that combines into one powerhouse eye serum to visibly smooth, firm, and hydrate for more youthful-looking eyes.',
        price: 83.00,
        qty: 25,
        imageUrl: 'assets/item_17.webp'
      },
      {
        name: 'Glow Recipe Guava Vitamin C Bright-Eye Gel Cream',
        description: 'A potent, yet gentle brightening eye cream to visibly reduce dark circles, hydrate, & depuff the entire eye area with 10% encapsulated vitamin C complex, niacinamide blend, & peptides.',
        price: 38.00,
        qty: 25,
        imageUrl: 'assets/item_18.webp'
      },
      {
        name: 'The Ordinary Multi-Peptide Eye Serum',
        description: 'A multi-peptide eye serum to target dark circles, puffiness, and multiple signs of aging.',
        price: 25.00,
        qty: 25,
        imageUrl: 'assets/item_19.webp'
      },
      {
        name: 'Naturally Serious Zero Baggage Anti-Dark Circle Eye Cream',
        description: 'A potent eye cream with plant-derived sodium phytate and caffeine to reduce the look of under-eye bags, dark circles, and fine lines',
        price: 26.00,
        qty: 25,
        imageUrl: 'assets/item_20.webp'
      },
      {
        name: 'Youth To The People SuperFood Gentle Antioxidant Refillable Cleanser',
        description: 'A pH-balanced, non-drying face cleanser formulated with antioxidants to gently yet effectively remove makeup, SPF, and excess oils that can clog pores.',
        price: 39.00,
        qty: 25,
        imageUrl: 'assets/item_21.webp'
      },
      {
        name: 'Glow Recipe Avocado Ceramide Moisture Barrier Cleanser',
        description: 'A gentle hydrating cleanser packed with ceramides and colloidal oatmeal to nourish skin while effectively melting away makeup, SPF, and excess oil.',
        price: 28.00,
        qty: 25,
        imageUrl: 'assets/item_22.webp'
      },
      {
        name: 'Farmacy Green Clean Makeup Removing CLeansing Balm',
        description: 'An all-in-one award-winning face cleanser that is clinically proven to remove over 99% of SPF, long wear foundation, and waterproof mascara while improving texture + hydration after one use.',
        price: 36.00,
        qty: 25,
        imageUrl: 'assets/item_23.webp'
      },
      {
        name: 'Peter Tomas Roth Anti-Aging Cleansing Get',
        description: 'A gel that effectively cleanses pores and helps diminish the look of fine lines and wrinkles as it exfoliates with glycolic and salicylic acids.',
        price: 39.00,
        qty: 25,
        imageUrl: 'assets/item_24.webp'
      },
      {
        name: 'Skinfix Barrier+ Foaming Oil Hydrating Cleanser',
        description: 'A foaming cleanser that removes dirt and makeup and reduces visible redness without stripping lipids from skin.',
        price: 30.00,
        qty: 25,
        imageUrl: 'assets/item_25.webp'
      },
      {
        name: 'Tatcha The Rice Wash Skin-Softening Cleanser',
        description:'A non-stripping cleanser that gently washes away daily buildup while replenishing moisture to reveal visibly softer, more luminous, clean skin.',
        price: 40.00,
        qty: 25,
        imageUrl: 'assets/item_26.webp'
      },
      {
        name: 'Fenty Skin Total Cleansr Remove-It-All Cleanser with Barbados Cherry',
        description: 'Get that fresh, clean feeling with our plush creamy cleanser that refines the look of pores and instantly washes away dirt, oil and impurities without leaving skin feeling tight.',
        price: 30.00,
        qty: 25,
        imageUrl: 'assets/item_27.webp'
      },
      {
        name: 'Drunk Elephant Beste No. 9 Jelly Cleanser',
        description: 'A gentle cleanser to remove makeup, excess oil, pollution, and grime that rinses away without residue, leaving skin clean and soft.',
        price: 34.00,
        qty: 25,
        imageUrl: 'assets/item_28.webp'
      },
      {
        name: 'Dermalogica Precleanse Oil',
        description: 'A thoroughly cleansing oil that melts away waterproof makeup, SPF, debris, and oil without clogging pores or stripping your skin’s natural oils.',
        price: 49.00,
        qty: 25,
        imageUrl: 'assets/item_29.webp'
      },
      {
        name: 'Mara Chai + Moringa Algae Ensyme Cleansing Oil',
        description: 'A gentle, exfoliating cleansing oil with fruit enzymes, chia, and squalane that effortlessly removes makeup, SPF, and grime, leaving skin hydrated and glowing.',
        price: 58.00,
        qty: 25,
        imageUrl: 'assets/item_30.webp'
      },
      {
        name: 'The Ordinary Hyaluranic Acid 2% + B5 Hydrating Serum',
        description: 'A reformulated hydrating serum that features five forms of hyaluronic acid, added ceramides, and a new lightweight texture.',
        price: 9.90,
        qty: 25,
        imageUrl: 'assets/item_31.webp'
      },
      {
        name: 'Glow Recipe Watermelon Glow Niacinamide Dew Drops Serum ',
        description: 'A breakthrough, multi-use highlighting serum that hydrates and visibly reduces the look of hyperpigmentation for a dewy, reflective glow—without mica, glitter, or gray cast.',
        price: 35.00,
        qty: 25,
        imageUrl: 'assets/item_32.webp'
      },
      {
        name: 'Topicals Mini Faded Serum for Darker Spots & Discoloration',
        description: 'A hyperpigmentation-safe serum that visibly reduces stubborn discoloration, post-blemish marks, scars, and spots—for all ethnicities and skin shades',
        price: 18.00,
        qty: 25,
        imageUrl: 'assets/item_33.webp'
      },
      {
        name: 'Paulas Choice C15 Vitamin C Super Booster',
        description: 'A fast-acting formula with 15 percent vitamin C that is clinically shown to visibly brighten skin in as few as 15 minutes and visibly improve firmness, discoloration, and dullness.',
        price: 55.00,
        qty: 25,
        imageUrl: 'assets/item_34.webp'
      },
      {
        name: 'Kosas Plump + Juicy Vegan Collagen + Probiotic Spray-On Serum',
        description: 'A spray-on vegan collagen and probiotic serum that hydrates, soothes, and visibly firms, lifts, and plumps. The ultimate makeup prep step.',
        price: 48.00,
        qty: 25,
        imageUrl: 'assets/item_35.webp'
      },
      {
        name: 'Laneige Water Bank Hyaluronic Serum',
        description: 'A juicy serum that intensely hydrates for a smooth, supple complexion and is hypoallergenic, dermatologist-tested, and suitable for sensitive skin.',
        price: 45.00,
        qty: 25,
        imageUrl: 'assets/item_36.webp'
      },
      {
        name: 'Estee Lauder Advanced Night Repair Multi-Recovery Complex Serum with Hyaluronic Acid',
        description: 'A super serum that features Estée Lauder’s Night Peptide to visibly reduce multiple signs of aging for a smoother, younger, more radiant look.',
        price: 125.00,
        qty: 25,
        imageUrl: 'assets/item_37.webp'
      },
      {
        name: 'Tower 28 Beauty SOS Daily Rescure Facial Spray',
        description: 'An award-winning daily facial spray that soothes + purifies stressed-out skin helping to calm visible irritation and redness.',
        price: 12.00,
        qty: 25,
        imageUrl: 'assets/item_38.webp'
      },
      {
        name: 'iNNbeauty Project Pimple Paste Overnight Blemish Spot Treatment',
        description: 'A fast-acting blemish spot treatment that zaps pimples overnight with zero irritation and helps brighten the look of spots from past breakouts',
        price: 18.00,
        qty: 25,
        imageUrl: 'assets/item_39.webp'
      },
      {
        name: "innisfree Bija Salicylic Spot Gel Serum",
        description: 'A daily, invisible spot gel with salicylic acid and Bija seed oil that targets buildup and impurities while addressing imperfections.',
        price: 18.00,
        qty: 25,
        imageUrl: 'assets/item_40.webp'
      },

  
  ];
  
  module.exports = items;