import '../styles/globals.css';
import Header from '@/components/layouts/header';
import React from 'react';
import axiosClient, { constructCallBack } from '@/api/base/axios-client';
import { SWRConfig } from 'swr';
import { useAuth } from '../hooks';
import MiddlewareAuth from '@/components/middleware/auth';
import 'katex/dist/katex.min.css';
import { useRouter } from 'next/router';
import ThemeManager from '@/components/template';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
};

function MyApp({ Component, pageProps }) {
  const { logout, profile, error } = useAuth();
  const router = useRouter();
  const handleErrorAuthentication = () => {
    logout();
  };
  constructCallBack(handleErrorAuthentication);
  const permission = Component.permission;
  const theme = Component.layout;

  const asPath = router.asPath;

  return (
    <React.Fragment>
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
        <Header />
        <ThemeManager theme={theme}>
          <MiddlewareAuth auth={permission !== 'public'}>
            <Component {...pageProps} key={asPath} />
          </MiddlewareAuth>
        </ThemeManager>
      </SWRConfig>
    </React.Fragment>
  );
}

export default MyApp;
