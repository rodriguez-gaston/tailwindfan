import React, { useState } from 'react';
import BreakpointList from '@/components/buttons/BreakpointList';
import Copy from '@/components/icons/Copy';
import Code from '@/components/icons/CodeSmall';
import Heart from '@/components/icons/Heart';

const Block = () => {
  const [viewSize, setViewSize] = useState<string>('w-full');

  return (
    <section className="space-y-4">
      <section className="space-y-2">
        <h2 className="text-xl font-bold">Simple Button</h2>
        <section
          className="flex items-center justify-between gap-4"
          style={{ maxWidth: viewSize }}
        >
          <section className="flex items-center gap-4">
            <section className="flex gap-2">
              <button className="text-sm p-2 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white">
                <Code />
              </button>
              <button className="text-sm p-2 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white">
                <Copy />
              </button>
            </section>
            <section className="lg:flex gap-2 hidden pl-4 border-l-2 border-gray-500">
              <BreakpointList setViewSize={setViewSize} />
            </section>
          </section>
          <section>
            <button className="text-sm p-2 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white">
              <Heart />
            </button>
          </section>
        </section>
      </section>
      <section
        className="border-2 border-gray-500 rounded-lg h-[400px] lg:h-[600px] w-full"
        style={{ maxWidth: viewSize }}
      >
        <p>bloque</p>
      </section>
    </section>
  );
};

export default Block;
