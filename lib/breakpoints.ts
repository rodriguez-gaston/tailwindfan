import { Breakpoint } from '@/interface/breakpoint';

export const allBreakpoints: Array<Breakpoint> = [
  {
    name: 'Mobile',
    maxWidth: 'max-w-[340px]',
  },
  {
    name: 'Small',
    maxWidth: 'max-w-[640px]',
  },
  {
    name: 'Medium',
    maxWidth: 'max-w-[768px]',
  },
  {
    name: 'Large',
    maxWidth: 'max-w-[1024px]',
  },
  {
    name: 'Full',
    maxWidth: 'max-w-full',
  },
];
