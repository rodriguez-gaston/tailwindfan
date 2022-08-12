import React, { useState, useEffect } from 'react';
import BreakpointList from '@/components/buttons/BreakpointList';
import Copy from '@/components/icons/Copy';
import Code from '@/components/icons/CodeSmall';
import Heart from '@/components/icons/Heart';
import prism from 'prismjs';

interface IBlock {
  id: string;
  category: string;
  title: string;
  block: React.ReactElement;
}

const Block = ({ id, title, category, block }: IBlock) => {
  const [viewSize, setViewSize] = useState<string>('w-full');
  const [showExample, setShowExample] = useState<boolean>(true);
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    prism.highlightAll();
  });

  useEffect(() => {
    async function fetchBlock() {
      const response = await fetch(`/library/${category}/${id}.html`);
      const htmlText = await response.text();

      setCode(htmlText);

      return;
    }

    fetchBlock();
  });

  return (
    <section className="space-y-4">
      <section className="space-y-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <section
          className="flex items-center justify-between gap-4"
          style={{ maxWidth: viewSize }}
        >
          <section className="flex items-center gap-4">
            <section className="flex gap-2">
              <button
                onClick={() => setShowExample(!showExample)}
                className={`text-sm p-2 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white ${
                  !showExample && 'bg-blue-800 text-white'
                }`}
              >
                <Code />
              </button>
              <button className="text-sm p-2 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white">
                <Copy />
              </button>
            </section>
            <section className="lg:flex gap-2 hidden pl-4 border-l-2 border-gray-500">
              <BreakpointList setViewSize={setViewSize} />
            </section>
          </section>
          <section>
            <button className="text-sm p-2 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white">
              <Heart />
            </button>
          </section>
        </section>
      </section>
      <section
        className="border-2 border-gray-800 rounded-lg h-[400px] lg:h-[600px] w-full overflow-y-scroll"
        style={{ maxWidth: viewSize }}
      >
        {showExample ? (
          <>{block}</>
        ) : (
          <pre className="w-full h-full bg-gray-800">
            <code className="language-html">{code}</code>
          </pre>
        )}
      </section>
    </section>
  );
};

export default Block;
