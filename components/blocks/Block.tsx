import React, { useState } from 'react';
import Breakpoint from '@/components/buttons/Breakpoint';
import { allBreakpoints } from '@/lib/breakpoints';

const Block = () => {
  const [viewSize, setViewSize] = useState<string>('w-full');
  const breakpoints = allBreakpoints;

  return (
    <div>
      <div className="lg:flex gap-4 hidden">
        <>
          {breakpoints.map((breakpoint) => {
            return (
              <Breakpoint
                key={breakpoint.name}
                name={breakpoint.name}
                onClick={() => setViewSize(breakpoint.maxWidth)}
              />
            );
          })}
        </>
      </div>
      <div
        className={`border-2 border-gray-500 rounded-lg h-[400px] lg:h-[600px] w-full ${viewSize}`}
      >
        <p>bloque</p>
      </div>
    </div>
  );
};

export default Block;
