import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { ClientProvider } from '@app/components/Provider/ClientProvider';
import { Shop } from '@app/components/Shop/Shop';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

import { createProducts } from '../wrappers/fake-data';

export default createBoard({
  name: 'Comp',
  Board: () => (
    <MemoryRouterProvider
      onRouteChangeComplete={(url) => alert(`navigate to ${url}`)}
    >
      <ClientProvider>
        <Shop items={createProducts()} />
      </ClientProvider>
    </MemoryRouterProvider>
  ),
  isSnippet: true,
});
