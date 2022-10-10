import React, { createContext }  from 'react';

export const eventPathContext = createContext({} as {
    eventPath: string;
    setEventPath: React.Dispatch<React.SetStateAction<string>>;
});