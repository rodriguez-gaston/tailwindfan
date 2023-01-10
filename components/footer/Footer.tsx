/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Logo from '@/components/header/Logo';
import Instagram from '@/components/icons/Instagram';
import Youtube from '@/components/icons/Youtube';
import Github from '@/components/icons/Github';
import Medium from '@/components/icons/Medium';
import SocialLink from '@/components/buttons/SocialLink';

const Footer = () => {
  return (
    <footer className="p-8 bg-gray-100">
      <section className="w-full mx-auto space-y-4 max-w-7xl">
        <section className="flex flex-col items-start justify-between gap-4 sm:flex-row">
          <section className="col-span-1 space-y-2">
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
            <p className="text-sm text-gray-600">
              Tailwind blocks ready to use
            </p>
          </section>
          <section className="flex col-span-1 gap-8 text-sm font-medium text-gray-800">
            <Link href="/blocks" legacyBehavior>
              Blocks
            </Link>
            <Link href="/colors" legacyBehavior>
              Colors
            </Link>
            <Link href="/favorites" legacyBehavior>
              Favorites
            </Link>
          </section>
        </section>
        <section className="col-span-1 space-y-2 lg:col-span-2">
          <p className="text-xs text-gray-500">
            by{' '}
            <a
              href="https://codewithgaston.com"
              target="_blank"
              rel="noreferrer"
            >
              @codewithgaston
            </a>
          </p>
          <section className="flex gap-2">
            <SocialLink
              link="https://instagram.com/codewithgaston"
              icon={<Instagram />}
            />
            <SocialLink
              link="https://www.youtube.com/channel/UC8mpmC8Zyd5ga2AC2pkQ2tA?sub_confirmation=1"
              icon={<Youtube />}
            />
            <SocialLink
              link="https://github.com/rodriguez-gaston"
              icon={<Github />}
            />
            <SocialLink
              link="https://medium.com/@codewithgaston"
              icon={<Medium />}
            />
          </section>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
