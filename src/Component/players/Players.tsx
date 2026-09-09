import React, { use } from 'react';
import type { iPlayer } from '../playerTypes/playerTypes';
import AvailablePlayers from './AvailablePlayers';

interface PlayersProps{
    playersPromise: Promise<iPlayer[]>
}

const Players = ({playersPromise}:PlayersProps) => {
    
    const players =use(playersPromise)
    console.log(players);
    return (
        <div className='container mx-auto'>

<div className='flex justify-between gap-4 mb-2 mt-4'>
    <h2 className='font-bold text-xl'>Available Players</h2>
    
    <div >
        <button className="btn btn-success">Available</button>
        <button className="btn ">Selected</button>
    </div>
</div>

            <AvailablePlayers players= {players}></AvailablePlayers>
        </div>
    );
};

export default Players;