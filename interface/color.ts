export interface IColor {
  id: string;
  colors: string;
}

export interface ColorProps {
  direction: string;
  colors: string;
  id: string;
  setUpdateFav?: (value: boolean) => void;
  updateFav?: boolean;
}

export interface FavColor {
  id: string;
  colors: string;
}
