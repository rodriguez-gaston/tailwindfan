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
    blocks: [
      {
        id: '1',
        title: 'Simple Avatar',
        block: <AvatarOne />,
      },
    ],
  },
];
