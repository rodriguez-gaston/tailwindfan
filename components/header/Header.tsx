/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Logo from '@/components/header/Logo';

const Header = () => {
  return (
    <header className="flex items-center px-8 py-2 border-b border-gray-300">
      <section className="flex flex-col items-center justify-between w-full gap-2 mx-auto max-w-7xl md:flex-row">
        <Link href="/" legacyBehavior>
          <a>
            <section className="flex items-center gap-2 text-blue-500">
              <Logo />
              <span className="text-lg font-bold text-gray-800">
                TailwindFan
              </span>
            </section>
          </a>
        </Link>
        <nav className="flex items-center justify-end gap-4 text-sm font-semibold text-gray-800">
          <Link href="/blocks" legacyBehavior>
            Blocks
          </Link>
          <Link href="/colors" legacyBehavior>
            Colors
          </Link>
          <Link href="/favorites" legacyBehavior>
            Favorites
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
