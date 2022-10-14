import React  from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import InnerReference from '../components/InnerReference';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const pageTitle = "参考文献";
const pageText = "大戦国・年表を形作る参考文献です";
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
          <InnerReference />
      </main>
      <Footer />
    </>
  )
}

export default Home;