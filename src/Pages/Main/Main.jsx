import React from 'react';
import style from "./style.module.css";
import Card from "../../Components/Card/Card.jsx";

const Main = ({balance, setBalance, coins}) => {


    return (
        <main className={style.main}>
            <Card balance={balance} setBalance={setBalance}/>
        </main>
    );
};

export default Main;