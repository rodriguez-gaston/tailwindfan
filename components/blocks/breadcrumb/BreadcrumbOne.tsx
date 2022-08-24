import React from 'react';
import Link from 'next/link';

const BreadcrumbOne = () => {
  return (
    <nav className="flex p-4">
      <Link href="/">
        <a
          style={{
            clipPath:
              'polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 0 50%, 0% 0%)',
          }}
          className="w-28 sm:w-32 pr-4 pl-2 sm:pr-8 sm:pl-6 py-2 bg-gray-200 flex items-center justify-center text-gray-700 text-xs hover:bg-indigo-600 hover:text-white"
        >
          Home
        </a>
      </Link>
      <Link href="/">
        <a
          style={{
            clipPath:
              'polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)',
          }}
          className="w-28 sm:w-32 -ml-2 px-4 sm:px-8 py-2 bg-gray-200 flex items-center justify-center text-gray-700 text-xs hover:bg-indigo-600 hover:text-white"
        >
          Products
        </a>
      </Link>
      <Link href="/">
        <a
          style={{
            clipPath:
              'polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)',
          }}
          className="w-28 sm:w-32 -ml-2 px-4 sm:px-8 py-2 bg-indigo-500 flex items-center justify-center text-white text-xs"
        >
          T-shirts
        </a>
      </Link>
    </nav>
  );
};

export default BreadcrumbOne;
