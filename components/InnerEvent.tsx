import React, { useState, useEffect, useContext }  from 'react';
import { eventPathContext } from '../context/eventPathContext';
import { eventDataContext } from '../context/eventDataContext';
import Head from 'next/head';
import Link from 'next/link';
import EventBreadcrumb from './EventBreadcrumb';
import Nav from './style/Nav';
import Section from './style/commonSection';
import { getDividedArray } from '../modules/nenpyo/getDividedArray';
import { displayError } from '../modules/nenpyo/displayError';
import Data from '../data/data.json';

const headerTitle = Data.header.title;


// Component
function InnerEvent() {
  // Hooks
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const {eventPath, setEventPath} = useContext(eventPathContext);
  const [eventData, setEventData] = useState({});
  const [headTitle, setHeadTitle] = useState('');
  const [headText, setHeadText] = useState('');


  //  Get Event Data
  useEffect(() => {
    const url: string = '../api/nenpyo/event/' + eventPath;

    async function getEventData (url: string) {
      try {
        const res = await fetch(url);
        const resJson = await res.json();
        const data = resJson.eventData;
        console.log('data', data);
        setEventData(data);
        setIsLoaded(true);
      } catch(error) {
        setError(error);
        console.log('err', error);
        setIsLoaded(true);
      }
    };

    if (eventPath) {
      console.log('eventPath', eventPath);
      const pageTitle = eventPath + ' | ' + headerTitle;
      const pageText =  '「' + eventPath + '」の詳細情報です。';
      setHeadTitle(pageTitle);
      setHeadText(pageText);
      getEventData(url);
    }
  }, [eventPath]);


  // Common Info Array
  function CommonInfoArray (props) {
    displayError(error, props, "array");
    const infoArray = getDividedArray(props.array);

    return (
      <ul className={props.paramKey}>
        {infoArray.map((data, index) =>
          <li key={index}>
            <Link href={"../?" + props.paramKey + "=" + data}>
              <a>{data + props.unit}</a>
            </Link>
          </li>
        )}
      </ul>
    );
  }


  // Remark Array
  function RemarkArray (props) {
    displayError(error, props, "text");
    let remarksArray = getDividedArray(props.text);

    return (
      <ul className={props.paramKey}>
        {remarksArray.map((data, index) =>
          <li key={index}>{data}</li>
        )}
      </ul>
    );
  }


  // Url Array
  function UrlArray (props) {
    displayError(error, props, "source");
    const sourceArray = getDividedArray(props.source);

    return (
      <ul className={"source"}>
        {sourceArray.map((data, index) =>
          <li key={index}><a href={data} target="_blank">{data}</a></li>
        )}
      </ul>
    );
  }


  // Data
  function Data (props) {
    return (
      <ul>
        <li>
          <Link href={
            "../?waYear=" + eventData['waYear'] +
            "&waYearUnit=" + eventData['waYearUnit']
          }>
            <a>{eventData['waYear']}</a>
          </Link>
          {eventData['waYearUnit']}
          <Link href={
            "../?waYear=" + eventData['waYear'] +
            "&waYearUnit=" + eventData['waYearUnit'] +
            "&waMonth=" + eventData['waMonth'] +
            "&waMonthUnit=" + eventData['waMonthUnit']
          }>
            <a>{eventData['waMonth']}</a>
          </Link>
          {eventData['waMonthUnit']}
          <Link href={
            "../?waYear=" + eventData['waYear'] +
            "&waYearUnit=" + eventData['waYearUnit'] +
            "&waMonth=" + eventData['waMonth'] +
            "&waMonthUnit=" + eventData['waMonthUnit'] +
            "&waDay=" + eventData['waDay'] +
            "&waDayUnit=" + eventData['waDayUnit']
          }>
            <a>{eventData['waDay']}</a>
          </Link>
          {eventData['waDayUnit']}
          （<Link href={
            "../?adYear=" + eventData['adYear'] +
            "&adYearUnit=" + eventData['adYearUnit']
          }>
            <a>{eventData['adYear']}</a>
          </Link>
          {eventData['adYearUnit']}
          <Link href={
            "../?adYear=" + eventData['adYear'] +
            "&adYearUnit=" + eventData['adYearUnit'] +
            "&adMonth=" + eventData['adMonth'] +
            "&adMonthUnit=" + eventData['adMonthUnit']
          }>
            <a>{eventData['adMonth']}</a>
          </Link>
          {eventData['adMonthUnit']}
          <Link href={
            "../?adYear=" + eventData['adYear'] +
            "&adYearUnit=" + eventData['adYearUnit'] +
            "&adMonth=" + eventData['adMonth'] +
            "&adMonthUnit=" + eventData['adMonthUnit'] +
            "&adDay=" + eventData['adDay'] +
            "&adDayUnit=" + eventData['adDayUnit']
          }>
            <a>{eventData['adDay']}</a>
          </Link>
          {eventData['adDayUnit']}）
          {eventData['waTime']}
        </li>
      </ul>
    );
  }


  // Event Info
  const EventInfo = () => {

    if (error) {
      return <p>エラー: {error.message}</p>;
    } else if (!isLoaded) {
      return <p>読み込み中...</p>;
    } else if (!Object.keys(eventData).length) {
      return <p>データが見つかりません</p>;
    }

    return (
      <>
        <RemarkArray text={eventData['remarks']} paramKey={'remarks'} />
        <section>
          <h3>時期</h3>
          <dl>
            <dt>年間(和暦)</dt>
            <dd>
              <CommonInfoArray array={eventData['waGengo']} paramKey={'waGengo'} unit={'年間'} />
            </dd>
            <dt>年代(西暦)</dt>
            <dd>
              <CommonInfoArray array={eventData['adAge']} paramKey={'adAge'} unit={''}  />
            </dd>
            <dt>年月日</dt>
            <dd>
              <Data />
            </dd>
          </dl>
        </section>
        <section>
          <h3>場所</h3>
          <dl>
            <dt>地方</dt>
            <dd>
              <CommonInfoArray array={eventData['region']} paramKey={'region'} unit={''}  />
            </dd>
            <dt>国(令制国)</dt>
            <dd>
              <CommonInfoArray array={eventData['country']} paramKey={'country'} unit={''}  />
            </dd>
            <dt>地域</dt>
            <dd>
              <CommonInfoArray array={eventData['area']} paramKey={'area'} unit={''}  />
            </dd>
          </dl>
        </section>
        <section>
          <h3>勢力・人物</h3>
          <dl>
            <dt>勢力</dt>
            <dd>
              <CommonInfoArray array={eventData['influence']} paramKey={'influence'} unit={''}  />
            </dd>
            <dt>人物</dt>
            <dd>
              <CommonInfoArray array={eventData['person']} paramKey={'person'} unit={''}  />
            </dd>
          </dl>
        </section>
        <section>
          <h3>権力者</h3>
          <dl>
            <dt>天皇</dt>
            <dd>
              <CommonInfoArray array={eventData['tenNou']} paramKey={'tenNou'} unit={''}  />
            </dd>
            <dt>関白</dt>
            <dd>
              <CommonInfoArray array={eventData['kanpaku']} paramKey={'kanpaku'} unit={''}  />
            </dd>
            <dt>将軍</dt>
            <dd>
              <CommonInfoArray array={eventData['syogun']} paramKey={'syogun'} unit={''}  />
            </dd>
            <dt>管領</dt>
            <dd>
              <CommonInfoArray array={eventData['kanrei']} paramKey={'kanrei'} unit={''}  />
            </dd>
            <dt>関東公方</dt>
            <dd>
              <CommonInfoArray array={eventData['kantoKubo']} paramKey={'kantoKubo'} unit={''}  />
            </dd>
            <dt>関東管領</dt>
            <dd>
              <CommonInfoArray array={eventData['kantoKanrei']} paramKey={'kantoKanrei'} unit={''}  />
            </dd>
          </dl>
        </section>
        <section>
          <h3>その他</h3>
          <dl>
            <dt>出典</dt>
            <dd><RemarkArray text={eventData['reference']} paramKey={'reference'} /></dd>
            <dt>url</dt>
            <dd><UrlArray source={eventData['url']} /></dd>
          </dl>
        </section>
      </>
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
      <Nav>
        <eventDataContext.Provider value={{eventData, setEventData}} >
          <EventBreadcrumb />
        </eventDataContext.Provider>
      </Nav>
      <Section>
        <p className="date">{eventData['commonDate']}</p>
        <h2>{eventData['title']}</h2>
        <EventInfo />
      </Section>
    </>
  );
}

export default InnerEvent;
