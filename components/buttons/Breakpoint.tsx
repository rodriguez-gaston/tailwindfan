import React from 'react';

interface BreakpointProps {
  name: string;
  onClick: () => void;
}

const Breakpoint = ({ name, onClick }: BreakpointProps) => {
  return (
    <section className="relative">
      <input
        type="radio"
        name="breakpoint"
        id={name}
        className="hidden peer"
        onClick={onClick}
        defaultChecked={name == 'Full' && true}
      />
      <label
        htmlFor={name}
        className="flex items-center text-sm px-2 py-2.5 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white peer-checked:bg-blue-800 peer-checked:text-white cursor-pointer transition"
      >
        <p>{name}</p>
      </label>
    </section>
  );
};

export default Breakpoint;
