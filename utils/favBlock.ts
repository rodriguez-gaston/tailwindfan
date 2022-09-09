import { FavBlock } from '@/interface/blocks';

export const favBlock = (
  isFav: boolean,
  category: string,
  id: string,
  setIsFav: (value: boolean) => void,
  title: string,
  container: string,
  isShortView: boolean,
) => {
  const favBlocks: FavBlock[] | null = JSON.parse(
    window.localStorage.getItem('blocks') || 'null',
  );
  if (isFav) {
    const favList = favBlocks?.filter(
      (block: FavBlock) => !(block.category == category && block.id == id),
    );
    window.localStorage.setItem('blocks', JSON.stringify(favList));
    setIsFav(false);
    return;
  }
  const blockToFav = {
    id,
    title,
    container,
    isShortView,
    category,
  };
  window.localStorage.setItem(
    'blocks',
    favBlocks
      ? JSON.stringify([...favBlocks, blockToFav])
      : JSON.stringify([blockToFav]),
  );
  setIsFav(true);
  return;
};
