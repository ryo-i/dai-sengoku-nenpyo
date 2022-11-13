import React, { useState }  from 'react';
import Link from 'next/link';
import Nav from './style/Nav';
import Section from './style/commonSection';
import Data from '../data/data.json';


// Component
function InnerReference() {
  // Hooks
  const [reference, seReference] = useState(Data.reference);


  // Tag Info
  const TagInfo = () => {
    return (
      <>
      <section>
          <h2>歴史全般</h2>
          <ul>
            {reference.allHistory.map((data, index) =>
              <li  key={index}>
                { data.author + '『' + data.title + '』' + data.publisher+ '(' + data.year + ')' + '【' + data.status + '】'}
              </li>
            )}
          </ul>
        </section>
        <section>
          <h2>戦国史</h2>
          <ul>
            {reference.sengokuHistory.map((data, index) =>
              <li  key={index}>
                { data.author + '『' + data.title + '』' + data.publisher+ '(' + data.year + ')' + '【' + data.status + '】'}
              </li>
            )}
          </ul>
        </section>
        <section>
          <h2>地域史</h2>
          <ul>
            {reference.areaHistory.map((data, index) =>
              <li  key={index}>
                { data.author + '『' + data.title + '』' + data.publisher+ '(' + data.year + ')' + '【' + data.status + '】'}
              </li>
            )}
          </ul>
        </section>
        <section>
          <h2>合戦</h2>
          <ul>
            {reference.kassen.map((data, index) =>
              <li  key={index}>
                { data.author + '『' + data.title + '』' + data.publisher+ '(' + data.year + ')' + '【' + data.status + '】'}
              </li>
            )}
          </ul>
        </section>
        <section>
          <h2>人物</h2>
          <ul>
            {reference.jinbutsu.map((data, index) =>
              <li  key={index}>
                { data.author + '『' + data.title + '』' + data.publisher+ '(' + data.year + ')' + '【' + data.status + '】'}
              </li>
            )}
          </ul>
        </section>
        <section>
          <h2>その他</h2>
          <ul>
            {reference.etc.map((data, index) =>
              <li  key={index}>
                { data.author + '『' + data.title + '』' + data.publisher+ '(' + data.year + ')' + '【' + data.status + '】'}
              </li>
            )}
          </ul>
        </section>
      </>
    );
  };


  // JSX
  return (
    <>
      <Nav>
        <ul className="breadcrumb">
          <li><Link href="/"><a>Home</a></Link></li>
          <li>参考文献</li>
        </ul>
      </Nav>
      <Section>
        <TagInfo />
      </Section>
    </>
  );
}

export default InnerReference;
