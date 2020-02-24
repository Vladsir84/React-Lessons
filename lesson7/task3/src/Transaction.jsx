import React from 'react';


const Transaction = ({ name, age }) => {
    return (
    <ul className="transactions">     
        <li className="transaction">
            <span className="transaction__date">{name}</span>
            <span className="transaction__time">{age}</span>
            <span className="transaction__assets">{name}</span>
            <span className="transaction__rate">{age}</span>
            <span className="transaction__amount">{name}</span>
        </li>
    </ul>
    );
};

export default Transaction;