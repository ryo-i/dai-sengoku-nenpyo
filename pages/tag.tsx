import React  from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import InnerTag from '../components/InnerTag';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const pageTitle = "タグ一覧";
const pageText = "時期、場所、勢力などの代表的なタグ一覧です";
const headTitle = pageTitle + ' | ' + headerTitle;


function Home() {
  return (
    <>
      <Head>
        <title>{ headTitle }</title>
        <meta name="description" content={ pageText } />
        <meta property="og:title" content={ headTitle } />
        <meta property="og:description" content={ pageText } />
      </Head>
      <Header />
      <main>
        <h1>{ pageTitle }</h1>
        <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
          <InnerTag />
      </main>
      <Footer />
    </>
  )
}

export default Home;