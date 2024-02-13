import React, {useContext} from 'react';
import style from "./style.module.css";
import {CoinsContext} from "../../context/coinsContext.js";

const CoinsList = () => {

    const coinsContext = useContext(CoinsContext)
    const {filteredCoins} = coinsContext
    console.log(coinsContext)
    return (
        <div className={style.coins_list}>
            {
                filteredCoins?.map(coin => (
                    <li className={style.coin_item} key={coin.uuid}>
                        <div className={style.coin_item__info}>
                            <img className={style.coin_item__logo} src={coin.iconUrl} alt={coin.name}/>
                            <p style={{color: coin.color}}>
                                {coin.name}/USD
                            </p>
                        </div>
                        <div className={style.coin_item__price}>
                            <p style={{color: coin.color}}>
                                {(+coin.price).toFixed(2)} USD
                            </p>
                            <p style={{color: coin.color}}>
                                {(+coin.btcPrice).toFixed(2)} BTC
                            </p>
                        </div>
                    </li>
                ))
            }
        </div>
    );
};

export default CoinsList;