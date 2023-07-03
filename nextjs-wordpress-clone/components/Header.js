import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import styles from '../styles/Header.module.css';

const Header = () => {
  const { t } = useTranslation('common');

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>{t('home')}</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>{t('about')}</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>{t('blog')}</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>{t('contact')}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;