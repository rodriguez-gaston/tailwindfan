import React from 'react';

interface BreakpointProps {
  name: string;
  onClick: () => void;
}

const Breakpoint = ({ name, onClick }: BreakpointProps) => {
  return (
    <div className="relative">
      <button name="breakpoint" id={name} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Breakpoint;
