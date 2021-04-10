import "../styles/tailwind.css";
import { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "lib/apolloClent";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
