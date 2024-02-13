import React,{useContext} from 'react';
import style from "./style.module.css";
import {CoinsContext} from "../../context/coinsContext.js";
import {useFilterCoins} from "../../helpers/hooks/useFilterCoins.js";

const FilterBlock = ({ setCoins}) => {
    const coinsContext = useContext(CoinsContext)
    const {coins} = coinsContext

    const {setValue, value} = useFilterCoins(setCoins, coins)

    return (
        <div className={style.filter_block}>
            <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className={style.input}
                type="text"
                placeholder="bitcoin"/>
        </div>
    );
};

export default React.memo(FilterBlock);