import React from 'react';

const battleDetailsContext = React.createContext({
    turn: 1,
    atkPlayerPhase: true, 
});

export default battleDetailsContext;