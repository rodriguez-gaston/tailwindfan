import React, { useState, useEffect } from 'react';
import Copy from '@/components/icons/Copy';
import Code from '@/components/icons/CodeSmall';
import Heart from '@/components/icons/Heart';
import prism from 'prismjs';
import convertHtml from '@/utils/convertHtml';
import Eye from '@/components/icons/Eye';

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
        <h2 className="text-xl font-medium text-gray-800">{title}</h2>
      </section>
      <section
        className="border border-gray-300 rounded-t-lg w-full"
        style={{ maxWidth: viewSize }}
      >
        <section className="border-b border-gray-300 p-2 flex items-center justify-between gap-4 rounded-t-lg text-gray-600">
          <section className="flex items-center gap-2">
            <section>
              <button
                onClick={() => setShowExample(true)}
                className={`text-sm p-2 rounded-tl-lg rounded-bl-lg border border-gray-300 ${
                  showExample && 'bg-gray-100'
                }`}
              >
                <Eye />
              </button>
              <button
                onClick={() => setShowExample(false)}
                className={`text-sm p-2 rounded-tr-lg rounded-br-lg border-t border-r border-b border-gray-300 ${
                  !showExample && 'bg-gray-100'
                }`}
              >
                <Code />
              </button>
            </section>
            <button className="text-sm p-2 rounded-lg border border-gray-300 hover:bg-gray-100 ">
              <Copy />
            </button>
          </section>
          <section>
            <button className="text-sm p-2 rounded-lg border border-gray-300 hover:bg-gray-100">
              <Heart />
            </button>
          </section>
        </section>
        <section
          className={`overflow-y-scroll ${
            !isShortView ? 'h-[400px] lg:h-[600px]' : 'h-[200px] lg:h-[300px]'
          }`}
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
    </section>
  );
};

export default Block;
