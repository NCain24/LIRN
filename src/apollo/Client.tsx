import { ApolloClient, InMemoryCache, TypePolicies } from '@apollo/client';

const typePolicies: TypePolicies = {
  Query: {
    fields: {
      postPaginatedList: {
        keyArgs: false,
        merge(existing = [], incoming) {
          return [...existing, ...incoming];
        },
      },
    },
  },
};

const client = new ApolloClient({
  uri: 'https://emerainville.stepzen.net/api/linkedin/__graphql',
  headers: {
    Authorization:
      'apikey emerainville::stepzen.io+1000::f7300a133dfee06a2bb344df419c80b187a1414aee0bbc15ae9ef598efb3b0a7',
  },
  cache: new InMemoryCache({ typePolicies }),
});

export default client;
