import React, { createRef, useEffect, useState } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { blocksList } from '@/data/Blocks';
import Block from '@/components/blocks/Block';
import BreakpointList from '@/components/buttons/BreakpointList';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CategoryPage: NextPage = ({ category }: any) => {
  const propCategory = JSON.parse(category);
  const data = blocksList;
  const categoryData = data.find((x) => x.url === propCategory.url);

  const ref = createRef<HTMLElement>();
  const [viewSize, setViewSize] = useState<string>('w-full');
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    if (ref.current?.offsetTop == clientWindowHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientWindowHeight]);

  return (
    <section className="py-10 px-8">
      <section className="max-w-7xl mx-auto space-y-12">
        <section
          ref={ref}
          className={`flex items-center justify-between sticky top-0 bg-white py-4 ${
            isScrolling && 'border-b border-gray-300'
          }`}
        >
          <section>
            {isScrolling && (
              <Link href={'/blocks'}>
                <a className="text-gray-500 text-sm">
                  &larr; Back to all blocks
                </a>
              </Link>
            )}
            <h1
              className={`font-bold text-gray-800 ${
                isScrolling ? 'text-3xl' : 'text-5xl'
              }`}
            >
              {categoryData?.name}
            </h1>
          </section>
          <section className="lg:flex gap-2 hidden">
            <BreakpointList setViewSize={setViewSize} />
          </section>
        </section>
        <section className="space-y-8">
          {categoryData?.blocks.map((block) => {
            return (
              <Block
                key={block.id + categoryData.name}
                id={block.id}
                title={block.title}
                container={block.container}
                isShortView={block.isShortView}
                viewSize={viewSize}
                category={categoryData.url}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categorySelected = params?.category;
  const data = blocksList;

  const categoryData = JSON.stringify(
    data.find((x) => x.url === categorySelected),
  );

  return {
    props: { category: categoryData },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = blocksList;

  return {
    paths: data.map((category) => {
      return {
        params: { category: category.url },
      };
    }),
    fallback: false,
  };
};

export default CategoryPage;
