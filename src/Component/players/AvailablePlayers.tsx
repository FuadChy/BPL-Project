import React, {
    type Dispatch,
    type SetStateAction
} from "react";

import type { iPlayer } from "../playerTypes/playerTypes";
import PlayerCard from "./PlayerCard";

interface AvailablePlayersProps {
    players: iPlayer[];
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: iPlayer[];
    setSelectedPlayers: Dispatch<SetStateAction<iPlayer[]>>;
}

const AvailablePlayers = ({
    players,
    coin,
    setCoin,
    selectedPlayers,
    setSelectedPlayers
}: AvailablePlayersProps) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

            {players.map((player) => (

                <PlayerCard
                    key={player.PlayerName}
                    player={player}
                    coin={coin}
                    setCoin={setCoin}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                />

            ))}

        </div>
    );
};

export default AvailablePlayers;