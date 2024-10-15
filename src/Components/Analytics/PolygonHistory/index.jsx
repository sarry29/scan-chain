import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';

const POLYGON_RPC_URL = 'https://polygon-rpc.com'; // or your Infura/Alchemy URL
const ETHERSCAN_API_KEY = 'VDHDSWE2ZE23VZHZYV1FCI5NZMYYUWMNF6'; // Replace with your Etherscan API key

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [address, setAddress] = useState('');

  const fetchTransactions = async () => {
    if (!address) return;

    // Fetch regular transactions
    const response = await axios.get(`https://api.polygonscan.com/api`, {
      params: {
        module: 'account',
        action: 'txlist',
        address: address,
        startblock: 0,
        endblock: 99999999,
        sort: 'asc',
        apikey: ETHERSCAN_API_KEY,
      },
    });

    if (response.data.status === '1') {
      setTransactions(response.data.result);
    } else {
      console.error('Error fetching transactions:', response.data.message);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [address]);

  return (
    <div>
      <h1>Polygon Transactions</h1>
      <input
        type="text"
        placeholder="Enter Polygon Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={fetchTransactions}>Fetch Transactions</button>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.hash}>
            <a href={`https://polygonscan.com/tx/${tx.hash}`} target="_blank" rel="noopener noreferrer">
              {tx.hash}
            </a> - {tx.value} MATIC
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
