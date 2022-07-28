/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Logo from '@/components/header/Logo';
import Instagram from '@/components/icons/Instagram';
import Youtube from '@/components/icons/Youtube';
import Github from '@/components/icons/Github';
import Medium from '@/components/icons/Medium';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8">
      <section className="max-w-7xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-start items-start">
        <section className="space-y-2 col-span-1">
          <Link href="/">
            <a>
              <section className="text-blue-500 flex gap-2 items-center">
                <Logo />
                <span className="text-gray-800 font-bold text-lg">
                  TailwindFan
                </span>
              </section>
            </a>
          </Link>
          <p className="text-sm text-gray-600">Tailwind blocks ready to use</p>
          <section className="flex gap-2">
            <a
              href="https://instagram.com/codewithgaston"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-500 p-1 text-white rounded-full hover:bg-gray-700"
            >
              <Instagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UC8mpmC8Zyd5ga2AC2pkQ2tA?sub_confirmation=1"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-500 p-1 text-white rounded-full hover:bg-gray-700"
            >
              <Youtube />
            </a>
            <a
              href="https://github.com/rodriguez-gaston"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-500 p-1 text-white rounded-full hover:bg-gray-700"
            >
              <Github />
            </a>
            <a
              href="https://medium.com/@codewithgaston"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-500 p-1 text-white rounded-full hover:bg-gray-700"
            >
              <Medium />
            </a>
          </section>
        </section>
        <section className="col-span-1 flex flex-col text-gray-800 text-sm font-medium">
          <Link href="/blocks">Blocks</Link>
          <Link href="/colors">Colors</Link>
          <Link href="/learn">Learn</Link>
        </section>
        <section className="col-span-1 lg:col-span-2">
          <p className="text-xs text-gray-500">by @codewithgaston</p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
