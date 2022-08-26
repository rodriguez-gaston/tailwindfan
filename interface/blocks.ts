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
