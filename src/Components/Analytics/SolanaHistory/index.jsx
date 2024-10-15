import React, { useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";

const SolanaHistory = () => {
  // 3MDdKBrsEK8GKHdKYvhmpd7syVDb5YJSye1etBZbRt4WtCfcXwuWsnRaVZAtwA5Jk1mE4Fe9nwEDa3ieiocbLyAn
  const [walletAddress, setWalletAddress] = useState(
    "8ZM8Xf7ZsQXK3aeFLMZeFwQuUBMMSX1Wd1rrCRohEgty"
  );
  // const [walletAddress, setWalletAddress] = useState('');

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const SOLANA_MAINNET_BASE_WITH_API =
    "https://mainnet.helius-rpc.com/?api-key=1af35791-7629-49f2-9963-2d46d46f6d03";
  // const SOLANA_MAINNET_BASE_WITH_API = 'https://lb.drpc.org/ogrpc?network=solana&dkey=AoWvJ_9ogkO0iL5yreCBUHe7B1OCh6AR76lIOpXEh2H0';

  const fetchTransactions = async () => {
    if (!walletAddress) {
      setError("Please enter a wallet address.");
      return;
    }

    setLoading(true);
    setError("");
    setTransactions([]);

    const connection = new Connection(SOLANA_MAINNET_BASE_WITH_API);
    const publicKey = new PublicKey(walletAddress);
    try {
      const signatures = await connection.getSignaturesForAddress(publicKey, {
        limit: 10,
      });

      console.log("hello - 4", signatures);
      // const transactionPromises = signatures.map(async (signatureInfo) => {
      //     return await connection.getTransaction(signatureInfo.signature);
      // });

      const transactions = await Promise.all(
        signatures.map((sigInfo) =>
          connection.getTransaction(sigInfo.signature)
        )
      );

      setTransactions(transactions.filter((tx) => tx !== null));
    } catch (err) {
      setError("Error fetching transactions: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Solana Wallet Transactions</h1>
      <input
        type="text"
        placeholder="Enter Wallet Address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
      />
      <button onClick={fetchTransactions}>Fetch Transactions</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>
            <a
              href={`https://explorer.solana.com/tx/${tx.transaction.signatures[0]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tx.transaction.signatures[0]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SolanaHistory;
