import React, { use } from 'react';

const Players = ({playersPromise}) => {
    console.log(playersPromise);
    const players =use(playersPromise)
    console.log(players);
    return (
        <div>
            
        </div>
    );
};

export default Players;