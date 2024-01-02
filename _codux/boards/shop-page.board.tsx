import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Shop } from '@app/components/Shop/Shop';

import { createCart, createProducts } from '../mocks/fake-data';
import { PageWrapper } from '_codux/wrappers/page-wrapper';

export default createBoard({
  name: 'Shop Page',
  Board: () => {
    const products = createProducts();
    return (
      <PageWrapper cart={createCart([products[0], products[2]])}>
        <Shop items={products} />
      </PageWrapper>
    );
  },
  isSnippet: false,
});
