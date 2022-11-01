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
        <title>Blocks | TailwindFan</title>
        <meta
          name="description"
          content="Find free TailwindCSS componentes for your next project. We have more
          than 50 UI blocks free to use. We are working every day to add more
          categories and components."
          key="description"
        />
        <meta
          property="og:title"
          content="Blocks | TailwindFan"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Find free TailwindCSS componentes for your next project. We have more
          than 50 UI blocks free to use. We are working every day to add more
          categories and components."
          key="og:description"
        />
        <meta
          property="twitter:title"
          content="Blocks | TailwindFan"
          key="twitter:title"
        />
        <meta
          property="twitter:description"
          content="Find free TailwindCSS componentes for your next project. We have more
          than 50 UI blocks free to use. We are working every day to add more
          categories and components."
          key="twitter:description"
        />
      </Head>

      <section className="px-8 py-10">
        <section className="py-4 mx-auto space-y-4 max-w-7xl">
          <h1 className="text-3xl font-bold text-gray-800 md:text-5xl">
            Blocks
          </h1>
          <h3 className="text-gray-500 text-md">
            Find free TailwindCSS componentes for your next project. We have
            more than 50 UI blocks free to use. We are working every day to add
            more categories and components.
          </h3>
        </section>
        <section className="grid items-center justify-between grid-cols-1 gap-4 mx-auto mt-5 max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((category) => {
            const blockCount = category.blocks.length;

            return (
              <Link href={`/blocks/${category.url}`} key={category.name}>
                <a className="flex flex-col items-center gap-2 p-4 border-2 border-blue-800 rounded-lg hover:bg-blue-800 hover:text-white">
                  <section className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-1">
                      <h2 className="font-bold">{category.name}</h2>
                      {category.isNew && (
                        <p className="p-1 text-xs text-white bg-blue-300 rounded">
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
