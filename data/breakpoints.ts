import { IBreakpoint } from '@/interface/breakpoint';

export const allBreakpoints: Array<IBreakpoint> = [
  {
    name: 'Mobile',
    maxWidth: '340px',
  },
  {
    name: 'Small',
    maxWidth: '640px',
  },
  {
    name: 'Medium',
    maxWidth: '768px',
  },
  {
    name: 'Large',
    maxWidth: '1024px',
  },
  {
    name: 'Full',
    maxWidth: '100%',
  },
];
