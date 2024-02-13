import React from "react";

export const useFilterCoins = (setCoins, coins) => {
    const [value, setValue] = React.useState("")

    React.useEffect(() => {
        const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(value.toLowerCase()))
        setCoins(filteredCoins)
    },[value])
    return {setValue, value}
}