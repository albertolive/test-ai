import React from 'react';
import Link from 'next/link';
import styles from '../styles/PostCard.module.css';

const PostCard = ({ post }) => {
  return (
    <div className={styles.card}>
      <img src={post.image} alt={post.title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{post.title}</h2>
        <p className={styles.cardExcerpt}>{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`}>
          <a className={styles.cardLink}>Leer más</a>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;