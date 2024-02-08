import React from 'react';
import style from "./style.module.css";
import Card from "../../Components/Card/Card.jsx";
import CoinsList from "../../Components/CoinsList/CoinsList.jsx";

const Main = ({balance, setBalance, coins}) => {


    return (
        <main className={style.main}>
            <Card balance={balance} setBalance={setBalance}/>
            {coins.length > 0 ? <CoinsList coins={coins}/> : <div>Loading...</div>}
        </main>
    );
};

export default Main;