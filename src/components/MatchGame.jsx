import React, { useState } from "react";

const names = [
    "Kalinda Sammy",
    "Nkundabagenzi Bruce",
    "Sebera Jonas",
    "Iradukunda Bertin",
    "Sibomana Edouard",
    "Nkurunziza Andy Melvin",
];
const sports = [
    "dancing",
    "acting",
    "laughing",
    "celebrating",
    "dreaming",
    "pretending",
];

const MatchGame = () => {
    const [name, setName] = useState("");
    const [sport, setSport] = useState("");
    const arrow = " ↔️ ";
    const getRandomName = () => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        setName(randomName);
    };

    const getRandomSport = () => {
        const randomSport = sports[Math.floor(Math.random() * sports.length)];
        setSport(randomSport);
    };
    const handleReset = () => {
        setName("");
        setSport("");
    };
    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-4xl font-bold">Match Name with the Sport</h1>
            <div className="py-4 px-2 rounded-lg w-2/3 bg-black text-white text-2xl font-[cursive] text-center">
                <span>{name}</span>
                <span>{arrow}</span>
                <span>{sport}</span>
            </div>
            <div className="flex space-x-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={getRandomName}
                >
                    Pick Name
                </button>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={getRandomSport}
                >
                    Pick Task
                </button>
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default MatchGame;
