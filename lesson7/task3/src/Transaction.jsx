import React from 'react';
import moment from 'moment';


const Transaction = ({ date, from, to, amount, rate, time }) => {
    return (
        <ul className="transactions">
            <li className="transaction">
                <span className="transaction__date">{moment(date).format("DD MMM")}</span>
                <span className="transaction__time">{moment(time).format("HH:mm")}</span>
                <span className="transaction__assets">{from} → {to}</span>
                <span className="transaction__rate">{rate}</span>
                <span className="transaction__amount">{Intl.NumberFormat('en-Gb').format(amount)}</span>
            </li>


        </ul>
    );
};


export default Transaction;