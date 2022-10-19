import { NextPage } from 'next';
import { blocksList } from '@/data/Blocks';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const BlocksPage: NextPage = () => {
  const data = blocksList;

  return (
    <>
      <Head>
        <title>TailwindFan | Blocks</title>
        <meta
          name="description"
          content="Find free TailwindCSS componentes for your next project. We have more
          than 50 UI blocks free to use. We are working every day to add more
          categories and components."
          key="desc"
        />
        <meta property="og:title" content="TailwindFan | Blocks" />
        <meta
          property="og:description"
          content="Find free TailwindCSS componentes for your next project. We have more
          than 50 UI blocks free to use. We are working every day to add more
          categories and components."
        />
        <meta property="og:url" content="https://www.tailwindfan.com/blocks" />
      </Head>

      <section className="py-10 px-8">
        <section className="max-w-7xl mx-auto py-4 space-y-4">
          <h1 className="font-bold text-gray-800 text-3xl md:text-5xl">
            Blocks
          </h1>
          <h3 className="text-md text-gray-500">
            Find free TailwindCSS componentes for your next project. We have
            more than 50 UI blocks free to use. We are working every day to add
            more categories and components.
          </h3>
        </section>
        <section className="max-w-7xl items-center justify-between mx-auto mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((category) => {
            const blockCount = category.blocks.length;

            return (
              <Link href={`/blocks/${category.url}`} key={category.name}>
                <a className="p-4 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white flex flex-col items-center gap-2">
                  <section className="flex justify-between items-center w-full">
                    <div className="flex gap-1 items-center">
                      <h2 className="font-bold">{category.name}</h2>
                      {category.isNew && (
                        <p className="text-xs p-1 rounded bg-blue-300 text-white">
                          NEW
                        </p>
                      )}
                    </div>
                    <p className="text-sm">
                      {`${blockCount} ${blockCount == 1 ? 'Block' : 'Blocks'}`}{' '}
                    </p>
                  </section>
                  <Image
                    src={`/images/${category.url}.png`}
                    width={180}
                    height={150}
                    alt={`${category.name} category`}
                  />
                </a>
              </Link>
            );
          })}
        </section>
      </section>
    </>
  );
};

export default BlocksPage;
