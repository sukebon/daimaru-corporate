/* eslint-disable @next/next/no-page-custom-font */
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../component/header/Header';

interface Props {
  posts: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    category: [];
    date: string;
  }[];
}

const News: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>大丸白衣</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Header />
      <main>
        <div>
          {posts.map((post) => (
            <li key={post.id}>
              {post.date.substring(0, 10)}
              {post.category}
              <Link href={`/news/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </div>
      </main>
    </div>
  );
};

export default News;

export async function getStaticProps() {
  const option: {} = {
    headers: {
      'X-MICROCMS-API-KEY': process.env.NEXT_KEY,
    },
  };
  const res = await fetch(`${process.env.NEXT_API}news`, option);
  const resJson = await res.json();
  const posts = resJson.contents;
  return {
    props: {
      posts,
    },
  };
}
