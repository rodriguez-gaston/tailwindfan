import Example from '@/components/blocks/Example';
import AnnouncementOne from '@/blocks/announcement/AnnouncementOne';
import AvatarOne from '@/blocks/avatar/AvatarOne';

export const blocksList = [
  {
    id: 'example',
    category: 'example',
    title: 'Simple Alert',
    block: <Example />,
  },
  {
    id: '1',
    category: 'announcement',
    title: 'Simple Announcement',
    block: <AnnouncementOne />,
  },
  {
    id: '1',
    category: 'avatar',
    title: 'Simple Avatar',
    block: <AvatarOne />,
  },
];
