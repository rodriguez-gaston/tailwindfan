import Block from '@/components/blocks/Block';
import { NextPage } from 'next';
import { blocksList } from '@/data/Components';
import { IBlock } from '@/interface/blocks';

const BlocksPage: NextPage = () => {
  return (
    <section className="py-10 lg:pt-20 px-8">
      <section className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-5xl font-bold text-gray-800">Blocks page</h1>
        <section className="space-y-8">
          {blocksList.map((block: IBlock) => {
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
    </section>
  );
};

export default BlocksPage;
