/* eslint-disable @next/next/no-page-custom-font */
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ArticleList from "../../components/articlelist/ArticleList";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";

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
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <main>
        <div className={`inner`}>
          <PageTitle titleH1="お知らせ一覧" titleH2="News" />
          <ArticleList posts={posts} directory={`news`} />
        </div>
      </main>
    </div>
  );
};

export default News;

export async function getStaticProps() {
  const option: {} = {
    headers: {
      "X-MICROCMS-API-KEY": "0d40d76b88e947a48c98d0320506b1927c9f",
    },
  };
  const res = await fetch(`https://qyj277q4jw.microcms.io/api/v1/news`, option);
  const resJson = await res.json();
  const posts = resJson.contents;
  return {
    props: {
      posts,
    },
  };
}
