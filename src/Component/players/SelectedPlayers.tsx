import React, {
    type Dispatch,
    type SetStateAction
} from "react";

import type { iPlayer } from "../playerTypes/playerTypes";

import { FaUser } from "react-icons/fa";

interface ISelectedPlayersProps {

    selectedPlayers: iPlayer[];

    setSelectedPlayers: Dispatch<
        SetStateAction<iPlayer[]>
    >;

    coin: number;

    setCoin: Dispatch<
        SetStateAction<number>
    >;
}

const SelectedPlayers = ({
    selectedPlayers,
    setSelectedPlayers,
    coin,
    setCoin
}: ISelectedPlayersProps) => {

    const handleDeletePlayer = (player: iPlayer) => {

        // Remove player from selected players
        setSelectedPlayers(
            selectedPlayers.filter(
                selectedPlayer =>
                    selectedPlayer.PlayerName !== player.PlayerName
            )
        );

        // Return player's price
        setCoin(coin + player.Price);
    };

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

            {selectedPlayers.map((player) => (

                <div
                    key={player.PlayerName}
                    className="card bg-base-100 border border-gray-200 shadow-sm"
                >

                    {/* Player Image */}

                    <figure className="h-64 overflow-hidden">

                        <img
                            src={player.PlayerImage}
                            alt={player.PlayerName}
                            className="w-full h-full object-cover object-top"
                        />

                    </figure>


                    {/* Card Content */}

                    <div className="card-body">

                        {/* Player Name */}

                        <h2 className="card-title">

                            <FaUser className="text-primary" />

                            {player.PlayerName}

                        </h2>


                        {/* Origin & Playing Type */}

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-gray-500">
                                    Origin
                                </p>

                                <p className="font-semibold">
                                    {player.Origin}
                                </p>

                            </div>

                            <button className="btn btn-sm">
                                {player.PlayingType}
                            </button>

                        </div>


                        <div className="divider my-1"></div>


                        {/* Batting & Bowling Style */}

                        <div className="grid grid-cols-2 gap-4">

                            <div>

                                <p className="text-sm text-gray-500">
                                    Batting Style
                                </p>

                                <p className="font-semibold">
                                    {player.BattingStyle}
                                </p>

                            </div>


                            <div>

                                <p className="text-sm text-gray-500">
                                    Bowling Style
                                </p>

                                <p className="font-semibold">
                                    {player.BowlingStyle}
                                </p>

                            </div>

                        </div>


                        {/* Price & Delete Button */}

                        <div className="flex items-center justify-between mt-4">

                            <div>

                                <p className="text-sm text-gray-500">
                                    Price
                                </p>

                                <p className="text-xl font-bold">
                                    ৳{player.Price.toLocaleString()}
                                </p>

                            </div>


                            <button
                                onClick={() =>
                                    handleDeletePlayer(player)
                                }
                                className="btn btn-error"
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                </div>

            ))}

        </div>
    );
};

export default SelectedPlayers;