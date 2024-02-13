import React from 'react';
import style from "./style.module.css";

const FilterBlock = ({coins, setCoins}) => {
    const [value, setValue] = React.useState("")

    React.useEffect(() => {
        const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(value.toLowerCase()))
        setCoins(filteredCoins)
    },[value])

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