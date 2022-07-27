import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
