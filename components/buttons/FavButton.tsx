import React from 'react';
import Heart from '@/components/icons/Heart';

interface Props {
  isFav: boolean;
  onClick?: () => void;
}

const FavButton = ({ isFav, onClick }: Props) => {
  return (
    <button
      className={`text-sm p-2 rounded-lg border border-gray-300 hover:bg-gray-100 ${
        isFav && 'bg-red-200 border-red-200 text-white hover:text-gray-600'
      }`}
      onClick={onClick}
    >
      <Heart />
    </button>
  );
};

export default FavButton;
