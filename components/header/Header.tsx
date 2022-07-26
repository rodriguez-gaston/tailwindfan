/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Logo from '@/components/header/Logo';

const Header = () => {
  return (
    <header className="h-16 border-b border-gray-300 flex items-center px-8">
      <section className="flex items-center justify-between w-full mx-auto container">
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
        <nav className="text-gray-800 font-semibold items-center justify-end gap-8 md:flex hidden">
          <Link href="/blocks">Blocks</Link>
          <Link href="/templates">Templates</Link>
          <Link href="/colors">Colors</Link>
          <Link href="/learn">Learn</Link>
          <Link href="/contact">
            <a className="bg-cyan-700 hover:bg-cyan-900 transition duration-300 text-white rounded-lg px-4 py-3">
              Custom UI
            </a>
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
