/**
 * @generated SignedSource<<14e5ede0b53cb420fb632cf4e18a2552>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MovieId = {
  _id: string;
};
export type PosterMutation$variables = {
  input: MovieId;
};
export type PosterMutation$data = {
  readonly deleteMovie: boolean;
};
export type PosterMutation = {
  variables: PosterMutation$variables;
  response: PosterMutation$data;
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
    "kind": "ScalarField",
    "name": "deleteMovie",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PosterMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PosterMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "78ea076bad4d58474dc5032d96e82366",
    "id": null,
    "metadata": {},
    "name": "PosterMutation",
    "operationKind": "mutation",
    "text": "mutation PosterMutation(\n  $input: MovieId!\n) {\n  deleteMovie(movieId: $input)\n}\n"
  }
};
})();

(node as any).hash = "23244c27dbb2edb49cda14b670d0977f";

export default node;
