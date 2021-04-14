import React from 'react';

const battlefieldContext = React.createContext({
    oppoDrawPile: 43,
    oppoFighter1: null,
    oppoFighter2: null,
    oppoFighter3: null,
    oppoFighter4: null,
    oppoFighter5: null,
    playerDrawPile: 42,
    playerFighter1: null,
    playerFighter2: null,
    playerFighter3: null,
    playerFighter4: null,
    playerFighter5: null,
});

export default battlefieldContext;