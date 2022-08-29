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
        className="flex items-center gap-2 text-sm p-2 rounded-lg border border-gray-300 hover:bg-gray-100 peer-checked:bg-gray-100 cursor-pointer transition"
      >
        {icon}
        <p>{name}</p>
      </label>
    </section>
  );
};

export default Breakpoint;
