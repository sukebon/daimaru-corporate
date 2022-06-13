import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Information from '../../components/information/Information';
import styles from './serenade.module.scss';

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

const Serenade: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Serenade 大丸白衣</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Header />
      <main>
        <div
          className={`${styles.serenadeContainer} mx-auto flex flex-col lg:flex-row`}
        >
          <div className={`w-full lg:w-7/12`}>
            <img src='./images/serenade-top-image.jpg' alt='serenade' />
          </div>
          <div
            className={`w-full lg:w-5/12 p-6 mt-12 lg:mt-0 flex flex-col items-center justify-center`}
          >
            <div>
              <h1 className={`text-3xl`}>強く、美しい人へ。</h1>
              <p className={`mt-10 text-sm`}>
                わたしたちは知っています。
                <br />
                目の前の守るべき人を支えたい。力になりたい。
                <br />
                その一心で、くる日もくる日も
                <br />
                かけがえのない命と向き合っている。
                <br />
                心と体にすべてでたたかっている、その姿を。
                <br />
                そして、懸命な献身の内側に
                <br />
                ほんとうの美しさがあることを。
                <br />
                貴方には、その美しさにふさわしい
                <br />
                ほんとうにいいものを身に着けてほしい。
                <br />
                そんな思いを込めて、
                <br />
                リスペクトとともにこの一着をお届けします。
              </p>
            </div>
          </div>
        </div>
        <div className={`inner`}>
          <div className={`w-full text-center mt-28 mb-24 p-3`}>
            <h2 className={`text-3xl`}>DIGITAL CATALOG</h2>
            <div className={`mx-auto border mt-12 lg:w-8/12`}>
              <a
                href='https://my.ebook5.net/daimaru-hakui/serenade-vol5/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='./images/serenade-catalog-2.jpg' />
              </a>
            </div>
            <button>
              <a
                href='https://my.ebook5.net/daimaru-hakui/serenade-vol5/'
                target='_blank'
                rel='noopener noreferrer'
                className={`block text-sm border px-12 py-3 mt-12 hover:bg-black hover:text-white ease-in duration-200`}
              >
                デジタルカタログを見る
              </a>
            </button>
          </div>
        </div>
        <Information posts={posts} directory={'serenade/news'} />
      </main>
      <Footer />
    </>
  );
};

export default Serenade;

export async function getStaticProps() {
  const option: {} = {
    headers: {
      'X-MICROCMS-API-KEY': 'd6bb628f48544d69a1adb92e4c51261c636f',
    },
  };
  const res = await fetch(`https://serenade.microcms.io/api/v1/news`, option);
  const resJson = await res.json();
  const posts = resJson.contents;
  return {
    props: {
      posts,
    },
  };
}
