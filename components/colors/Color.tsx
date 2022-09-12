/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import FavButton from '@/components/buttons/FavButton';
import { ColorProps, FavColor } from '@/interface/color';
import { favColor } from '@/utils/favColor';
import CopyButton from '@/components/buttons/CopyButton';

const Color = ({
  direction = 'bg-gradient-to-b',
  colors,
  id,
  updateFav,
  setUpdateFav,
}: ColorProps) => {
  const [isFav, setIsFav] = useState<boolean>(false);

  const handlingFav = () => {
    favColor(isFav, id, colors, setIsFav);
    setUpdateFav && setUpdateFav(!updateFav);
  };

  useEffect(() => {
    const favColors = JSON.parse(
      window.localStorage.getItem('colors') || 'null',
    );
    if (favColors) {
      const blockIsFav = favColors.find((color: FavColor) => color.id == id);
      setIsFav(blockIsFav);
    }
  }, [id]);

  return (
    <section className="space-y-4">
      <section className="border border-gray-300 rounded-lg w-full overflow-hidden">
        <section className="border-b border-gray-300 p-2 flex items-center justify-between gap-4 rounded-t-lg text-gray-600">
          <CopyButton code={direction + ' ' + colors} />
          <FavButton isFav={isFav} onClick={handlingFav} />
        </section>
        <section className={`h-48 ${direction} ${colors}`}></section>
      </section>
    </section>
  );
};

export default Color;
