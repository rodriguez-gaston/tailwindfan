/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Logo from '@/components/header/Logo';

const Header = () => {
  return (
    <header className="border-b border-gray-300 flex items-center px-8 py-2">
      <section className="max-w-7xl flex md:flex-row flex-col gap-2 items-center justify-between w-full mx-auto">
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
        <nav className="text-gray-800 font-semibold text-sm items-center justify-end gap-4 flex">
          <Link href="/blocks">Blocks</Link>
          <Link href="/templates">Templates</Link>
          <Link href="/colors">Colors</Link>
          <Link href="/learn">Learn</Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
