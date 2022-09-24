import React from 'react';
import { add, multiply } from './../../utilities/calculate'

const Cosmetics = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second);
    const product = multiply(first, second);

    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>total: {total}</p>
            <p>product: {product}</p>
        </div>
    );
};

export default Cosmetics;