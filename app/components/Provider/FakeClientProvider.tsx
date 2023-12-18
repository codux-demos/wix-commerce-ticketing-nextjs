'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useMemo } from 'react';
import { ManagedUIContext } from './context';
import {
  WixClient,
  WixClientContext,
} from '@app/components/Provider/ClientProvider';
const queryClient = new QueryClient();

export const FakeClientProvider = ({ children }: { children: ReactNode }) => {
  const client = useMemo(
    () =>
      ({
        currentCart: {
          getCurrentCart: () => {
            return Promise.resolve({ id: '1', lineItems: [] });
          },
        },
        auth: {
          loggedIn: () => true,
        },
      } as unknown as WixClient),
    []
  );

  return (
    <WixClientContext.Provider value={client}>
      <ManagedUIContext>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ManagedUIContext>
    </WixClientContext.Provider>
  );
};
