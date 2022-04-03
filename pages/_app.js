<<<<<<< HEAD
import '../styles/globals.css';
import React from 'react';
import axiosClient, { constructCallBack } from '@/api/base/axios-client';
import { SWRConfig } from 'swr';
import 'katex/dist/katex.min.css';
import { useRouter } from 'next/router';
import Category from "./category"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
=======
import "../styles/globals.css";
import React from "react";
import HeadSEO from "@/components/SEO/head";
import Header from "@/components/header";
import axiosClient from "@/api/base/axios-client";
import { SWRConfig } from "swr";
import { useRouter } from "next/router";
import Footer from "@/components/footer";
>>>>>>> 888b479f84f83131dc10fcb9177b7220fb3e4f95

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function MyApp({ Component, pageProps }) {
<<<<<<< HEAD
  // const { logout, profile, error } = useAuth();
=======
>>>>>>> 888b479f84f83131dc10fcb9177b7220fb3e4f95
  const router = useRouter();
  const asPath = router.asPath;
  const client = new ApolloClient({
    uri: 'https://wordpress-749115-2523479.cloudwaysapps.com/graphql',
    cache: new InMemoryCache()
  });
  return (
    <React.Fragment>
<<<<<<< HEAD
      <ApolloProvider client={client}>
        <Category></Category>
=======
      <HeadSEO />
>>>>>>> 888b479f84f83131dc10fcb9177b7220fb3e4f95
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
<<<<<<< HEAD
        {/* <Header /> */}
        {/* <ThemeManager theme={theme}> */}
          {/* <MiddlewareAuth auth={permission !== 'public'}>
            <Component {...pageProps} key={asPath} />
          </MiddlewareAuth> */}
        {/* </ThemeManager> */}
=======
        <div className="archive category category-nutrition category-19 logged-in admin-bar  customize-support">
          <Header />
          <Component {...pageProps} key={asPath} />
        </div>

        <Footer />
>>>>>>> 888b479f84f83131dc10fcb9177b7220fb3e4f95
      </SWRConfig>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default MyApp;
