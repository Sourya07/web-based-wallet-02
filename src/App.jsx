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

} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './Airdrop';
import { ShowSolBalance } from './Balance';
import { WalletDisconnectButton, WalletMultiButton } from './components/Buttons';
import { SignMessage } from './components/SignMessage';


function App() {
  // const counter = useContext(CounterCount);

  return (
    // <>
    //   <div>Context api {counter.count} </div>
    //   <Button />
    //   <br />
    //   <Button />

    // </>
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/kKxeemMSH6XinKR75nh-mNumosVas9TR"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
          <div>
            hlo there
          </div>
          <Airdrop />
          <ShowSolBalance />
          <SignMessage />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>

  )
}

export default App


// https://api.mainnet-beta.solana.com/