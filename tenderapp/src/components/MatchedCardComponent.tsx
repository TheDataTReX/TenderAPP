// src/components/MatchedCardComponent.tsx
import React from "react";

interface MatchedCardProps {
    name: string;
    age: number;
    profileImage: string;
}

const MatchedCard: React.FC<MatchedCardProps> = ({ name, age, profileImage }) => {
    return (
        <div className="matched-card">
            <img src={profileImage} alt={`${name}'s profile`} />
            <h2>{name}, {age}</h2>
            <p>¡Match! Has encontrado una coincidencia.</p>
        </div>
    );
};

export default MatchedCard;

