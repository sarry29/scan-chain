import React, { useState, useEffect } from "react";
import { Alchemy, Network } from "alchemy-sdk";

async function getData() {
  try {
    const response = await fetch(
      "https://pro-openapi.debank.com/v1/collection/nft_list",
      {
        method: "GET",
        AccessKey: "8c653aaf8424e86e2ca6cb40b830eb33ceead300",
        body: JSON.stringify({
          id: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
          chain_id: eth,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

// Ethereum	1
// CHAIN IDS
// Polygon	137
// BSC 56
// Arbitrum One	42161
// Optimism	10
// Base	8453
// Avalanche	43114

async function getTransactionData(chain_id, walletAddress) {
  let transactionData = "";
  const CHAINBASE_URL_BASE = "https://api.chainbase.online/v1";
  const CHAINBASE_API_KEY = "2nLJ2cEoClJlaZlHPMTyYJnvDW6";

  const options = {
    method: "GET",
    headers: { "x-api-key": CHAINBASE_API_KEY },
  };

  await fetch(
    `${CHAINBASE_URL_BASE}/account/txs?chain_id=${chain_id}&address=${walletAddress}`,
    options
  )
    .then((tsx) => tsx.json())
    .then((tsx) => {
      transactionData = tsx;
      console.log("HELLO 1 - ", transactionData);
    })
    .catch((err) => console.error(err));

  return transactionData;
}

async function getTransactionsPolygon(configSettings, ethereumMainnetAddress) {
  const POLYGON_CONTRACT_ADDRESS = "0x1E6E8695FAb3Eb382534915eA8d7Cc1D1994B152";
  configSettings["network"] = Network.MATIC_MAINNET;
  const alchemy = new Alchemy(configSettings);

  //The response fetches the transactions the specified addresses.
  let response = await alchemy.core.getAssetTransfers({
    fromBlock: "0x0",
    fromAddress: ethereumMainnetAddress,
    toAddress: POLYGON_CONTRACT_ADDRESS,
    excludeZeroValue: true,
    category: ["erc721", "erc1155"],
  });

  //Logging the response to the console
  console.log("POLYGON | MATIC - ", response);
}

async function getTransactionsEthereum(configSettings, ethereumMainnetAddress) {
  configSettings["network"] = Network.ETH_MAINNET;
  const alchemy = new Alchemy(configSettings);

  //The response fetches the transactions the specified addresses.
  let response = await alchemy.core.getAssetTransfers({
    fromBlock: "0x0",
    fromAddress: ethereumMainnetAddress,
    category: ["erc721", "external", "erc20"],
  });

  //Logging the response to the console
  console.log("ETHEREUM - ", response);
}

const EthereumHistory = () => {
  const [ethereumMainnetAddress, setEthereumMainnetAddress] = useState(
    "0xce6f9E922CB469b9C6fB907eCc1AB3C50bEfacAe"
  );

  // By Defaukt ethereum mainnet
  //   const [chainLoad, setChainLoad] = useState(Network.ETH_MAINNET);
  const [chainLoad, setChainLoad] = useState(Network.MATIC_MAINNET);
  //   const [chainLoad, setChainLoad] = useState(Network.ETH_MAINNET);
  //   const [chainLoad, setChainLoad] = useState(Network.ETH_MAINNET);

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ALCHEMY_API_KEY = "2gOC9WTl7zre4Gy3RTmzCMyhIEdiNeG-";

  const settingConfig = {
    apiKey: ALCHEMY_API_KEY,
  };

  const fetchTransactions = async (currentChain) => {
    if (!ethereumMainnetAddress) {
      setError("Please enter a wallet address.");
      return;
    }

    getTransactionsPolygon(settingConfig, ethereumMainnetAddress);
    getTransactionsEthereum(settingConfig, ethereumMainnetAddress);

    // CHAIN IDS

    // Ethereum
    // const Ethereum_CHAIN_ID = 1;
    // const Polygon = 137;
    // const BSC_CHAIN_ID = 56;
    // const Arbitrum_One_CHAIN_ID = 42161;
    // const Optimism_CHAIN_ID = 10;
    // const Base_CHAIN_ID = 8453;
    // const Avalanche_CHAIN_ID = 43114;

    // const current_chain_id = Polygon;
    // const getTransaction = await getTransactionData(
    //   current_chain_id,
    //   ethereumMainnetAddress
    // );
    // console.log(getTransaction);

    // alchemy.core
    //   .getTransactionCount("0xce6f9E922CB469b9C6fB907eCc1AB3C50bEfacAe")
    //   .then((res) => {
    //     console.log("TRANSACTION COUNT - ", res);
    //   });

    // let logs = await alchemy.core.getLogs({
    //   address: ethereumMainnetAddress,
    //   fromBlock: "0x429d3b",
    //   toBlock: "latest",
    //   topics: [
    //     "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    //     "0x00000000000000000000000000b46c2526e227482e2ebb8f4c69e4674d262e75",
    //     "0x00000000000000000000000054a2d42a40f51259dedd1978f6c118a0f0eff078",
    //   ],
    // });
    // console.log("LOGS - ", logs);

    // const ethContractAddress = "0x2170ed0880ac9a755fd29b2688956bd959f933f8";
    // const maviaContractAddress = "0x24fcFC492C1393274B6bcd568ac9e225BEc93584";
    // const monContractAddress = "0xc555D625828c4527d477e595fF1Dd5801B4a600e";
    // alchemy.core
    //   .getTokenBalances(ethereumMainnetAddress, [
    //     ethContractAddress,
    //     maviaContractAddress,
    //     monContractAddress,
    //   ])
    //   .then((res) => {
    //     console.log("Result - ", res);
    //   });

    //   Fetch only eth nfts
    // const nfts = await alchemy.nft.getNftsForOwner(ethereumMainnetAddress);
    // const nfts = await alchemy.nft.getNftsForOwner('0xce6f9e922cb469b9c6fb907ecc1ab3c50befacae');
    // console.log(nfts);

    // Fetch NFT ETH
    // getData();

    setLoading(true);
    setError("");
    setTransactions([]);
  };
  return (
    <div>
      <h2>Ethereum Address Transactions</h2>
      <input
        type="text"
        value={ethereumMainnetAddress}
        onChange={(event) => setEthereumMainnetAddress(event.target.value)}
      />
      <button className="btn btn-primary" onClick={fetchTransactions}>
        Fetch Transactions
      </button>
      <br />
      {loading && <p style={{ color: "red" }}>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>
            {console.log(tx)}
            {/* <a
              href={`https://explorer.solana.com/tx/${tx.transaction.signatures[0]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tx.transaction.signatures[0]} */}
            {/* </a> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EthereumHistory;
