import React from 'react';
import type { iPlayer } from '../playerTypes/playerTypes';
import PlayerCard from './PlayerCard';
interface AvailablePlayersProps {
    players: iPlayer[];
}

const AvailablePlayers = ({ players }: AvailablePlayersProps) => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-6">
            {players.map((player: iPlayer, index:number) => {

            return (
              <div key={index}>
<PlayerCard  player={player}></PlayerCard>
              </div>
            )
        })}
        </div>
    );
};

export default AvailablePlayers;