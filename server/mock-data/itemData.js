const items = [
  {
    name: 'Tatcha, The Dewy Skin Cream',
    description:
      'A moisturizer that drenches skin in rich, long-lasting hydration with hyaluronic acid for a dewy glow and more. Proven to visibly plump fine lines, seal in moisture, and protect skin from oxidative stress for softer, more supple skin.',
    price: 72.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/7e/76/3f/1678136488/89a9336130074f59a7790cb2c2fa199a_1920x1920.png',
  },
  {
    name: 'Kiehls Ultra Facial Refillable Moisturizing Cream with Squalane',
    description:
      'A face cream formulated with squalane, glacial glycoprotein, and pro-ceramides to support your skin’s barrier for up to 72-hour hydration.',
    price: 39.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/ba/3d/54/1678222818/02add7671f0b4ed1b481d353a7b51885_1920x1920.png',
  },
  {
    name: 'Glow Recipe Plum Plump Refillable Hyaluronic Acid Moisturizer',
    description:
      'A hydrating, skin-balancing, whipped gel cream in a refillable jar, packed with polyglutamic acid, hyaluronic acid, and plum for visibly plump, glowing skin.',
    price: 40.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/60/b4/6a/1678136429/c124abc8b8ee41f499346068c7b36a7f_1920x1920.webp',
  },
  {
    name: 'The Ordinary Natural Moisturizing Factors + HA',
    description:
      'A hydrating formula with amino acids, dermal lipids, and hyaluronic acid.',
    price: 14.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/d5/e5/7f/1678136479/9ed03683366445e59b36011d9d494dca_1920x1920.png',
  },
  {
    name: 'Dr. Dennis Gross Skincare Advanced Retinol + Ferulic Intense Wrinkle Cream',
    description:
      'An intensely hydrating retinol cream formulated to visibly lift and firm skin, reduce fine lines and wrinkles, replenish dull, dry skin, and smooth uneven texture.',
    price: 77.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/47/67/57/1704315745/018cd12270e4728e9258604367caff0a_1920x1920.webp',
  },
  {
    name: 'Belif The True Cream Aqua Bomb with Hyaluronic Acid and Nicacinamide',
    description:
      'A moisturizer that boosts skin hydration levels by 231.4 percent and delivers hydration to ten layers of the skin in as little as ten seconds.',
    price: 38.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/75/28/4f/1678136476/63568c9a31ee429cbc339bf02a2fb17f_1920x1920.png',
  },
  {
    name: 'Fresh Lotus Youth Preserve Line & Texture Smoothing Moisturizer',
    description:
      'A daily lightweight moisturizer that helps smooth texture and the look of fine lines while boosting hydration for radiant, youthful-looking skin.',
    price: 56.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/47/91/16/1678136473/062b18bd014d4f6ba14618fac9fcf98b_1920x1920.png',
  },
  {
    name: 'The INKEY List',
    description:
      'A silky, oil-free face moisturizer with Niacinamide. Clinically proven increase skin hydration and help minimize excess oiliness in the skin.',
    price: 12.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/8e/4c/c5/1678136487/87118e6fc21a481abe6471d5838d4048_1920x1920.webp',
  },
  {
    name: 'First Aid Beauty Ultra Repair Cream Intense Hydration',
    description:
      'This award-winning moisturizer instantly relieves dry, distressed skin and eczema, plus strengthens skin barrier in 7 days for calm, comfortable skin.',
    price: 38.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/62/ab/8e/1679947214/f4ac2662c26142c2a92ba3b39d385d31_1920x1920.png',
  },
  {
    name: 'Farmacy Honey Milk Hydrating Essence with Chamonile + Ceramides',
    description:
      'A nurturing milky essence that drenches skin in hydration as it comforts and calms redness.',
    price: 34.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/90/2c/86/1678136490/86236b0db7c64c77b60b5fca36318248_1920x1920.webp',
  },
  {
    name: 'The INKEY List Caffeine De-puffing + Dark Circle Eye Cream',
    description:
      'A lightweight, hydrating eye cream with a blend of caffeine and peptides, clinically proven to reduce the appearance of puffiness & dark circles.',
    price: 11.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/28/ca/3c/1683316814/debe0c9ca09e4aa3ae5994dbc2f6f977_1920x1920.webp',
  },
  {
    name: 'Belif Moisturing Eye Bomb with Peptide and Caramide',
    description:
      'A lightweight cream that floods the eye area with explosive moisture for up to 48 hours, visibly firming and reducing fine lines and wrinkles.',
    price: 48.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/93/6a/04/1688414430/136b3f8778b74b058b249a4742acea05_1920x1920.png',
  },
  {
    name: 'Dieux Auracle Peptide & Antioxidant Eye Gel',
    description:
      'A juicy eye gel that intensely hydrates with 10 percent glycerin while visibly softening dark circles, wrinkles, and puffiness with renewable algae extracts and peptides.',
    price: 44.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/e1/66/c8/1698748516/018b854d4780722396397086cd1031e0_1920x1920.webp',
  },
  {
    name: 'Fresh Lotus Youth Preserve Depuffing Eye Cream',
    description:
      'A lightweight, visibly depuffing cream that smooths the look of lines around the delicate eye area for a radiant, youthful look.',
    price: 47.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/aa/a2/22/1678222815/6c5dd26752014601b7e2dd0592ad7a04_1920x1920.webp',
  },
  {
    name: 'Shiseido Benefiance Wrinkle Smoothing Eye Cream',
    description:
      'A daily, visibly age-defying eye cream that diminishes the appearance of wrinkles and dark circles.',
    price: 65.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/89/e7/55/1678222825/234f011afa2d4c48934afefa7b238238_1920x1920.png',
  },
  {
    name: 'Olenhenriksen Banana Bright+ Vitamin C Brightening Eye Cream',
    description:
      'A bestselling fragrance-free eye cream, powered by gold-complexed vitamin C, that brightens, visibly diminishes dark circles and crow’s feet and improves concealer application and wear.',
    price: 44.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/a4/d2/9c/1707339633/018d855f522b71d783a29dd94e3d8de2_1920x1920.png',
  },
  {
    name: 'Clarins Double Serum Eye Firming & Hydrating Anti-Aging Concentrate',
    description:
      'A two-in-one formula that combines into one powerhouse eye serum to visibly smooth, firm, and hydrate for more youthful-looking eyes.',
    price: 83.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/c5/92/0c/1678136430/518aee7cbfa548819d28bfad654a4005_1920x1920.webp',
  },
  {
    name: 'Glow Recipe Guava Vitamin C Bright-Eye Gel Cream',
    description:
      'A potent, yet gentle brightening eye cream to visibly reduce dark circles, hydrate, & depuff the entire eye area with 10% encapsulated vitamin C complex, niacinamide blend, & peptides.',
    price: 38.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/54/39/4e/1678136483/87ef44db043349d591d5bc3c4aaa994a_1920x1920.webp',
  },
  {
    name: 'The Ordinary Multi-Peptide Eye Serum',
    description:
      'A multi-peptide eye serum to target dark circles, puffiness, and multiple signs of aging.',
    price: 25.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/95/e1/10/1678136434/cad770b68e17430ea6372a5e9c5a604f_1920x1920.png',
  },
  {
    name: 'Naturally Serious Zero Baggage Anti-Dark Circle Eye Cream',
    description:
      'A potent eye cream with plant-derived sodium phytate and caffeine to reduce the look of under-eye bags, dark circles, and fine lines',
    price: 26.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/8e/a8/92/1678136477/f9034b37c96446748c370e5db41422af_1920x1920.webp',
  },
  {
    name: 'Youth To The People SuperFood Gentle Antioxidant Refillable Cleanser',
    description:
      'A pH-balanced, non-drying face cleanser formulated with antioxidants to gently yet effectively remove makeup, SPF, and excess oils that can clog pores.',
    price: 39.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/7e/76/3f/1678136488/89a9336130074f59a7790cb2c2fa199a_1920x1920.webp',
  },
  {
    name: 'Glow Recipe Avocado Ceramide Moisture Barrier Cleanser',
    description:
      'A gentle hydrating cleanser packed with ceramides and colloidal oatmeal to nourish skin while effectively melting away makeup, SPF, and excess oil.',
    price: 28.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/a4/d2/9c/1707339633/018d855f522b71d783a29dd94e3d8de2_1920x1920.webp',
  },
  {
    name: 'Farmacy Green Clean Makeup Removing CLeansing Balm',
    description:
      'An all-in-one award-winning face cleanser that is clinically proven to remove over 99% of SPF, long wear foundation, and waterproof mascara while improving texture + hydration after one use.',
    price: 36.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/89/e7/55/1678222825/234f011afa2d4c48934afefa7b238238_1920x1920.webp',
  },
  {
    name: 'Peter Tomas Roth Anti-Aging Cleansing Get',
    description:
      'A gel that effectively cleanses pores and helps diminish the look of fine lines and wrinkles as it exfoliates with glycolic and salicylic acids.',
    price: 39.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/c2/4c/2b/1678222822/28dbcace11184c67bf25f538a167e137_1920x1920.webp',
  },
  {
    name: 'Skinfix Barrier+ Foaming Oil Hydrating Cleanser',
    description:
      'A foaming cleanser that removes dirt and makeup and reduces visible redness without stripping lipids from skin.',
    price: 30.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/ba/3d/54/1678222818/02add7671f0b4ed1b481d353a7b51885_1920x1920.webp',
  },
  {
    name: 'Tatcha The Rice Wash Skin-Softening Cleanser',
    description:
      'A non-stripping cleanser that gently washes away daily buildup while replenishing moisture to reveal visibly softer, more luminous, clean skin.',
    price: 40.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/aa/a2/22/1678222815/6c5dd26752014601b7e2dd0592ad7a04_1920x1920.webp',
  },
  {
    name: 'Fenty Skin Total Cleansr Remove-It-All Cleanser with Barbados Cherry',
    description:
      'Get that fresh, clean feeling with our plush creamy cleanser that refines the look of pores and instantly washes away dirt, oil and impurities without leaving skin feeling tight.',
    price: 30.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/c5/92/0c/1678136430/518aee7cbfa548819d28bfad654a4005_1920x1920.webp',
  },
  {
    name: 'Drunk Elephant Beste No. 9 Jelly Cleanser',
    description:
      'A gentle cleanser to remove makeup, excess oil, pollution, and grime that rinses away without residue, leaving skin clean and soft.',
    price: 34.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/75/28/4f/1678136476/63568c9a31ee429cbc339bf02a2fb17f_1920x1920.webp',
  },
  {
    name: 'Dermalogica Precleanse Oil',
    description:
      'A thoroughly cleansing oil that melts away waterproof makeup, SPF, debris, and oil without clogging pores or stripping your skin’s natural oils.',
    price: 49.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/8e/4c/c5/1678136487/87118e6fc21a481abe6471d5838d4048_1920x1920.webp',
  },
  {
    name: 'Mara Chai + Moringa Algae Ensyme Cleansing Oil',
    description:
      'A gentle, exfoliating cleansing oil with fruit enzymes, chia, and squalane that effortlessly removes makeup, SPF, and grime, leaving skin hydrated and glowing.',
    price: 58.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/47/91/16/1678136473/062b18bd014d4f6ba14618fac9fcf98b_1920x1920.webp',
  },
  {
    name: 'The Ordinary Hyaluranic Acid 2% + B5 Hydrating Serum',
    description:
      'A reformulated hydrating serum that features five forms of hyaluronic acid, added ceramides, and a new lightweight texture.',
    price: 9.9,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/75/28/4f/1678136476/63568c9a31ee429cbc339bf02a2fb17f_1920x1920.webp',
  },
  {
    name: 'Glow Recipe Watermelon Glow Niacinamide Dew Drops Serum ',
    description:
      'A breakthrough, multi-use highlighting serum that hydrates and visibly reduces the look of hyperpigmentation for a dewy, reflective glow—without mica, glitter, or gray cast.',
    price: 35.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/8e/4c/c5/1678136487/87118e6fc21a481abe6471d5838d4048_1920x1920.webp',
  },
  {
    name: 'Topicals Mini Faded Serum for Darker Spots & Discoloration',
    description:
      'A hyperpigmentation-safe serum that visibly reduces stubborn discoloration, post-blemish marks, scars, and spots—for all ethnicities and skin shades',
    price: 18.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/a7/b6/80/1678136454/eeb1ddcab0b74f65ac6cd9d2351152fb_1920x1920.webp',
  },
  {
    name: 'Paulas Choice C15 Vitamin C Super Booster',
    description:
      'A fast-acting formula with 15 percent vitamin C that is clinically shown to visibly brighten skin in as few as 15 minutes and visibly improve firmness, discoloration, and dullness.',
    price: 55.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/62/ab/8e/1679947214/f4ac2662c26142c2a92ba3b39d385d31_1920x1920.webp',
  },
  {
    name: 'Kosas Plump + Juicy Vegan Collagen + Probiotic Spray-On Serum',
    description:
      'A spray-on vegan collagen and probiotic serum that hydrates, soothes, and visibly firms, lifts, and plumps. The ultimate makeup prep step.',
    price: 48.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/60/b4/6a/1678136429/c124abc8b8ee41f499346068c7b36a7f_1920x1920.webp',
  },
  {
    name: 'Laneige Water Bank Hyaluronic Serum',
    description:
      'A juicy serum that intensely hydrates for a smooth, supple complexion and is hypoallergenic, dermatologist-tested, and suitable for sensitive skin.',
    price: 45.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/54/39/4e/1678136483/87ef44db043349d591d5bc3c4aaa994a_1920x1920.webp',
  },
  {
    name: 'Estee Lauder Advanced Night Repair Multi-Recovery Complex Serum with Hyaluronic Acid',
    description:
      'A super serum that features Estée Lauder’s Night Peptide to visibly reduce multiple signs of aging for a smoother, younger, more radiant look.',
    price: 125.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/76/16/ec/1678136473/f3199b3df4d34a4aaf0a8650a29c2a95_1920x1920.webp',
  },
  {
    name: 'Tower 28 Beauty SOS Daily Rescure Facial Spray',
    description:
      'An award-winning daily facial spray that soothes + purifies stressed-out skin helping to calm visible irritation and redness.',
    price: 12.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/d5/e5/7f/1678136479/9ed03683366445e59b36011d9d494dca_1920x1920.png',
  },
  {
    name: 'iNNbeauty Project Pimple Paste Overnight Blemish Spot Treatment',
    description:
      'A fast-acting blemish spot treatment that zaps pimples overnight with zero irritation and helps brighten the look of spots from past breakouts',
    price: 18.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/d5/e5/7f/1678136479/9ed03683366445e59b36011d9d494dca_1920x1920.png',
  },
  {
    name: 'innisfree Bija Salicylic Spot Gel Serum',
    description:
      'A daily, invisible spot gel with salicylic acid and Bija seed oil that targets buildup and impurities while addressing imperfections.',
    price: 18.0,
    qty: 25,
    imageUrl:
      'https://www.teamdrjoseph.com/thumbnail/7e/76/3f/1678136488/89a9336130074f59a7790cb2c2fa199a_1920x1920.png',
  },
];

module.exports = items;
