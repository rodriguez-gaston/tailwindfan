import React from 'react';

interface DirectionProps {
  name: string;
  onClick: () => void;
  icon: React.ReactNode;
}

const Direction = ({ name, onClick, icon }: DirectionProps) => {
  return (
    <section className="relative">
      <input
        type="radio"
        name="breakpoint"
        id={name}
        className="hidden peer"
        onClick={onClick}
        defaultChecked={name == 'To bottom' && true}
      />
      <label
        htmlFor={name}
        className="flex items-center gap-1 text-sm p-0.5 rounded-lg border border-gray-300 hover:bg-gray-100 peer-checked:bg-gray-100 cursor-pointer transition"
      >
        <span className="sr-only">{name}</span>
        {icon}
      </label>
    </section>
  );
};

export default Direction;
