import { Client, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
  url: 'https://chagallu.stepzen.net/api/stackoverflow/__graphql',
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization:
        'ApiKey chagallu::stepzen.net+1000::186c1b2cf5cff2214b43700408e5e419b5d01be431bd22094b8894c49b883d84',
    },
  },
});

export default client;
