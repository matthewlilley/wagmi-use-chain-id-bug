
'use client'


import { useChainId } from 'wagmi';
import { switchChain } from 'wagmi/actions';
import { config } from './config';
import { arbitrum, polygon } from 'viem/chains';

export default function Home() {
  const chainId = useChainId();

  console.log('chainId from useChainId is', chainId);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Current Chain Id: {chainId}
      <button onClick={() => switchChain(config, { chainId: polygon.id })}>Switch to Polygon</button>
      <button onClick={() => switchChain(config, { chainId: arbitrum.id })}>Switch to Arbitrum</button>
    </main>
  );
}
