import { useState, useEffect } from 'react';
import BreakpointList from '@/components/buttons/BreakpointList';
import SectionBar from '@/components/header/SectionBar';
import { FavBlock } from '@/interface/blocks';
import Block from '@/components/blocks/Block';
import DirectionList from '@/components/buttons/DirectionList';
import Color from '@/components/colors/Color';
import { IColor } from '@/interface/color';
import EmptyState from '@/components/EmptyState';

const FavoritesPage = () => {
  const [viewSize, setViewSize] = useState<string>('w-full');
  const [blocksList, setBlocksList] = useState<Array<FavBlock>>();
  const [colorsList, setColorsList] = useState<Array<IColor>>();
  const [updateFav, setUpdateFav] = useState<boolean>(false);
  const [gradientDirection, setGradientDirection] =
    useState<string>('bg-gradient-to-b');

  useEffect(() => {
    const favBlocks = JSON.parse(
      window.localStorage.getItem('blocks') || 'null',
    );
    const favColors = JSON.parse(
      window.localStorage.getItem('colors') || 'null',
    );
    setBlocksList(favBlocks);
    setColorsList(favColors);
  }, [updateFav]);

  return (
    <section className="py-5 sm:py-10 px-2 sm:px-8 space-y-10">
      <section className="max-w-7xl mx-auto space-y-3">
        {blocksList && blocksList?.length > 0 ? (
          <>
            <SectionBar
              title="Favorite Blocks"
              backlinkText="Back to all blocks"
              backlinkUrl="/blocks"
            >
              <section className="lg:flex gap-2 hidden">
                <BreakpointList setViewSize={setViewSize} />
              </section>
            </SectionBar>
            <section className="space-y-8">
              {blocksList?.map((block: FavBlock) => {
                return (
                  <Block
                    key={block.id + block.category}
                    id={block.id}
                    title={block.title}
                    container={block.container}
                    isShortView={block.isShortView}
                    viewSize={viewSize}
                    category={block.category}
                    updateFav={updateFav}
                    setUpdateFav={setUpdateFav}
                  />
                );
              })}
            </section>
          </>
        ) : (
          <>
            <h1 className="font-bold text-gray-800 text-3xl md:text-5xl">
              Favorite Blocks
            </h1>
            <EmptyState
              text="Block"
              image="/images/empty-blocks.svg"
              url="/blocks"
            />
          </>
        )}
      </section>
      <section className="max-w-7xl mx-auto space-y-3">
        {colorsList && colorsList.length > 0 ? (
          <>
            <SectionBar
              title="Colors"
              backlinkText="Back to Home"
              backlinkUrl="/"
            >
              <section className="flex gap-1">
                {colorsList && colorsList?.length > 0 && (
                  <DirectionList setDirection={setGradientDirection} />
                )}
              </section>
            </SectionBar>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {colorsList.map((color: IColor) => {
                return (
                  <Color
                    key={color.id}
                    direction={gradientDirection}
                    colors={color.colors}
                    name={color.name}
                    id={color.id}
                    updateFav={updateFav}
                    setUpdateFav={setUpdateFav}
                  />
                );
              })}
            </section>
          </>
        ) : (
          <>
            <h1 className="font-bold text-gray-800 text-3xl md:text-5xl">
              Favorite Colors
            </h1>
            <EmptyState
              text="Color"
              image="/images/empty-colors.svg"
              url="/colors"
            />
          </>
        )}
      </section>
    </section>
  );
};

export default FavoritesPage;
