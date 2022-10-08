import React, { createContext }  from 'react';

export const eventContext = createContext({} as {
    eventPath: string;
    setEventPath: React.Dispatch<React.SetStateAction<string>>;
});