import React from 'react';
import style from "./style.module.css";
import WithRuBalance from "../../helpers/HOC/WithRuBalance.jsx";

const Card = ({balance, setBalance, ruBalance}) => {
    console.log({ruBalance})
    return (
        <div className={style.card}>
            <div className={style.card_block}>
                <p>CRYPTO FINANCE</p>
                <button onClick={() => setBalance(prevState => prevState + 1000)}>Add money</button>
            </div>

            <div className={style.card_block}>
                <p>Kamil</p>
                <p>{balance} $</p>
            </div>

        </div>
    );
};

export default WithRuBalance(Card);