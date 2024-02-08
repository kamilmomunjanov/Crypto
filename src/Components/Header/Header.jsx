import React from 'react';
import style from "./style.module.css";

const Header = () => {

    const name = "CRYPTO"
    return (
        <header className={style.header}>
            {name}
        </header>
    );
};

export default Header;