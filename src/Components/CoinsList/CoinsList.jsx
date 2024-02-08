import React from 'react';
import style from "./style.module.css";

const CoinsList = ({coins}) => {
    return (
        <div className={style.coins_list}>
            {
                coins?.map(coin => (
                    <li className={style.coin_item} key={coin.uuid}>
                        <div className={style.coin_item__info}>
                            <img className={style.coin_item__logo} src={coin.iconUrl} alt={coin.name}/>
                            <p style={{color: coin.color}}>
                                {coin.name}/USD
                            </p>
                        </div>
                        <div className={style.coin_item__price}>
                            <p style={{color: coin.color}}>
                                {+coin.price} USD
                            </p>
                            <p style={{color: coin.color}}>
                                {+coin.btcPrice} BTC
                            </p>
                        </div>
                    </li>
                ))
            }
        </div>
    );
};

export default CoinsList;