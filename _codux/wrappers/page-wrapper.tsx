import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider';
import { FakeData, FakeClientProvider } from '../mocks/FakeClientProvider';
import { SiteWrapper } from '@app/site-wrapper';

export function PageWrapper(props: FakeData & { children: React.ReactNode }) {
  const { children, ...fakeData } = props;

  function ClientProviderWithFake(innerProps: { children: React.ReactNode }) {
    return (
      <FakeClientProvider {...fakeData}>
        {innerProps.children}
      </FakeClientProvider>
    );
  }
  return (
    <MemoryRouterProvider
      onRouteChangeComplete={(url) => alert(`navigate to ${url}`)}
    >
      <SiteWrapper ClientProvider={ClientProviderWithFake}>
        {children}
      </SiteWrapper>
    </MemoryRouterProvider>
  );
}
