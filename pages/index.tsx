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
  //   <section className="flex justify-center gap-5 pt-4 font-semibold">
  //     <Link href="/contact">
  //       <a className="px-4 py-3 text-white transition duration-300 bg-blue-700 border-2 border-blue-700 rounded-lg hover:border-blue-900 hover:bg-blue-900">
  //         Custom UI
  //       </a>
  //     </Link>
  //     <Link href="/blocks">
  //       <a className="px-4 py-3 text-blue-700 transition duration-300 border-2 border-blue-700 rounded-lg hover:border-blue-900 hover:bg-blue-900 hover:text-white">
  //         Explore Blocks
  //       </a>
  //     </Link>
  //   </section>
  // );

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="suXfaBTZmYSOCmEBCTRROL3d_wHkEl8IGqwjrp-iW60"
        />
        <title>TailwindCSS blocks and tutorials | TailwindFan</title>
        <meta
          name="description"
          content="A complete library with TailwindCSS UI blocks and components ready to use for any kind of project. Also you can learn about TailwindCSS."
          key="description"
        />
        <meta
          property="og:title"
          content="TailwindCSS blocks and tutorials | TailwindFan"
          key="og:title"
        />
        <meta
          property="og:description"
          content="A complete library with TailwindCSS UI blocks and components ready to use for any kind of project. Also you can learn about TailwindCSS."
          key="og:description"
        />
        <meta
          property="twitter:title"
          content="TailwindCSS blocks and tutorials | TailwindFan"
          key="twitter:title"
        />
        <meta
          property="twitter:description"
          content="A complete library with TailwindCSS UI blocks and components ready to use for any kind of project. Also you can learn about TailwindCSS."
          key="twitter:description"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://www.tailwindfan.com/"
          key="canonical"
        />
      </Head>

      <section className="px-8 py-20 bg-gradient-to-b from-white to-blue-50">
        <section className="mx-auto text-center max-w-7xl">
          <section className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-800 md:text-6xl">
              Build your next project with a new look
            </h1>
            <h4 className="text-gray-600">
              50+ free blocks built with Tailwind CSS
            </h4>
          </section>
        </section>
      </section>

      <section className="px-8 py-20 bg-blue-50">
        <section className="mx-auto text-center max-w-7xl">
          <h2 className="text-4xl font-semibold text-gray-600">Blocks</h2>
          <h3 className="text-gray-500 text-md md:px-20">
            Find free TailwindCSS componentes for your next project. We have
            more than 50 UI blocks free to use. We are working every day to add
            more categories and components.
          </h3>
        </section>
        <section className="grid items-center justify-between grid-cols-1 gap-4 mx-auto mt-8 max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((category, index) => {
            const blockCount = category.blocks.length;

            if (index < 8) {
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
        <section className="mx-auto mt-8 text-center max-w-7xl">
          <Link href="/blocks">
            <a className="px-4 py-3 text-white transition duration-300 bg-blue-700 border-2 border-blue-700 rounded-lg hover:border-blue-900 hover:bg-blue-900">
              Browse all Blocks
            </a>
          </Link>
        </section>
      </section>

      <section className="px-8 py-20 bg-gradient-to-b from-blue-50 to-white">
        <section className="mx-auto text-center max-w-7xl">
          <h2 className="text-4xl font-semibold text-gray-600">Colors</h2>
          <h3 className="text-gray-500 text-md md:px-20">
            Find beatiful gradients to use in any TailwindCSS project.
          </h3>
          <section className="grid items-center justify-between grid-cols-1 gap-4 mx-auto mt-8 max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
          <section className="mx-auto mt-8 text-center max-w-7xl">
            <Link href="/colors">
              <a className="px-4 py-3 text-white transition duration-300 bg-blue-700 border-2 border-blue-700 rounded-lg hover:border-blue-900 hover:bg-blue-900">
                Browse all Colors
              </a>
            </Link>
          </section>
        </section>
      </section>
    </>
  );
}
