import React  from 'react';
import Header from '../components/Header';
import InnerTag from '../components/InnerTag';
import Footer from '../components/Footer';


const pageTitle = "タグ一覧";
const pageText = "時期、場所、勢力などの代表的なタグ一覧です";


function Home() {
  return (
    <>
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