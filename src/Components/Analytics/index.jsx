import ArbitrumHistory from "./ArbitrumHistory";
import SolanaHistory from "./SolanaHistory";
import EthereumHistory from "./EthereumHistory";
import PolygonHistory from "./PolygonHistory";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Breadcrumbs = () => {
  return (
    <div className="w-100 text-start py-3">
      <Link
        className="me-4 fs-6"
        style={{ textDecoration: "none", color: "#979797" }}
        to="/"
      >
        HOME
      </Link>
      <span
        className="me-4 fs-6"
        style={{ textDecoration: "none", color: "#979797" }}
      >
        &#62;
      </span>
      <Link
        className="me-4 fs-6"
        style={{ textDecoration: "none", color: "#979797" }}
        to="/analytics"
      >
        ANALYTICS
      </Link>
    </div>
  );
};

const DisplayAddress = ({ chainName, walletAddress }) => {
  return (
    <div>
      <h2>
        <span>{chainName}</span>: <span>{walletAddress}</span>
      </h2>
    </div>
  );
};
const CardWalletAddress = ({ chainName, walletAddress, setWalletAddress }) => {
  return (
    <div className="shadow rounded-3 text-light mb-3">
      <label style={{ width: "150px" }} className="me-3" htmlFor={chainName}>
        {chainName} Wallet Address:{" "}
      </label>
      <input
        id={chainName}
        value={walletAddress}
        style={{ width: "300px" }}
        onClick={(e) => setWalletAddress(e.target.value)}
        placeholder="Enter wallet address"
      />
    </div>
  );
};
const Analytics = () => {
  const chainName = "hello";
  const [ethWalletAddress, setEthWalletAddress] = useState("");
  const [solanaWalletAddress, setSolanaWalletAddress] = useState("");
  const getAddress = () => {

  }
  return (
    <section className={`${style["analytics-board"]} pt-3 pb-5`}>
      <div className="container">
        <Breadcrumbs />
        <h1>Analytics</h1>
        <CardWalletAddress
          chainName={"Ethereum"}
          walletAddress={ethWalletAddress}
          setWalletAddress={setEthWalletAddress}
        />
        <CardWalletAddress
          chainName={"Solana"}
          walletAddress={solanaWalletAddress}
          setWalletAddress={setSolanaWalletAddress}
        />
        <button className="btn btn-primary ms-3 py-1" onClick={getAddress}>Submit</button>

        <EthereumHistory />

        <SolanaHistory />
        <ArbitrumHistory />

        <PolygonHistory />
      </div>
    </section>
  );
};

export default Analytics;
