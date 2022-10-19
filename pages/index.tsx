/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { blocksList } from '@/data/Blocks';
import { colorsList } from '@/data/Colors';
import Color from '@/components/colors/Color';

export default function Home() {
  const data = blocksList;
  const colorsData = colorsList;

  // const callToActions = () => (
  //   <section className="flex gap-5 font-semibold justify-center pt-4">
  //     <Link href="/contact">
  //       <a className="border-2 border-blue-700 hover:border-blue-900 bg-blue-700 hover:bg-blue-900 transition duration-300 text-white rounded-lg px-4 py-3">
  //         Custom UI
  //       </a>
  //     </Link>
  //     <Link href="/blocks">
  //       <a className="border-2 border-blue-700 hover:border-blue-900 hover:bg-blue-900 transition duration-300 text-blue-700 hover:text-white rounded-lg px-4 py-3">
  //         Explore Blocks
  //       </a>
  //     </Link>
  //   </section>
  // );

  return (
    <>
      <Head>
        <title>TailwindFan | Tailwind CSS blocks and tutorials</title>
        <meta
          name="description"
          content="A complete library with Tailwind CSS UI blocks and components ready to use for any kind of project. Also you can learn about Tailwind CSS."
          key="desc"
        />
        <meta
          property="og:title"
          content="Build your next project with a new look"
        />
        <meta
          property="og:description"
          content="Find free TailwindCSS componentes for your next project. We have more than 50 UI blocks free to use. We are working every day to add more categories and components."
        />
        <meta property="og:url" content="https://www.tailwindfan.com" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.tailwindfan.com/"
          key="canonical"
        />
      </Head>

      <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-8">
        <section className="max-w-7xl mx-auto text-center">
          <section className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Build your next project with a new look
            </h1>
            <h4 className="text-gray-600">
              50+ free blocks built with Tailwind CSS
            </h4>
          </section>
        </section>
      </section>

      <section className="bg-blue-50 py-20 px-8">
        <section className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl text-gray-600 font-semibold">Blocks</h2>
          <h3 className="text-md text-gray-500 md:px-20">
            Find free TailwindCSS componentes for your next project. We have
            more than 50 UI blocks free to use. We are working every day to add
            more categories and components.
          </h3>
        </section>
        <section className="mt-8 max-w-7xl items-center justify-between mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((category, index) => {
            const blockCount = category.blocks.length;

            if (index < 8) {
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
                        {`${blockCount} ${
                          blockCount == 1 ? 'Block' : 'Blocks'
                        }`}{' '}
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
            }
          })}
        </section>
        <section className="mt-8 max-w-7xl mx-auto text-center">
          <Link href="/blocks">
            <a className="border-2 border-blue-700 bg-blue-700 hover:border-blue-900 hover:bg-blue-900 transition duration-300 text-white rounded-lg px-4 py-3">
              Browse all Blocks
            </a>
          </Link>
        </section>
      </section>

      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-8">
        <section className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl text-gray-600 font-semibold">Colors</h2>
          <h3 className="text-md text-gray-500 md:px-20">
            Find beatiful gradients to use in any TailwindCSS project.
          </h3>
          <section className="mt-8 max-w-7xl items-center justify-between mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {colorsData.map((color, index) => {
              if (index < 4) {
                return (
                  <Color
                    key={color.id}
                    direction="bg-gradient-to-b"
                    colors={color.colors}
                    id={color.id}
                  />
                );
              }
            })}
          </section>
          <section className="mt-8 max-w-7xl mx-auto text-center">
            <Link href="/colors">
              <a className="border-2 border-blue-700 bg-blue-700 hover:border-blue-900 hover:bg-blue-900 transition duration-300 text-white rounded-lg px-4 py-3">
                Browse all Colors
              </a>
            </Link>
          </section>
        </section>
      </section>
    </>
  );
}
