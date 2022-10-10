import React, { useState, useContext }  from 'react';
import Link from 'next/link';
import { eventDataContext } from '../context/eventDataContext';
import { getCaterogyInfo } from '../modules/nenpyoList/getCaterogyInfo';


// Enenvt Bread Crumb
const EventBreadcrumb = () => {
  // Hooks
  const {eventData, setEventData} = useContext(eventDataContext);
  const category = getCaterogyInfo(eventData['category']);

  return (
    <ul className="breadcrumb">
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href={"/category/" + category.path}><a>{category.name}</a></Link></li>
      <li>{eventData['path']}</li>
    </ul>
  );
};

export default EventBreadcrumb;