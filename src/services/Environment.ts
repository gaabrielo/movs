import { Environment, Network, RecordSource, Store } from 'relay-runtime';

function fetchQuery(operation: any, variables: any) {
  return fetch('http://localhost:3333', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Auth headers go here
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

const network = Network.create(fetchQuery);

const env = new Environment({
  network,
  store: new Store(new RecordSource(), {
    gcReleaseBufferSize: 10,
  }),
});

export default env;
