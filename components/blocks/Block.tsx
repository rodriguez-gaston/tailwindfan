/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect } from 'react';
import prism from 'prismjs';
import convertHtml from '@/utils/convertHtml';
import SwitchView from '../buttons/SwitchView';
import FavButton from '../buttons/FavButton';
import { BlockProps, FavBlock } from '@/interface/blocks';
import View from '@/components/blocks/View';
import { favBlock } from '@/utils/favBlock';
import CopyButton from '@/components/buttons/CopyButton';

const Block = ({
  id,
  title,
  container = 'p-4',
  isShortView = false,
  viewSize = 'w-full',
  category,
  updateFav,
  setUpdateFav,
}: BlockProps) => {
  const [showExample, setShowExample] = useState<boolean>(true);
  const [code, setCode] = useState<string>('');
  const [html, setHtml] = useState<string>('');
  const [isFav, setIsFav] = useState<boolean>(false);

  const handlingFav = () => {
    favBlock(isFav, category, id, setIsFav, title, container, isShortView);
    setUpdateFav && setUpdateFav(!updateFav);
  };

  useEffect(() => {
    prism.highlightAll();
  });

  useEffect(() => {
    async function fetchBlock() {
      const response = await fetch(`/library/${category}/${id}.html`);
      const htmlText = await response.text();
      const favBlocks = JSON.parse(
        window.localStorage.getItem('blocks') || 'null',
      );
      if (favBlocks) {
        const blockIsFav = favBlocks.find(
          (block: FavBlock) => block.category == category && block.id == id,
        );
        setIsFav(blockIsFav);
      }

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
            <SwitchView
              showExample={showExample}
              setShowExample={setShowExample}
            />
            <CopyButton code={code} />
          </section>
          <FavButton isFav={isFav} onClick={handlingFav} />
        </section>
        <View
          isShortView={isShortView}
          showExample={showExample}
          html={html}
          code={code}
          title={title}
          viewSize={viewSize}
        />
      </section>
    </section>
  );
};

export default Block;
