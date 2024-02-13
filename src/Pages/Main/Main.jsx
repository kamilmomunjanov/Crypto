import React from 'react';
import style from "./style.module.css";
import Card from "../../Components/Card/Card.jsx";
import CoinsList from "../../Components/CoinsList/CoinsList.jsx";
import FilterBlock from "../../Components/FilterBlock/FilterBlock.jsx";

const Main = ({balance, setBalance, coins, setCoins, filteredCoins}) => {
    const filterExpensiveCoins = () => {
        // console.log("---func work")
        return filteredCoins.filter(coin => coin.price > 1000)
    }

    // const expensiveCoins = filterExpensiveCoins()
    const expensiveCoins = React.useMemo(() => {
       return  filterExpensiveCoins()
    },[filteredCoins])

    return (
        <main className={style.main}>
            <Card balance={balance} setBalance={setBalance}/>
            <FilterBlock setCoins={setCoins} coins={coins}/>
            {coins.length > 0 ? <CoinsList coins={expensiveCoins}/> : <div>Loading...</div>}
        </main>
    );
};

export default Main;