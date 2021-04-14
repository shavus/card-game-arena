import React from 'react';

const battleDetailsContext = React.createContext({
    isPlayerTurn: false,       //player is currently taking their turn
    isPlayerAtk: true,      //player is attacker this round
    oppoEnergy: 3,
    oppoHealth: 12,
    oppoPurchasedEnergy: 1,
    playerEnergy: 1,
    playerHealth: 4,
    playerPurchasedEnergy: 0,
    turn: 3,
});

export default battleDetailsContext;