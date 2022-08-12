import Block from '@/components/blocks/Block';
import { blocksList } from '@/lib/Components';
import { NextPage } from 'next';

const BlocksPage: NextPage = () => {
  return (
    <section className="py-10 lg:pt-20 px-8">
      <section className="max-w-7xl mx-auto">
        <p>Esta es la Component Page</p>
        {blocksList.map((block) => {
          return (
            <Block
              id={block.id}
              title={block.title}
              category={block.category}
              block={block.block}
              key={block.id}
            />
          );
        })}
      </section>
    </section>
  );
};

export default BlocksPage;
