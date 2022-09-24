import React from 'react';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    return (
        <div>
            <h2>Buy this: {name}</h2>
            <h3>Only for: ${price}</h3>
            <h4>It has id: {id}</h4>
        </div>
    );
};

export default Cosmetic;