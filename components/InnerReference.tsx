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
        <hr />
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
        <hr />
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
        <hr />
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
        <hr />
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
        <hr />
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
        <hr />
        <section>
          <h2>url</h2>
          <dl>
            <dt>和暦・西暦</dt>
            <dd>
              <ul>
                {reference.url.date.map((data, index) =>
                  <li  key={index}>
                    <a href={data} target="_blank">{data}</a>
                  </li>
                )}
              </ul>
            </dd>
            <dt>律令国</dt>
            <dd>
              <ul>
                {reference.url.country.map((data, index) =>
                  <li  key={index}>
                    <a href={data} target="_blank">{data}</a>
                  </li>
                )}
              </ul>
            </dd>
            <dt>為政者</dt>
            <dd>
              <ul>
                {reference.url.authority.map((data, index) =>
                  <li  key={index}>
                    <a href={data} target="_blank">{data}</a>
                  </li>
                )}
              </ul>
            </dd>
          </dl>
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
