import React from 'react';

interface Props {
  link: string;
  icon: React.ReactNode;
}

const SocialLink = ({ link, icon }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="bg-gray-500 p-1 text-white rounded-full hover:bg-gray-700"
    >
      {icon}
    </a>
  );
};

export default SocialLink;
