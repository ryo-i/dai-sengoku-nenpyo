import React, { useState }  from 'react';
import { eventContext } from '../../context/eventContext';
import Head from 'next/head';
import Header from '../../components/Header';
import InnerEvent from '../../components/InnerEvent';
import Footer from '../../components/Footer';
import Data from '../../data/data.json';


// Component
const Track = ({ eventInfo }) => {
    console.log('eventInfo', eventInfo);
    const [eventTitle, setEventTitle] = useState(eventInfo.title);

    const headerTitle = Data.header.title;
    const pageTitle = eventTitle;
    const headTitle = pageTitle + ' | ' + headerTitle;
    const pageText =  '「' + pageTitle + '」の詳細情報です。';

    return (
        <>
        <Head>
            <title>{ headTitle }</title>
            <meta name="description" content={ pageText } />
            <meta property="og:title" content={ headTitle } />
            <meta property="og:description" content={ pageText } />
        </Head>
        <Header />
        <main>
            <h1>出来事</h1>
            <eventContext.Provider value={{eventTitle, setEventTitle}} >
                <InnerEvent />
            </eventContext.Provider>
        </main>
        <Footer />
        </>
    );
}


// Get Path
export async function getStaticPaths() {
    const res = await fetch(`https://dai-sengoku-nenpyo.vercel.app/api/nenpyo/nenpyolist`);
    const event = await res.json();
    // console.log('event', event);

    const paths = event.nenpyoList.map((data) => `/event/${data.title}`);
    // console.log('paths', paths);
    return { paths, fallback: false };
}


// Get TrackInfo
export async function getStaticProps({ params }) {
    const title = params.title;
    // console.log('params', params);
    // console.log('title', title);

    const res = await fetch(`https://dai-sengoku-nenpyo.vercel.app/api/nenpyo/event/${title}`);
    // console.log('res', res);

    const eventInfo = await res.json();
    // console.log('eventInfo', eventInfo);

    return { props: { eventInfo } };
}

export default Track;