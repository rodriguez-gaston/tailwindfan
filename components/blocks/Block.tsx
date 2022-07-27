import React, { useState } from 'react';
import BreakpointList from '../buttons/BreakpointList';

const Block = () => {
  const [viewSize, setViewSize] = useState<string>('w-full');

  return (
    <section className="space-y-4">
      <section className="sm:flex sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        <h2 className="text-xl font-bold">Simple Button</h2>
        <section className="flex items-center gap-2">
          <section className="lg:flex gap-2 hidden pr-2 border-r-2 border-gray-500">
            <BreakpointList setViewSize={setViewSize} />
          </section>
          <section className="flex gap-2">
            <button className="text-sm p-2 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white">
              View code
            </button>
            <button className="text-sm p-2 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white">
              Copy code
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
