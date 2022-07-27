/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Devices from '@/components/icons/Devices';
import Code from '@/components/icons/Code';
import Moon from '@/components/icons/Moon';

export default function Home() {
  return (
    <>
      <Head>
        <title>TailwindFan | Tailwind CSS blocks and tutorials</title>
        <meta
          name="description"
          content="A complete library with Tailwind CSS UI blocks and components ready to use for any kind of project. Also you can learn about Tailwind CSS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-gradient-to-b from-white to-cyan-50 py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="md:order-last mx-auto">
            <Image
              src="/assets/hero.svg"
              alt="UI Images"
              width={600}
              height={456.04}
            />
          </div>
          <div className="space-y-8">
            <h3 className="text-lg text-gray-600 font-semibold">
              Get blocks and templates ready to use
            </h3>
            <h1 className="text-6xl font-bold text-gray-800">
              Build your next project with a new look
            </h1>
            <h4 className="text-gray-600">
              50+ free blocks and premium templates built with Tailwind CSS
            </h4>
            <div className="flex gap-5 font-semibold">
              <Link href="/contact">
                <a className="bg-cyan-700 hover:bg-cyan-900 transition duration-300 text-white rounded-lg px-4 py-3">
                  Custom UI
                </a>
              </Link>
              <Link href="/blocks">
                <a className="border-2 border-cyan-700 hover:border-cyan-900 hover:bg-cyan-900 transition duration-300 text-cyan-700 hover:text-white rounded-lg px-4 py-3">
                  Explore Blocks
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-50 py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl text-gray-600 font-semibold">
            Get blocks and templates ready to use
          </h2>
          <h3 className="text-md text-gray-500 md:px-20">
            We design our blocks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            <div className="bg-white rounded-lg text-center p-5 text-cyan-700">
              <Devices />
              <h4 className="text-gray-800 text-lg font-semibold">
                Responsive
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae molestias dolores at. Dignissimos quas voluptate ullam
                porro ipsam. Eligendi vero sapiente repellendus necessitatibus
                inventore adipisci molestiae at sunt debitis facere.
              </p>
            </div>
            <div className="bg-white rounded-lg text-center p-5 text-cyan-700">
              <Code />
              <h4 className="text-gray-800 text-lg font-semibold">
                Ready to use
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae molestias dolores at. Dignissimos quas voluptate ullam
                porro ipsam. Eligendi vero sapiente repellendus necessitatibus
                inventore adipisci molestiae at sunt debitis facere.
              </p>
            </div>
            <div className="bg-white rounded-lg text-center p-5 text-cyan-700">
              <Moon />
              <h4 className="text-gray-800 text-lg font-semibold">Dark mode</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae molestias dolores at. Dignissimos quas voluptate ullam
                porro ipsam. Eligendi vero sapiente repellendus necessitatibus
                inventore adipisci molestiae at sunt debitis facere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-50 py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl text-gray-600 font-semibold">Blocks</h2>
          <h3 className="text-md text-gray-500 md:px-20">
            We design our blocks
          </h3>
          <div className="mt-8 overflow-x-auto lg:overflow-x-hidden snap-x snap-mandatory">
            <div className="flex gap-4 lg:gap-10 w-max lg:w-full lg:grid grid-cols-4 justify-between">
              <div className="bg-white rounded-lg text-center p-5 w-48 lg:col-span-1 lg:w-full snap-center snap-always">
                <h4 className="text-gray-800 text-lg font-semibold">
                  Dark mode
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae molestias dolores at.
                </p>
              </div>
              <div className="bg-white rounded-lg text-center p-5 w-48 lg:col-span-1 lg:w-full snap-center snap-always">
                <h4 className="text-gray-800 text-lg font-semibold">
                  Dark mode
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae molestias dolores at.
                </p>
              </div>
              <div className="bg-white rounded-lg text-center p-5 w-48 lg:col-span-1 lg:w-full snap-center snap-always">
                <h4 className="text-gray-800 text-lg font-semibold">
                  Dark mode
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae molestias dolores at.
                </p>
              </div>
              <div className="bg-white rounded-lg text-center p-5 w-48 lg:col-span-1 lg:w-full snap-center snap-always">
                <h4 className="text-gray-800 text-lg font-semibold">
                  Dark mode
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae molestias dolores at.
                </p>
              </div>
              <div className="bg-white rounded-lg text-center p-5 w-48 lg:col-span-1 lg:w-full snap-center snap-always">
                <h4 className="text-gray-800 text-lg font-semibold">
                  Dark mode
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae molestias dolores at.
                </p>
              </div>
              <div className="bg-white rounded-lg text-center p-5 w-48 lg:col-span-1 lg:w-full snap-center snap-always">
                <h4 className="text-gray-800 text-lg font-semibold">
                  Dark mode
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae molestias dolores at.
                </p>
              </div>
              <div className="bg-white rounded-lg text-center p-5 w-48 lg:col-span-1 lg:w-full snap-center snap-always">
                <h4 className="text-gray-800 text-lg font-semibold">
                  Dark mode
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae molestias dolores at.
                </p>
              </div>
              <div className="bg-white rounded-lg text-center p-5 w-48 lg:col-span-1 lg:w-full snap-center snap-always">
                <h4 className="text-gray-800 text-lg font-semibold">
                  Dark mode
                </h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae molestias dolores at.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-50 py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl text-gray-600 font-semibold">Templates</h2>
          <h3 className="text-md text-gray-500 md:px-20">
            We design our blocks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            <div className="bg-white rounded-lg text-center p-5">
              <h4 className="text-gray-800 text-lg font-semibold">
                Responsive
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae molestias dolores at. Dignissimos quas voluptate ullam
                porro ipsam. Eligendi vero sapiente repellendus necessitatibus
                inventore adipisci molestiae at sunt debitis facere.
              </p>
            </div>
            <div className="bg-white rounded-lg text-center p-5">
              <h4 className="text-gray-800 text-lg font-semibold">
                Ready to use
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae molestias dolores at. Dignissimos quas voluptate ullam
                porro ipsam. Eligendi vero sapiente repellendus necessitatibus
                inventore adipisci molestiae at sunt debitis facere.
              </p>
            </div>
            <div className="bg-white rounded-lg text-center p-5">
              <h4 className="text-gray-800 text-lg font-semibold">Dark mode</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae molestias dolores at. Dignissimos quas voluptate ullam
                porro ipsam. Eligendi vero sapiente repellendus necessitatibus
                inventore adipisci molestiae at sunt debitis facere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-cyan-50 to-white py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl text-gray-600 font-semibold">Colors</h2>
          <h3 className="text-md text-gray-500 md:px-20">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            dolorem modi, impedit similique magni, sapiente non a obcaecati et
            molestias veniam quis velit repellat atque! Vero ad nihil pariatur
            natus?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            <div className="bg-white rounded-lg text-center p-5">
              <h4 className="text-gray-800 text-lg font-semibold">
                Responsive
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae molestias dolores at. Dignissimos quas voluptate ullam
                porro ipsam. Eligendi vero sapiente repellendus necessitatibus
                inventore adipisci molestiae at sunt debitis facere.
              </p>
            </div>
            <div className="bg-white rounded-lg text-center p-5">
              <h4 className="text-gray-800 text-lg font-semibold">
                Ready to use
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae molestias dolores at. Dignissimos quas voluptate ullam
                porro ipsam. Eligendi vero sapiente repellendus necessitatibus
                inventore adipisci molestiae at sunt debitis facere.
              </p>
            </div>
            <div className="bg-white rounded-lg text-center p-5">
              <h4 className="text-gray-800 text-lg font-semibold">Dark mode</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae molestias dolores at. Dignissimos quas voluptate ullam
                porro ipsam. Eligendi vero sapiente repellendus necessitatibus
                inventore adipisci molestiae at sunt debitis facere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
