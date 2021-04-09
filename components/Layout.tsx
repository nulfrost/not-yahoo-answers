import Head from "next/head";
import { Navbar } from "components/Navbar";

export interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => (
  <>
    <Head>
      <title>{`Not Yahoo Answers | ${title}`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    <main className="flex-1 xl:mt-[88px] px-5 xl:px-0">{children}</main>
    <footer className="flex justify-end px-10 py-5 font-semibold">
      <p>Made with 💖 by Dane.</p>
    </footer>
  </>
);
