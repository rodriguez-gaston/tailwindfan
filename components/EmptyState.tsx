import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  image: string;
  text: string;
  url: string;
}

const EmptyState = ({ image, text, url }: Props) => {
  return (
    <section className="flex flex-col items-center w-full gap-4 mx-auto">
      <h5 className="text-lg font-medium text-gray-800">{`You didn't add any ${text.toLowerCase()}`}</h5>
      <Image
        src={image}
        alt={`No ${text}s added`}
        layout="fixed"
        width={150}
        height={150}
      />
      <Link href={url} passHref legacyBehavior>
        <a className="px-4 py-3 text-white transition duration-300 bg-blue-700 border-2 border-blue-700 rounded-lg hover:border-blue-900 hover:bg-blue-900">{`View all ${text}s`}</a>
      </Link>
    </section>
  );
};

export default EmptyState;
