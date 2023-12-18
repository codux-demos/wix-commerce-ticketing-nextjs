import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { FakeClientProvider } from '@app/components/Provider/FakeClientProvider';
import { Login } from '@app/components/Login/Login';

export default createBoard({
  name: 'Test Page',
  Board: () => (
    <FakeClientProvider>
      <Login />
    </FakeClientProvider>
  ),
  isSnippet: true,
});
