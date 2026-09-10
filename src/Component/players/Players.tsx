import {
    use,
    useState,
    type Dispatch,
    type SetStateAction
} from "react";

import type { iPlayer } from "../playerTypes/playerTypes";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
    playersPromise: Promise<iPlayer[]>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({
    playersPromise,
    coin,
    setCoin
}: PlayersProps) => {

    const players = use(playersPromise);

    const [buttonType, setButtonType] =
        useState<"available" | "selected">("available");

    const [selectedPlayers, setSelectedPlayers] =
        useState<iPlayer[]>([]);

    const handleUpdateBtnType = (
        type: "available" | "selected"
    ) => {
        setButtonType(type);
    };

    return (
        <div className="container mx-auto px-4">

            <div className="flex flex-col gap-4 mt-4 mb-6">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                    <h2 className="font-bold text-xl">
                        {buttonType === "available"
                            ? "Available Players"
                            : "Selected Players"}
                    </h2>

                    <div className="flex w-full sm:w-auto">

                        <button
                            onClick={() =>
                                handleUpdateBtnType("available")
                            }
                            className={`btn flex-1 sm:flex-none ${
                                buttonType === "available"
                                    ? "btn-success"
                                    : ""
                            } rounded-r-none`}
                        >
                            Available
                        </button>

                        <button
                            onClick={() =>
                                handleUpdateBtnType("selected")
                            }
                            className={`btn flex-1 sm:flex-none ${
                                buttonType === "selected"
                                    ? "btn-success"
                                    : ""
                            } rounded-l-none`}
                        >
                            Selected
                        </button>

                    </div>

                </div>

            </div>

            {buttonType === "available" ? (

                <AvailablePlayers
                    players={players}
                    coin={coin}
                    setCoin={setCoin}
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                />

            ) : (

                <SelectedPlayers
                    selectedPlayers={selectedPlayers}
                    setSelectedPlayers={setSelectedPlayers}
                    coin={coin}
                    setCoin={setCoin}
                />

            )}

        </div>
    );
};

export default Players;