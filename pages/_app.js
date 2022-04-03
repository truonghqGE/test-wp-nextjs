import "../styles/globals.css";
import React from "react";
import axiosClient, { constructCallBack } from "@/api/base/axios-client";
import "katex/dist/katex.min.css";
import Header from "@/components/header/index";
import { SWRConfig } from 'swr';
import HeadSEO from "@/components/SEO/head";
import Head from "@/components/SEO/head";
import Footer from "@/components/footer/index";
import { useRouter } from "next/router";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const asPath = router.asPath;
  const client = new ApolloClient({
    uri: "https://wordpress-749115-2523479.cloudwaysapps.com/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <React.Fragment>
      <Head />
      <ApolloProvider client={client}>
        <HeadSEO />
        <SWRConfig
          value={{
            fetcher: (url) => {
              return axiosClient.get(url);
            },
            dedupingInterval: 60 * 60 * 1000, // 1hr
            revalidateOnFocus: false,
            shouldRetryOnError: false,
          }}
        />

        <div className="archive category category-nutrition category-19 logged-in admin-bar  customize-support">
          <Header />
          <Component {...pageProps} key={asPath} />
        </div>
        <Footer />
      </ApolloProvider>
    </React.Fragment>
  );
}

export default MyApp;
