import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const cosmetics = [
        { id: 1, name: 'Shampoo', price: 100 },
        { id: 2, name: 'Conditioner', price: 200 },
        { id: 3, name: 'Cream', price: 300 },
        { id: 4, name: 'Lotion', price: 400 },
        { id: 5, name: 'Facewash', price: 500 }
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