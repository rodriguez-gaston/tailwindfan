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
    <footer className="bg-gray-100 p-8">
      <section className="max-w-7xl w-full mx-auto space-y-4">
        <section className="flex flex-col sm:flex-row gap-4 justify-between items-start">
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
            <p className="text-sm text-gray-600">
              Tailwind blocks ready to use
            </p>
          </section>
          <section className="col-span-1 flex gap-8 text-gray-800 text-sm font-medium">
            <Link href="/blocks">Blocks</Link>
            <Link href="/colors">Colors</Link>
            <Link href="/learn">Learn</Link>
          </section>
        </section>
        <section className="col-span-1 lg:col-span-2 space-y-2">
          <p className="text-xs text-gray-500">by @codewithgaston</p>
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
