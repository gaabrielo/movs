/**
 * @generated SignedSource<<3a0dc6c92a24299d3c221d31e7491299>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MovieInput = {
  description: string;
  name: string;
  cover: string;
  category?: string | null;
};
export type AddMovieFormMutation$variables = {
  movieInput: MovieInput;
};
export type AddMovieFormMutation$data = {
  readonly createMovie: {
    readonly _id: string;
  };
};
export type AddMovieFormMutation = {
  variables: AddMovieFormMutation$variables;
  response: AddMovieFormMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "movieInput"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "movieInput",
        "variableName": "movieInput"
      }
    ],
    "concreteType": "Movie",
    "kind": "LinkedField",
    "name": "createMovie",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
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
    "name": "AddMovieFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddMovieFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "95bb65100cfd0efc60a5ec7f92314766",
    "id": null,
    "metadata": {},
    "name": "AddMovieFormMutation",
    "operationKind": "mutation",
    "text": "mutation AddMovieFormMutation(\n  $movieInput: MovieInput!\n) {\n  createMovie(movieInput: $movieInput) {\n    _id\n  }\n}\n"
  }
};
})();

(node as any).hash = "b1c986cd7b658a84eb098a26a10e6c7b";

export default node;
