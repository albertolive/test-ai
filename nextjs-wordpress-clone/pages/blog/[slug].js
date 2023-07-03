import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../../components/Layout';
import PostCard from '../../components/PostCard';
import { fetchPost } from '../../api/posts';

const BlogPost = ({ post }) => {
  const router = useRouter();
  const { t } = useTranslation('blog');

  if (router.isFallback) {
    return <div>{t('loading')}</div>;
  }

  return (
    <Layout title={post.title}>
      <PostCard post={post} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await fetchPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = await fetchPost(params.slug);

  return {
    props: {
      post,
      ...(await serverSideTranslations(params.locale, ['blog', 'common'])),
    },
  };
}

export default BlogPost;