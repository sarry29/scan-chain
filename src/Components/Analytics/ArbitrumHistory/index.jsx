// src/TransactionHistory.js

import React, { useState } from 'react';
import { ethers } from 'ethers';

const ArbitrumHistory = () => {
    const [walletAddress, setWalletAddress] = useState('0xce6f9E922CB469b9C6fB907eCc1AB3C50bEfacAe');
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchTransactions = async () => {
        if (!walletAddress) {
            setError('Please enter a wallet address.');
            return;
        }

        setLoading(true);
        setError('');
        setTransactions([]);

        try {
            const provider = new ethers.providers.JsonRpcProvider('https://lb.drpc.org/ogrpc?network=arbitrum&dkey=AoWvJ_9ogkO0iL5yreCBUHeN_TV5h6AR76lHOpXEh2H0');
            const history = await provider.getHistory(walletAddress);

            setTransactions(history);
        } catch (err) {
            setError('Error fetching transactions: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Arbitrum Wallet Transactions</h1>
            <input
                type="text"
                placeholder="Enter Wallet Address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
            />
            <button onClick={fetchTransactions}>Fetch Transactions</button>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {transactions.map((tx, index) => (
                    <li key={tx.hash}>
                        <a href={`https://arbiscan.io/tx/${tx.hash}`} target="_blank" rel="noopener noreferrer">
                            {tx.hash}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArbitrumHistory;
