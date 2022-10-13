import React  from 'react';
import Header from '../components/Header';
import InnerReference from '../components/InnerReference';
import Footer from '../components/Footer';


const pageTitle = "参考文献";
const pageText = "大戦国・年表を形作る参考文献です";


function Home() {
  return (
    <>
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