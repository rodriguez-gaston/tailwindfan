import { FavColor } from '@/interface/color';

export const favColor = (
  isFav: boolean,
  id: string,
  colors: string,
  name: string,
  setIsFav: (value: boolean) => void,
) => {
  const favColors: FavColor[] | null = JSON.parse(
    window.localStorage.getItem('colors') || 'null',
  );
  if (isFav) {
    const favList = favColors?.filter((block: FavColor) => !(block.id == id));
    window.localStorage.setItem('colors', JSON.stringify(favList));
    setIsFav(false);
    return;
  }
  const blockToFav = {
    id,
    colors,
    name,
  };
  window.localStorage.setItem(
    'colors',
    favColors
      ? JSON.stringify([...favColors, blockToFav])
      : JSON.stringify([blockToFav]),
  );
  setIsFav(true);
  return;
};
