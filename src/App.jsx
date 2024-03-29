import React from 'react';
import Header from "./Components/Header/Header.jsx";
import Main from "./Pages/Main/Main.jsx";
import {getCoins} from "./api/api.js";
import {CoinsContext} from "./context/coinsContext.js";

function App() {
    const [balance, setBalance] = React.useState(50000)
    const [coins, setCoins] = React.useState([])
    const [filteredCoins, setFilteredCoins] = React.useState([])


    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getCoins();
            setCoins(data.coins);
            setFilteredCoins(data.coins);
        };
        console.log(coins);

        fetchData();
    }, []);

    const addBalance = React.useCallback(() => {
        setBalance(prevState => prevState + 1000)
    }, [])


    return (
        <div>
            <CoinsContext.Provider value={{coins, filteredCoins}}>
                <Header/>
                <Main filteredCoins={filteredCoins}
                      setCoins={setFilteredCoins}
                      coins={coins}
                      balance={balance}
                      setBalance={addBalance}/>
            </CoinsContext.Provider>
        </div>
    )
}

export default App
