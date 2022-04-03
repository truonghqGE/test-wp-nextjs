import "../styles/globals.css";
import React from "react";
import "katex/dist/katex.min.css";
import Header from "@/components/header/index";
import Head from "@/components/SEO/head";
import Footer from "@/components/footer/index";
import { useRouter } from "next/router";
import Category from "./category";

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
        <Category />
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
