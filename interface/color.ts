export interface IColor {
  id: string;
  name: string;
  colors: string;
}

export interface ColorProps {
  direction: string;
  colors: string;
  name: string;
  id: string;
  setUpdateFav?: (value: boolean) => void;
  updateFav?: boolean;
}

export interface FavColor {
  id: string;
  name: string;
  colors: string;
}
