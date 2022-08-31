import DeviceDesktop from '@/components/icons/DeviceDesktop';
import DeviceMobile from '@/components/icons/DeviceMobile';
import DeviceMobileRotated from '@/components/icons/DeviceMobileRotated';
import DeviceTablet from '@/components/icons/DeviceTablet';
import DeviceTabletRotated from '@/components/icons/DeviceTabletRotated';
import { IBreakpoint } from '@/interface/breakpoint';

export const allBreakpoints: Array<IBreakpoint> = [
  {
    name: 'Mobile',
    maxWidth: '340px',
    icon: <DeviceMobile />,
  },
  {
    name: 'Small',
    maxWidth: '642px',
    icon: <DeviceMobileRotated />,
  },
  {
    name: 'Medium',
    maxWidth: '770px',
    icon: <DeviceTablet />,
  },
  {
    name: 'Large',
    maxWidth: '1026px',
    icon: <DeviceTabletRotated />,
  },
  {
    name: 'Full',
    maxWidth: '100%',
    icon: <DeviceDesktop />,
  },
];
