import React, { useState, useEffect }  from 'react';
import { eventPathContext } from '../../context/eventPathContext';
import Header from '../../components/Header';
import InnerEvent from '../../components/InnerEvent';
import Footer from '../../components/Footer';


// Component
const Path = ({ eventInfo }) => {
    const [eventPath, setEventPath] = useState(eventInfo.path);
    console.log('eventPath', eventPath);

    return (
        <>
        <Header />
        <main>
            <h1>出来事</h1>
            <eventPathContext.Provider value={{eventPath, setEventPath}} >
                <InnerEvent />
            </eventPathContext.Provider>
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

    const paths = event.nenpyoList.map((data) => `/event/${data.path}`);
    // console.log('paths', paths);
    return { paths, fallback: false };
}


// Get TrackInfo
export async function getStaticProps({ params }) {
    const path = params.path;
    const eventInfo = {
        path: ''
      };
      eventInfo.path = path;

    console.log('path', path);
    console.log('pathInfo', eventInfo);
    return { props: { eventInfo } };
}

export default Path;