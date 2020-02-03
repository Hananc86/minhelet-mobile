import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    ApolloLink,
    Observable,
  } from 'apollo-boost';
  import { setContext } from 'apollo-link-context';
  import { onError } from 'apollo-link-error';
  import { config } from './api/config';
  
  const httpLink = new HttpLink({
    uri: config.graphql,
  })
  
  const authLink = setContext(async request => {
    console.log(request);

    return {
      headers: {
        authorization: `Bearer 'd'`,
      }
    }
  })
  
  const afterwareLink = new ApolloLink((operation, forward) => {
    return forward(operation).map(response => {
      console.log(response)
      return response
    })
  })

  const onErrorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        for (const err of graphQLErrors) {
          const { message, locations, path, extensions } = err;
          const { operationName } = operation;
          const finalMessage = `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path} Extensions: ${extensions}. OperationName: ${operationName}`
  
          console.log(finalMessage)

  
          switch (err.extensions.code) {
            case 'UNAUTHENTICATED':
              return new Observable(observer => {
              })
          }
        }
      }
      if (networkError) { console.log(`[Network error]: ${networkError}`); }
      console.log(operation)
    }
  )
  
  const link = ApolloLink.from([afterwareLink, onErrorLink, authLink, httpLink])

  const client = new ApolloClient({
    link,
    connectToDevTools: true,
    queryDeduplication: true,
    cache: new InMemoryCache()
  })
  
  export default client;
  