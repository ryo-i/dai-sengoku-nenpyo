import React, { useState, useContext }  from 'react';
import Link from 'next/link';
import { eventContext } from '../context/eventContext';
import { trackContext } from '../context/trackContext';
import { getCaterogyInfo } from '../modules/nenpyoList/getCaterogyInfo';


// Track Bread Crumb
const TrackBreadcrumb = () => {
  // Hooks
  const {eventTitle, setEventTitle} = useContext(eventContext);
  const {eventData, setEventData} = useContext(trackContext);

  const category = getCaterogyInfo(eventData['category']);

  return (
    <ul className="breadcrumb">
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href={"/category/" + category.path}><a>{category.name}</a></Link></li>
      <li>{eventTitle}</li>
    </ul>
  );
};

export default TrackBreadcrumb;