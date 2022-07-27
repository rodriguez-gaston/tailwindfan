/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Logo from '@/components/header/Logo';

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
        </section>
        <section className="col-span-1">
          <Link href="/blocks">Blocks</Link>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
