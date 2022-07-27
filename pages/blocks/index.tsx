import Block from '@/components/blocks/Block';
import { NextPage } from 'next';

const BlocksPage: NextPage = () => {
  return (
    <section className="bg-gradient-to-b from-white to-cyan-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <p>Esta es la Component Page</p>
        <Block />
      </div>
    </section>
  );
};

export default BlocksPage;
