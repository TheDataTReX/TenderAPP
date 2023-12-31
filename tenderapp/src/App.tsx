import React, { useState } from "react";
import "./App.css";
import CardList from "./components/CardListComponent";
import MatchList from "./components/MatchListComponent";
import { Profile } from './data'; // Importa el tipo Profile

function App() {
    // Define el tipo de estado acceptedProfiles usando Profile[]
    const [acceptedProfiles, setAcceptedProfiles] = useState<Profile[]>([]);

    return (
        <div className="App">
            <h1>Tinder-like App</h1>
            <div className="App-container">
                <div className="CardList-container">
                    <h2>Perfiles</h2>
                    <CardList
                        onProfileAccepted={(profile) => setAcceptedProfiles([...acceptedProfiles, profile])}
                    />
                </div>
                <div className="MatchList-container">
                    <h2>Tus Coincidencias</h2>
                    <MatchList matchedProfiles={acceptedProfiles} />
                </div>
            </div>
        </div>
    );
}

export default App;
