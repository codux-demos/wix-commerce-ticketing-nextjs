import { ReactNode } from 'react';
import Footer from '@app/components/Layout/Footer';
import Header from '@app/components/Layout/Header';
import { ClientProvider } from '@app/components/Provider/ClientProvider';
import { SidebarUI } from '@app/components/Sidebar/SidebarUI';
import { NotPremium } from '@app/components/NotPremium/NotPremium';
import { LoginModal } from '@app/components/LoginModal/LoginModal';

export function SiteWrapper(props: {
  children: ReactNode;
  ClientProvider?: (props: { children: ReactNode }) => JSX.Element;
}) {
  const Provider = props.ClientProvider || ClientProvider;
  return process.env.NEXT_PUBLIC_WIX_CLIENT_ID ? (
    <>
      <Provider>
        <Header />
        <main className="bg-site min-h-[600px]">{props.children}</main>
        <SidebarUI />
        {/* TODO: there seems to be an issue with the flowbite lib */}
        {/* <NotPremium /> */}
        {/* <LoginModal /> */}
      </Provider>
      <div className="mt-10 sm:mt-20">
        <Footer />
      </div>
    </>
  ) : (
    <div className="bg-site min-h-[600px] max-w-5xl mx-auto p-5">
      Page not available. Please add an environment variable called
      NEXT_PUBLIC_WIX_CLIENT_ID, containing the client ID, to your deployment
      provider.
    </div>
  );
}
