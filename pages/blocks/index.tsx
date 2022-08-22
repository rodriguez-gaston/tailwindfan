import { NextPage } from 'next';
import { blocksList } from '@/data/Blocks';
import Link from 'next/link';

const BlocksPage: NextPage = () => {
  const data = blocksList;

  return (
    <section className="py-10 px-8">
      <section className="max-w-7xl mx-auto space-y-4">
        {data.map((category) => {
          return (
            <Link href={`/blocks/${category.category}`} key={category.category}>
              <a className="p-4 border border-gray-800 rounded-lg block w-40">
                {category.category}
              </a>
            </Link>
          );
        })}
      </section>
    </section>
  );
};

export default BlocksPage;
