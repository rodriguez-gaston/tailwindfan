export interface IBlock {
  id: string;
  title: string;
}

export interface ICategory {
  name: string;
  url: string;
  blocks: IBlock[];
}
