import { useState, createRef, useEffect } from 'react';
import Block from '@/components/blocks/Block';
import { NextPage } from 'next';
import { blocksList } from '@/data/Blocks';
import { IBlock } from '@/interface/blocks';
import BreakpointList from '@/components/buttons/BreakpointList';

const BlocksPage: NextPage = () => {
  const ref = createRef<HTMLElement>();
  const [viewSize, setViewSize] = useState<string>('w-full');
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
    <section className="py-10 px-8">
      <section className="max-w-7xl mx-auto space-y-12">
        <section
          ref={ref}
          className={`flex items-center justify-between sticky top-0 bg-white py-4 ${
            isScrolling && 'border-b border-gray-300'
          }`}
        >
          <h1
            className={`font-bold text-gray-800 ${
              isScrolling ? 'text-3xl' : 'text-5xl'
            }`}
          >
            Blocks page
          </h1>
          <section className="lg:flex gap-2 hidden">
            <BreakpointList setViewSize={setViewSize} />
          </section>
        </section>
        <section className="space-y-8">
          {blocksList.map((block: IBlock) => {
            return (
              <Block
                key={block.id + block.category}
                block={block}
                viewSize={viewSize}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default BlocksPage;
