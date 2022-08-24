import { NextPage } from 'next';
import { blocksList } from '@/data/Blocks';
import Link from 'next/link';
import Image from 'next/image';

const BlocksPage: NextPage = () => {
  const data = blocksList;

  return (
    <section className="py-10 px-8">
      <section className="max-w-7xl items-center justify-between mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((category) => {
          const blockCount = category.blocks.length;

          return (
            <Link href={`/blocks/${category.name}`} key={category.name}>
              <a className="p-4 rounded-lg border-2 border-blue-800 hover:bg-blue-800 hover:text-white flex flex-col items-center gap-2">
                <section className="flex justify-between items-center w-full">
                  <h2 className="font-bold">{category.name}</h2>
                  <p className="text-sm">
                    {`${blockCount} ${blockCount == 1 ? 'Block' : 'Blocks'}`}{' '}
                  </p>
                </section>
                {category.image && <Image src={`/images/${category.image}`} width={180} height={150} />}
              </a>
            </Link>
          );
        })}
      </section>
    </section>
  );
};

export default BlocksPage;
