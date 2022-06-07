/**
 * @generated SignedSource<<0c291d20e872c91eb7fba8d0a3a9ac17>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PosterListQuery$variables = {};
export type PosterListQuery$data = {
  readonly movies: ReadonlyArray<{
    readonly _id: string;
    readonly name: string;
  }>;
};
export type PosterListQuery = {
  variables: PosterListQuery$variables;
  response: PosterListQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
        "name": "_id",
        "storageKey": null
      },
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PosterListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PosterListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "530b35a075449a7f69e09b9791767eb8",
    "id": null,
    "metadata": {},
    "name": "PosterListQuery",
    "operationKind": "query",
    "text": "query PosterListQuery {\n  movies {\n    _id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "0450eaafebc206bc6e8a8f5cea86d6d7";

export default node;
