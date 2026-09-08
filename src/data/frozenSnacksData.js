// ─── Frozen Snacks Data (Sourced from Real Product Packaging) ───
import amritsariSamosa        from '../assets/product/rte_food/Frozen Snacks/amritsari_samosa.png';
import cheeseCornSamosa       from '../assets/product/rte_food/Frozen Snacks/cheese_corn_samosa.png';
import chickenSamosa          from '../assets/product/rte_food/Frozen Snacks/chicken_samosa.png';
import chineseSamosa          from '../assets/product/rte_food/Frozen Snacks/chinese_samosa.png';
import miniPunjabiPattiSamosa from '../assets/product/rte_food/Frozen Snacks/mini_punjabi_patti_samosa.png';
import mixVegCocktailSamosa   from '../assets/product/rte_food/Frozen Snacks/mix_veg_cocktail_samosa.png';
import greenPeasKachori       from '../assets/product/rte_food/Frozen Snacks/green_peas_kachori.png';
import moongDalKachori        from '../assets/product/rte_food/Frozen Snacks/moong_dal_kachori.png';
import lilvaKachori           from '../assets/product/rte_food/Frozen Snacks/lilva_kachori.png';
import chineseSpringRoll      from '../assets/product/rte_food/Frozen Snacks/chinese_spring_roll.png';
import miniVegSpringRoll      from '../assets/product/rte_food/Frozen Snacks/mini_veg_spring_roll.png';
import alooTikki              from '../assets/product/rte_food/Frozen Snacks/aloo_tikki.png';
import haraBharaKabab         from '../assets/product/rte_food/Frozen Snacks/hara_bhara_kabab.png';
import alooVada               from '../assets/product/rte_food/Frozen Snacks/aloo_vada.png';

export const frozenSnacksData = {
  categoryTitle: 'Frozen Snacks',
  categorySubtitle: 'Street-Style Snacks – Real Crunch. Real Flavour.',
  heroDescription:
    'Samosas, kachoris, spring rolls and kababs – Currymia brings the best of Indian street food to your kitchen. Just fry or air-fry and enjoy!',
  sections: [
    {
      sectionTitle: 'Samosas',
      products: [
        { id: 'amritsari-samosa', title: 'Amritsari Samosa', image: amritsariSamosa, badge: 'Punjabi Special', weight: '450g', pieces: '10 Pieces' },
        { id: 'cheese-corn-samosa', title: 'Cheese & Corn Samosa', image: cheeseCornSamosa, badge: 'Cheesy Crunch', weight: '400g', pieces: '20 Pieces' },
        { id: 'chicken-samosa', title: 'Chicken Samosa', image: chickenSamosa, badge: 'Non-Veg', weight: '400g', pieces: '20 Pieces' },
        { id: 'chinese-samosa', title: 'Chinese Samosa', image: chineseSamosa, badge: 'Indo-Chinese', weight: '240g', pieces: '12 Pieces' },
        { id: 'mini-punjabi-patti-samosa', title: 'Mini Punjabi Patti Samosa', image: miniPunjabiPattiSamosa, badge: 'Street Classic', weight: '240g', pieces: '12 Pieces' },
        { id: 'mix-veg-cocktail-samosa', title: 'Mix Veg Cocktail Samosa', image: mixVegCocktailSamosa, badge: 'Party Pack', weight: '270g', pieces: '15 Pieces' },
      ],
    },
    {
      sectionTitle: 'Kachoris & Spring Rolls',
      products: [
        { id: 'green-peas-kachori', title: 'Green Peas Kachori', image: greenPeasKachori, badge: 'Fresh Peas', weight: '300g', pieces: '10 Pieces' },
        { id: 'moong-dal-kachori', title: 'Moong Dal Kachori', image: moongDalKachori, badge: 'Traditional', weight: '300g', pieces: '10 Pieces' },
        { id: 'lilva-kachori', title: 'Lilva Kachori', image: lilvaKachori, badge: 'Seasonal Special', weight: '300g', pieces: '10 Pieces' },
        { id: 'chinese-spring-roll', title: 'Chinese Spring Roll', image: chineseSpringRoll, badge: 'Golden & Crispy', weight: '400g', pieces: '20 Pieces' },
        { id: 'mini-veg-spring-roll', title: 'Mini Veg Spring Roll', image: miniVegSpringRoll, badge: 'Party Size', weight: '240g', pieces: '12 Pieces' },
      ],
    },
    {
      sectionTitle: 'Tikkis, Kababs & Vadas',
      products: [
        { id: 'aloo-tikki', title: 'Aloo Tikki', image: alooTikki, badge: 'Street Classic', weight: '400g', pieces: '10 Pieces' },
        { id: 'hara-bhara-kabab', title: 'Hara Bhara Kabab', image: haraBharaKabab, badge: 'Rich Spinach & Peas', weight: '240g', pieces: '12 Pieces' },
        { id: 'aloo-vada', title: 'Aloo Vada', image: alooVada, badge: 'Mumbai Classic', weight: '360g', pieces: '6 Pieces' },
      ],
    },
  ],
};
