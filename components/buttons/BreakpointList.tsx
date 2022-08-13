import React from 'react';
import Breakpoint from '@/components/buttons/Breakpoint';
import { allBreakpoints } from '@/data/breakpoints';
import { IBreakpoint } from '@/interface/breakpoint';

interface Props {
  setViewSize: (value: string) => void;
}

const BreakpointList = ({ setViewSize }: Props) => {
  const breakpoints = allBreakpoints;

  return (
    <>
      {breakpoints.map((breakpoint: IBreakpoint) => {
        return (
          <Breakpoint
            key={breakpoint.name}
            name={breakpoint.name}
            onClick={() => setViewSize(breakpoint.maxWidth)}
          />
        );
      })}
    </>
  );
};

export default BreakpointList;
