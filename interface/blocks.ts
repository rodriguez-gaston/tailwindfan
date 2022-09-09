export interface IBlock {
  id: string;
  title: string;
  container?: string;
  isShortView?: boolean;
}

export interface ICategory {
  name: string;
  url: string;
  blocks: IBlock[];
}

export interface BlockProps {
  id: string;
  title: string;
  container?: string;
  isShortView?: boolean;
  viewSize: string;
  category: string;
  setUpdateFav?: (value: boolean) => void;
  updateFav?: boolean;
}

export interface FavBlock {
  id: string;
  title: string;
  container: string;
  isShortView: boolean;
  category: string;
}
