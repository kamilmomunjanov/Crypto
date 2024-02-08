import React from 'react';
import style from "./style.module.css";

const FilterBlock = ({}) => {
    const [value, setValue] = React.useState("")
    console.log(value)

    return (
        <div className={style.filter_block}>
            <input onChange={(e) => setValue(e.target.value)} value={value} className={style.input} type="text" placeholder="bitcoin"/>
        </div>
    );
};

export default FilterBlock;