'use client'

import { WagmiProvider, State } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { config } from './config';

const queryClient = new QueryClient();

export function Providers({
  initialState,
  children,
}: {
  initialState: State | undefined;
  children: React.ReactNode;
}) {
  console.log('initialState from cookie is', initialState);
  console.log('chainId from initialState is', initialState?.chainId);
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
