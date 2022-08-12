import React, { useState, useEffect } from 'react';
import BreakpointList from '@/components/buttons/BreakpointList';
import Copy from '@/components/icons/Copy';
import Code from '@/components/icons/CodeSmall';
import Heart from '@/components/icons/Heart';
import prism from 'prismjs';

const code = `
<!-- Success -->

<div
  class="p-4 text-green-700 border rounded border-green-900/10 bg-green-50"
  role="alert"
>
  <strong class="text-sm font-medium"> Post has been published! </strong>
</div>

<!-- Warning -->

<div
  class="p-4 border rounded text-amber-700 bg-amber-50 border-amber-900/10"
  role="alert"
>
  <strong class="text-sm font-medium"> Post has been archived! </strong>
</div>

<!-- Alert -->

<div
  class="p-4 text-red-700 border rounded border-red-900/10 bg-red-50"
  role="alert"
>
  <strong class="text-sm font-medium"> Post has been deleted! </strong>
</div>

<!-- Info -->

<div
  class="p-4 border rounded text-sky-700 bg-sky-50 border-sky-900/10"
  role="alert"
>
  <strong class="text-sm font-medium"> Post has been updated! </strong>
</div>
`;

const Block = () => {
  const [viewSize, setViewSize] = useState<string>('w-full');
  const [showExample, setShowExample] = useState<boolean>(true);

  useEffect(() => {
    prism.highlightAll();
  });

  return (
    <section className="space-y-4">
      <section className="space-y-2">
        <h2 className="text-xl font-bold">Simple Button</h2>
        <section
          className="flex items-center justify-between gap-4"
          style={{ maxWidth: viewSize }}
        >
          <section className="flex items-center gap-4">
            <section className="flex gap-2">
              <button
                onClick={() => setShowExample(!showExample)}
                className="text-sm p-2 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white"
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
          <section className="bg-blue-500 p-4 flex justify-between">
            <p className="text-white">Section</p>
            <Code />
          </section>
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
