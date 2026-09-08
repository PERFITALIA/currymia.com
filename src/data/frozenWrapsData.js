// ─── Frozen Wraps ────────────────────────────────────────────────────────────
import choleMasalaWrap from '../assets/product/rte_food/Frozen Wraps/chole_masala_wrap.png';
import mixVegWrap from '../assets/product/rte_food/Frozen Wraps/mix_veg_wrap.png';
import southwestPaneerWrap from '../assets/product/rte_food/Frozen Wraps/southwest_paneer_wrap.png';
import schezwanChilliPaneerWrap from '../assets/product/rte_food/Frozen Wraps/schezwan_chilli_paneer_wrap.png';
import alooTikkiKathiRoll from '../assets/product/rte_food/Frozen Wraps/aloo_tikki_kathi_roll.png';
import paneerTikkaKathiRoll from '../assets/product/rte_food/Frozen Wraps/paneer_tikka_kathi_roll.png';
import tawaPaneerKathiRoll from '../assets/product/rte_food/Frozen Wraps/tawa_paneer_kathi_roll.png';
import manchurianWrap from '../assets/product/rte_food/Frozen Wraps/manchurian_wrap.png';
import vegCheeseFrankieWrap from '../assets/product/rte_food/Frozen Wraps/veg_cheese_frankie_wrap.png';

export const frozenWrapsData = {
  categoryTitle: 'Frozen Wraps',
  categorySubtitle: 'Ready-to-Heat Wraps – Authentic Ingredients. Minimal Effort.',
  heroDescription:
    'Packed full of real fillings in soft, freshly-made flatbreads. From Punjabi chole to spicy schezwan paneer – a complete meal in minutes.',
  sections: [
    {
      sectionTitle: 'Wraps & Rolls',
      products: [
        { id: 'chole-masala-wrap', title: 'Chole Masala Wrap', image: choleMasalaWrap, badge: 'Punjabi Special', },
        { id: 'mix-veg-wrap', title: 'Mix Veg Wrap', image: mixVegWrap, badge: 'Healthy', },
        { id: 'southwest-paneer-wrap', title: 'Southwest Paneer Wrap', image: southwestPaneerWrap, badge: 'Fiery & Zesty', },
        { id: 'schezwan-chilli-paneer-wrap', title: 'Schezwan Chilli Paneer Wrap', image: schezwanChilliPaneerWrap, badge: 'Spicy', },
        { id: 'manchurian-wrap', title: 'Manchurian Wrap', image: manchurianWrap, badge: 'Indo-Chinese', },
        { id: 'veg-cheese-frankie-wrap', title: 'Veg Cheese Frankie Wrap', image: vegCheeseFrankieWrap, badge: 'Cheesy', },
      ],
    },
    {
      sectionTitle: 'Kathi Rolls',
      products: [
        { id: 'aloo-tikki-kathi-roll', title: 'Aloo Tikki Kathi Roll', image: alooTikkiKathiRoll, badge: 'Street Style', },
        { id: 'paneer-tikka-kathi-roll', title: 'Paneer Tikka Kathi Roll', image: paneerTikkaKathiRoll, badge: 'Smoky', },
        { id: 'tawa-paneer-kathi-roll', title: 'Tawa Paneer Kathi Roll', image: tawaPaneerKathiRoll, badge: 'Sizzling', },
      ],
    },
  ],
};
