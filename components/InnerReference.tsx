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
          <h3>歴史全般</h3>
          <ul>
            {reference.allHistory.map((data, index) =>
              <li  key={index}>
                { data.author + '『' + data.title + '』' + data.publisher+ '(' + data.year + ')' + '【' + data.status + '】'}
              </li>
            )}
          </ul>
        </section>
        <section>
          <h3>戦国史</h3>
          <ul>
            {reference.sengokuHistory.map((data, index) =>
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
