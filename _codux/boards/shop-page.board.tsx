import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Shop } from '@app/components/Shop/Shop';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

import { createProducts } from '../wrappers/fake-data';
import { SiteWrapper } from '@app/site-wrapper';
import { FakeClientProvider } from '@app/components/Provider/FakeClientProvider';

export default createBoard({
  name: 'Shop Page',
  Board: () => (
    <MemoryRouterProvider
      onRouteChangeComplete={(url) => alert(`navigate to ${url}`)}
    >
      <SiteWrapper ClientProvider={FakeClientProvider}>
        <Shop items={createProducts()} />
      </SiteWrapper>
    </MemoryRouterProvider>
  ),
  isSnippet: true,
});
