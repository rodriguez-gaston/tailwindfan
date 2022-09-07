import React from 'react';
import Copy from '@/components/icons/Copy';
import Heart from '@/components/icons/Heart';
import Arrow from '../icons/Arrow';

const Color = () => {
  return (
    <section className="space-y-4">
      <section className="space-y-2">
        <h2 className="text-xl font-medium text-gray-800">Gradient</h2>
      </section>
      <section className="border border-gray-300 rounded-lg w-full">
        <section className="border-b border-gray-300 p-2 flex items-center justify-between gap-4 rounded-t-lg text-gray-600">
          <button className="text-sm p-2 rounded-lg border border-gray-300 hover:bg-gray-100">
            <Copy />
          </button>
          <button className="text-sm p-2 rounded-lg border border-gray-300 hover:bg-gray-100">
            <Heart />
          </button>
        </section>
        <section className="h-48"></section>
        <section className="border-t border-gray-300 p-2 flex items-center justify-start gap-1 text-gray-600">
          <button className="text-sm p-0.5 rounded-lg border border-gray-300 hover:bg-gray-100">
            <Arrow />
          </button>
          <button className="text-sm p-0.5 rounded-lg border border-gray-300 hover:bg-gray-100 ">
            <Arrow className="rotate-45" />
          </button>
          <button className="text-sm p-0.5 rounded-lg border border-gray-300 hover:bg-gray-100 ">
            <Arrow className="rotate-90" />
          </button>
          <button className="text-sm p-0.5 rounded-lg border border-gray-300 hover:bg-gray-100 ">
            <Arrow className="rotate-135" />
          </button>
          <button className="text-sm p-0.5 rounded-lg border border-gray-300 hover:bg-gray-100 ">
            <Arrow className="rotate-180" />
          </button>
          <button className="text-sm p-0.5 rounded-lg border border-gray-300 hover:bg-gray-100 ">
            <Arrow className="-rotate-135" />
          </button>
          <button className="text-sm p-0.5 rounded-lg border border-gray-300 hover:bg-gray-100 ">
            <Arrow className="-rotate-90" />
          </button>
          <button className="text-sm p-0.5 rounded-lg border border-gray-300 hover:bg-gray-100 ">
            <Arrow className="-rotate-45" />
          </button>
        </section>
      </section>
    </section>
  );
};

export default Color;
