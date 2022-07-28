import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import DonationSticky from '@/components/buttons/Donation';

interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <DonationSticky />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
