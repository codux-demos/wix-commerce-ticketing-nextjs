'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useMemo } from 'react';
import { ManagedUIContext } from '../../app/components/Provider/context';
import {
  WixClient,
  WixClientContext,
} from '@app/components/Provider/ClientProvider';
const queryClient = new QueryClient();
import { cart } from '@wix/ecom';

export type FakeData = {
  cart?: cart.Cart;
};

export const FakeClientProvider = ({
  children,
  cart,
}: FakeData & {
  children: ReactNode;
}) => {
  const client = useMemo(
    () =>
      ({
        currentCart: {
          getCurrentCart: () => {
            return Promise.resolve(
              cart || {
                id: '1',
                lineItems: [],
                currency: 'USD',
              }
            );
          },
          removeLineItemsFromCurrentCart: () => {},
        },
        auth: {
          loggedIn: () => true,
        },
      } as unknown as WixClient),
    [cart]
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
