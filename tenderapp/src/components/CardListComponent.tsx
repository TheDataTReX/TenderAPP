import React, { useState } from "react";
import Card from "./CardComponent";
import { Profile, profiles } from "../data"; // Importa el tipo Profile

interface CardListProps {
    onProfileAccepted: (profile: Profile) => void;
}

const CardList: React.FC<CardListProps> = ({ onProfileAccepted }) => {
    const [profileIndex, setProfileIndex] = useState(0);
    const [rejectedProfiles, setRejectedProfiles] = useState<Profile[]>([]); // Define el tipo para rejectedProfiles

    const handleSwipeLeft = () => {
        if (profileIndex < profiles.length) {
            setRejectedProfiles(prevRejected => [...prevRejected, profiles[profileIndex]]);
            setProfileIndex(prevIndex => prevIndex + 1);
        }
    };

    const handleSwipeRight = () => {
        if (profileIndex < profiles.length) {
            onProfileAccepted(profiles[profileIndex]);
            setProfileIndex(prevIndex => prevIndex + 1);
        }
    };

    return (
        <div className="card-list">
            {profileIndex < profiles.length ? (
                <Card
                    name={profiles[profileIndex].name}
                    age={profiles[profileIndex].age}
                    profileImage={profiles[profileIndex].profileImage}
                    onSwipeLeft={handleSwipeLeft}
                    onSwipeRight={handleSwipeRight}
                />
            ) : (
                <p>No hay más perfiles disponibles.</p>
            )}
        </div>
    );
};

export default CardList;
