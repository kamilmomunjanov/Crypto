import React from 'react';
import style from "./style.module.css";
import WithRuBalance from "../../helpers/HOC/WithRuBalance.jsx";

const Card = ({balance, setBalance, ruBalance}) => {

    // React.useMemo(()=>{
    //     console.log({ruBalance})
    // },[balance])
    return (
        <div className={style.card}>
            <div className={style.card_block}>
                <p>CRYPTO FINANCE</p>
                <button onClick={setBalance}>Add money</button>
            </div>

            <div className={style.card_block}>
                <p>Kamil</p>
                <p>{balance} $</p>
            </div>

        </div>
    );
};

export default WithRuBalance(Card);