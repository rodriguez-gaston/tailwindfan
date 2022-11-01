import React, { useState } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { blocksList } from '@/data/Blocks';
import Block from '@/components/blocks/Block';
import BreakpointList from '@/components/buttons/BreakpointList';
import SectionBar from '@/components/header/SectionBar';
import Head from 'next/head';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CategoryPage: NextPage = ({ category }: any) => {
  const propCategory = JSON.parse(category);
  const data = blocksList;
  const categoryData = data.find((x) => x.url === propCategory.url);

  const [viewSize, setViewSize] = useState<string>('w-full');

  return (
    <>
      <Head>
        <title>{categoryData?.name} Blocks | TailwindFan</title>
        <meta
          name="description"
          content={`${categoryData?.name} free componentes for your next project.`}
          key="description"
        />
        <meta
          property="og:title"
          content={`${categoryData?.name} Blocks | TailwindFan`}
          key="og:title"
        />
        <meta
          property="og:description"
          content={`${categoryData?.name} free componentes for your next project.`}
          key="og:description"
        />
        <meta
          property="twitter:title"
          content={`${categoryData?.name} Blocks | TailwindFan`}
          key="twitter:title"
        />
        <meta
          property="twitter:description"
          content={`${categoryData?.name} free componentes for your next project.`}
          key="twitter:description"
        />
      </Head>

      <section className="px-2 py-5 sm:py-10 sm:px-8">
        <section className="mx-auto space-y-6 max-w-7xl sm:space-y-12">
          <SectionBar
            title={categoryData?.name ?? ''}
            backlinkText="Back to all blocks"
            backlinkUrl="/blocks"
          >
            <section className="hidden gap-2 lg:flex">
              <BreakpointList setViewSize={setViewSize} />
            </section>
          </SectionBar>
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
    </>
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
