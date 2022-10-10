import React, { createContext }  from 'react';

export const eventDataContext = createContext({} as {
    eventData: {[key: string]: string};
    setEventData: React.Dispatch<React.SetStateAction<{[key: string]: string}>>;
});