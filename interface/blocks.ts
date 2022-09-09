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
}

export interface FavBlock {
  id: string;
  category: string;
}
