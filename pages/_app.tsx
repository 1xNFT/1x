import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import "../styles/globals.css";
import { AppProps } from "next/app";

// This is the chain your dApp will work on.
const activeChain = "polygon";
const STKC = "7ac98f1c1bac504f7db9c7e3f6411e05"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}
    clientId={STKC} >
      <Head>
        <title>1x NFT Airdrop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Claim Your Airdrop"
        />
        <meta
          name="keywords"
          content="Airdrop"
        />
      </Head>
      <Component {...pageProps} />
      
    </ThirdwebProvider>
  );
}

export default MyApp;
