import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client/core";

const URI = "http://localhost:4002";

const httpLink = createHttpLink({
  uri: "${URI}/graphql}",
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
