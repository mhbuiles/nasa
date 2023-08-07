import { Header } from "../header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-6">
        {children}
      </main>
    </>
  );
};
