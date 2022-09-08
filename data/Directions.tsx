import { IDirection } from '@/interface/direction';
import Arrow from '@/components/icons/Arrow';

export const allDirections: Array<IDirection> = [
  {
    name: 'To bottom',
    direction: 'bg-gradient-to-b',
    icon: <Arrow />,
  },
  {
    name: 'To bottom left',
    direction: 'bg-gradient-to-bl',
    icon: <Arrow className="rotate-45" />,
  },
  {
    name: 'To left',
    direction: 'bg-gradient-to-l',
    icon: <Arrow className="rotate-90" />,
  },
  {
    name: 'To top left',
    direction: 'bg-gradient-to-tl',
    icon: <Arrow className="rotate-135" />,
  },
  {
    name: 'To top',
    direction: 'bg-gradient-to-t',
    icon: <Arrow className="rotate-180" />,
  },
  {
    name: 'To top right',
    direction: 'bg-gradient-to-tr',
    icon: <Arrow className="-rotate-135" />,
  },
  {
    name: 'To right',
    direction: 'bg-gradient-to-r',
    icon: <Arrow className="-rotate-90" />,
  },
  {
    name: 'To bottom right',
    direction: 'bg-gradient-to-br',
    icon: <Arrow className="-rotate-45" />,
  },
];
