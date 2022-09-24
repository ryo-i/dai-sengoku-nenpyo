import React, { useState, useEffect, useContext }  from 'react';
import { useRouter } from 'next/router';
import { categoryContext } from '../context/categoryContext';
import { indexContext } from '../context/indexContext';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import CategoryNav from './CategoryNav';
import IndexBreadcrumb from './IndexBreadcrumb';
import TagList from './IndexTagList';
import Information from './IndexInformation';
import Pagination from './IndexPagination';
import Nav from './style/Nav';
import tagStyle from './style/tagStyle';
import Data from '../data/data.json';
import { getQueryParam } from '../modules/nenpyoList/getQueryParam';
import { getHeadInfo } from '../modules/nenpyoList/getHeadInfo';
import { getQueryInfo } from '../modules/nenpyoList/getQueryInfo';
import { getPageKey } from '../modules/nenpyoList/getPageKey';
import { deleteParam } from '../modules/nenpyoList/deleteParam';

const headerTitle = Data.header.title;
const headerText = Data.header.text;


// CSS in JS
const Section = styled.section`
  h2 {
    color: #333;
    margin: 0 0 10px;
  }
  .nenpyoList {
    padding: 10px 0;
    li {
      display: flex;
      align-items: center;
      border-top: #eee 2px solid;
      padding: 20px 0;
      dd, figure, p {
        margin: 0;
        line-height: 1.5;
      }
      .icon a {
        display: block;
        text-decoration: none;
        background: #c26772;
        color: #fff;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 50%;
        margin: 0 16px 0 0;
      }
      dl {
        margin: 0;
        flex: 1;
        dt {
          margin: 0 0 10px;
          /* display: flex;
          align-items: center; */
          text-decoration: none;
          .category {
            margin: 0 8px 0 0;
            padding: 4px;
            display: inline-block;
            font-size: 10px;
            background: #ddd;
            text-align: center;
            border-radius: 3px;
            color: #000;
          }
          .date {
            display: inline-block;
            font-size: 0.75em;
          }
          .song {
            font-size: 18px;
            line-height: 1.25;
            flex: 1;
            text-decoration: underline;
          }
        }
        dd {
          font-size: 12px;
          color: #333;
          .title-area {
            margin: 0;
          }
          .title {
            font-weight: bold;
          }
          .title a,
          .artist a {
            color: #666;
          }
          .year a,
          .format a ${tagStyle}
        }
      }
    }
    li:last-child {
      border-bottom: 2px solid #ccc;
    }
  }
`;


// Component
function InnerIndex() {
  // Hooks
  const [headTitle, setHeadTitle] = useState(headerTitle);
  const [headText, setHeadText] = useState(headerText);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [yearList, setYearList] = useState([]);
  const [formatList, setFormatList] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [nenpyoData, setNenpyoData] = useState([]);
  const {isCategory, setIsCategory} = useContext(categoryContext);
  const {categoryName, setCategoryName} = useContext(categoryContext);
  const {categoryPath, setCategoryPath} = useContext(categoryContext);
  const [queryInfo, setQueryInfo] = useState('');
  const [hierarchy, setHierarchy] = useState('/');
  const [currentYear, setCurrentYear] = useState('');
  const [currentFormat, setCurrentFormat] = useState('');
  const [pageParam, setPageParam] = useState('');
  const [pageKey, setPageKey] = useState('');

  // Get Query Param
  const router = useRouter();
  const queryParam = router.query;
  const { category, page, year, format} = router.query;


  useEffect(() => {
    const thisQueryInfo = getQueryInfo(queryParam);
    setQueryInfo(thisQueryInfo);

    if (category) {
      queryParam.category = category;
      setHierarchy('../');
      setIsCategory(true);
    } else if (isCategory) {
      queryParam.category = categoryPath;
      setHierarchy('../');
    }

    if (page) {
      queryParam.page = page;
    }

    if (year) {
      setCurrentYear(String(queryParam.year));
    } else {
      setCurrentYear('');
    }

    if (format) {
      setCurrentFormat(String(queryParam.format));
    } else {
      setCurrentFormat('');
    }

    // Head
    const queryText = getQueryParam(queryParam);
    const headINfo = getHeadInfo(isCategory, thisQueryInfo, categoryName);
    setHeadTitle(headINfo.headTitle);
    setHeadText(headINfo.headText);

    // Page Param
    const resultPageParam = deleteParam(queryParam);
    const resultQueryText = getQueryParam(resultPageParam);
    const pageKey = getPageKey(resultQueryText);
    setPageParam(resultQueryText);
    setPageKey(pageKey);

    // fetch
    const url: string = isCategory ? '../api/nenpyo' + queryText : 'api/nenpyo' + queryText;
    // console.log('url', url);
    async function getNenpyoData (url) {
      try {
        const res = await fetch(url);
        const resJson = await res.json();
        const data = resJson;
        // console.log('data', data);
        setNenpyoData(data.nenpyoList);
        setYearList(data.yearList);
        setFormatList(data.formatList);
        setPageInfo(data.pageInfo);
        setIsLoaded(true);
      } catch(error) {
        setError(error);
        console.log('err', error);
        setIsLoaded(true);
      }
    };

    if (router.isReady && queryText !== null) {
      getNenpyoData(url);
    }
  }, [router, queryParam, categoryName]);


  // Nenpyo List
  const NenpyoList = () => {
    if (error) {
      return <p>エラー: {error.message}</p>;
    } else if (!isLoaded) {
      return <p>読み込み中...</p>;
    } else {
      return (
        <ul className="nenpyoList">
          {nenpyoData.map((data, index) =>
            <li key={index} data-order={data.order}>
              <dl>
                <dt>
                  <p className="category">{data.category}</p>
                  <p className="date">{data.adYear}年{data.adMonth}月{data.adDay}日</p>
                  <Link href={hierarchy + "nenpyo/" + data.id}>
                    <a>
                      <p className="title">{data.title}</p>
                    </a>
                  </Link>
                </dt>
                <dd>

                  <p className="title-area">
                    <span className="year">
                      <Link href={
                        isCategory ?
                        hierarchy + "category/" + data.path + "?year=" + data.year :
                        hierarchy + "?year=" + data.year
                      }>
                        <a>{data.waYear}年</a>
                      </Link>
                    </span>
                  </p>
                  <p className="artist">
                      <Link href={isCategory ?
                        hierarchy + "category/" + data.path + "?artist=" + data.artist :
                        hierarchy + "?artist=" + data.artist
                      }>
                        <a>{data.artist}</a>
                      </Link>
                  </p>
                </dd>
              </dl>
            </li>
          )}
        </ul>
      );
    }
  };


  // JSX
  return (
    <>
      <Head>
        <title>{ headTitle }</title>
        <meta name="description" content={ headText } />
        <meta property="og:title" content={ headTitle } />
        <meta property="og:description" content={ headText } />
      </Head>
      <CategoryNav />
      <indexContext.Provider value={{
        queryInfo, setQueryInfo,
        hierarchy, setHierarchy,
        yearList, setYearList,
        formatList, setFormatList,
        currentYear, setCurrentYear,
        currentFormat, setCurrentFormat,
        pageInfo, setPageInfo,
        pageParam, setPageParam,
        pageKey, setPageKey
      }} >
        <Nav>
          <IndexBreadcrumb />
        </Nav>
        <Section>
          <h2>{categoryName}</h2>
          <TagList />
          <Information />
          <Pagination />
          <NenpyoList />
          <Pagination />
        </Section>
      </indexContext.Provider>
    </>
  );
}

export default InnerIndex;
