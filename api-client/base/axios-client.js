import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://wordpress-749115-2523479.cloudwaysapps.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
