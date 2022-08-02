/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Coffee from '@/components/icons/Coffee';

const DonationSticky = () => {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  return (
    <>
      {show && (
        <a
          href="https://www.buymeacoffee.com/codewithgaston"
          target="_blank"
          className="fixed flex gap-2 items-center bottom-3 right-3 px-4 py-2 font-medium text-sm bg-blue-700 rounded-lg text-white"
          rel="noreferrer"
        >
          <span>
            <Coffee />
          </span>
          Support me
        </a>
      )}
    </>
  );
};

export default DonationSticky;
