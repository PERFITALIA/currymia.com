// ─── Frozen Fruit Pulp ───────────────────────────────────────────────────────
import alphonsoMangoPulp from '../assets/product/rte_food/Frozen Fruit Pulp/alphonso_mango_pulp.png';
import kesarMangoPulp from '../assets/product/rte_food/Frozen Fruit Pulp/kesar_mango_pulp.png';
import totapuriMangoPulp from '../assets/product/rte_food/Frozen Fruit Pulp/totapuri_mango_pulp.png';
import totapuriMangoSlices from '../assets/product/rte_food/Frozen Fruit Pulp/totapuri_mango_slices.png';
import alphonsoMangoDices from '../assets/product/rte_food/Frozen Fruit Pulp/alphonso_mango_dices.png';
import sapotaChikuSlices from '../assets/product/rte_food/Frozen Fruit Pulp/sapota_chiku_slices.png';
import whiteGuavaPulp from '../assets/product/rte_food/Frozen Fruit Pulp/white_guava_pulp.png';
import pinkGuavaPulp from '../assets/product/rte_food/Frozen Fruit Pulp/pink_guava_pulp.png';
import redDragonFruitPulp from '../assets/product/rte_food/Frozen Fruit Pulp/red_dragon_fruit_pulp.png';
import whiteDragonFruitPulp from '../assets/product/rte_food/Frozen Fruit Pulp/white_dragon_fruit_pulp.png';
import anjeerFigPulp from '../assets/product/rte_food/Frozen Fruit Pulp/anjeer_fig_pulp.png';
import custardApplePulp from '../assets/product/rte_food/Frozen Fruit Pulp/custard_apple_pulp.png';

export const frozenFruitPulpData = {
  categoryTitle: 'Frozen Fruit Pulp',
  categorySubtitle: 'Pure Sunshine. Pure Bliss. – No Added Colours or Flavours',
  heroDescription:
    'Made from 100% real fruits – freshly packed and frozen at peak ripeness. Perfect for milkshakes, desserts, smoothies, and traditional Indian sweets.',
  sections: [
    {
      sectionTitle: 'Mango Range',
      products: [
        { id: 'alphonso-mango-pulp', title: 'Alphonso Mango Pulp', image: alphonsoMangoPulp, badge: 'Premium', weight: '1kg' },
        { id: 'kesar-mango-pulp', title: 'Kesar Mango Pulp', image: kesarMangoPulp, badge: 'Bestseller', weight: '1kg' },
        { id: 'totapuri-mango-pulp', title: 'Totapuri Mango Pulp', image: totapuriMangoPulp, weight: '1kg' },
        { id: 'totapuri-mango-slices', title: 'Totapuri Mango Slices', image: totapuriMangoSlices, weight: '400g' },
        { id: 'alphonso-mango-dices', title: 'Alphonso Mango Dices', image: alphonsoMangoDices, badge: 'Premium', weight: '400g' },
      ],
    },
    {
      sectionTitle: 'Guava & Exotic Fruits',
      products: [
        { id: 'white-guava-pulp', title: 'White Guava Pulp', image: whiteGuavaPulp, weight: '1kg' },
        { id: 'pink-guava-pulp', title: 'Pink Guava Pulp', image: pinkGuavaPulp, badge: 'Rich Colour', weight: '1kg' },
        { id: 'red-dragon-fruit-pulp', title: 'Red Dragon Fruit Pulp', image: redDragonFruitPulp, badge: 'Exotic', weight: '1kg' },
        { id: 'white-dragon-fruit-pulp', title: 'White Dragon Fruit Pulp', image: whiteDragonFruitPulp, badge: 'Exotic', weight: '1kg' },
        { id: 'anjeer-fig-pulp', title: 'Anjeer Fig Pulp', image: anjeerFigPulp, weight: '300g' },
        { id: 'custard-apple-pulp', title: 'Custard Apple Pulp', image: custardApplePulp, badge: 'Seasonal', weight: '500g' },
        { id: 'sapota-chiku-slices', title: 'Sapota Chiku Slices', image: sapotaChikuSlices, weight: '400g' },
      ],
    },
  ],
};
