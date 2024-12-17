// import { useState } from 'react'
// import { CounterCount } from '../context'
// import './App.css'

// import { useContext } from 'react'
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './Airdrop';







function App() {
  // const counter = useContext(CounterCount);

  return (
    // <>
    //   <div>Context api {counter.count} </div>
    //   <Button />
    //   <br />
    //   <Button />

    // </>
    <ConnectionProvider endpoint={"https://api.devnet.solana.com "}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
          <div>
            hlo there

          </div>
          <Airdrop />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>

  )
}

export default App
