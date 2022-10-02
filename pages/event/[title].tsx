import React, { useState }  from 'react';
import { numberContext } from '../../context/numberContext';
import Head from 'next/head';
import Header from '../../components/Header';
import InnerTrack from '../../components/InnerTrack';
import Footer from '../../components/Footer';
import Data from '../../data/data.json';


// Component
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
            <h1>楽曲情報</h1>
            <numberContext.Provider value={{trackNumber, setTrackNumber, trackName, setTrackName}} >
                <InnerTrack />
            </numberContext.Provider>
        </main>
        <Footer />
        </>
    );
}


// Get Path
export async function getStaticPaths() {
   /*  const res = await fetch(`https://dai-sengoku-nenpyo.vercel.app/api/nenpyo/nenpyolist`);
    const event = await res.json();
    const paths = event.trackList.map((data) => `/event/${data.title}`);
    console.log('event', event);
    console.log('paths', paths);
    return { paths, fallback: false }; */
}


// Get TrackInfo
export async function getStaticProps({ params }) {
    // const title = params.event;
    const title = '1390年代：明徳2年(1392)〜応永6年(1399)';
    const res = await fetch(`https://dai-sengoku-nenpyo.vercel.app/api/nenpyo/event/${title}`);
    const eventInfo = await res.json();
    console.log('title', title);
    console.log('eventInfo', eventInfo);
    return { props: { eventInfo } };
}

export default Track;