/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
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
        <Link href={'/donar'}>
          <a className="fixed flex gap-2 items-center bottom-3 right-3 px-4 py-2 font-medium text-sm bg-blue-700 rounded-lg text-white">
            <span>
              <Coffee />
            </span>
            Support me
          </a>
        </Link>
      )}
    </>
  );
};

export default DonationSticky;
