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

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
};

function MyApp({ Component, pageProps }) {
  // const { logout, profile, error } = useAuth();
  const router = useRouter();
  const handleErrorAuthentication = () => {
    logout();
  };
  constructCallBack(handleErrorAuthentication);
  const permission = Component.permission;
  const theme = Component.layout;

  const asPath = router.asPath;
  const client = new ApolloClient({
    uri: 'https://wordpress-749115-2523479.cloudwaysapps.com/graphql',
    cache: new InMemoryCache()
  });
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <Category></Category>
      <SWRConfig
        value={{
          fetcher: (url) => {
            return axiosClient.get(url);
          },
          dedupingInterval: 60 * 60 * 1000, // 1hr
          revalidateOnFocus: false,
          shouldRetryOnError: false
        }}
      >
        {/* <Header /> */}
        {/* <ThemeManager theme={theme}> */}
          {/* <MiddlewareAuth auth={permission !== 'public'}>
            <Component {...pageProps} key={asPath} />
          </MiddlewareAuth> */}
        {/* </ThemeManager> */}
      </SWRConfig>
      </ApolloProvider>
    </React.Fragment>
  );
}

export default MyApp;
