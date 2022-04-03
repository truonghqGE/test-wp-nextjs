<<<<<<< HEAD
import "../styles/globals.css";
import React from "react";
import "katex/dist/katex.min.css";
import Header from "@/components/header/index";
import Head from "@/components/SEO/head";
import Footer from "@/components/footer/index";
import { useRouter } from "next/router";
import Category from "./category";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
=======
import '../styles/globals.css';
import React from 'react';
import axiosClient, { constructCallBack } from '@/api/base/axios-client';
import 'katex/dist/katex.min.css';
import Category from "./category"
import HeadSEO from "@/components/SEO/head";
import Header from "@/components/header";
import { SWRConfig } from "swr";
import { useRouter } from "next/router";
import Footer from "@/components/footer";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
>>>>>>> 49ebe2df5fb296848b7e9e9b209b99a2ae254126

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
<<<<<<< HEAD
      <Head />
=======
>>>>>>> 49ebe2df5fb296848b7e9e9b209b99a2ae254126
      <ApolloProvider client={client}>
        <HeadSEO />
        <Category></Category>
<<<<<<< HEAD

=======
      <SWRConfig
        value={{
          fetcher: (url) => {
            return axiosClient.get(url);
          },
          dedupingInterval: 60 * 60 * 1000, // 1hr
          revalidateOnFocus: false,
          shouldRetryOnError: false,
        }}
      >
>>>>>>> 49ebe2df5fb296848b7e9e9b209b99a2ae254126
        <div className="archive category category-nutrition category-19 logged-in admin-bar  customize-support">
          <Header />
          <Component {...pageProps} key={asPath} />
        </div>

        <Footer />
<<<<<<< HEAD
        {/* </SWRConfig> */}
=======
      </SWRConfig>
>>>>>>> 49ebe2df5fb296848b7e9e9b209b99a2ae254126
      </ApolloProvider>
    </React.Fragment>
  );
}

export default MyApp;
