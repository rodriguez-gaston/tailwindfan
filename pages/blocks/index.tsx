import Block from '@/components/blocks/Block';
import { NextPage } from 'next';

const BlocksPage: NextPage = () => {
  return (
    <section className="py-10 lg:pt-20 px-8">
      <section className="max-w-7xl mx-auto">
        <p>Esta es la Component Page</p>
        <Block />
      </section>
    </section>
  );
};

export default BlocksPage;
