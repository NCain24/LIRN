import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://emerainville.stepzen.net/api/linkedin/__graphql',
  headers: {
    Authorization:
      'apikey emerainville::stepzen.io+1000::f7300a133dfee06a2bb344df419c80b187a1414aee0bbc15ae9ef598efb3b0a7',
  },
  cache: new InMemoryCache(),
});

export default client;
