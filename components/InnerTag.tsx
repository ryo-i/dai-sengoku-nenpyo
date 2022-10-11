import React, { useState, useEffect, useContext }  from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import EventBreadcrumb from './EventBreadcrumb';
import Nav from './style/Nav';
import { getDividedArray } from '../modules/nenpyoInfo/getDividedArray';
import Data from '../data/data.json';


// CSS in JS
const Section = styled.section`
  margin: 40px 0;
  .date {
    margin: 0 0 5px;
    font-weight: bold;
    color: #777;
  }
  h2 {
    margin-bottom: 1.75em;
    color: #333;
  }
  h3 {
    background: #eee;
    margin: 0 0 20px;
    padding: 10px;
    border-radius: 3px;
  }
  dl {
    display: flex;
    flex-wrap: wrap;
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
function InnerTag() {
  // Hooks
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [eventData, setEventData] = useState({});


  //  Get Event Data
  useEffect(() => {

  }, []);


  // Common Info Array
  function CommonInfoArray (props) {
    if (error) {
      return <p>エラー: {error.array}</p>;
    } else if (props.array === '-' || props.array === '') {
      return null;
    } else if (!props.array) {
      return <p>読み込み中...</p>;
    }

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


  // Tag Info
  const TagInfo = () => {

    if (error) {
      return <p>エラー: {error.message}</p>;
    } else if (!isLoaded) {
      return <p>読み込み中...</p>;
    } else {
      return (
        <>
          <section>
            <h3>時期</h3>
            <dl>
              <dt>年間(和暦)</dt>
              <dd>
                <CommonInfoArray array={eventData['gengo']} paramKey={'gengo'} unit={''}  />
              </dd>
            </dl>
          </section>
          <section>
            <h3>場所</h3>
            <dl>
              <dt>国(令制国)</dt>
              <dd>
                <CommonInfoArray array={eventData['country']} paramKey={'country'} unit={''}  />
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
            </dl>
          </section>
        </>
      );
    }
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
        <p className="date">{eventData['commonDate']}</p>
        <h2>{eventData['title']}</h2>
        <TagInfo />
      </Section>
    </>
  );
}

export default InnerTag;
