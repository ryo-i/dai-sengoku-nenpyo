import React, { useState, useEffect, useContext }  from 'react';
import { useRouter } from 'next/router';
import { categoryContext } from '../context/categoryContext';
import { indexContext } from '../context/indexContext';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import CategoryNav from './CategoryNav';
import IndexBreadcrumb from './IndexBreadcrumb';
import Information from './IndexInformation';
import Pagination from './IndexPagination';
import Nav from './style/Nav';
import tagStyle from './style/tagStyle';
import Data from '../data/data.json';
import { getQueryParam } from '../modules/nenpyo/getQueryParam';
import { getHeadInfo } from '../modules/nenpyo/getHeadInfo';
import { getQueryInfo } from '../modules/nenpyo/getQueryInfo';
import { getPageKey } from '../modules/nenpyo/getPageKey';
import { deleteParam } from '../modules/nenpyo/deleteParam';
import { getDividedArray } from '../modules/nenpyo/getDividedArray';
import { getCaterogyInfo } from '../modules/nenpyo/getCaterogyInfo';
import { displayError } from '../modules/nenpyo/displayError';

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
            font-size: 0.85em;
          }
          .title {
            font-size: 1.25em;
            margin: 5px 0;
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
          .tag-area a,
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
  const { category, page, year, format } = router.query;


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


  // Category Icon
  function CategoryIcon (props) {
    displayError(error, props, "category");
    const category = getCaterogyInfo(props.category);

    return (
      <Link href={hierarchy + "category/" + category.path}>
        <a><p className="category">{props.category}</p></a>
      </Link>
    );
  }


  // Wa Year Tag
  function WaYearTag (props) {
    displayError(error, props, "waYear");
    const category = getCaterogyInfo(props.category);

    return (
      <Link href={
        isCategory ?
        hierarchy + "category/" + category.path + "?waYear=" + props.waYear + "&waYearUnit=" + props.waYearUnit :
        hierarchy + "?waYear=" + props.waYear + "&waYearUnit=" + props.waYearUnit
      }>
        <a className="waYear">{props.waYear + props.waYearUnit}</a>
      </Link>
    );
  }


  // Wa Gengo Tag
  function WaGengoTag (props) {
    displayError(error, props, "waGengo");
    const resultArray = getDividedArray(props.waGengo);
    const category = getCaterogyInfo(props.category);

    return (
      <>
        {resultArray.map((data, index) => data &&
          <Link href={
              isCategory ?
              hierarchy + "category/" + category.path + "?waGengo=" + data :
              hierarchy + "?waGengo=" + data
            }
            key={index}
          >
            <a className="waGengo">{data + props.waYearUnit}</a>
          </Link>
        )}
      </>
    );
  }


  // AD Year Tag
  function AdYearTag (props) {
    displayError(error, props, "adYear");
    const category = getCaterogyInfo(props.category);

    return (
      <Link href={
        isCategory ?
        hierarchy + "category/" + category.path + "?adYear=" + props.adYear + "&adYearUnit=" + props.adYearUnit :
        hierarchy + "?adYear=" + props.adYear + "&adYearUnit=" + props.adYearUnit
      }>
        <a className="adYear">{props.adYear + props.adYearUnit}</a>
      </Link>
    );
  }


  // AD Age Tag
  function AdAgeTag (props) {
    displayError(error, props, "adAge");
    const resultArray = getDividedArray(props.adAge);
    const category = getCaterogyInfo(props.category);

    return (
      <>
        {resultArray.map((data, index) => data &&
          <Link href={
              isCategory ?
              hierarchy + "category/" + category.path + "?adAge=" + data :
              hierarchy + "?adAge=" + data
            }
            key={index}
          >
            <a className="adAge">{data}</a>
          </Link>
        )}
      </>
    );
  }


  // Country Tag
  function CountryTag (props) {
    displayError(error, props, "country");
    const resultArray = getDividedArray(props.country);
    const category = getCaterogyInfo(props.category);

    return (
      <>
        {resultArray.map((data, index) => data &&
          <Link href={
            isCategory ?
            hierarchy + "category/" + category.path + "?country=" + data :
            hierarchy + "?country=" + data
            }
            key={index}
          >
            <a className="country">{data}</a>
          </Link>
        )}
      </>
    );
  }


  // Region Tag
  function RegionTag (props) {
    displayError(error, props, "region");
    const resultArray = getDividedArray(props.region);
    const category = getCaterogyInfo(props.category);

    return (
      <>
        {resultArray.map((data, index) => data &&
          <Link href={
              isCategory ?
              hierarchy + "category/" + category.path + "?region=" + data :
              hierarchy + "?region=" + data
            }
            key={index}
          >
            <a className="region">{data}</a>
          </Link>
        )}
      </>
    );
  }

  // Influence Tag
  function InfluenceTag (props) {
    displayError(error, props, "influence");
    const resultArray = getDividedArray(props.influence);
    const category = getCaterogyInfo(props.category);

    return (
      <>
        {resultArray.map((data, index) => data &&
          <Link href={
              isCategory ?
              hierarchy + "category/" + category.path + "?influence=" + data :
              hierarchy + "?influence=" + data
            }
            key={index}
          >
            <a className="influence">{data}</a>
          </Link>
        )}
      </>
    );
  }


  // Nenpyo List
  const NenpyoList = () => {
    if (error) {
      return <p>エラー: {error.message}</p>;
    } else if (!isLoaded || router.isFallback) {
      return <p>読み込み中...</p>;
    } else if (!nenpyoData.length) {
      return <p>データが見つかりません</p>;
    }

    return (
      <ul className="nenpyoList">
        {nenpyoData.map((data, index) => data &&
          <li key={index} data-order={data.order}>
            <dl>
              <dt>
                <CategoryIcon category={data.category} />
                <p className="date">
                  {data.commonDate}
                </p>
                <Link href={hierarchy + "event/" + data.title}>
                  <a><p className="title">{data.title}</p></a>
                </Link>
              </dt>
              <dd>
                <p className="tag-area">
                  <span className="wa-area">
                    <WaGengoTag
                      waGengo={data.waGengo}
                      waYearUnit={'年間'}
                      path={data.path}
                      category={data.category}
                    />
                    {data.waYearUnit === "年" &&
                      <WaYearTag
                        waYear={data.waYear}
                        waYearUnit={data.waYearUnit}
                        path={data.path}
                        category={data.category}
                      />
                    }
                  </span>
                  <span className="ad-area">
                    <AdAgeTag
                      adAge={data.adAge}
                      path={data.path}
                      category={data.category}
                    />
                    {data.adYearUnit === "年" &&
                      <AdYearTag
                        adYear={data.adYear}
                        adYearUnit={data.adYearUnit}
                        path={data.path}
                        category={data.category}
                      />
                    }
                  </span>
                  <span className="place-area">
                    <RegionTag
                      region={data.region}
                      path={data.path}
                      category={data.category}
                    />
                    {data.country &&
                      <CountryTag
                        country={data.country}
                        path={data.path}
                        category={data.category}
                      />
                    }
                  </span>
                  <span className="influence-area">
                    <InfluenceTag
                      influence={data.influence}
                      path={data.path}
                      category={data.category}
                    />
                  </span>
                </p>
              </dd>
            </dl>
          </li>
        )}
      </ul>
    );
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
