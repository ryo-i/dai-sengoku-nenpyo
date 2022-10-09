import React, { useState, useEffect }  from 'react';
import { categoryContext } from '../../context/categoryContext';
import Header from '../../components/Header';
import InnerIndex from '../../components/InnerIndex';
import Footer from '../../components/Footer';
import { getCaterogyInfo } from '../../modules/nenpyoList/getCaterogyInfo';


const pageTitle = '年表一覧';
const pageText = 'xxxx、xxxx、xxxxなどで絞り込みができます。';


function Home({ categoryInfo }) {
  const [isCategory, setIsCategory] = useState(true);
  const [categoryName, setCategoryName] = useState(categoryInfo.name);
  const [categoryPath, setCategoryPath] = useState(categoryInfo.path);


  // Set Category Info
  useEffect(() => {
    setCategoryName(categoryInfo.name);
    setCategoryPath(categoryInfo.path);
    // console.log('categoryName', categoryName);
    // console.log('categoryPath', categoryPath);
  }, [categoryInfo]);


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


// Get Path
export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: 'senso' } },
      { params: { category: 'gaiko' } },
      { params: { category: 'seiji' } },
      { params: { category: 'bunka' } },
      { params: { category: 'seireki' } },
      { params: { category: 'wareki' } }
    ],
    fallback: false
  };
}


// Get CategoryInfo
export async function getStaticProps({ params }) {
  const category = params.category;
  const categoryInfo = getCaterogyInfo(category);
  // console.log('category', category);
  // console.log('categoryInfo', categoryInfo);
  return { props: { categoryInfo } };
}

export default Home;