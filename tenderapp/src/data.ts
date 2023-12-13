// src/data.ts

import pirataImage from './assets/pirata.jpeg'; // Asegúrate de que la ruta sea correcta
import reyLaionImage from './assets/rey-laion.jpg';
import shrekkImage from './assets/shrekk.jpg';

export type Profile = {
    id: number;
    name: string;
    age: number;
    profileImage: string;
};

export const profiles: Profile[] = [
    {
        id: 1,
        name: "Pirata",
        age: 25,
        profileImage: pirataImage
    },
    {
        id: 2,
        name: "Rey Laion",
        age: 28,
        profileImage: reyLaionImage
    },
    {
        id: 3,
        name: "Shrekk",
        age: 32,
        profileImage: shrekkImage
    },
    // ... Añade más perfiles si es necesario
];
