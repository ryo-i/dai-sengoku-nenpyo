import React, { useState }  from 'react';
import { categoryContext } from '../context/categoryContext';
import Header from '../components/Header';
import InnerIndex from '../components/InnerIndex';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const pageTitle = Data.nenpyo.title;
const pageText = Data.nenpyo.text;


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
        <categoryContext.Provider value={{isCategory, setIsCategory, categoryName, setCategoryName, categoryPath, setCategoryPath}} >
          <InnerIndex />
        </categoryContext.Provider>
      </main>
      <Footer />
    </>
  )
}

export default Home;