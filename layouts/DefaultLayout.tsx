import React, { ReactNode } from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

interface DefaultProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
