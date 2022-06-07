/**
 * @generated SignedSource<<38ac5a1bfe28b9750882d1be328d83d3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeQuery$variables = {};
export type HomeQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"PosterList_query">;
};
export type HomeQuery = {
  variables: HomeQuery$variables;
  response: HomeQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "PosterList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "movies",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "db2666df186d5e7d017535b787fa8876",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery {\n  ...PosterList_query\n}\n\nfragment PosterList_query on Query {\n  movies {\n    name\n  }\n}\n"
  }
};

(node as any).hash = "60510704d086ac24131cfa2b63fb3e09";

export default node;
