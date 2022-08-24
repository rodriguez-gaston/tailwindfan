import Example from '@/components/blocks/Example';
import AnnouncementOne from '@/blocks/announcement/AnnouncementOne';
import AvatarOne from '@/blocks/avatar/AvatarOne';
import { ICategory } from '@/interface/blocks';

export const blocksList: ICategory[] = [
  {
    name: 'Example',
    url: 'example',
    blocks: [
      {
        id: 'example',
        title: 'Simple Alert',
        block: <Example />,
      },
    ],
  },
  {
    name: 'Announcement',
    url: 'announcement',
    image: 'announcement.png',
    blocks: [
      {
        id: '1',
        title: 'Simple Announcement',
        block: <AnnouncementOne />,
      },
    ],
  },
  {
    name: 'Avatar',
    url: 'avatar',
    image: 'avatar.png',
    blocks: [
      {
        id: '1',
        title: 'Simple Avatar',
        block: <AvatarOne />,
      },
    ],
  },
  {
    name: 'Badge',
    url: 'badge',
    image: 'badge.png',
    blocks: [],
  },
  {
    name: 'Blog',
    url: 'blog',
    image: 'blog.png',
    blocks: [],
  },
  {
    name: 'Breadcrumb',
    url: 'breadcrumb',
    blocks: [],
  },
  {
    name: 'Button',
    url: 'button',
    blocks: [],
  },
  {
    name: 'Buttons Group',
    url: 'buttons-group',
    blocks: [],
  },
  {
    name: 'Card',
    url: 'card',
    blocks: [],
  },
  {
    name: 'Cart',
    url: 'cart',
    blocks: [],
  },
  {
    name: 'Checkout',
    url: 'checkout',
    blocks: [],
  },
  {
    name: 'Contact',
    url: 'contact',
    blocks: [],
  },
  {
    name: 'CTA',
    url: 'cta',
    blocks: [],
  },
  {
    name: 'Dropdown',
    url: 'dropdown',
    blocks: [],
  },
  {
    name: 'FAQ',
    url: 'faq',
    blocks: [],
  },
  {
    name: 'Filter',
    url: 'filter',
    blocks: [],
  },
  {
    name: 'Footer',
    url: 'footer',
    blocks: [],
  },
  {
    name: 'Form',
    url: 'form',
    blocks: [],
  },
  {
    name: 'Gallery',
    url: 'gallery',
    blocks: [],
  },
  {
    name: 'Header',
    url: 'header',
    image: 'header.png',
    blocks: [],
  },
  {
    name: 'Hero',
    url: 'hero',
    blocks: [],
  },
  {
    name: 'Input',
    url: 'input',
    blocks: [],
  },
  {
    name: 'Menu',
    url: 'menu',
    blocks: [],
  },
  {
    name: 'Notification',
    url: 'notification',
    blocks: [],
  },
  {
    name: 'Popup',
    url: 'popup',
    blocks: [],
  },
  {
    name: 'Pricing',
    url: 'pricing',
    blocks: [],
  },
  {
    name: 'Product',
    url: 'product',
    blocks: [],
  },
  {
    name: 'Product Card',
    url: 'product-card',
    blocks: [],
  },
  {
    name: 'Product List',
    url: 'product-list',
    blocks: [],
  },
  {
    name: 'Radio',
    url: 'radio',
    blocks: [],
  },
  {
    name: 'Review',
    url: 'review',
    blocks: [],
  },
  {
    name: 'Section',
    url: 'section',
    blocks: [],
  },
  {
    name: 'Stat',
    url: 'stat',
    blocks: [],
  },
  {
    name: 'Step',
    url: 'step',
    blocks: [],
  },
  {
    name: 'Tab',
    url: 'tab',
    blocks: [],
  },
  {
    name: 'Table',
    url: 'table',
    blocks: [],
  },
  {
    name: 'Team',
    url: 'team',
    blocks: [],
  },
  {
    name: 'Testimonial',
    url: 'testimonial',
    blocks: [],
  },
];
