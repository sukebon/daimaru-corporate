/* eslint-disable @next/next/no-page-custom-font */
import React, { useState } from "react";
import PageTitle from "../components/pagetitle/PageTitle";
import styles from "../styles/Contact.module.scss";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";
import CommonMeta from "../components/common/meta/CommonMeta";

const Contact = () => {
  const router = useRouter();
  const [company, setCompany] = useState(""); // 「会社名」
  const [department, setDepartment] = useState(""); // 「部署名」
  const [firstname, setFirstname] = useState(""); // 「お名前 姓」
  const [lastname, setLastname] = useState(""); // 「お名前 名」
  const [firstkana, setFirstkana] = useState(""); // 「フリガナ 姓」
  const [lastkana, setLastkana] = useState(""); // 「フリガナ 名」
  const [tel, setTel] = useState(""); // 「TEL」
  const [fax, setFax] = useState(""); // 「FAX」
  const [email, setEmail] = useState(""); // 「メールアドレス」
  const [title, setTitle] = useState(""); // 「件名」
  const [message, setMessage] = useState(""); // 「お問い合わせ内容」

  const sendEmail = (e: any) => {
    e.preventDefault();
    const userID = "user_7yd9EbIQJSbzjqGUXUbJt";
    const serviceID = "service_aq2er0s";
    const templateID = "template_gii3nlf";

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        window.alert("お問い合わせを送信致しました。");
        console.log(result.text);
        setCompany("");
        setDepartment("");
        setFirstname("");
        setLastname("");
        setFirstkana("");
        setLastkana("");
        setTel("");
        setFax("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    sendEmail(e);
  };

  const disableSend: boolean =
    company === "" ||
    firstname === "" ||
    firstkana === "" ||
    email === "" ||
    message === "";

  return (
    <>
      <CommonMeta
        title={"お問い合わせ"}
        siteName={""}
        description={"大丸白衣のお問い合わせページです。"}
        url={router.pathname}
        type={""}
      />
      <main>
        <section className={`m-full mb-28`}>
          <div className={`inner p-6`}>
            <PageTitle titleH1="お問い合わせ" titleH2="Contact" />
            <div className="flex flex-col justify-content-center mt-12">
              <h1 className="text-xl mx-auto ">
                大丸白衣へのお問い合わせはこちらから
              </h1>
              <p className="mt-5 mx-auto text-center text-sm">
                電話・FAXでのお問い合わせの場合
                <br />
                TEL. 06-6632-0891　FAX.06-6411-9200
                <br />
                ※土・日・祝除く 9:00〜18:00
                <br />
                メールでのお問い合わせは下記フォームにてどうぞ。
                <br />
                ※お問い合わせには、営業時間内に順次対応させていただきます。
              </p>
            </div>
            <form
              onSubmit={handleClick}
              className={`${styles.contactForm} flex flex-col my-6 mx-auto text-md`}
            >
              <div className={`${styles.contactFormBox}`}>
                <label htmlFor="campany">
                  会社名・屋号<span className={`text-red-600`}>（必須）</span>
                </label>
                <input
                  type="text"
                  id="campany"
                  className={`w-full`}
                  value={company}
                  name="company"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className={`${styles.contactFormBox}`}>
                <label htmlFor="department">部署名</label>
                <input
                  type="text"
                  id="department"
                  className={`w-full`}
                  value={department}
                  name="department"
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>

              <div className={`${styles.contactFormBox}`}>
                <label htmlFor="firstname">
                  ご担当者様
                  <span className={`text-red-600`}>（必須）</span>
                </label>
                <div className={`flex w-full`}>
                  <input
                    type="text"
                    id="firstname"
                    className={`w-6/12`}
                    value={firstname}
                    name="firstname"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <span className={`mx-1`}></span>
                  <input
                    type="text"
                    id="lastname"
                    className={`w-6/12`}
                    value={lastname}
                    name="lastname"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>

              <div className={`${styles.contactFormBox}`}>
                <label
                  htmlFor="firstkana"
                  className={`flex justify-first items-center`}
                >
                  <span>
                    ご担当者様 <br />
                    （フリガナ）
                  </span>
                  <span className={`text-red-600`}>（必須）</span>
                </label>
                <div className={`flex w-full`}>
                  <input
                    type="text"
                    id="firstkana"
                    className={`w-6/12`}
                    value={firstkana}
                    name="firstkana"
                    onChange={(e) => setFirstkana(e.target.value)}
                  />
                  <span className={`mx-1`}></span>
                  <input
                    type="text"
                    id="lastkana"
                    className={`w-6/12`}
                    value={lastkana}
                    name="lastkana"
                    onChange={(e) => setLastkana(e.target.value)}
                  />
                </div>
              </div>

              <div className={`${styles.contactFormBox}`}>
                <label htmlFor="tel">電話番号</label>
                <input
                  type="text"
                  id="tel"
                  className={`w-full md:w-10/12`}
                  value={tel}
                  name="tel"
                  onChange={(e) => setTel(e.target.value)}
                />
              </div>

              <div className={`${styles.contactFormBox}`}>
                <label htmlFor="fax">FAX番号</label>

                <input
                  type="text"
                  id="fax"
                  className={`w-full`}
                  value={fax}
                  name="fax"
                  onChange={(e) => setFax(e.target.value)}
                />
              </div>

              <div className={`${styles.contactFormBox}`}>
                <label htmlFor="mail">
                  メールアドレス<span className={`text-red-600`}>（必須）</span>
                </label>
                <input
                  type="mail"
                  id="mail"
                  className={`w-full`}
                  value={email}
                  name={"from_email"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={`${styles.contactFormBox}`}>
                <label htmlFor="message">
                  お問い合わせ内容
                  <span className={`text-red-600`}>（必須）</span>
                </label>
                <textarea
                  id="message"
                  className={`w-full`}
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className={`flex justify-center mt-6`}>
                {!disableSend ? (
                  <button
                    type="submit"
                    className={`flex items-center justify-center w-40 h-8 rounded-md text-white bg-sky-600 hover:bg-sky-500 cursor-pointer`}
                  >
                    送信
                  </button>
                ) : (
                  <div
                    className={`flex items-center justify-center w-40 h-8 rounded-md text-white bg-slate-400`}
                  >
                    送信
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
