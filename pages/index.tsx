import React, { useState }  from 'react';
import { categoryContext } from '../context/categoryContext';
import Header from '../components/Header';
import InnerIndex from '../components/InnerIndex';
import Footer from '../components/Footer';


const pageTitle = '年表一覧';
const pageText = 'xxxx、xxxx、xxxxなどで絞り込みができます。';


function Home() {
  const [isCategory, setIsCategory] = useState(false);
  const [categoryName, setCategoryName] = useState('All');
  const [categoryPath, setCategoryPath] = useState('');

  /* return (
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
  ) */

  return (
    <>
      <Header />
      <main>
        <h1>{ pageTitle }</h1>
        <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
        作成中
      </main>
      <Footer />
    </>
  )
}

export default Home;