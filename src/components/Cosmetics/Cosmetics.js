import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        {
            "id": "632e7dc1eade9c8f9a9bd973",
            "price": 575,
            "name": "Claudette Craft"
        },
        {
            "id": "632e7dc1c6531727b800346e",
            "price": 75,
            "name": "Nielsen Pickett"
        },
        {
            "id": "632e7dc156c16d318d44c944",
            "price": 436,
            "name": "Savage Miranda"
        },
        {
            "id": "632e7dc1489af49cf901c26d",
            "price": 578,
            "name": "Madeline Singleton"
        },
        {
            "id": "632e7dc1c08374aebb77da90",
            "price": 241,
            "name": "Brown Mcneil"
        }
    ]

    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    cosmetic={cosmetic}
                    key={cosmetic.id}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;