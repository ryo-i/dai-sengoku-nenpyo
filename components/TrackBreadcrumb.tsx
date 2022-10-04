import React, { useState, useContext }  from 'react';
import Link from 'next/link';
import { eventContext } from '../context/eventContext';
// import { trackContext } from '../context/trackContext';


// Track Bread Crumb
const TrackBreadcrumb = () => {
  // Hooks
  const {eventTitle, setEventTitle} = useContext(eventContext);
  // const {trackData, setTrackData} = useContext(trackContext);

  return (
    <ul className="breadcrumb">
      <li><Link href="/"><a>Home</a></Link></li>
      {/* <li><Link href={"/category/" + trackData.path}><a>{trackData.category}</a></Link></li> */}
      <li>{eventTitle}</li>
    </ul>
  );
};

export default TrackBreadcrumb;