import React from 'react';

interface BreakpointProps {
  name: string;
  onClick: () => void;
  icon: React.ReactNode;
}

const Breakpoint = ({ name, onClick, icon }: BreakpointProps) => {
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
        className="flex items-center gap-2 text-sm p-2 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white peer-checked:bg-blue-800 peer-checked:text-white cursor-pointer transition"
      >
        {icon}
        <p>{name}</p>
      </label>
    </section>
  );
};

export default Breakpoint;
