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
    <section className="w-full mx-auto flex flex-col items-center gap-4">
      <h5 className="text-gray-800 font-medium text-lg">{`You didn't add any ${text.toLowerCase()}`}</h5>
      <Image
        src={image}
        alt={`No ${text}s added`}
        layout="fixed"
        width={150}
        height={150}
      />
      <Link href={url} passHref>
        <a className="border-2 border-blue-700 hover:border-blue-900 bg-blue-700 hover:bg-blue-900 transition duration-300 text-white rounded-lg px-4 py-3">{`View all ${text}s`}</a>
      </Link>
    </section>
  );
};

export default EmptyState;
