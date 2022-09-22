import React from 'react';
import Eye from '@/components/icons/Eye';
import Code from '@/components/icons/CodeSmall';

interface Props {
  showExample: boolean;
  setShowExample: (value: boolean) => void;
}

const SwitchView = ({ showExample, setShowExample }: Props) => {
  return (
    <section className="-space-x-px">
      <button
        onClick={() => setShowExample(true)}
        className={`text-sm p-2 rounded-l-lg border border-gray-300 ${
          showExample && 'bg-gray-100'
        }`}
      >
        <span className="sr-only">View example</span>
        <Eye />
      </button>
      <button
        onClick={() => setShowExample(false)}
        className={`text-sm p-2 rounded-r-lg border border-gray-300 ${
          !showExample && 'bg-gray-100'
        }`}
      >
        <span className="sr-only">View code</span>
        <Code />
      </button>
    </section>
  );
};

export default SwitchView;
