import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import style from "./style.module.scss";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export default function CopyToClipBoard() {
  const [finalWalletAddress, setFinalWalletAddress] = useState("");
  const getQueryData = useQuery();
  const [error, setError] = useState(false);

  useEffect(() => {
    setFinalWalletAddress(getQueryData.get("wallet-address"));
  }, []);

  const handleCopyToClipBoard = () => {
    try {
      getQueryData.get("wallet-address") ? setError(false) : setError(true);
      navigator.clipboard.writeText(finalWalletAddress);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div
      className={`${style["copy-to-clipboard"]} d-flex flex-column justify-content-center align-items-center`}
    >
      <button
        className="btn btn-primary"
        onClick={() => handleCopyToClipBoard()}
      >
        COPY WALLET ADDRESS TO CLIPBOARD
      </button>
      {error && <p className="text-danger">No Wallet Address Parameter</p>}
      <p className="mt-3">
        Use this Address and make transaction using any of our favourite crypto
        exchange
      </p>
    </div>
  );
}
