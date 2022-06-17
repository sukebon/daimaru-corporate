/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import styles from "./Company.module.scss";

const Company = () => {
  return (
    <>
      <Head>
        <title>大丸白衣 | 会社概要</title>
        <meta
          name="description"
          content="大丸白衣は食品業界向けユニフォーム、医療業界向け白衣、作業着、制服をご提案！異物混入対策や動きやすさにも対応。ユニフォームのレンタルも行っています。"
        />
      </Head>
      <Header />
      <main>
        <section className={`m-full`}>
          <div className={`inner p-6 pb-0`}>
            <PageTitle titleH1="代表挨拶" titleH2="Message" />
            <article className={`my-12 text-sm`}>
              <p className={`mb-6`}>
                昭和6年、私たち大丸白衣は、その名の通り白衣専門店として大阪の地で創業しました。
              </p>
              <p className={`mb-6`}>
                それから90余年、豊かで成熟した社会へと大きく様変わりしていく中で、私たちは白衣＝ユニフォームという広い視野に立ち、これまで培ってきた経験と伝統を基盤としながら、新たに果たすべき役割や可能性について問い続け、新たな商品開発を行ってきました。
              </p>
              <p className={`mb-6`}>
                その領域は、製造業、流通、医療、サービスなど多岐にわたります。
              </p>
              <p className={`mb-6`}>
                私たちの使命は、それぞれの分野で日々変わりゆくニーズを的確に捉え、現場で働く皆様にとって最良のユニフォームづくりに徹すること。堅牢なだけでなく、動きやすさや着心地のよさも重視し、あらゆる用途・環境に応じたユニフォームを提供しています。そして、時代の潮流を意識したファッション性をプラスすることも忘れません。
              </p>
              <p className={`mb-6`}>
                すべては、ユニフォームに袖を通すお客様にいきいきと快適に過ごしていただくために―――。
              </p>
              <p className={`mb-6`}>
                私たち大丸白衣は、今後も上質なユニフォームづくりを通して人と社会に貢献できるよう、不断の努力を続けてまいります。
              </p>
              <div className={"text-right"}>
                代表取締役社長
                <br />
                中尾 仁美
              </div>
            </article>
          </div>
        </section>
        <section className={`m-full mb-32`}>
          <div className={`inner p-6`}>
            <PageTitle titleH1="会社概要" titleH2="Company Profile" />
            <ul className={`text-sm`}>
              <li className={`${styles.companyItem}`}>
                <div className={styles.companyLeft}>会社名</div>
                <div className={styles.companyRight}>株式会社大丸白衣</div>
              </li>
              <li className={styles.companyItem}>
                <div className={styles.companyLeft}>本社</div>
                <div className={styles.companyRight}>
                  <p className={styles.p}>
                    〒542-0073
                    <br />
                    大阪市中央区日本橋2丁目4番17号
                    <br />
                    営業部｜
                    <br className={styles.companyBr} />
                    Tel : 06-6632-0891（代表）{" "}
                    <br className={styles.companyBr} />
                    Fax : 06-6641-9200
                    <br />
                    ショップ｜Tel : 06-6641-4629
                  </p>
                </div>
              </li>
              <li className={styles.companyItem}>
                <div className={styles.companyLeft}>神戸支店</div>
                <div className={styles.companyRight}>
                  <p>
                    〒650-0021
                    <br />
                    神戸市中央区三宮町3丁目9番17号
                    <br />
                    Tel : 078-391-4629　
                    <br className={styles.companyBr} />
                    Fax : 078-321-0747
                  </p>
                </div>
              </li>
              <li className={styles.companyItem}>
                <div className={styles.companyLeft}>自社工場</div>
                <div className={styles.companyRight}>
                  <p>
                    〒779-3131
                    <br />
                    徳島市下町本丁
                    <br />
                    Tel : 0886-44-0301
                  </p>
                </div>
              </li>
              <li className={styles.companyItem}>
                <div className={styles.companyLeft}>配送センター</div>
                <div className={styles.companyRight}>
                  <p>
                    〒542-0073
                    <br />
                    大阪市中央区日本橋1丁目22番15号
                    <br />
                    Tel : 06-6641-0891
                  </p>
                </div>
              </li>
              <li className={styles.companyItem}>
                <div className={styles.companyLeft}>営業内容</div>
                <div className={styles.companyRight}>ユニフォーム製造販売</div>
              </li>
              <li className={styles.companyItem}>
                <div className={styles.companyLeft}>資本金</div>
                <div className={styles.companyRight}>3000万円</div>
              </li>
              <li className={styles.companyItem}>
                <div className={styles.companyLeft}>従業員</div>
                <div className={styles.companyRight}>50名</div>
              </li>
              <li className={styles.companyItem}>
                <div className={styles.companyLeft}>創業</div>
                <div className={styles.companyRight}>昭和6年10月</div>
              </li>
              <li className={styles.companyItem}>
                <div className={styles.companyLeft}>設立</div>
                <div className={styles.companyRight}>昭和31年12月27日</div>
              </li>
              <li className={styles.companyItem}>
                <div className={styles.companyLeft}>代表取締役社長</div>
                <div className={styles.companyRight}>中尾 仁美</div>
              </li>
              <li className={styles.companyItem}>
                <div className={styles.companyLeft}>取引銀行</div>
                <div className={styles.companyRight}>
                  三菱UFJ銀行 心斎橋支店　　
                  <br className={styles.companyBr} />
                  三井住友銀行 難波支店　　
                  <br className={styles.companyBr} />
                  関西みらい銀行 難波支店
                </div>
              </li>
              <li className={styles.companyItem}>
                <div className={styles.companyLeft}>決算期</div>
                <div className={styles.companyRight}>毎年2月末日</div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Company;
