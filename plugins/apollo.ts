import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";

export default defineNuxtPlugin(() => {
  const httpLink = createHttpLink({
    uri: "http://localhost:8080/v1/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    // Get the authentication token from cookie
    const token = useCookie("auth-token").value;

    // Return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
        // Fallback to admin secret if no token (for public queries)
        "x-hasura-admin-secret": !token ? "myadminsecretkey" : undefined,
      },
    };
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return {
    provide: {
      apolloClient,
    },
  };
});
