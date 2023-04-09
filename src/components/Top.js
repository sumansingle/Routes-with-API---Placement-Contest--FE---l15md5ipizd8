import React, { useState, useEffect } from 'react';

function Top() {
  const [cryptoArr, setCryptoArr] = useState([]);

  useEffect(() => {
    fetch('https://api.coinlore.net/api/tickers/')
      .then(response => response.json())
      .then(data => {
        setCryptoArr(data.data.slice(0, 10)); // get the top 10 coins
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='top-container'>
      <h1>Top 10 Global Crypto Coins</h1>
      <div className='display-container'>
        {cryptoArr.map((coin, index) => (
          <div className='coin-container' key={coin.id}>
            <p className='rank-para'>Rank #{index + 1}</p>
            <h3 className='coin-symbol'>{coin.name} ({coin.symbol})</h3>
            <p className='price-para'>Price: {coin.price_usd}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Top;
