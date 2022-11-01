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
        <title>Colors | TailwindFan</title>
        <meta
          name="description"
          content="Find beatiful gradients to use in any TailwindCSS project."
          key="description"
        />
        <meta
          property="og:title"
          content="Colors | TailwindFan"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Find beatiful gradients to use in any TailwindCSS project."
          key="og:description"
        />
        <meta
          property="twitter:title"
          content="Colors | TailwindFan"
          key="twitter:title"
        />
        <meta
          property="twitter:description"
          content="Find beatiful gradients to use in any TailwindCSS project."
          key="twitter:description"
        />
      </Head>

      <section className="px-2 py-5 bg-gradient-to-b from-white to-cyan-50 sm:py-10 sm:px-8">
        <section className="mx-auto space-y-6 max-w-7xl sm:space-y-12">
          <SectionBar
            title="Colors"
            backlinkText="Back to Home"
            backlinkUrl="/"
          >
            <section className="flex gap-1">
              <DirectionList setDirection={setGradientDirection} />
            </section>
          </SectionBar>
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
