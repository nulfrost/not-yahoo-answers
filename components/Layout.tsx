import Head from "next/head";
import { Navbar } from "components/Navbar";
import { GoLogoGithub } from "react-icons/go";

export interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => (
  <>
    <Head>
      <title>{`Not Yahoo! Answers | ${title}`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    <main className="flex-1 xl:mt-[88px] px-5 xl:px-0 mb-20">{children}</main>
    <footer className="px-5 font-semibold">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <a
          href="https://github.com/nulfrost/not-yahoo-answers"
          className="text-gray-400 duration-150 hover:text-purple-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoLogoGithub className="w-12 h-12" />
        </a>
        <p>Made with 💖 by Dane.</p>
      </div>
    </footer>
  </>
);
