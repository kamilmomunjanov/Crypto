import React from 'react';
import Header from "./Components/Header/Header.jsx";
import Main from "./Pages/Main/Main.jsx";
import {getCoins} from "./api/api.js";

function App() {
    const [balance, setBalance] = React.useState(50000)
    const [coins, setCoins] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getCoins()
            setCoins(data.coins)

        }
        fetchData()
    },[])
    console.log(coins)
  return (
    <div>
        <Header/>
        <Main coins={coins} balance={balance} setBalance={setBalance}/>
    </div>
  )
}

export default App
