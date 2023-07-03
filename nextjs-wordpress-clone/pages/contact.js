import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const { t } = useTranslation('contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        alert(t('messageSent'));
      } else {
        throw new Error(t('messageFailed'));
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Layout>
      <div className={styles.contactForm}>
        <h1>{t('contactUs')}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={t('name')}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={t('email')}
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={t('message')}
            required
          />
          <button type="submit">{t('send')}</button>
        </form>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['contact', 'common']),
    },
  };
}