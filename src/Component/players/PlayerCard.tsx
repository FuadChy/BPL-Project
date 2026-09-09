import React from 'react';
import type { iPlayer } from '../playerTypes/playerTypes';
import { FaUser } from 'react-icons/fa';

const PlayerCard = ({player}:{player:iPlayer}) => {
    return (
       <div
    key={player.PlayerName}
    className="card bg-base-100 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
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
        <h2 className="card-title text-xl">
            <FaUser className="text-primary" />
            {player.PlayerName}
        </h2>

        {/* Origin & Playing Type */}
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm text-gray-500">Origin</p>
                <p className="font-semibold">{player.Origin}</p>
            </div>

            <button className="btn btn-sm">
                {player.PlayingType}
            </button>
        </div>

        <div className="divider my-1"></div>

        {/* Player Styles */}
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

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-4">

            <div>
                <p className="text-sm text-gray-500">
                    Price
                </p>

                <p className="text-xl font-bold">
                    ৳{player.Price.toLocaleString()}
                </p>
            </div>

            <button className="btn btn-primary">
                Buy Now
            </button>

        </div>

    </div>
</div>
    );
};

export default PlayerCard;