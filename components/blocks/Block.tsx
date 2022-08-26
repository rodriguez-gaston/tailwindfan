import React, { useState, useEffect } from 'react';
import Copy from '@/components/icons/Copy';
import Code from '@/components/icons/CodeSmall';
import Heart from '@/components/icons/Heart';
import prism from 'prismjs';
import convertHtml from '@/utils/convertHtml';

interface BlockProps {
  id: string;
  title: string;
  container?: string;
  isShortView?: boolean;
  viewSize: string;
  category: string;
}

const Block = ({
  id,
  title,
  container = 'p-4',
  isShortView = false,
  viewSize = 'w-full',
  category,
}: BlockProps) => {
  const [showExample, setShowExample] = useState<boolean>(true);
  const [code, setCode] = useState<string>('');
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    prism.highlightAll();
  });

  useEffect(() => {
    async function fetchBlock() {
      const response = await fetch(`/library/${category}/${id}.html`);
      const htmlText = await response.text();

      setHtml(convertHtml(htmlText, container));
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
          </section>
          <section>
            <button className="text-sm p-2 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white">
              <Heart />
            </button>
          </section>
        </section>
      </section>
      <section
        className={`border-2 border-gray-800 rounded-lg ${
          !isShortView ? 'h-[400px] lg:h-[600px]' : 'h-[200px] lg:h-[300px]'
        } w-full overflow-y-scroll`}
        style={{ maxWidth: viewSize }}
      >
        {showExample ? (
          <iframe
            className="w-full h-full"
            loading="lazy"
            srcDoc={html}
            style={{ maxWidth: viewSize }}
            title={`${title}`}
          ></iframe>
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
