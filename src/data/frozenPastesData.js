// ─── Frozen Pastes & Base Gravies ────────────────────────────────────────────
import tomatoPuree from '../assets/product/rte_food/FROZEN PASTES & BASE GRAVIES/tomato_puree.png';
import onionPaste from '../assets/product/rte_food/FROZEN PASTES & BASE GRAVIES/onion_paste.png';
import tomatoOnionBasePaste from '../assets/product/rte_food/FROZEN PASTES & BASE GRAVIES/tomato_onion_base_paste.png';

export const frozenPastesData = {
  categoryTitle: 'Frozen Pastes & Base Gravies',
  categorySubtitle: 'Restaurant-Quality Cooking Base – 100% Natural',
  heroDescription:
    'Save time without compromising on taste. Our frozen pastes and base gravies are made from fresh ingredients with no added colours, flavours or preservatives.',
  sections: [
    {
      sectionTitle: 'Pastes & Purees',
      products: [
        { id: 'tomato-puree', title: 'Tomato Puree', image: tomatoPuree, badge: 'Pure Tomato', weight: '500g' },
        { id: 'onion-paste', title: 'Onion Paste', image: onionPaste, badge: 'Fresh Onion', weight: '500g' },
        { id: 'tomato-onion-base-paste', title: 'Tomato Onion Base Paste', image: tomatoOnionBasePaste, badge: 'Chef\'s Favourite', weight: '500g' },
      ],
    },
  ],
};
