import React, { createContext }  from 'react';

export const eventContext = createContext({} as {
    eventTitle: string;
    setEventTitle: React.Dispatch<React.SetStateAction<string>>;
});