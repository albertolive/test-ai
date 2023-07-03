import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Layout = ({ children }) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;