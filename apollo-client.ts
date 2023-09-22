import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const errorLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    if (response.errors) {
      response.errors.forEach((error) => {
        console.log(error);
      });
    }
    return response;
  });
});

export const getClient = () => {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_URI,
    headers: {
      "Content-type": "application/json",
      Authorization: `apikey ${process.env.NEXT_PUBLIC_API_KEY!}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    headers: {
      "Content-type": "application/json",
      Authorization: `apikey ${process.env.NEXT_PUBLIC_API_KEY!}`,
    },
    credentials: "include",
  });

  return client;
};
