import Link from 'next/link';
import React, { createRef, useEffect, useState } from 'react';

interface Props {
  title: string;
  backlinkText: string;
  backlinkUrl: string;
  children: React.ReactNode;
}

const SectionBar = ({ title, backlinkText, backlinkUrl, children }: Props) => {
  const ref = createRef<HTMLElement>();
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    if (ref.current?.offsetTop == clientWindowHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientWindowHeight]);

  return (
    <section
      ref={ref}
      className={`flex flex-col md:flex-row gap-2 items-start md:items-center justify-between sticky top-0 bg-white py-4 ${
        isScrolling && 'border-b border-gray-300'
      }`}
    >
      <section>
        {isScrolling && (
          <Link href={backlinkUrl}>
            <a className="text-gray-500 text-sm">&larr;{` ${backlinkText}`}</a>
          </Link>
        )}
        <h1
          className={`font-bold text-gray-800 ${
            isScrolling ? 'text-xl md:text-3xl' : 'text-3xl md:text-5xl'
          }`}
        >
          {title}
        </h1>
      </section>
      {children}
    </section>
  );
};

export default SectionBar;
