import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rndp911cjx01z6fwukf7m8/master',
  cache: new InMemoryCache()
});
