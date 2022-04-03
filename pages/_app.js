import "../styles/globals.css";
import React from "react";
import HeadSEO from "@/components/SEO/head";
import axiosClient from "@/api/base/axios-client";
import { SWRConfig } from "swr";
import { useRouter } from "next/router";
import Footer from "@/components/footer";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const asPath = router.asPath;

  return (
    <React.Fragment>
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
      >
        {/* <Header /> */}
        <Component {...pageProps} key={asPath} />
        <Footer />
      </SWRConfig>
    </React.Fragment>
  );
}

export default MyApp;
