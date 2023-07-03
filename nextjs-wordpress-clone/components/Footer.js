import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className={styles.footer}>
      <p>{t('footerText')}</p>
    </footer>
  );
};

export default Footer;