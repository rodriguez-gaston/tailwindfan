import React, { useState } from 'react';
import Copy from '@/components/icons/Copy';
import Check from '@/components/icons/Check';

interface Props {
  code: string;
}

const CopyButton = ({ code }: Props) => {
  const [copied, setCopied] = useState<boolean>(false);
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <button
      onClick={() => copyToClipboard(code)}
      className="text-sm p-2 rounded-lg border border-gray-300 hover:bg-gray-100"
    >
      {copied ? <Check /> : <Copy />}
    </button>
  );
};

export default CopyButton;
