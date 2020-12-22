import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/layout";
import queryClient from "lib/clients/react-query";
import { Provider as NextAuthProvider } from "next-auth/client";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>
        <NextAuthProvider session={pageProps.session}>
          <ChakraProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </NextAuthProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
