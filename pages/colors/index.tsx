import React, { useState } from 'react';
import Color from '@/components/colors/Color';
import DirectionList from '@/components/buttons/DirectionList';
import { colorsList } from '@/data/Colors';
import SectionBar from '@/components/header/SectionBar';
import Head from 'next/head';

const ColorsPage = () => {
  const [gradientDirection, setGradientDirection] =
    useState<string>('bg-gradient-to-b');

  const colorsData = colorsList;

  return (
    <>
      <Head>
        <title>TailwindFan | Colors</title>
        <meta
          name="description"
          content="Find beatiful gradients to use in any TailwindCSS project."
          key="desc"
        />
        <meta property="og:title" content="TailwindFan | Colors" />
        <meta
          property="og:description"
          content="Find beatiful gradients to use in any TailwindCSS project."
        />
        <meta property="og:url" content="https://www.tailwindfan.com/colors" />
      </Head>

      <section className="bg-gradient-to-b from-white to-cyan-50 py-5 sm:py-10 px-2 sm:px-8">
        <section className="max-w-7xl mx-auto space-y-6 sm:space-y-12">
          <SectionBar
            title="Colors"
            backlinkText="Back to Home"
            backlinkUrl="/"
          >
            <section className="flex gap-1">
              <DirectionList setDirection={setGradientDirection} />
            </section>
          </SectionBar>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {colorsData.map((color) => {
              return (
                <Color
                  key={color.id}
                  direction={gradientDirection}
                  colors={color.colors}
                  id={color.id}
                />
              );
            })}
          </section>
        </section>
      </section>
    </>
  );
};

export default ColorsPage;
