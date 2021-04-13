import React from 'react';

const battleDetailsContext = React.createContext({
    turn: 1,
    playerTurn: true, 
});

export default battleDetailsContext;