import { useState } from 'react';
import './App.css';

const giftlist = ['SamSung Galaxy', 'iPhone 14', 'VinFast VF8', 'VinHome smart city', 'Macbook pro'];

function App() {
    const [gift, setGift] = useState('chưa có phần thưởng');

    const handleGift = () => {
        let index = Math.floor(Math.random() * giftlist.length);
        setGift(giftlist[index]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>{gift}</p>
                <button onClick={handleGift}>Take gift</button>
            </header>
        </div>
    );
}

export default App;
