import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';

export default function About() {
  const { t } = useTranslation('about');

  return (
    <Layout>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['about', 'common']),
    },
  };
}