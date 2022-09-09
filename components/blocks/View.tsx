import React from 'react';

interface Props {
  isShortView: boolean;
  showExample: boolean;
  html: string;
  code: string;
  title: string;
  viewSize: string;
}

const View = ({
  isShortView,
  showExample,
  html,
  code,
  title,
  viewSize,
}: Props) => {
  return (
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
  );
};

export default View;
