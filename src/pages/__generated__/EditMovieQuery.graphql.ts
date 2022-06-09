/**
 * @generated SignedSource<<e82302b47f668c6f0e0b59af7eb21e53>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MovieId = {
  _id: string;
};
export type EditMovieQuery$variables = {
  input: MovieId;
};
export type EditMovieQuery$data = {
  readonly getMovieById: {
    readonly _id: string;
    readonly name: string;
    readonly description: string;
    readonly cover: string;
  };
};
export type EditMovieQuery = {
  variables: EditMovieQuery$variables;
  response: EditMovieQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "movieId",
        "variableName": "input"
      }
    ],
    "concreteType": "Movie",
    "kind": "LinkedField",
    "name": "getMovieById",
    "plural": false,
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cover",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditMovieQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditMovieQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7273256a9c891fa41dfff962b4df55bb",
    "id": null,
    "metadata": {},
    "name": "EditMovieQuery",
    "operationKind": "query",
    "text": "query EditMovieQuery(\n  $input: MovieId!\n) {\n  getMovieById(movieId: $input) {\n    _id\n    name\n    description\n    cover\n  }\n}\n"
  }
};
})();

(node as any).hash = "44379ff0c7028000c580b2e53b020c9d";

export default node;
