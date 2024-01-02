import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Shop } from '@app/components/Shop/Shop';

import { createProducts } from '../mocks/fake-data';
import { ComponentWrapper } from '_codux/wrappers/component-wrapper';

export default createBoard({
  name: 'Shop',
  Board: () => (
    <ComponentWrapper>
      <Shop items={createProducts()} />
    </ComponentWrapper>
  ),
  isSnippet: true,
});
