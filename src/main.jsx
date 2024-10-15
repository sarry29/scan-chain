import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Analytics from "./Components/Analytics/index.jsx";
import Layout from "./Layout.jsx";
import Home from "./Components/Home";
import QRGenerator from "./Components/QRGenerator";
import SolanaHistory from "./Components/Analytics/SolanaHistory/index.jsx";
import ArbitrumHistory from "./Components/Analytics/ArbitrumHistory/index.jsx";
import EthereumHistory from "./Components/Analytics/EthereumHistory/index.jsx";
import PolygonHistory from "./Components/Analytics/PolygonHistory/index.jsx";
import CopyToClipBoard from "./Components/CopyToClipBoard/index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="qr-generator" element={<QRGenerator />} />
      <Route path="copy-to-clipboard" element={<CopyToClipBoard />} />
      
      <Route path="/analytics" element={<Analytics />} >
        <Route path="solana" element={<SolanaHistory />} />
        <Route path="ethereum" element={<EthereumHistory />} />
        
        <Route path="arbitrum" element={<ArbitrumHistory />} />
        <Route path="polygon" element={<PolygonHistory />} />
        
      </Route>
      {/* <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
