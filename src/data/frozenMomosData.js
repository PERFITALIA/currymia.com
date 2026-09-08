// ─── Frozen Momos ────────────────────────────────────────────────────────────
import vegetableMomos from '../assets/product/rte_food/Frozen Momos/vegetable_momos.png';
import chickenMomos from '../assets/product/rte_food/Frozen Momos/chicken_momos.png';
import cheeseCornMomos from '../assets/product/rte_food/Frozen Momos/cheese_corn_momos.png';
import paneerMomos from '../assets/product/rte_food/Frozen Momos/paneer_momos.png';
import periPeriMomos from '../assets/product/rte_food/Frozen Momos/peri_peri_momos.png';
import schezwanMomos from '../assets/product/rte_food/Frozen Momos/schezwan_momos.png';

export const frozenMomosData = {
  categoryTitle: 'Frozen Momos',
  categorySubtitle: 'Soft. Steamed. Simply Irresistible.',
  heroDescription:
    'Authentic Asian-recipe momos made with real fillings – steamed, not fried. From classic veg to spicy schezwan, there\'s a momo for every mood.',
  sections: [
    {
      sectionTitle: 'Veg Momos',
      products: [
        { id: 'vegetable-momos', title: 'Vegetable Momos', image: vegetableMomos, badge: 'Bestseller', weight: '300g', pieces: '12 Pcs' },
        { id: 'cheese-corn-momos', title: 'Cheese Corn Momos', image: cheeseCornMomos, weight: '300g', pieces: '12 Pcs' },
        { id: 'paneer-momos', title: 'Paneer Momos', image: paneerMomos, badge: 'Fresh Paneer', weight: '300g', pieces: '12 Pcs' },
        { id: 'peri-peri-momos', title: 'Peri Peri Momos', image: periPeriMomos, badge: 'Spicy', weight: '300g', pieces: '12 Pcs' },
        { id: 'schezwan-momos', title: 'Schezwan Momos', image: schezwanMomos, badge: 'Fiery Hot', weight: '300g', pieces: '12 Pcs' },
      ],
    },
    {
      sectionTitle: 'Non-Veg Momos',
      products: [
        { id: 'chicken-momos', title: 'Chicken Momos', image: chickenMomos, badge: 'Non-Veg', weight: '300g', pieces: '12 Pcs' },
      ],
    },
  ],
};
