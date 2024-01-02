import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider';
import { FakeClientProvider, FakeData } from '../mocks/FakeClientProvider';

export function ComponentWrapper(
  props: FakeData & { children: React.ReactNode }
) {
  return (
    <MemoryRouterProvider
      onRouteChangeComplete={(url) => alert(`navigate to ${url}`)}
    >
      <FakeClientProvider>{props.children}</FakeClientProvider>
    </MemoryRouterProvider>
  );
}
