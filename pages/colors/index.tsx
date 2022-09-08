import React, { useState } from 'react';
import Color from '@/components/colors/Color';
import DirectionList from '@/components/buttons/DirectionList';

const ColorsPage = () => {
  const [gradientDirection, setGradientDirection] =
    useState<string>('bg-gradient-to-b');

  return (
    <section className="bg-gradient-to-b from-white to-cyan-50 py-20 px-8">
      <section className="max-w-7xl mx-auto">Esta es la Colors Page</section>
      <section className="flex gap-2">
        <DirectionList setDirection={setGradientDirection} />
      </section>
      <Color direction={gradientDirection} />
    </section>
  );
};

export default ColorsPage;
