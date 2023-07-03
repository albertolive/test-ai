import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <Layout>
      <h1>{t('welcome')}</h1>
      <p>{t('intro')}</p>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['home', 'common']),
    },
  };
}