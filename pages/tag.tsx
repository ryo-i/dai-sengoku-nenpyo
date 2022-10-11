import React, { useState }  from 'react';
import { categoryContext } from '../context/categoryContext';
import Header from '../components/Header';
import InnerTag from '../components/InnerTag';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const pageTitle = "タグ一覧";
const pageText = "元号、地域など、代表的なタグ一覧です";


function Home() {
  const [isCategory, setIsCategory] = useState(false);
  const [categoryName, setCategoryName] = useState('すべて');
  const [categoryPath, setCategoryPath] = useState('');

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