import styled from 'styled-components';
import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const pageTitle = 'このアプリについて';
const pageText = '「大戦国・年表」は南北朝合一（明徳の和約）から元和偃武（家康の死亡）での戦国時代（1392〜1616年）の年表を作るプロジェクトです（年表は随時追加中）';
const headTitle = pageTitle + ' | ' + headerTitle;


// CSS in JS
const Main = styled.main`
    h2 {
        background: #eee;
        margin: 60px 0 20px;
        padding: 10px;
        border-radius: 3px;
    }
    h3 {
        margin: 40px 0 10px;
        padding: 0 0 10px;
        border-bottom: 1px solid #ddd;
    }
    figure {
        margin: 0 0 30px;
        img {
            max-width: 100%;
            box-shadow: 0 0 15px 2px rgb(0 0 0 / 10%);
        }
        figcaption {
            margin: 0 0 10px;
            font-size: 12px;
            font-weight: bold;
        }
    }
`;


// Component
function About() {
    return (
        <>
        <Head>
            <title>{ headTitle }</title>
            <meta name="description" content={ pageText } />
            <meta property="og:title" content={ headTitle } />
            <meta property="og:description" content={ pageText } />
        </Head>
        <Header />
        <Main>
            <h1>{ pageTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
            <section>
                <h2>進捗</h2>
                <ul>
                    <li>図解戦国史、年表1600年まで追加 <a href="https://github.com/ryo-i/dai-sengoku-nenpyo/issues/2" target="_blank">#2</a></li>
                    <li>参考文献追加 <a href="https://github.com/ryo-i/dai-sengoku-nenpyo/issues/3" target="_blank">#3</a></li>
                </ul>
            </section>
            <section>
                <h2>大戦国・年表とは</h2>
                <p>戦国時代好きのイイダリョウが小学校の時から収集・愛読してきたさまざまな戦国時代の本（学研の歴史群像など）の年表化していくプロジェクトです（年表は随時更新中）</p>
                <p><a href="https://dai-sengoku-nenpyo.vercel.app/tag">タグ一覧</a>にあるような時期・場所・勢力などのタグで絞り込みができます。ヘッダーの検索窓からフリーワード検索もできます。</p>
                <p><a href="https://dai-sengoku-nenpyo.vercel.app/reference">参考文献</a>にあるよう書籍にある戦国時代の情報を統一したフォーマットで年表化していきます。</p>
                <p>その他、Wikipediaをはじめとしたネット記事も参照させていただいております。</p>
            </section>
            <section>
                <h2>詳細</h2>
                <section>
                    <h3>ブログ</h3>
                    <p><a href="https://www.i-ryo.com/entry/2022/11/13/121556" target="_blank">【React/Next.js】大戦国・年表を作った（年表は随時追加中ー） - クモのようにコツコツと</a></p>
                </section>
                <section>
                    <h3>ソースコード（GitHub）</h3>
                    <p><a href="https://github.com/ryo-i/dai-sengoku-nenpyo" target="_blank">リポジトリ</a></p>
                </section>
            </section>
            <Profile />
        </Main>
        <Footer />
        </>
    );
}

export default About;