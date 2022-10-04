import React, { createContext }  from 'react';

export const trackContext = createContext({} as {
    eventData: {[key: string]: string};
    setEventData: React.Dispatch<React.SetStateAction<{[key: string]: string}>>;
});