import React, { useState, useEffect, useContext }  from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './style/Nav';
import Section from './style/commonSection';
import tagStyle from './style/tagStyle';
import { getDividedArray } from '../modules/nenpyoInfo/getDividedArray';
import Data from '../data/data.json';


// CSS in JS
const Tag = styled.a`
  ${tagStyle}
  font-size: 12px !important;
  margin: 4px 8px 4px 0 !important;
  padding: 4px !important;
  cursor: pointer;
`;


// Component
function InnerTag() {
  // Hooks
  const [adAge, setAdAge] = useState(Data.piriod.adAge);
  const [waGengo, setWaGengo] = useState(Data.piriod.waGengo);
  const [place, setPlace] = useState(Data.place);


  // Tag Info
  const TagInfo = () => {
    return (
      <>
        <section>
          <h2>時期</h2>
          <dl>
            <dt>年代</dt>
            <dd>
              {adAge.map((data, index) =>
                <Link href={"/?adAge=" + data.age} key={index}>
                  <Tag className="adAge">{data.age}</Tag>
                </Link>
              )}
            </dd>
          </dl>
          <dl>
            <dt>年間</dt>
            <dd>
              {waGengo.map((data, index) =>
                <Link href={"/?waGengo=" + data.gengo} key={index}>
                  <Tag className="waGengo">{data.gengo}年間</Tag>
                </Link>
              )}
            </dd>
          </dl>
        </section>
        <section>
          <h2>場所</h2>
          {place.map((data, index) =>
            <dl key={index}>
              <dt>{data.region}</dt>
              <dd>
                <Link href={"/?region=" + data.region} key={index}>
                  <Tag className="region">{data.region}</Tag>
                </Link>
                {data.country.map((data, index) =>
                  <Link href={"/?country=" + data} key={index}>
                  <Tag className="country">{data}</Tag>
                </Link>
                )}
              </dd>
            </dl>
          )}
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
          <li>タグ一覧</li>
        </ul>
      </Nav>
      <Section>
        <TagInfo />
      </Section>
    </>
  );
}

export default InnerTag;
