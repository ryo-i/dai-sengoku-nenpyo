import React, { useState, useEffect, useContext }  from 'react';
import { eventContext } from '../context/eventContext';
import { trackContext } from '../context/trackContext';
import Link from 'next/link';
import styled from 'styled-components';
import TrackBreadcrumb from './TrackBreadcrumb';
// import PrevNextNav from './PrevNextNav';
import Nav from './style/Nav';
import { getPeopleArray } from '../modules/nenpyoInfo/getPeopleArray';
import { getDividedArray } from '../modules/nenpyoInfo/getDividedArray';


// CSS in JS
const Section = styled.section`
  h2 {
    margin-bottom: 1.5em;
    color: #333;
  }
  dl {
    display: flex;
    flex-wrap: wrap;
    padding: 1em 0;
    border-bottom : 1px solid #ccc;
    @media(max-width: 600px) {
      display: block;
    }
    dt, dd {
      padding: 0.5em 0;
      margin: 0;
      overflow-wrap: break-word;
	    word-wrap: break-word;
    }
    dt {
      width: 20%;
      padding-right: 1em;
      @media(max-width: 600px) {
        width: 100%;
        padding: 0;
      }
      ::after {
        content: "："
      }
    }
    dd {
      width: 80%;
      @media(max-width: 600px) {
        width: 100%;
        padding: 0 0 15px;
      }
      .peapleList {
        margin: 0 0 5px;
        .peaples {
          margin: 0;
          padding: 0;
          li {
            display: inline;
            :not(:last-child)::after {
              content: ", "
            }
          }
        }
      }
    }
  }
`;


// Component
function InnerEvent() {
  // Hooks
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const {eventTitle, setEventTitle} = useContext(eventContext);
  const [eventData, setEventData] = useState([]);


  //  Get Event Data
  useEffect(() => {
    const url: string = '../api/nenpyo/event/' + eventTitle;

    async function getEventData (url: string) {
      try {
        const res = await fetch(url);
        const resJson = await res.json();
        const data = resJson.eventData;
        console.log('data', data);
        setEventData(data.data);
        setEventTitle(data.title);
        setIsLoaded(true);
      } catch(error) {
        setError(error);
        console.log('err', error);
        setIsLoaded(true);
      }
    };

    if (eventTitle) {
      // console.log('eventTitle', eventTitle);
      getEventData(url);
    }
  }, []);


  // PeapleArray
  function PeapleArray (props) {
    if (error) {
      return <p>エラー: {error.message}</p>;
    } else if (props.name === '-' || props.name === '') {
      return null;
    } else if (!props.name) {
      return <p>読み込み中...</p>;
    }

    const delimiterColon = ' : ';
    const isMultipleColon = props.name.indexOf(delimiterColon) !== -1;
    const peopleArray = getPeopleArray(props);

    return (
      <>
        {peopleArray.map((data, index) =>
          <li key={index} className="peapleList">
            {
              isMultipleColon && Array.isArray(data[0]) ? <>
                <ul className="peaples">
                  {data[0].map((data, index) => <>
                    <li key={index}>
                      <Link href={"../?" + props.paramKey + "=" + data}>
                        <a>{data}</a>
                      </Link>
                    </li>
                  </>)}{": " + data[1]}
                </ul>
              </> :
              isMultipleColon ? <>
                <Link href={"../?" + props.paramKey + "=" + data[0]}>
                  <a>{data[0]}</a>
                </Link>{": " + data[1]}
              </> : <>
                <Link href={"../?" + props.paramKey + "=" + data}>
                  <a>{data}</a>
                </Link>
              </>
            }
          </li>
        )}
      </>
    );
  }


  // Playing
  function Playing (props) {
    return (
      props.part !== '-' && <>
        <li className="peapleList">
          <Link href={"../?playing=" + props.paramKey}>
            <a>{props.paramKey}</a>
          </Link> : {props.part}
        </li>
      </>
    );
  }


  // Remark Array
  function RemarkArray (props) {
    if (error) {
      return <p>エラー: {error.text}</p>;
    } else if (props.text === '-' || props.text === '') {
      return null;
    } else if (!props.text) {
      return <p>読み込み中...</p>;
    }

    let remarksArray = getDividedArray(props.text);

    return (
      <ul>
        {remarksArray.map((data, index) =>
          <li key={index}>{data}</li>
        )}
      </ul>
    );
  }


  // Source Array
  function SourceArray (props) {
    if (error) {
      return <p>エラー: {error.source}</p>;
    } else if (props.source === '-' || props.source === '') {
      return null;
    } else if (!props.source) {
      return <p>読み込み中...</p>;
    }

    const sourceArray = getDividedArray(props.source);

    return (
      <ul>
        {sourceArray.map((data, index) =>
          <li key={index}><a href={data} target="_blank">{data}</a></li>
        )}
      </ul>
    );
  }


  // Track Info
  const TrackInfo = () => {
    return <p>{String(eventData)}</p>;

    /* if (error) {
      return <p>エラー: {error.message}</p>;
    } else if (!isLoaded) {
      return <p>読み込み中...</p>;
    } else {
      const isCover = eventData.artist !== eventData.original;
      return (
        <>
          <dl>
            <dt>アーティスト</dt>
            <dd>
              <ul>
                <PeapleArray name={eventData.artist} paramKey={'artist'} />
              </ul>
            </dd>
            {isCover && <>
              <dt>オリジナル</dt>
              <dd>
                <ul>
                  <PeapleArray name={eventData.original} paramKey={'original'} />
                </ul>
              </dd>
            </>}
          </dl>
          <dl>
            <dt>作者</dt>
            <dd>
              <ul>
                <PeapleArray name={eventData.songwriter} paramKey={'songwriter'} />
              </ul>
            </dd>
            <dt>リードボーカル</dt>
            <dd>
              <ul>
                <PeapleArray name={eventData.vocal} paramKey={'vocal'} />
              </ul>
            </dd>
            <dt>演奏</dt>
            <dd>
              <ul>
                <Playing part={eventData.john} paramKey={'John Lennon'} />
                <Playing part={eventData.paul} paramKey={'Paul McCartney'} />
                <Playing part={eventData.george} paramKey={'George Harrison'} />
                <Playing part={eventData.ringo} paramKey={'Ringo Starr'} />
                <PeapleArray name={eventData.musician} paramKey={'musician'} />
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>プロデューサー</dt>
            <dd>
              <ul>
                <PeapleArray name={eventData.producer} paramKey={'producer'} />
              </ul>
            </dd>
            <dt>エンジニア</dt>
            <dd>
              <ul>
                <PeapleArray name={eventData.engineer} paramKey={'engineer'} />
              </ul>
            </dd>
            <dt>アートワーク</dt>
            <dd>
              <ul>
                <PeapleArray name={eventData.artwork} paramKey={'artwork'} />
              </ul>
            </dd>
            <dt>ディレクター（映画）</dt>
            <dd>
              <ul>
                <PeapleArray name={eventData.film} paramKey={'film'} />
              </ul>
            </dd>
            <dt>ディレクター（MV）</dt>
            <dd>
              <ul>
                <PeapleArray name={eventData.mv} paramKey={'mv'} />
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>収録作品</dt>
            <dd>
              <Link href={"../?order=" + eventData.order + "&title=" + eventData.title}>
                <a>{eventData.title}</a>
              </Link>
              （<Link href={"../?format=" + eventData.format}>
                <a>{eventData.format}</a>
              </Link>）
            </dd>
            <dt>曲順</dt>
            <dd>
            No. {eventData.number} (Disc {eventData.disc}, Side {eventData.side})
            </dd>
            <dt>発売日</dt>
            <dd>
              <Link href={"../?date=" + eventData.date}>
                <a>{eventData.date}</a>
              </Link>
              （<Link href={"../?year=" + eventData.year}>
                <a>{eventData.year}年</a>
              </Link>）
            </dd>
            <dt>レーベル</dt>
            <dd>
              <Link href={"../?label=" + eventData.label}>
                <a>{eventData.label}</a>
              </Link>
              （<Link href={"../?country=" + eventData.country}>
                <a>{eventData.country}</a>
              </Link>）
            </dd>
          </dl>
          <dl>
            <dt>備考</dt>
            <dd><RemarkArray text={eventData.remarks} /></dd>
          </dl>
          <dl>
            <dt>出典</dt>
            <dd><SourceArray source={eventData.source} /></dd>
          </dl>
        </>
      );
    } */
  };


  // JSX
  return (
    <>
      {/* <Nav>
        <trackContext.Provider value={{eventData, setEventData}} >
          <TrackBreadcrumb />
        </trackContext.Provider>
      </Nav> */}
      <Section>
        <h2>{eventTitle}</h2>
        <TrackInfo />
      </Section>
    </>
  );
}

export default InnerEvent;
