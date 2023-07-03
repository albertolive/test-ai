import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '../../components/Layout'
import PostList from '../../components/PostList'
import { fetchPosts } from '../../api/posts'

export default function Blog({ posts }) {
  const router = useRouter()
  const { t } = useTranslation('blog')

  return (
    <Layout title={t('title')}>
      <h1>{t('header')}</h1>
      {router.isFallback ? (
        <div>{t('loading')}</div>
      ) : (
        <PostList posts={posts} />
      )}
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  const posts = await fetchPosts()

  return {
    props: {
      posts,
      ...await serverSideTranslations(locale, ['common', 'blog']),
    },
  }
}