import React from 'react';


const Transaction = ({ name, age }) => {
    return (
    <ul className="transactions">     
        <li className="transaction">
            <span className="transaction__date">{date}</span>
            <span className="transaction__time">{time}</span>
            <span className="transaction__assets">{assents}</span>
            <span className="transaction__rate">{rate}</span>
            <span className="transaction__amount">{amount}</span>
        </li>
    </ul>
    );
};

export default Transaction;