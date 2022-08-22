export interface IBlock {
  id: string;
  title: string;
  block: React.ReactElement;
}

export interface ICategory {
  name: string;
  url: string;
  blocks: IBlock[];
}
