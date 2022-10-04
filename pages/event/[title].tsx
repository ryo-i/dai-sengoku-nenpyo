import React, { useState }  from 'react';
import { numberContext } from '../../context/numberContext';
import Head from 'next/head';
import Header from '../../components/Header';
import InnerTrack from '../../components/InnerTrack';
import Footer from '../../components/Footer';
import Data from '../../data/data.json';


// Component
/* const Track = () => {
    return (
        <>
        <Header />
        <main>
            <h1>てすと</h1>
        </main>
        <Footer />
        </>
    );
} */

const Track = ({ eventInfo }) => {
    const [trackNumber, setTrackNumber] = useState(eventInfo.id);
    const [trackName, setTrackName] = useState(eventInfo.track);

    const headerTitle = Data.header.title;
    const pageTitle = trackName;
    const headTitle = pageTitle + ' | ' + headerTitle;
    const pageText = eventInfo.artist + 'の楽曲「' + trackName + '」の詳細情報です。';

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
            <numberContext.Provider value={{trackNumber, setTrackNumber, trackName, setTrackName}} >
                <InnerTrack />
            </numberContext.Provider>
        </main>
        <Footer />
        </>
    );
}


// Get Path
/* export async function getStaticPaths() {
    const res = await fetch(`https://dai-sengoku-nenpyo.vercel.app/api/nenpyo/nenpyolist`);
    const event = await res.json();
    // console.log('event', event);

    const paths = event.nenpyoList.map((data) => `/event/${data.title}`);
    // console.log('paths', paths);
    return { paths, fallback: false };
} */


// Get TrackInfo
/* export async function getStaticProps({ params }) {
    const title = params.title;
    // console.log('params', params);
    // console.log('title', title);

    const res = await fetch(`https://dai-sengoku-nenpyo.vercel.app/api/nenpyo/event/${title}`);
    // console.log('res', res);

    const eventInfo = await res.json();
    console.log('eventInfo', eventInfo);

    return { props: { eventInfo } };
} */

export default Track;