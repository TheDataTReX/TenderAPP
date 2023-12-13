import React from "react";

interface CardProps {
    name: string;
    age: number;
    profileImage: string;
    onSwipeLeft: () => void;
    onSwipeRight: () => void;
}

const Card: React.FC<CardProps> = ({
    name,
    age,
    profileImage,
    onSwipeLeft,
    onSwipeRight,
}) => {
    const handleSwipeLeft = () => {
        onSwipeLeft();
    };

    const handleSwipeRight = () => {
        onSwipeRight();
    };

    return (
        <div className="card">
            <img src={profileImage} alt={`Perfil de ${name}`} />
            <h2> {name}, {age}</h2>
            <div>
                <button onClick={handleSwipeLeft}>No me gusta</button>
                <button onClick={handleSwipeRight}>Me gusta</button>
            </div>
        </div>
    );
};

export default Card;