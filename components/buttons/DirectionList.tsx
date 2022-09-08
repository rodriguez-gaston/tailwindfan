import React from 'react';
import Direction from '@/components/buttons/Direction';
import { allDirections } from '@/data/Directions';
import { IDirection } from '@/interface/direction';

interface Props {
  setDirection: (value: string) => void;
}

const DirectionList = ({ setDirection }: Props) => {
  const directions = allDirections;

  return (
    <>
      {directions.map(({ name, icon, direction }: IDirection) => {
        return (
          <Direction
            key={name}
            name={name}
            onClick={() => setDirection(direction)}
            icon={icon}
          />
        );
      })}
    </>
  );
};

export default DirectionList;
